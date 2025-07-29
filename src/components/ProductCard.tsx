import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Star, ShoppingCart, Zap } from 'lucide-react';
import { Product } from '@/data/mockData';

interface ProductCardProps {
  product: Product;
  showQuickBuy?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, showQuickBuy = false }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const discountAmount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card className="group hover:shadow-elegant transition-all duration-300 overflow-hidden border border-border/50 hover:border-primary/20">
      <CardContent className="p-0">
        {/* Image Section */}
        <div className="relative overflow-hidden">
          <Link to={`/product/${product.id}`}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </Link>
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {discountAmount > 0 && (
              <Badge variant="destructive" className="text-xs font-bold">
                {discountAmount}% OFF
              </Badge>
            )}
            {!product.inStock && (
              <Badge variant="secondary" className="text-xs">
                Out of Stock
              </Badge>
            )}
          </div>

          {/* Wishlist Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 h-8 w-8 bg-background/80 hover:bg-background text-muted-foreground hover:text-primary"
          >
            <Heart className="h-4 w-4" />
          </Button>

          {/* Quick Buy Overlay */}
          {showQuickBuy && (
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Button variant="hero" size="sm">
                <Zap className="h-4 w-4 mr-1" />
                Quick Buy
              </Button>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-4 space-y-3">
          {/* Brand */}
          <div className="text-xs text-muted-foreground font-medium">
            {product.brand}
          </div>

          {/* Product Name */}
          <Link to={`/product/${product.id}`}>
            <h3 className="font-medium text-sm line-clamp-2 hover:text-primary transition-colors">
              {product.name}
            </h3>
          </Link>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 px-2 py-1 bg-success text-success-foreground rounded text-xs font-medium">
              <Star className="h-3 w-3 fill-current" />
              {product.rating}
            </div>
            <span className="text-xs text-muted-foreground">
              ({product.reviews.toLocaleString()})
            </span>
          </div>

          {/* Price */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-foreground">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
            {discountAmount > 0 && (
              <div className="text-xs text-success font-medium">
                You save {formatPrice(product.originalPrice! - product.price)}!
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button 
              variant="cart" 
              size="sm" 
              className="flex-1" 
              disabled={!product.inStock}
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              Add to Cart
            </Button>
            <Button 
              variant="buy" 
              size="sm" 
              className="flex-1"
              disabled={!product.inStock}
            >
              Buy Now
            </Button>
          </div>

          {/* Delivery Info */}
          <div className="text-xs text-muted-foreground">
            🚚 Free delivery by tomorrow
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;