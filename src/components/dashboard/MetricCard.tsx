
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

interface MetricCardProps {
  title: string;
  value: React.ReactNode;
  description: string;
  actionLabel: string;
}

const MetricCard = ({ title, value, description, actionLabel }: MetricCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
      <CardHeader className="pb-2">
        <CardTitle className="text-base text-gray-500">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{value}</div>
        <CardDescription className="mt-1">{description}</CardDescription>
      </CardContent>
      <CardFooter className="pt-0">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" className="text-[#0071e3] hover:text-[#0262c2] hover:bg-blue-50 p-0">
              {actionLabel}
            </Button>
          </DialogTrigger>
          <DialogContent>
            <MetricDetails title={title} />
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default MetricCard;
