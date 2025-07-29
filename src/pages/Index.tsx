import React from 'react';
import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import CategoryCard from '@/components/CategoryCard';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Zap, 
  TrendingUp, 
  Heart, 
  Star, 
  Truck, 
  Shield, 
  RotateCcw, 
  Headphones,
  Clock,
  ArrowRight
} from 'lucide-react';
import { 
  categories, 
  flashSaleProducts, 
  trendingProducts, 
  recommendedProducts 
} from '@/data/mockData';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 space-y-8">
        {/* Hero Banner */}
        <section className="py-6">
          <HeroBanner />
        </section>

        {/* Quick Features */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Truck, text: 'Free Delivery', subtext: 'On orders above ₹499' },
            { icon: Shield, text: 'Secure Payment', subtext: '100% Protected' },
            { icon: RotateCcw, text: 'Easy Returns', subtext: '30-day return policy' },
            { icon: Headphones, text: '24/7 Support', subtext: 'Round the clock help' }
          ].map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-warm transition-shadow">
              <CardContent className="p-4">
                <feature.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                <h3 className="font-semibold text-sm">{feature.text}</h3>
                <p className="text-xs text-muted-foreground mt-1">{feature.subtext}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Categories */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Shop by Category</h2>
            <Button variant="outline" size="sm">
              View All
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>

        {/* Flash Sale */}
        <section className="bg-gradient-to-r from-primary-light to-secondary-light rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Zap className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Flash Sale</h2>
              </div>
              <Badge variant="destructive" className="animate-pulse">
                LIVE
              </Badge>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4 text-primary" />
              <span className="font-medium">Ends in: 2h 45m 23s</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {flashSaleProducts.map((product) => (
              <ProductCard key={product.id} product={product} showQuickBuy />
            ))}
          </div>
        </section>

        {/* Trending Products */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Trending Now</h2>
            </div>
            <Button variant="outline" size="sm">
              View All
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Special Offers Banner */}
        <section className="relative">
          <Card className="overflow-hidden bg-gradient-secondary">
            <CardContent className="p-0">
              <div className="relative h-40 flex items-center justify-between px-8">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Special Festive Offers!</h3>
                  <p className="text-lg opacity-90 mb-4">Get up to 70% off on selected items</p>
                  <Button variant="default" size="lg">
                    Shop Festival Collection
                  </Button>
                </div>
                <div className="hidden md:block text-6xl opacity-20">
                  🎉
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Recommended Products */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Recommended for You</h2>
            </div>
            <Button variant="outline" size="sm">
              View All
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-muted rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-2">Stay Updated!</h3>
          <p className="text-muted-foreground mb-6">Get the latest deals and offers delivered to your inbox</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button variant="gradient">Subscribe</Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold">
                  🛍️
                </div>
                <span className="text-xl font-bold">DesiCart</span>
              </div>
              <p className="text-sm opacity-80">Your trusted traditional Indian e-commerce platform with modern shopping experience.</p>
            </div>
            
            {[
              {
                title: 'Quick Links',
                links: ['About Us', 'Contact', 'Careers', 'Blog']
              },
              {
                title: 'Customer Service',
                links: ['Help Center', 'Returns', 'Shipping Info', 'Track Order']
              },
              {
                title: 'Policies',
                links: ['Privacy Policy', 'Terms of Service', 'Refund Policy', 'Cookie Policy']
              }
            ].map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center">
            <p className="text-sm opacity-80">© 2024 DesiCart. All rights reserved. Made with ❤️ in India</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
