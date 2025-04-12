
import React from "react";
import ProfileHeader from "@/components/Dashboard/ProfileHeader";
import FinancialSummary from "@/components/Dashboard/FinancialSummary";
import IncomeExpenseChart from "@/components/Dashboard/IncomeExpenseChart";
import ExpenseChart from "@/components/Dashboard/ExpenseChart";
import SubscriptionTracker from "@/components/Dashboard/SubscriptionTracker";
import RecentTransactions from "@/components/Dashboard/RecentTransactions";
import SavingsTips from "@/components/Dashboard/SavingsTips";
import { 
  monthlyFinanceData, 
  expenseCategories, 
  subscriptions, 
  recentTransactions, 
  savingsTips 
} from "@/utils/mockData";

const Index = () => {
  const currentBalance = 12450.75;
  const monthlyIncome = 6800;
  const monthlyExpenses = 5400;
  const savingsRate = 21; // as percentage
  const userName = "Alex";

  return (
    <div className="container mx-auto py-6 px-4 max-w-7xl">
      <ProfileHeader
        name={userName}
        initials="A"
        lastUpdateDate="April 12, 2025"
      />
      
      <div className="mb-8">
        <FinancialSummary
          currentBalance={currentBalance}
          income={monthlyIncome}
          expenses={monthlyExpenses}
          savingsRate={savingsRate}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <IncomeExpenseChart data={monthlyFinanceData} />
        <ExpenseChart data={expenseCategories} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <RecentTransactions transactions={recentTransactions} />
        </div>
        <div className="md:col-span-1">
          <SubscriptionTracker subscriptions={subscriptions} />
        </div>
      </div>

      <div className="mt-6">
        <SavingsTips tips={savingsTips} />
      </div>
    </div>
  );
};

export default Index;
