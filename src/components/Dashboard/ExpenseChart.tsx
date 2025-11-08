
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

interface ExpenseCategory {
  name: string;
  amount: number;
  color: string;
}

interface ExpenseChartProps {
  data: ExpenseCategory[];
}

const ExpenseChart: React.FC<ExpenseChartProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState("pie");

  return (
    <Card className="h-full">
      <Tabs defaultValue="pie" className="w-full" onValueChange={setActiveTab}>
        <CardHeader>
          <CardTitle className="text-xl">Expense Breakdown</CardTitle>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="pie">Pie Chart</TabsTrigger>
            <TabsTrigger value="list">List View</TabsTrigger>
          </TabsList>
        </CardHeader>
        <CardContent>
          <TabsContent value="pie" className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="amount"
                  nameKey="name"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value: number) => [`$${value}`, 'Amount']}
                />
                <Legend layout="vertical" verticalAlign="middle" align="right" />
              </PieChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="list">
            <div className="space-y-4">
              {data.map((category) => (
                <div key={category.name} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div
                      className="h-3 w-3 rounded-full mr-2"
                      style={{ backgroundColor: category.color }}
                    ></div>
                    <span>{category.name}</span>
                  </div>
                  <span className="font-medium">${category.amount}</span>
                </div>
              ))}
            </div>
          </TabsContent>
        </CardContent>
      </Tabs>
    </Card>
  );
};

export default ExpenseChart;
