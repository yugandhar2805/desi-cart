import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  Menu,
  Bell,
  MapPin
} from 'lucide-react';

const Header = () => {
  const [cartCount] = useState(3);
  const [wishlistCount] = useState(5);

  return (
    <header className="bg-background border-b-2 border-primary/10 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Deliver to Delhi 110001
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span>📞 1800-XXX-XXXX</span>
            <span>🚚 Free Delivery on orders above ₹499</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
              🛍️
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">DesiCart</h1>
              <p className="text-xs text-muted-foreground">Your Traditional Store</p>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl relative">
            <div className="relative">
              <Input
                placeholder="Search for products, brands and more..."
                className="pr-12 pl-4 h-11 border-2 border-border focus:border-primary"
              />
              <Button
                size="sm"
                variant="gradient"
                className="absolute right-1 top-1 h-9"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <User className="h-4 w-4" />
              Login
            </Button>

            <Link to="/wishlist">
              <Button variant="ghost" size="sm" className="relative">
                <Heart className="h-4 w-4" />
                <span className="hidden md:inline ml-1">Wishlist</span>
                {wishlistCount > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-2 -right-2 h-5 w-5 text-xs flex items-center justify-center p-0"
                  >
                    {wishlistCount}
                  </Badge>
                )}
              </Button>
            </Link>

            <Link to="/cart">
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="h-4 w-4" />
                <span className="hidden md:inline ml-1">Cart</span>
                {cartCount > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-2 -right-2 h-5 w-5 text-xs flex items-center justify-center p-0"
                  >
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </Link>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-muted/50 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-6">
              <Button variant="ghost" size="sm" className="font-medium">
                <Menu className="h-4 w-4 mr-1" />
                All Categories
              </Button>
              <Link to="/electronics" className="text-sm hover:text-primary transition-colors">Electronics</Link>
              <Link to="/fashion" className="text-sm hover:text-primary transition-colors">Fashion</Link>
              <Link to="/home-kitchen" className="text-sm hover:text-primary transition-colors">Home & Kitchen</Link>
              <Link to="/books" className="text-sm hover:text-primary transition-colors">Books</Link>
              <Link to="/sports" className="text-sm hover:text-primary transition-colors">Sports</Link>
              <Link to="/beauty" className="text-sm hover:text-primary transition-colors">Beauty</Link>
            </div>
            
            <div className="flex items-center gap-2">
              <Bell className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">🔥 Flash Sale Live!</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;