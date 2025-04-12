
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface Transaction {
  id: number;
  type: "income" | "expense";
  category: string;
  vendor: string;
  amount: number;
  date: string;
}

interface RecentTransactionsProps {
  transactions: Transaction[];
}

const RecentTransactions: React.FC<RecentTransactionsProps> = ({
  transactions,
}) => {
  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
    }).format(date);
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-xl">Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent className="px-2">
        <div className="space-y-2 max-h-[350px] overflow-y-auto pr-2">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-3 rounded-lg border hover:bg-secondary/50"
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full ${
                    transaction.type === "income"
                      ? "bg-finance-income/10 text-finance-income"
                      : "bg-finance-expense/10 text-finance-expense"
                  }`}
                >
                  {transaction.type === "income" ? (
                    <ArrowUpRight className="h-5 w-5" />
                  ) : (
                    <ArrowDownRight className="h-5 w-5" />
                  )}
                </div>
                <div>
                  <div className="font-medium">{transaction.vendor}</div>
                  <div className="text-xs text-muted-foreground">
                    {transaction.category} • {formatDate(transaction.date)}
                  </div>
                </div>
              </div>
              <div
                className={`font-semibold ${
                  transaction.type === "income"
                    ? "text-finance-income"
                    : "text-finance-expense"
                }`}
              >
                {transaction.type === "income" ? "+" : "-"}${transaction.amount.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentTransactions;
