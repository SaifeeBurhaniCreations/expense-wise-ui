
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight, Wallet } from "lucide-react";

interface FinancialSummaryProps {
  currentBalance: number;
  income: number;
  expenses: number;
  savingsRate: number;
}

const FinancialSummary: React.FC<FinancialSummaryProps> = ({
  currentBalance,
  income,
  expenses,
  savingsRate,
}) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="card-hover">
        <CardHeader className="pb-2">
          <CardDescription>Current Balance</CardDescription>
          <CardTitle className="text-2xl font-bold">
            ${currentBalance.toLocaleString()}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between text-sm">
            <div className="text-muted-foreground">Available funds</div>
            <div className="flex items-center">
              <Wallet className="mr-1 h-4 w-4 text-primary" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="card-hover">
        <CardHeader className="pb-2">
          <CardDescription>Monthly Income</CardDescription>
          <CardTitle className="text-2xl font-bold text-finance-income">
            ${income.toLocaleString()}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between text-sm">
            <div className="text-muted-foreground">This month</div>
            <div className="flex items-center text-finance-income">
              <ArrowUpRight className="mr-1 h-4 w-4" />
              <span>12%</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="card-hover">
        <CardHeader className="pb-2">
          <CardDescription>Monthly Expenses</CardDescription>
          <CardTitle className="text-2xl font-bold text-finance-expense">
            ${expenses.toLocaleString()}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between text-sm">
            <div className="text-muted-foreground">This month</div>
            <div className="flex items-center text-finance-expense">
              <ArrowDownRight className="mr-1 h-4 w-4" />
              <span>8%</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="card-hover">
        <CardHeader className="pb-2">
          <CardDescription>Savings Rate</CardDescription>
          <CardTitle className="text-2xl font-bold">
            {savingsRate}%
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between text-sm">
            <div className="text-muted-foreground">Of monthly income</div>
            <div className="flex items-center text-finance-low">
              <ArrowUpRight className="mr-1 h-4 w-4" />
              <span>3%</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinancialSummary;
