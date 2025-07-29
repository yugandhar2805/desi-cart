import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Category } from '@/data/mockData';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link to={`/category/${category.id}`}>
      <Card className="group hover:shadow-warm transition-all duration-300 overflow-hidden border border-border/50 hover:border-primary/20 cursor-pointer">
        <CardContent className="p-0">
          <div className="relative">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">{category.icon}</span>
                <h3 className="font-semibold text-sm">{category.name}</h3>
              </div>
              <p className="text-xs opacity-90">
                {category.subcategories.slice(0, 2).join(', ')}
                {category.subcategories.length > 2 && ' +more'}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;