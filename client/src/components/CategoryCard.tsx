import { Card, CardContent } from "@/components/ui/card";
import { AICategory } from "@/lib/loadData";
import { ToolCard } from "./ToolCard";

interface CategoryCardProps {
  category: AICategory;
  categoryIndex: number;
  isActive: boolean;
}

export function CategoryCard({ category, categoryIndex }: CategoryCardProps) {
  return (
    <Card id={`category-${categoryIndex}`} className="mb-4 overflow-hidden scroll-mt-20">
      <CardContent className="p-4">
        <div>
          <h3 className="text-xl font-bold mb-2">
            {category.title}
          </h3>
          <p className="text-muted-foreground mb-4">
            {category.introduction}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {category.tools.map((tool, index) => (
            <ToolCard 
              key={`${categoryIndex}-${index}`} 
              tool={{...tool, categoryId: categoryIndex + 1}} 
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}