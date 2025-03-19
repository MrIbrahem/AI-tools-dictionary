import { Tool } from "@shared/schema";

export const tools: Tool[] = [
  // Marketing Tools (Category 1)
  {
    id: 1,
    categoryId: 1,
    name: "Jasper AI",
    description: "AI-powered content generation tool for digital marketing content to improve SEO rankings.",
    descriptionAr: "أداة ذكاء اصطناعي توليدي تساعد على كتابة أنواع مختلفة من المحتوى التسويقي الرقمي",
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
    image: "🤖"
  },
  {
    id: 2,
    categoryId: 1,
    name: "Attentive AI",
    description: "AI tool for creating and sending ad campaigns via SMS and email.",
    descriptionAr: "أداة ذكاء اصطناعي توليدي لإنشاء الحملات الإعلانية وإرسالها عبر الرسائل النصية",
    uses: [
      "Automated campaign creation and deployment",
      "Brand-specific marketing content generation",
      "Customized customer campaign creation"
    ],
    usesAr: [
      "أتمتة إنشاء الحملات الإعلانية ونشرها",
      "توليد محتوى تسويقي مخصص للعلامة التجارية",
      "إنشاء حملات تسويقية مخصصة للعملاء"
    ],
    url: "https://www.attentivemobile.com",
    image: "📱"
  },
  // Design Tools (Category 2)
  {
    id: 3,
    categoryId: 2,
    name: "Adobe Firefly",
    description: "AI-powered image generation and editing tool with text effects.",
    descriptionAr: "أداة معتمدة على الذكاء الاصطناعي التوليدي لتوليد الصور وتحريرها",
    uses: [
      "Text to image conversion",
      "Image editing with additions",
      "Image editing with removals"
    ],
    usesAr: [
      "تحويل النصوص إلى صور",
      "تحرير الصور لإضافة عناصر",
      "تحرير الصور لحذف عناصر"
    ],
    url: "https://www.adobe.com/sensei/generative-ai/firefly.html",
    image: "🎨"
  },
  {
    id: 4,
    categoryId: 2,
    name: "Midjourney",
    description: "AI tool for creating artistic designs and images with sharing capabilities.",
    descriptionAr: "أداة ذكاء اصطناعي توليدي تساعد على إنشاء محتوى إبداعي",
    uses: [
      "Image description writing",
      "Image merging for new creations",
      "Text to image conversion"
    ],
    usesAr: [
      "كتابة وصف للصور",
      "دمج عدة صور لتوليد صورة جديدة",
      "تحويل النصوص إلى صور"
    ],
    url: "https://www.midjourney.com",
    image: "🖼️"
  },
  // Developer Tools (Category 3)
  {
    id: 5,
    categoryId: 3,
    name: "GitHub Copilot",
    description: "AI-powered code generation and suggestion tool based on project context.",
    descriptionAr: "أداة ذكاء اصطناعي توليدي لتوليد الأكواد البرمجية وتقديم اقتراحات",
    uses: [
      "Code suggestions via chat",
      "Automatic completion of common commands",
      "Real-time error detection"
    ],
    usesAr: [
      "تقديم اقتراحات برمجية عن طريق المحادثات النصية",
      "إكمال كتابة الأوامر البرمجية الشائعة تلقائيًا",
      "اكتشاف الأخطاء المحتملة أثناء الكتابة"
    ],
    url: "https://github.com/features/copilot",
    image: "👨‍💻"
  }
];