
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Subscription {
  id: number;
  name: string;
  amount: number;
  billingDate: string;
  category: string;
  logo: string;
}

interface SubscriptionTrackerProps {
  subscriptions: Subscription[];
}

const SubscriptionTracker: React.FC<SubscriptionTrackerProps> = ({
  subscriptions,
}) => {
  const totalMonthly = subscriptions.reduce(
    (total, sub) => total + sub.amount,
    0
  );

  return (
    <Card className="h-full">
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle className="text-xl">Subscription Tracker</CardTitle>
        <Badge variant="outline" className="ml-2">
          ${totalMonthly.toFixed(2)}/mo
        </Badge>
      </CardHeader>
      <CardContent className="px-2">
        <div className="max-h-[350px] overflow-y-auto pr-2">
          {subscriptions.map((subscription) => (
            <div
              key={subscription.id}
              className="mb-3 flex items-center justify-between rounded-lg border p-3 hover:bg-secondary/50"
            >
              <div className="flex items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-medium">
                  {subscription.logo}
                </div>
                <div className="ml-3">
                  <div className="font-medium">{subscription.name}</div>
                  <div className="text-xs text-muted-foreground">
                    Bills {subscription.billingDate} • {subscription.category}
                  </div>
                </div>
              </div>
              <div className="font-semibold">${subscription.amount.toFixed(2)}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SubscriptionTracker;
