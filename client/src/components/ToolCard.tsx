import { Card, CardContent } from "@/components/ui/card";
import { AITool } from "@/lib/loadData";
import { ExternalLink } from "lucide-react";

interface ToolCardProps {
  tool: AITool & { categoryId: number };
  isRTL: boolean;
}

export function ToolCard({ tool, isRTL }: ToolCardProps) {
  return (
    <Card>
      <CardContent className="p-4" style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-bold">{tool.name}</h4>
          <a 
            href={tool.path} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80"
          >
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>

        <p className="text-muted-foreground mb-4">
          {isRTL ? tool.descriptionAr : tool.description}
        </p>

        <ul className="space-y-2">
          {(isRTL ? tool.usesAr : tool.use_cases).map((use, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              {use}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}