import { Tool } from "@shared/schema";

export const tools: Tool[] = [
  // Marketing Tools (Category 1)
  {
    id: 1,
    categoryId: 1,
    name: "Jasper AI",
    description: "AI-powered content generation tool for digital marketing content to improve SEO rankings.",
    descriptionAr: "أداة ذكاء اصطناعي توليدي تساعد على كتابة أنواع مختلفة من المحتوى التسويقي الرقمي لمواقع الويب لتحسين ظهورها ورفع ترتيبها في نتائج محركات البحث",
    uses: [
      "Content plagiarism checking",
      "Marketing campaign creation",
      "Brand-specific content writing"
    ],
    usesAr: [
      "تدقيق المحتوى للتحقق من السرقة العلمية",
      "إعداد حملات تسويقية لمختلف قنوات التسويق",
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
    descriptionAr: "أداة ذكاء اصطناعي توليدي لإنشاء الحملات الإعلانية وإرسالها عبر الرسائل النصية القصيرة والبريد الإلكتروني",
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
    descriptionAr: "أداة معتمدة على الذكاء الاصطناعي التوليدي لتوليد الصور وتحريرها وإضافة تأثيرات على النصوص",
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
    descriptionAr: "أداة ذكاء اصطناعي توليدي تساعد على إنشاء محتوى إبداعي عن طريق توليد التصاميم الفنية والصور وتحريرها ومشاركتها",
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
    name: "Visual Studio Intellicode",
    description: "AI-powered code completion and suggestion tool based on context.",
    descriptionAr: "أداة ذكاء اصطناعي توليدي تمكن من كتابة الأكواد البرمجية وإكمالها وتقديم اقتراحات لتحسينها تتناسب مع السياق وأسلوب المبرمج",
    uses: [
      "Automatic code completion",
      "Code pattern detection",
      "Context-aware code suggestions"
    ],
    usesAr: [
      "كتابة الأكواد البرمجية وإكمالها بشكل تلقائي",
      "اكتشاف التكرار في الأكواد البرمجية",
      "تحسين دقة الأكواد البرمجية عبر تقديم اقتراحات مخصصة"
    ],
    url: "https://visualstudio.microsoft.com/services/intellicode/",
    image: "💻"
  },
  // Cybersecurity Tools (Category 4)
  {
    id: 6,
    categoryId: 4,
    name: "Microsoft Copilot for Security",
    description: "AI-powered security tool for threat detection and response.",
    descriptionAr: "أداة مدعومة بالذكاء الاصطناعي التوليدي لتوفير الحماية من الهجمات السيبرانية والتخفيف من أثرها عبر تقديم التحليلات في الوقت الآني وأتمتة المهام المتكررة",
    uses: [
      "Security data analysis",
      "Answering security questions",
      "Custom security guidance"
    ],
    usesAr: [
      "تحليل البيانات الأمنية للكشف عن التهديدات السيبرانية",
      "الإجابة عن الأسئلة المتعلقة بالأمن السيبراني",
      "توفير إرشادات مخصصة لحماية الأنظمة من الهجمات السيبرانية"
    ],
    url: "https://www.microsoft.com/en-us/security/business/ai-cybersecurity",
    image: "🛡️"
  },
  // Education Tools (Category 5)
  {
    id: 7,
    categoryId: 5,
    name: "Google Classroom",
    description: "AI-enhanced learning management and content creation platform.",
    descriptionAr: "أداة قائمة على الذكاء الاصطناعي لتعزيز العملية التعليمية وإثرائها، وإنشاء تجارب تعليمية تفاعلية يمكن تخصيصها وإدارتها",
    uses: [
      "Content customization",
      "Student performance assessment",
      "Interactive quiz creation"
    ],
    usesAr: [
      "تخصيص المحتوى وعملية التعليم",
      "تقييم أداء الطالب",
      "إنشاء أسئلة تدريبية واختبارات تفاعلية"
    ],
    url: "https://classroom.google.com",
    image: "🍎"
  },
  // Legal Tools (Category 6)
  {
    id: 8,
    categoryId: 6,
    name: "Ironclad AI",
    description: "AI-powered contract management and analysis platform.",
    descriptionAr: "أداة ذكاء اصطناعي تساعد على تبسيط العمليات المتعلقة بالعقود وتحسينها وتعزيز الجوانب المختلفة لإدارة العقود",
    uses: [
      "Contract review",
      "Contract drafting",
      "Contract data extraction"
    ],
    usesAr: [
      "مراجعة العقود",
      "صياغة العقود",
      "استخراج بيانات العقود"
    ],
    url: "https://ironcladapp.com",
    image: "⚖️"
  }
];