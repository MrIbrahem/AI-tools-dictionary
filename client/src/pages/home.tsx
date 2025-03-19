import { CategoryCard } from "@/components/CategoryCard";
import { loadAIData } from "@/lib/loadData";

export default function Home() {
  const categories = loadAIData();

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <header className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">
              دليل أدوات الذكاء الاصطناعي
            </h1>
          </div>
          <p className="mt-4 text-lg opacity-90">
            استكشف أفضل أدوات الذكاء الاصطناعي مصنفة في فئات متنوعة
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
            />
          ))}
        </div>
      </main>
    </div>
  );
}