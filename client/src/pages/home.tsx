import { CategoryCard } from "@/components/CategoryCard";
import { loadAIData } from "@/lib/loadData";
import { SearchBar } from "@/components/SearchBar";
import { useState, useMemo, useEffect } from "react";
import { Link } from "wouter";
import { Github, Instagram, Twitter, Facebook } from "lucide-react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
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
    <div className="min-h-screen bg-background flex flex-col" dir="rtl">
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground h-16">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <div className="w-64">
              <SearchBar 
                value={searchQuery}
                onChange={setSearchQuery}
              />
            </div>
            <div className="flex flex-col items-end">
              <h1 className="text-xl font-bold">
                دليل أدوات الذكاء الاصطناعي
              </h1>
              <p className="text-sm opacity-90">
                استكشف أفضل أدوات الذكاء الاصطناعي مصنفة في فئات متنوعة
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 flex-grow mt-20">
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

      <footer className="fixed bottom-0 left-0 right-0 bg-background border-t p-4 text-center">
        <div className="flex justify-center gap-4 mb-2">
          <a
            href="https://github.com/MrIbrahem"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.instagram.com/ibrahem.al.radaei"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </a>
          <a
            href="https://twitter.com/MrIbrahem"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </a>
          <a
            href="https://www.facebook.com/Mr.Ibrahem"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            <Facebook className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </a>
        </div>
        <p className="text-sm text-muted-foreground">م/إبراهيم الرداعي - 770633517</p>
      </footer>
    </div>
  );
}