import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { tours, destinations } from '@/data/mockData';
import { Search, Filter, Star, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);
  const [minRating, setMinRating] = useState(0);

  const durations = ['1-3 days', '3-5 days', '5-7 days', '7+ days'];

  const allTours = useMemo(() => {
    // Create tours for each destination
    const generatedTours = destinations.flatMap(dest => [
      {
        id: `${dest.id}-explore`,
        destinationId: dest.id,
        name: `Explore ${dest.name}`,
        description: `Discover the best of ${dest.name} with our comprehensive tour package.`,
        duration: '5 days',
        price: dest.averagePrice * 5,
        rating: dest.rating,
        image: dest.image,
        included: ['Accommodation', 'Guided tours', 'Local transport', 'Some meals'],
        highlights: dest.highlights.slice(0, 3),
        destination: dest,
      },
      {
        id: `${dest.id}-adventure`,
        destinationId: dest.id,
        name: `${dest.name} Adventure`,
        description: `An exciting adventure through ${dest.name}'s most thrilling experiences.`,
        duration: '7 days',
        price: dest.averagePrice * 7,
        rating: dest.rating - 0.1,
        image: dest.images[1] || dest.image,
        included: ['All accommodation', 'Adventure activities', 'Expert guides', 'All meals'],
        highlights: dest.thingsToDo.slice(0, 3),
        destination: dest,
      },
    ]);

    return [...tours.map(t => ({
      ...t,
      destination: destinations.find(d => d.id === t.destinationId)!
    })), ...generatedTours];
  }, []);

  const filteredTours = useMemo(() => {
    return allTours.filter((tour) => {
      const matchesSearch = 
        tour.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tour.destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tour.destination.country.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesPrice = tour.price >= priceRange[0] && tour.price <= priceRange[1];
      const matchesRating = tour.rating >= minRating;

      return matchesSearch && matchesPrice && matchesRating;
    });
  }, [searchQuery, priceRange, minRating, allTours]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Search Header */}
      <section className="bg-primary py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Tours & Packages
          </h1>
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search tours, destinations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 bg-background"
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Filters */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <div className="bg-card rounded-xl p-6 shadow-md sticky top-24">
              <h2 className="font-semibold text-lg text-foreground flex items-center gap-2 mb-6">
                <Filter className="h-5 w-5" /> Filters
              </h2>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-medium text-foreground mb-3">
                  Price Range: ${priceRange[0]} - ${priceRange[1]}
                </h3>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  min={0}
                  max={2000}
                  step={50}
                />
              </div>

              {/* Duration */}
              <div className="mb-6">
                <h3 className="font-medium text-foreground mb-3">Duration</h3>
                <div className="space-y-2">
                  {durations.map((duration) => (
                    <label key={duration} className="flex items-center gap-2 cursor-pointer">
                      <Checkbox
                        checked={selectedDurations.includes(duration)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedDurations([...selectedDurations, duration]);
                          } else {
                            setSelectedDurations(selectedDurations.filter(d => d !== duration));
                          }
                        }}
                      />
                      <span className="text-sm text-foreground">{duration}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div className="mb-6">
                <h3 className="font-medium text-foreground mb-3">Minimum Rating</h3>
                <div className="flex flex-wrap gap-2">
                  {[0, 4, 4.5, 4.7].map((rating) => (
                    <Button
                      key={rating}
                      variant={minRating === rating ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setMinRating(rating)}
                    >
                      {rating === 0 ? 'Any' : `${rating}+`}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Results */}
          <main className="flex-1">
            <p className="text-muted-foreground mb-6">
              <span className="font-semibold text-foreground">{filteredTours.length}</span> tours available
            </p>

            <div className="space-y-6">
              {filteredTours.map((tour, index) => (
                <div 
                  key={tour.id}
                  className="bg-card rounded-xl overflow-hidden shadow-md card-hover animate-fade-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="md:w-80 h-48 md:h-auto overflow-hidden">
                      <img
                        src={tour.image}
                        alt={tour.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-1">{tour.name}</h3>
                          <div className="flex items-center gap-2 text-muted-foreground text-sm">
                            <MapPin className="h-4 w-4" />
                            <span>{tour.destination.name}, {tour.destination.country}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 bg-secondary text-secondary-foreground px-2 py-1 rounded">
                          <Star className="h-4 w-4 fill-current" />
                          <span className="font-semibold">{tour.rating.toFixed(1)}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {tour.description}
                      </p>

                      <div className="flex items-center gap-4 mb-4 text-sm">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          {tour.duration}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {tour.highlights.slice(0, 3).map((highlight) => (
                          <span key={highlight} className="bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full">
                            {highlight}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div>
                          <span className="text-muted-foreground text-sm">From</span>
                          <p className="text-2xl font-bold text-primary">${tour.price}</p>
                          <span className="text-muted-foreground text-sm">per person</span>
                        </div>
                        <Link to={`/booking?tour=${tour.id}`}>
                          <Button className="gap-2">
                            View Details <ArrowRight className="h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SearchResults;
