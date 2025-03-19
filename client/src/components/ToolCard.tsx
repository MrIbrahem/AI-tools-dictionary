import { Card, CardContent } from "@/components/ui/card";
import { Tool } from "@shared/schema";
import { ExternalLink } from "lucide-react";

interface ToolCardProps {
  tool: Tool;
  isRTL: boolean;
}

export function ToolCard({ tool, isRTL }: ToolCardProps) {
  return (
    <Card>
      <CardContent className="p-4" style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
        <img 
          src={tool.image} 
          alt={isRTL ? tool.descriptionAr : tool.description}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-lg font-bold">{tool.name}</h4>
          <a 
            href={tool.url} 
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
          {(isRTL ? tool.usesAr : tool.uses).map((use, index) => (
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
