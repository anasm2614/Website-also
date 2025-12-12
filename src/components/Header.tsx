import { Globe, HelpCircle, Info, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">OU</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-foreground leading-tight">Owais Usman</h1>
              <p className="text-xs text-muted-foreground -mt-1">Travel Agency</p>
            </div>
          </Link>

          {/* Right Navigation */}
          <nav className="flex items-center gap-2">
            {/* Tour */}
            <Link to="/tours">
              <Button variant="ghost" size="sm" className="gap-2" data-testid="link-tour">
                <Compass className="h-4 w-4" />
                <span className="hidden sm:inline">Tour</span>
              </Button>
            </Link>

            {/* Currency Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Globe className="h-4 w-4" />
                  <span className="hidden sm:inline">USD</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>USD - US Dollar</DropdownMenuItem>
                <DropdownMenuItem>EUR - Euro</DropdownMenuItem>
                <DropdownMenuItem>GBP - British Pound</DropdownMenuItem>
                <DropdownMenuItem>JPY - Japanese Yen</DropdownMenuItem>
                <DropdownMenuItem>AED - UAE Dirham</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Help */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2" data-testid="button-help">
                  <HelpCircle className="h-4 w-4" />
                  <span className="hidden sm:inline">Help</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>How Can We Help?</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Contact Us</h4>
                    <p className="text-sm text-muted-foreground">
                      Email: support@owaisusman.travel
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Phone: +1 (555) 123-4567
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Working Hours</h4>
                    <p className="text-sm text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Saturday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">FAQs</h4>
                    <p className="text-sm text-muted-foreground">
                      How do I book a tour? Browse our tours and click "Book Now" on your preferred destination.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Can I cancel my booking? Yes, cancellations are free up to 48 hours before departure.
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* About */}
            <Link to="/about">
              <Button variant="ghost" size="sm" className="gap-2">
                <Info className="h-4 w-4" />
                <span className="hidden sm:inline">About</span>
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
