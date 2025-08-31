import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

export const StatsCard = ({ 
  title, 
  value, 
  description, 
  icon: Icon, 
  trend,
  className = ""
}: StatsCardProps) => {
  return (
    <Card className={`relative overflow-hidden p-6 border-border bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all duration-300 ${className}`}>
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground font-medium">{title}</p>
          <p className="text-3xl font-bold text-foreground">{value}</p>
          {description && (
            <p className="text-xs text-muted-foreground">{description}</p>
          )}
          {trend && (
            <div className={`flex items-center text-xs ${
              trend.isPositive ? 'text-electric-green' : 'text-tesla-red'
            }`}>
              <span>{trend.isPositive ? '↗' : '↘'}</span>
              <span className="ml-1">{Math.abs(trend.value)}%</span>
            </div>
          )}
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-electric-blue/20 rounded-full blur-md"></div>
          <Icon className="relative w-8 h-8 text-electric-blue" />
        </div>
      </div>
    </Card>
  );
};