import { CategoryCard } from "@/components/CategoryCard";
import { loadAIData } from "@/lib/loadData";
import { SearchBar } from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState, useMemo, useEffect } from "react";
import { Link } from "wouter";
import { Github, Instagram, Twitter, Facebook } from "lucide-react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [showSections, setShowSections] = useState(false);
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
          <div className="flex items-center justify-between h-full">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={() => setShowSearch(!showSearch)}>
                <Search className="h-5 w-5" />
              </Button>
              {showSearch && (
                <div className="w-64 transition-all duration-300 ease-in-out">
                  <SearchBar 
                    value={searchQuery}
                    onChange={setSearchQuery}
                  />
                </div>
              )}
            </div>
            <h1 className="text-xl font-bold">
              دليل أدوات الذكاء الاصطناعي
            </h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 flex-grow mt-20">
        <h2 className="text-2xl text-center mb-8 text-muted-foreground">
          استكشف أفضل أدوات الذكاء الاصطناعي مصنفة في فئات متنوعة
        </h2>
        <nav className="mb-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full text-center py-6"
                onClick={() => document.getElementById(`category-${index}`)?.scrollIntoView({ behavior: 'smooth' })}
              >
                {category.title.split(' ').slice(-2).join(' ')}
              </Button>
            ))}
          </div>
        </nav>
        <div className="flex justify-center mb-6">
          <Button
            variant="outline"
            onClick={() => setShowSections(!showSections)}
            className="flex items-center gap-2"
          >
            {showSections ? "إخفاء الأقسام" : "عرض الأقسام"}
            <ChevronDown className={`h-4 w-4 transition-transform ${showSections ? 'rotate-180' : ''}`} />
          </Button>
        </div>
        <div className={`space-y-6 transition-all duration-300 ${showSections ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
          {filteredCategories.map((category, index) => (
            <CategoryCard
              defaultExpanded={index === 0} 
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