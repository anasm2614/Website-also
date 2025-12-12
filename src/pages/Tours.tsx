import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DestinationCard from '@/components/DestinationCard';
import { destinations, regions } from '@/data/mockData';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Tours = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');

  const uniqueCountries = destinations.reduce((acc, dest) => {
    if (!acc.find(d => d.country === dest.country)) {
      acc.push(dest);
    }
    return acc;
  }, [] as typeof destinations);

  const filteredCountries = selectedRegion === 'All' 
    ? uniqueCountries 
    : uniqueCountries.filter(dest => dest.region === selectedRegion);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-foreground mb-4" data-testid="text-tours-title">
            Explore Our Tours
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Discover amazing countries we offer for your next adventure. Each destination offers unique experiences and unforgettable memories.
          </p>
        </div>
      </section>

      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {regions.map((region) => (
              <Button
                key={region}
                variant={selectedRegion === region ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedRegion(region)}
                data-testid={`button-filter-${region.toLowerCase()}`}
              >
                {region}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-foreground">
              {selectedRegion === 'All' ? 'All Countries' : `${selectedRegion} Countries`}
            </h2>
            <p className="text-muted-foreground">
              {filteredCountries.length} {filteredCountries.length === 1 ? 'country' : 'countries'} available
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCountries.map((destination, index) => (
              <div 
                key={destination.id} 
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <DestinationCard destination={destination} />
              </div>
            ))}
          </div>

          {filteredCountries.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No countries found in this region.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tours;
