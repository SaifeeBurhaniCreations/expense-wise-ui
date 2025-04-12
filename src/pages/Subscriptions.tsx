
import React from "react";
import AppLayout from "@/components/Layout/AppLayout";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { subscriptions } from "@/utils/mockData";
import { Bell, BellOff, Calendar, Plus } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

// Calculate days until billing date
const getDaysUntilBilling = (billingDate: string): number => {
  const today = new Date();
  const day = parseInt(billingDate.replace(/\D/g, ''), 10);
  const nextBillingDate = new Date(today.getFullYear(), today.getMonth(), day);
  
  // If the billing date has already passed this month, set to next month
  if (nextBillingDate < today) {
    nextBillingDate.setMonth(nextBillingDate.getMonth() + 1);
  }
  
  const diffTime = nextBillingDate.getTime() - today.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

const Subscriptions: React.FC = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Subscriptions</h1>
            <p className="text-muted-foreground">
              Manage your recurring payments and memberships
            </p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add Subscription
          </Button>
        </div>

        {/* Monthly Total Section */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Monthly Subscription Cost</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline">
              <span className="text-3xl font-bold">
                ${subscriptions.reduce((total, sub) => total + sub.amount, 0).toFixed(2)}
              </span>
              <span className="ml-2 text-muted-foreground">/month</span>
            </div>
          </CardContent>
        </Card>

        {/* Subscriptions Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {subscriptions.map((subscription) => {
            const daysUntil = getDaysUntilBilling(subscription.billingDate);
            
            return (
              <Card key={subscription.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardHeader className="pb-2 bg-muted/30">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-8 h-8 rounded-md flex items-center justify-center text-sm font-medium text-white"
                        style={{ backgroundColor: subscription.category === "Entertainment" ? "#8B5CF6" : 
                                subscription.category === "Shopping" ? "#F59E0B" : 
                                subscription.category === "Health" ? "#10B981" : "#6366F1" }}
                      >
                        {subscription.logo}
                      </div>
                      <CardTitle className="text-lg">{subscription.name}</CardTitle>
                    </div>
                    <Badge variant={daysUntil < 3 ? "destructive" : "secondary"}>
                      {daysUntil === 0 ? "Today" : daysUntil === 1 ? "Tomorrow" : `${daysUntil} days`}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xl font-semibold">${subscription.amount.toFixed(2)}</p>
                      <p className="text-sm text-muted-foreground">
                        <Calendar className="inline h-3 w-3 mr-1" />
                        Bills on the {subscription.billingDate}
                      </p>
                    </div>
                    <Badge variant="outline">{subscription.category}</Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t p-3 bg-muted/20">
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <Bell className="h-4 w-4 mr-2" />
                        Reminder
                      </Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="flex justify-between space-x-4">
                        <div className="space-y-1">
                          <h4 className="text-sm font-semibold">Reminder Settings</h4>
                          <p className="text-sm">
                            Receive notifications 3 days before this subscription bills.
                          </p>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Button variant="ghost" size="sm" className="text-red-500">
                        <BellOff className="h-4 w-4 mr-2" />
                        Cancel
                      </Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold">Cancel Subscription</h4>
                        <p className="text-sm">
                          Remember to cancel this directly with {subscription.name} before removing it here.
                        </p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </AppLayout>
  );
};

export default Subscriptions;
