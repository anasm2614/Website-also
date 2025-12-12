import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImagePreview from '@/components/ImagePreview';
import { Button } from '@/components/ui/button';
import { destinations, tours } from '@/data/mockData';
import { 
  Star, MapPin, Calendar, Clock, DollarSign, Globe, MessageCircle,
  ChevronRight, Sun, Umbrella, Thermometer, ArrowRight
} from 'lucide-react';

const DestinationDetail = () => {
  const { id } = useParams();
  const destination = destinations.find(d => d.id === id);
  const relatedTours = tours.filter(t => t.destinationId === id);

  if (!destination) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Destination not found</h1>
          <Link to="/destinations">
            <Button>Back to Destinations</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Image Gallery */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={destination.images[0]}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
        </div>
        
        {/* Thumbnail Gallery */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
          {destination.images.map((img, index) => (
            <div 
              key={index}
              className="w-20 h-14 rounded-lg overflow-hidden border-2 border-background shadow-lg cursor-pointer"
            >
              <ImagePreview src={img} alt={`${destination.name} ${index + 1}`} className="h-full" />
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-20 left-0 right-0">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-background/90 mb-2">
              <MapPin className="h-4 w-4" />
              <span>{destination.country}</span>
              <span className="mx-2">•</span>
              <span>{destination.region}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-background mb-3">
              {destination.name}
            </h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
                <Star className="h-4 w-4 fill-current" />
                <span className="font-semibold">{destination.rating}</span>
              </div>
              <div className="flex gap-2">
                {destination.travelType.map((type) => (
                  <span key={type} className="bg-background/20 backdrop-blur text-background px-3 py-1 rounded-full text-sm">
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">About {destination.name}</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {destination.description}
              </p>
            </section>

            {/* Highlights */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Highlights</h2>
              <div className="flex flex-wrap gap-3">
                {destination.highlights.map((highlight) => (
                  <span 
                    key={highlight} 
                    className="bg-accent text-accent-foreground px-4 py-2 rounded-full flex items-center gap-2"
                  >
                    <ChevronRight className="h-4 w-4 text-primary" />
                    {highlight}
                  </span>
                ))}
              </div>
            </section>

            {/* Top Attractions */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Top Attractions</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {destination.attractions.map((attraction) => (
                  <div key={attraction.name} className="bg-card rounded-xl overflow-hidden shadow-md card-hover">
                    <div className="h-40 overflow-hidden">
                      <ImagePreview 
                        src={attraction.image} 
                        alt={attraction.name}
                        className="h-full"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground mb-1">{attraction.name}</h3>
                      <p className="text-muted-foreground text-sm">{attraction.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Things to Do */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Things to Do</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.thingsToDo.map((activity, index) => (
                  <div 
                    key={activity}
                    className="flex items-center gap-3 bg-muted p-4 rounded-lg"
                  >
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
                      {index + 1}
                    </span>
                    <span className="text-foreground">{activity}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Travel Tips */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Travel Tips</h2>
              <div className="bg-travel-blue-light rounded-xl p-6">
                <ul className="space-y-3">
                  {destination.travelTips.map((tip) => (
                    <li key={tip} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span className="text-foreground">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Quick Info Card */}
            <div className="bg-card rounded-xl p-6 shadow-lg sticky top-24">
              <div className="text-center mb-6">
                <p className="text-muted-foreground">Starting from</p>
                <p className="text-4xl font-bold text-primary">${destination.averagePrice}</p>
                <p className="text-muted-foreground">per day</p>
              </div>

              <Link to={`/booking?destination=${destination.id}`}>
                <Button className="w-full mb-4 h-12 text-lg font-semibold">
                  Plan Your Trip
                </Button>
              </Link>

              <div className="space-y-4 pt-4 border-t border-border">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Best Time to Visit</p>
                    <p className="text-foreground font-medium">{destination.bestTimeToVisit}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Currency</p>
                    <p className="text-foreground font-medium">{destination.currency}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Language</p>
                    <p className="text-foreground font-medium">{destination.language}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Tours */}
            {relatedTours.length > 0 && (
              <div className="bg-card rounded-xl p-6 shadow-lg">
                <h3 className="font-semibold text-foreground mb-4">Available Tours</h3>
                <div className="space-y-4">
                  {relatedTours.map((tour) => (
                    <Link key={tour.id} to={`/booking?tour=${tour.id}`}>
                      <div className="p-4 bg-muted rounded-lg hover:bg-accent transition-colors">
                        <h4 className="font-medium text-foreground mb-1">{tour.name}</h4>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">{tour.duration}</span>
                          <span className="font-semibold text-primary">${tour.price}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DestinationDetail;
