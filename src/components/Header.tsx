import { Globe, HelpCircle, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

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
            {/* Currency Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Globe className="h-4 w-4" />
                  <span className="hidden sm:inline">USD</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>🇺🇸 USD - US Dollar</DropdownMenuItem>
                <DropdownMenuItem>🇪🇺 EUR - Euro</DropdownMenuItem>
                <DropdownMenuItem>🇬🇧 GBP - British Pound</DropdownMenuItem>
                <DropdownMenuItem>🇯🇵 JPY - Japanese Yen</DropdownMenuItem>
                <DropdownMenuItem>🇦🇪 AED - UAE Dirham</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Help */}
            <Button variant="ghost" size="sm" className="gap-2">
              <HelpCircle className="h-4 w-4" />
              <span className="hidden sm:inline">Help</span>
            </Button>

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
