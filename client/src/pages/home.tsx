import { useState } from "react";
import { CategoryCard } from "@/components/CategoryCard";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { loadAIData } from "@/lib/loadData";

export default function Home() {
  const [isRTL, setIsRTL] = useState(false);
  const categories = loadAIData();

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">
              {isRTL ? "دليل أدوات الذكاء الاصطناعي" : "AI Tools Directory"}
            </h1>
            <Button
              variant="secondary"
              onClick={() => setIsRTL(!isRTL)}
              className="flex items-center gap-2"
            >
              <Languages className="h-5 w-5" />
              {isRTL ? "English" : "العربية"}
            </Button>
          </div>
          <p className="mt-4 text-lg opacity-90">
            {isRTL 
              ? "استكشف أفضل أدوات الذكاء الاصطناعي مصنفة في فئات متنوعة"
              : "Explore the best AI tools categorized in various categories"}
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          {categories.map((category, index) => (
            <CategoryCard 
              key={index} 
              category={category}
              categoryIndex={index}
              isRTL={isRTL} 
            />
          ))}
        </div>
      </main>
    </div>
  );
}