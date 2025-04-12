
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LightbulbIcon } from "lucide-react";

interface SavingsTipsProps {
  tips: string[];
}

const SavingsTips: React.FC<SavingsTipsProps> = ({ tips }) => {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center">
        <LightbulbIcon className="h-5 w-5 mr-2 text-yellow-500" />
        <CardTitle className="text-xl">AI Savings Tips</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tips.map((tip, index) => (
            <div key={index} className="flex items-start gap-3 animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="mt-1 min-w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-medium">
                {index + 1}
              </div>
              <p className="text-sm">{tip}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SavingsTips;
