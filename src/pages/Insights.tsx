
import React from "react";
import AppLayout from "@/components/Layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart,
  PieChart,
  LineChart,
  ArrowTrendingUp,
  LightbulbIcon,
  Sparkles,
  ArrowRight,
  CalendarIcon,
} from "lucide-react";
import { monthlyFinanceData, expenseCategories, savingsTips } from "@/utils/mockData";
import { PieChart as RechartsPC, Pie, BarChart as RechartsBR, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, ResponsiveContainer, LineChart as RechartsLC, Line, TooltipProps } from "recharts";
import SavingsTips from "@/components/Dashboard/SavingsTips";
import { cn } from "@/lib/utils";

const COLORS = ["#3B82F6", "#10B981", "#F59E0B", "#8B5CF6", "#EC4899", "#6366F1", "#64748B"];

const Insights: React.FC = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Financial Insights</h1>
            <p className="text-muted-foreground">
              AI-driven analysis of your spending patterns and suggestions
            </p>
          </div>
          <Button variant="outline" className="gap-2 self-start">
            <CalendarIcon className="h-4 w-4" />
            April 2025
          </Button>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="spending">Spending</TabsTrigger>
            <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Monthly Trends Card */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <ArrowTrendingUp className="h-5 w-5 text-blue-500 mr-2" />
                  <CardTitle className="text-xl">Monthly Financial Trends</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsLC
                      data={monthlyFinanceData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        name="Income"
                        dataKey="income"
                        stroke="#3B82F6"
                        activeDot={{ r: 8 }}
                        strokeWidth={2}
                      />
                      <Line
                        type="monotone"
                        name="Expenses"
                        dataKey="expenses"
                        stroke="#F59E0B"
                        strokeWidth={2}
                      />
                    </RechartsLC>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* At a Glance Cards */}
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-md">Savings Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600">18.2%</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    3.5% higher than last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-md">Biggest Expense</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-amber-600">Housing</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    $1,800 / month (36% of expenses)
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-md">Spending Trend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-emerald-600">↓ 4.2%</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Decreasing since February
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Money Saving Tips */}
            <SavingsTips tips={savingsTips} />
          </TabsContent>

          <TabsContent value="spending" className="space-y-6">
            {/* Expense Breakdown */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <PieChart className="h-5 w-5 text-purple-500 mr-2" />
                  <CardTitle className="text-xl">Expense Breakdown</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="h-80 flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsPC>
                      <Pie
                        data={expenseCategories}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="amount"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {expenseCategories.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`$${value}`, 'Amount']} />
                    </RechartsPC>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Top 5 Spending Categories */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <BarChart className="h-5 w-5 text-teal-500 mr-2" />
                  <CardTitle className="text-xl">Top Spending Categories</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsBR
                      data={expenseCategories.slice(0, 5)}
                      layout="vertical"
                      margin={{
                        top: 5,
                        right: 30,
                        left: 40,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" opacity={0.2} horizontal={false} />
                      <XAxis type="number" />
                      <YAxis type="category" dataKey="name" />
                      <Tooltip formatter={(value) => [`$${value}`, 'Amount']} />
                      <Bar dataKey="amount" radius={[0, 4, 4, 0]}>
                        {expenseCategories.slice(0, 5).map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </RechartsBR>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="suggestions" className="space-y-6">
            {/* AI Powered Insights */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <Sparkles className="h-5 w-5 text-yellow-500 mr-2" />
                  <CardTitle className="text-xl">AI-Powered Recommendations</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-4 grid gap-6">
                {[
                  {
                    title: "Budget Optimization",
                    content: "Based on your spending patterns, consider reducing your Food budget by 15% to meet your savings goals. Your current spending here is higher than similar households."
                  },
                  {
                    title: "Subscription Analysis",
                    content: "You have 3 entertainment subscriptions with overlapping content. Consider consolidating to save $21.98 monthly."
                  },
                  {
                    title: "Bill Negotiation",
                    content: "Your phone bill is 22% higher than average rates. Call your provider and mention competitor offers to potentially save $15-20 monthly."
                  }
                ].map((insight, index) => (
                  <div key={index} className={cn(
                    "p-4 rounded-lg border",
                    index === 0 ? "bg-blue-50 border-blue-100" : 
                    index === 1 ? "bg-amber-50 border-amber-100" :
                    "bg-emerald-50 border-emerald-100"
                  )}>
                    <h3 className="font-semibold mb-2">{insight.title}</h3>
                    <p className="text-sm text-muted-foreground">{insight.content}</p>
                    <Button variant="link" size="sm" className="mt-2 p-0">
                      Learn more <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Long-term Projections */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <LineChart className="h-5 w-5 text-indigo-500 mr-2" />
                  <CardTitle className="text-xl">Long-term Financial Projections</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm text-muted-foreground mb-4">
                  Based on your current savings rate, here's a projection of your financial growth over time.
                </p>
                <div className="h-60">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsLC
                      data={[
                        { year: '2025', wealth: 12000 },
                        { year: '2026', wealth: 26000 },
                        { year: '2027', wealth: 43000 },
                        { year: '2028', wealth: 64000 },
                        { year: '2029', wealth: 89000 },
                        { year: '2030', wealth: 118000 },
                      ]}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`$${value}`, 'Projected Wealth']} />
                      <Line
                        type="monotone"
                        dataKey="wealth"
                        stroke="#6366F1"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                      />
                    </RechartsLC>
                  </ResponsiveContainer>
                </div>
                <p className="text-xs text-center text-muted-foreground mt-2">
                  Projection assumes continued saving patterns and 5% average return on investments
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default Insights;
