import aiData from '../../../attached_assets/ai.json';

export interface AITool {
  name: string;
  description: string;
  use_cases: string[];
  path: string;
}

export interface AICategory {
  title: string;
  introduction: string;
  tools: AITool[];
}

export function loadAIData(): AICategory[] {
  return aiData;
}

export function flattenTools(): AITool[] {
  const allTools: AITool[] = [];
  aiData.forEach((category, categoryIndex) => {
    category.tools.forEach(tool => {
      allTools.push({
        ...tool,
        categoryId: categoryIndex + 1
      });
    });
  });
  return allTools;
}