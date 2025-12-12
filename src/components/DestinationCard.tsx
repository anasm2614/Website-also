import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Clock } from 'lucide-react';
import { Destination } from '@/data/mockData';
import { cn } from '@/lib/utils';

interface DestinationCardProps {
  destination: Destination;
  className?: string;
}

const DestinationCard = ({ destination, className }: DestinationCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      to={`/destination/${destination.id}`}
      className={cn('block group', className)}
    >
      <div 
        className="relative bg-card rounded-xl overflow-hidden shadow-md card-hover"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={destination.image}
            alt={destination.name}
            className={cn(
              'w-full h-full object-cover transition-transform duration-500',
              isHovered && 'scale-110'
            )}
          />
          
          {/* Hover Preview Overlay */}
          <div 
            className={cn(
              'absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent transition-opacity duration-300',
              isHovered ? 'opacity-100' : 'opacity-60'
            )}
          />
          
          {/* Rating Badge */}
          <div className="absolute top-3 right-3 bg-secondary text-secondary-foreground px-2 py-1 rounded-lg flex items-center gap-1 text-sm font-semibold">
            <Star className="h-4 w-4 fill-current" />
            {destination.rating}
          </div>

          {/* Region Badge */}
          <div className="absolute top-3 left-3 bg-background/90 text-foreground px-3 py-1 rounded-full text-xs font-medium">
            {destination.region}
          </div>

          {/* Hover Info */}
          <div 
            className={cn(
              'absolute bottom-0 left-0 right-0 p-4 transition-all duration-300',
              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            )}
          >
            <div className="flex flex-wrap gap-1 mb-2">
              {destination.travelType.slice(0, 3).map((type) => (
                <span 
                  key={type} 
                  className="bg-primary/80 text-primary-foreground text-xs px-2 py-0.5 rounded-full"
                >
                  {type}
                </span>
              ))}
            </div>
            <p className="text-background/90 text-sm line-clamp-2">
              {destination.highlights.slice(0, 3).join(' • ')}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                {destination.name}
              </h3>
              <div className="flex items-center gap-1 text-muted-foreground text-sm">
                <MapPin className="h-3.5 w-3.5" />
                {destination.country}
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground">From</p>
              <p className="text-lg font-bold text-primary">${destination.averagePrice}</p>
              <p className="text-xs text-muted-foreground">/day</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span className="text-xs">{destination.bestTimeToVisit.split(',')[0]}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DestinationCard;
