import { Tool } from "@shared/schema";

export const tools: Tool[] = [
  {
    id: 1,
    categoryId: 1,
    name: "Jasper AI",
    description: "AI-powered content generation tool for marketers",
    descriptionAr: "أداة توليد المحتوى المدعومة بالذكاء الاصطناعي للمسوقين",
    uses: [
      "Content plagiarism checking",
      "Marketing campaign creation",
      "Brand-specific content writing"
    ],
    usesAr: [
      "تدقيق المحتوى للتحقق من السرقة العلمية",
      "إعداد حملات تسويقية",
      "كتابة محتوى تسويقي مخصص للعلامة التجارية"
    ],
    url: "https://www.jasper.ai",
    image: "https://images.unsplash.com/photo-1453806839674-d1a9087ca1ed"
  },
  // Add remaining tools following the same pattern
];
