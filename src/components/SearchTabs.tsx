import { useState } from 'react';
import { MapPin, Plane, Car, Package, Compass, Ship, Calendar, Users, Search } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Calendar as CalendarComponent } from './ui/calendar';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

const tabs = [
  { id: 'destinations', label: 'Destinations', icon: MapPin },
  { id: 'flights', label: 'Flights', icon: Plane },
  { id: 'tours', label: 'Tours', icon: Compass },
  { id: 'packages', label: 'Packages', icon: Package },
  { id: 'things-to-do', label: 'Things to do', icon: Compass },
  { id: 'cruises', label: 'Cruises', icon: Ship },
];

const SearchTabs = () => {
  const [activeTab, setActiveTab] = useState('destinations');
  const [destination, setDestination] = useState('');
  const [dateRange, setDateRange] = useState<{ from?: Date; to?: Date }>({});
  const [travelers, setTravelers] = useState(2);
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/destinations?search=${encodeURIComponent(destination)}`);
  };

  return (
    <div className="bg-card rounded-xl shadow-xl p-6 max-w-5xl mx-auto">
      {/* Tabs */}
      <div className="flex flex-wrap gap-1 mb-6 border-b border-border">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors rounded-t-lg',
                activeTab === tab.id
                  ? 'text-primary border-b-2 border-primary bg-accent'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              )}
            >
              <Icon className="h-4 w-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Search Form */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Destination Input */}
        <div className="md:col-span-1">
          <label className="block text-sm font-medium text-foreground mb-2">Where to?</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search destinations..."
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="pl-10 h-12"
            />
          </div>
        </div>

        {/* Date Picker */}
        <div className="md:col-span-1">
          <label className="block text-sm font-medium text-foreground mb-2">When?</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  'w-full h-12 justify-start text-left font-normal',
                  !dateRange.from && 'text-muted-foreground'
                )}
              >
                <Calendar className="mr-2 h-5 w-5" />
                {dateRange.from ? (
                  dateRange.to ? (
                    <>
                      {format(dateRange.from, 'MMM dd')} - {format(dateRange.to, 'MMM dd')}
                    </>
                  ) : (
                    format(dateRange.from, 'MMM dd, yyyy')
                  )
                ) : (
                  'Select dates'
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <CalendarComponent
                mode="range"
                selected={dateRange}
                onSelect={(range) => setDateRange(range || {})}
                numberOfMonths={2}
                className="pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Travelers */}
        <div className="md:col-span-1">
          <label className="block text-sm font-medium text-foreground mb-2">Travelers</label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <select
              value={travelers}
              onChange={(e) => setTravelers(Number(e.target.value))}
              className="w-full h-12 pl-10 pr-4 rounded-md border border-input bg-background text-foreground appearance-none cursor-pointer"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'Traveler' : 'Travelers'}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Search Button */}
        <div className="md:col-span-1 flex items-end">
          <Button 
            onClick={handleSearch}
            className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold gap-2"
          >
            <Search className="h-5 w-5" />
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchTabs;
