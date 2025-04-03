
import React from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import MetricDetails from "./MetricDetails";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: React.ReactNode;
  description: string;
  secondaryMetric?: {
    value: string;
    trend: "up" | "down" | "neutral";
    label: string;
  };
  actionLabel: string;
  icon?: LucideIcon;
  iconColor?: string;
  iconBgColor?: string;
  additionalContent?: React.ReactNode;
}

const MetricCard = ({ 
  title, 
  value, 
  description, 
  secondaryMetric, 
  actionLabel, 
  icon: Icon, 
  iconColor = "text-primary",
  iconBgColor = "bg-primary/10",
  additionalContent
}: MetricCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300 border border-gray-200 bg-white rounded-xl">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-base text-gray-500">{title}</CardTitle>
          {Icon && (
            <div className={`w-10 h-10 rounded-full ${iconBgColor} flex items-center justify-center`}>
              <Icon className={`h-5 w-5 ${iconColor}`} />
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{value}</div>
        
        {secondaryMetric && (
          <div className="flex items-center mt-1 mb-1">
            <Badge variant={
              secondaryMetric.trend === "up" ? "success" : 
              secondaryMetric.trend === "down" ? "destructive" : "outline"
            }>
              {secondaryMetric.trend === "up" ? "↑" : secondaryMetric.trend === "down" ? "↓" : "→"} {secondaryMetric.value}
            </Badge>
            <span className="text-sm text-gray-500 ml-2">{secondaryMetric.label}</span>
          </div>
        )}
        
        <CardDescription className="mt-1">{description}</CardDescription>
        
        {additionalContent && (
          <div className="mt-3">
            {additionalContent}
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-0">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" className="text-[#0071e3] hover:text-[#0262c2] hover:bg-blue-50 p-0">
              {actionLabel}
            </Button>
          </DialogTrigger>
          <DialogContent className="apple-dialog max-w-2xl p-0">
            <MetricDetails title={title} />
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default MetricCard;
