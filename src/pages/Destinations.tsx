import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DestinationCard from '@/components/DestinationCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { destinations, regions, travelTypes } from '@/data/mockData';
import { Search, Filter, X, Star } from 'lucide-react';

const Destinations = () => {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 400]);
  const [minRating, setMinRating] = useState(0);
  const [showFilters, setShowFilters] = useState(true);

  const filteredDestinations = useMemo(() => {
    return destinations.filter((dest) => {
      // Search filter
      const matchesSearch = 
        dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.highlights.some(h => h.toLowerCase().includes(searchQuery.toLowerCase()));
      
      // Region filter
      const matchesRegion = selectedRegion === 'All' || dest.region === selectedRegion;
      
      // Travel type filter
      const matchesType = selectedTypes.length === 0 || 
        selectedTypes.some(type => dest.travelType.includes(type as any));
      
      // Price filter
      const matchesPrice = dest.averagePrice >= priceRange[0] && dest.averagePrice <= priceRange[1];
      
      // Rating filter
      const matchesRating = dest.rating >= minRating;

      return matchesSearch && matchesRegion && matchesType && matchesPrice && matchesRating;
    });
  }, [searchQuery, selectedRegion, selectedTypes, priceRange, minRating]);

  const toggleType = (type: string) => {
    setSelectedTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedRegion('All');
    setSelectedTypes([]);
    setPriceRange([0, 400]);
    setMinRating(0);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="bg-primary py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Explore Destinations
          </h1>
          <p className="text-primary-foreground/80 mb-6">
            Discover amazing places around the world
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search destinations, countries, or attractions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 bg-background text-foreground"
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <aside className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-72 flex-shrink-0`}>
            <div className="bg-card rounded-xl p-6 shadow-md sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-semibold text-lg text-foreground flex items-center gap-2">
                  <Filter className="h-5 w-5" /> Filters
                </h2>
                <Button variant="ghost" size="sm" onClick={clearFilters} className="text-muted-foreground">
                  Clear all
                </Button>
              </div>

              {/* Region Filter */}
              <div className="mb-6">
                <h3 className="font-medium text-foreground mb-3">Region</h3>
                <div className="flex flex-wrap gap-2">
                  {regions.map((region) => (
                    <Button
                      key={region}
                      variant={selectedRegion === region ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedRegion(region)}
                      className="text-xs"
                    >
                      {region}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Travel Type Filter */}
              <div className="mb-6">
                <h3 className="font-medium text-foreground mb-3">Travel Style</h3>
                <div className="space-y-2">
                  {travelTypes.map((type) => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer">
                      <Checkbox
                        checked={selectedTypes.includes(type)}
                        onCheckedChange={() => toggleType(type)}
                      />
                      <span className="text-sm text-foreground">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-medium text-foreground mb-3">
                  Budget (per day): ${priceRange[0]} - ${priceRange[1]}
                </h3>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  min={0}
                  max={400}
                  step={10}
                  className="mt-4"
                />
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                <h3 className="font-medium text-foreground mb-3">Minimum Rating</h3>
                <div className="flex gap-2">
                  {[0, 4, 4.5, 4.7].map((rating) => (
                    <Button
                      key={rating}
                      variant={minRating === rating ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setMinRating(rating)}
                      className="text-xs gap-1"
                    >
                      {rating === 0 ? 'Any' : (
                        <>
                          <Star className="h-3 w-3 fill-current" />
                          {rating}+
                        </>
                      )}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Results */}
          <main className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">{filteredDestinations.length}</span> destinations found
              </p>
              <Button
                variant="outline"
                size="sm"
                className="lg:hidden"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-4 w-4 mr-2" />
                {showFilters ? 'Hide' : 'Show'} Filters
              </Button>
            </div>

            {/* Active Filters */}
            {(selectedTypes.length > 0 || selectedRegion !== 'All' || minRating > 0) && (
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedRegion !== 'All' && (
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    {selectedRegion}
                    <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedRegion('All')} />
                  </span>
                )}
                {selectedTypes.map((type) => (
                  <span key={type} className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    {type}
                    <X className="h-3 w-3 cursor-pointer" onClick={() => toggleType(type)} />
                  </span>
                ))}
                {minRating > 0 && (
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    {minRating}+ stars
                    <X className="h-3 w-3 cursor-pointer" onClick={() => setMinRating(0)} />
                  </span>
                )}
              </div>
            )}

            {/* Destination Grid */}
            {filteredDestinations.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredDestinations.map((destination, index) => (
                  <div 
                    key={destination.id} 
                    className="animate-fade-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <DestinationCard destination={destination} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg mb-4">No destinations found matching your criteria</p>
                <Button onClick={clearFilters}>Clear Filters</Button>
              </div>
            )}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Destinations;
