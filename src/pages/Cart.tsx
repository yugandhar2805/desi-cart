import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import {
  Plus,
  Minus,
  Trash2,
  Heart,
  ShoppingBag,
  ArrowLeft,
  Truck,
  Shield,
  Tag
} from 'lucide-react';
import { products } from '@/data/mockData';

interface CartItem {
  id: string;
  product: typeof products[0];
  quantity: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: '1', product: products[0], quantity: 1 },
    { id: '2', product: products[1], quantity: 2 },
    { id: '3', product: products[4], quantity: 1 },
  ]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const shipping = subtotal >= 49900 ? 0 : 4000; // Free shipping above ₹499
  const tax = Math.round(subtotal * 0.18); // 18% GST
  const total = subtotal + shipping + tax;

  const totalSavings = cartItems.reduce(
    (sum, item) => {
      const savings = item.product.originalPrice
        ? (item.product.originalPrice - item.product.price) * item.quantity
        : 0;
      return sum + savings;
    },
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Card className="max-w-md mx-auto text-center">
            <CardContent className="p-8">
              <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h2 className="text-xl font-bold mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-6">
                Add some products to get started!
              </p>
              <Link to="/">
                <Button variant="gradient" size="lg">
                  Continue Shopping
                </Button>
              </Link>
            </CardContent>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Link to="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">Shopping Cart ({cartItems.length} items)</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    {/* Product Image */}
                    <Link to={`/product/${item.product.id}`} className="flex-shrink-0">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-24 h-24 object-cover rounded-md border border-border"
                      />
                    </Link>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">
                            {item.product.brand}
                          </div>
                          <Link
                            to={`/product/${item.product.id}`}
                            className="font-medium hover:text-primary transition-colors line-clamp-2"
                          >
                            {item.product.name}
                          </Link>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="text-muted-foreground hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Price */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="font-bold text-lg">
                          {formatPrice(item.product.price)}
                        </span>
                        {item.product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            {formatPrice(item.product.originalPrice)}
                          </span>
                        )}
                        {item.product.originalPrice && (
                          <Badge variant="destructive" className="text-xs">
                            {Math.round(((item.product.originalPrice - item.product.price) / item.product.originalPrice) * 100)}% OFF
                          </Badge>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-border rounded-md">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="px-3 py-1 text-sm font-medium">
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>

                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Heart className="h-4 w-4 mr-1" />
                            Save for later
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Continue Shopping */}
            <Link to="/">
              <Button variant="outline" className="w-full">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Continue Shopping
              </Button>
            </Link>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            {/* Price Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Tag className="h-5 w-5" />
                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Subtotal ({cartItems.length} items)</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className={shipping === 0 ? 'text-success' : ''}>
                      {shipping === 0 ? 'FREE' : formatPrice(shipping)}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Tax (GST 18%)</span>
                    <span>{formatPrice(tax)}</span>
                  </div>
                  
                  {totalSavings > 0 && (
                    <div className="flex justify-between text-success">
                      <span>Total Savings</span>
                      <span>-{formatPrice(totalSavings)}</span>
                    </div>
                  )}
                </div>

                <Separator />

                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>

                {shipping > 0 && (
                  <div className="p-3 bg-warning/10 rounded-md border border-warning/20">
                    <p className="text-xs text-warning-foreground">
                      Add {formatPrice(49900 - subtotal)} more for FREE shipping!
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Checkout Button */}
            <Button variant="buy" size="lg" className="w-full text-lg py-6">
              Proceed to Checkout
            </Button>

            {/* Features */}
            <Card>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Truck className="h-4 w-4 text-primary" />
                    <span>Free delivery on orders above ₹499</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Shield className="h-4 w-4 text-primary" />
                    <span>100% secure payments</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Coupons */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Apply Coupon</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    className="flex-1 px-3 py-2 border border-border rounded-md text-sm"
                  />
                  <Button variant="outline" size="sm">
                    Apply
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;