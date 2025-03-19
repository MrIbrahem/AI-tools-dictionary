import { Card, CardContent } from "@/components/ui/card";
import { AICategory, AITool } from "@/lib/loadData";
import { useState } from "react";
import { ToolCard } from "./ToolCard";
import { ChevronDown, ChevronUp } from "lucide-react";

interface CategoryCardProps {
  category: AICategory;
  categoryIndex: number;
  isRTL: boolean;
}

export function CategoryCard({ category, categoryIndex, isRTL }: CategoryCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="mb-4 overflow-hidden">
      <CardContent className="p-0">
        <div 
          className="p-4 cursor-pointer flex items-center justify-between"
          onClick={() => setIsExpanded(!isExpanded)}
          style={{ direction: isRTL ? 'rtl' : 'ltr' }}
        >
          <div>
            <h3 className="text-xl font-bold">
              {category.title}
            </h3>
            <p className="text-muted-foreground">
              {category.introduction}
            </p>
          </div>
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </div>

        {isExpanded && (
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.tools.map((tool, index) => (
              <ToolCard 
                key={`${categoryIndex}-${index}`} 
                tool={{...tool, categoryId: categoryIndex + 1}} 
                isRTL={isRTL} 
              />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}