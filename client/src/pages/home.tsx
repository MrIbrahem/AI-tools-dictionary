import { CategoryCard } from "@/components/CategoryCard";
import { loadAIData } from "@/lib/loadData";
import { SearchBar } from "@/components/SearchBar";
import { useState, useMemo } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const categories = loadAIData();

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return categories;

    return categories.map(category => ({
      ...category,
      tools: category.tools.filter(tool => {
        const searchLower = searchQuery.toLowerCase();
        return (
          tool.name.toLowerCase().includes(searchLower) ||
          tool.description.toLowerCase().includes(searchLower) ||
          tool.use_cases.some(use => use.toLowerCase().includes(searchLower))
        );
      })
    })).filter(category => category.tools.length > 0);
  }, [categories, searchQuery]);

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
          <div className="mt-6 max-w-2xl mx-auto">
            <SearchBar 
              value={searchQuery}
              onChange={setSearchQuery}
            />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          {filteredCategories.map((category, index) => (
            <CategoryCard 
              key={index} 
              category={category}
              categoryIndex={index}
            />
          ))}
        </div>
        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              لم يتم العثور على نتائج للبحث
            </p>
          </div>
        )}
      </main>
    </div>
  );
}