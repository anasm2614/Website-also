import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DestinationCard from '@/components/DestinationCard';
import { Button } from '@/components/ui/button';
import { destinations } from '@/data/mockData';
import { ArrowRight, Shield, Clock, CreditCard, Headphones, Palmtree, Mountain, Building, Landmark, Compass, Package } from 'lucide-react';

const Index = () => {
  const featuredDestinations = destinations.slice(0, 4);
  const popularDestinations = destinations.slice(4, 8);

  const travelStyles = [
    { icon: Palmtree, label: 'Beach Getaway', color: 'bg-travel-blue-light text-primary' },
    { icon: Mountain, label: 'Mountain Adventure', color: 'bg-travel-yellow-light text-travel-orange' },
    { icon: Building, label: 'City Explorer', color: 'bg-accent text-accent-foreground' },
    { icon: Landmark, label: 'Historical Tours', color: 'bg-muted text-foreground' },
  ];

  const valueProps = [
    { icon: Shield, title: 'Secure Booking', description: 'Your payments and data are always protected' },
    { icon: Clock, title: '24/7 Support', description: 'We\'re here to help anytime, anywhere' },
    { icon: CreditCard, title: 'Best Price Guarantee', description: 'Find a lower price? We\'ll match it' },
    { icon: Headphones, title: 'Expert Guidance', description: 'Travel experts to plan your perfect trip' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-background" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-2xl animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-4">
              Discover Your Next
              <span className="text-secondary"> Adventure</span>
            </h1>
            <p className="text-lg md:text-xl text-background/90 mb-8">
              Explore the world's most breathtaking destinations with Owais Usman Travel Agency
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/tours">
                <Button size="lg" className="gap-2 font-semibold" data-testid="button-explore-tours">
                  <Compass className="h-5 w-5" />
                  Explore Tours
                </Button>
              </Link>
              <Link to="/packages">
                <Button size="lg" variant="outline" className="gap-2 font-semibold border-background text-background bg-background/10 backdrop-blur-sm" data-testid="button-view-packages">
                  <Package className="h-5 w-5" />
                  View Packages
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Featured Destinations</h2>
              <p className="text-muted-foreground mt-1">Handpicked places for your next journey</p>
            </div>
            <Link to="/destinations">
              <Button variant="outline" className="gap-2">
                View All <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDestinations.map((destination, index) => (
              <div 
                key={destination.id} 
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <DestinationCard destination={destination} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Styles */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">Travel Your Way</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            Whether you're seeking relaxation, adventure, culture, or history - we have the perfect destination for you
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {travelStyles.map((style, index) => {
              const Icon = style.icon;
              return (
                <Link 
                  key={style.label} 
                  to={`/destinations?type=${style.label.split(' ')[0]}`}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`${style.color} rounded-xl p-6 text-center card-hover cursor-pointer`}>
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-background/50 flex items-center justify-center">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="font-semibold">{style.label}</h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Countries */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Popular Countries to Explore</h2>
              <p className="text-muted-foreground mt-1">Top destinations loved by travelers worldwide</p>
            </div>
            <Link to="/destinations">
              <Button variant="outline" className="gap-2">
                Explore All <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDestinations.map((destination, index) => (
              <div 
                key={destination.id} 
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <DestinationCard destination={destination} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-24 md:py-32 travel-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-primary-foreground/90 text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
            Join thousands of happy travelers who have discovered amazing destinations with us.
            Book now and get exclusive deals!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/tours">
              <Button size="lg" className="bg-secondary text-secondary-foreground font-semibold px-10 py-6 text-lg gap-2" data-testid="button-explore-tours-cta">
                <Compass className="h-5 w-5" />
                Explore Tours
              </Button>
            </Link>
            <Link to="/packages">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground font-semibold px-10 py-6 text-lg gap-2 bg-primary-foreground/10 backdrop-blur-sm" data-testid="button-view-packages-cta">
                <Package className="h-5 w-5" />
                View Packages
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Why Travel With Us</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((prop, index) => {
              const Icon = prop.icon;
              return (
                <div 
                  key={prop.title} 
                  className="text-center animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{prop.title}</h3>
                  <p className="text-muted-foreground text-sm">{prop.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
