import { Card, CardContent } from "@/components/ui/card";
import { Category } from "@shared/schema";
import { useState } from "react";
import { ToolCard } from "./ToolCard";
import { tools } from "../data/tools";
import { ChevronDown, ChevronUp } from "lucide-react";

interface CategoryCardProps {
  category: Category;
  isRTL: boolean;
}

export function CategoryCard({ category, isRTL }: CategoryCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const categoryTools = tools.filter(tool => tool.categoryId === category.id);

  return (
    <Card className="mb-4 overflow-hidden">
      <CardContent className="p-0">
        <div 
          className="p-4 cursor-pointer flex items-center justify-between"
          onClick={() => setIsExpanded(!isExpanded)}
          style={{ direction: isRTL ? 'rtl' : 'ltr' }}
        >
          <div className="flex items-center gap-4">
            <img 
              src={category.icon} 
              alt={isRTL ? category.nameAr : category.name}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div>
              <h3 className="text-xl font-bold">
                {isRTL ? category.nameAr : category.name}
              </h3>
              <p className="text-muted-foreground">
                {isRTL ? category.descriptionAr : category.description}
              </p>
            </div>
          </div>
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </div>

        {isExpanded && (
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categoryTools.map(tool => (
              <ToolCard key={tool.id} tool={tool} isRTL={isRTL} />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
