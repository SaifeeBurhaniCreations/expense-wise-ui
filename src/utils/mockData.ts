
// Mock data for the finance dashboard

// Monthly income and expense data
export const monthlyFinanceData = [
  { month: "Jan", income: 5200, expenses: 4300 },
  { month: "Feb", income: 5300, expenses: 4200 },
  { month: "Mar", income: 5400, expenses: 4400 },
  { month: "Apr", income: 5600, expenses: 4100 },
  { month: "May", income: 5800, expenses: 4300 },
  { month: "Jun", income: 6000, expenses: 4500 },
  { month: "Jul", income: 6200, expenses: 4800 },
  { month: "Aug", income: 6100, expenses: 4700 },
  { month: "Sep", income: 6300, expenses: 4900 },
  { month: "Oct", income: 6500, expenses: 5100 },
  { month: "Nov", income: 6400, expenses: 5200 },
  { month: "Dec", income: 6800, expenses: 5400 },
];

// Expense categories
export const expenseCategories = [
  { name: "Housing", amount: 1800, color: "#3B82F6" },
  { name: "Food", amount: 850, color: "#10B981" },
  { name: "Transportation", amount: 400, color: "#F59E0B" },
  { name: "Entertainment", amount: 380, color: "#8B5CF6" },
  { name: "Healthcare", amount: 320, color: "#EC4899" },
  { name: "Shopping", amount: 450, color: "#6366F1" },
  { name: "Other", amount: 300, color: "#64748B" },
];

// Subscription data
export const subscriptions = [
  {
    id: 1,
    name: "Netflix",
    amount: 15.99,
    billingDate: "15th",
    category: "Entertainment",
    logo: "N",
  },
  {
    id: 2,
    name: "Spotify",
    amount: 9.99,
    billingDate: "20th",
    category: "Entertainment",
    logo: "S",
  },
  {
    id: 3,
    name: "Amazon Prime",
    amount: 14.99,
    billingDate: "5th",
    category: "Shopping",
    logo: "A",
  },
  {
    id: 4,
    name: "Gym Membership",
    amount: 49.99,
    billingDate: "1st",
    category: "Health",
    logo: "G",
  },
  {
    id: 5,
    name: "iCloud Storage",
    amount: 2.99,
    billingDate: "10th",
    category: "Technology",
    logo: "iC",
  },
  {
    id: 6,
    name: "YouTube Premium",
    amount: 11.99,
    billingDate: "23rd",
    category: "Entertainment",
    logo: "YT",
  },
];

// Recent transactions
export const recentTransactions = [
  {
    id: 1,
    type: "expense",
    category: "Food",
    vendor: "Grocery Store",
    amount: 78.29,
    date: "2025-04-11",
  },
  {
    id: 2,
    type: "expense",
    category: "Shopping",
    vendor: "Online Store",
    amount: 39.99,
    date: "2025-04-10",
  },
  {
    id: 3,
    type: "income",
    category: "Salary",
    vendor: "Employer Inc.",
    amount: 2800.00,
    date: "2025-04-05",
  },
  {
    id: 4,
    type: "expense",
    category: "Transportation",
    vendor: "Gas Station",
    amount: 45.50,
    date: "2025-04-08",
  },
  {
    id: 5,
    type: "expense",
    category: "Bills",
    vendor: "Electric Company",
    amount: 132.17,
    date: "2025-04-09",
  }
];

// Financial savings tips
export const savingsTips = [
  "Consider bundling your streaming services or using family plans to save 15-30% on monthly subscription costs.",
  "Your food spending is 12% higher than last month. Try meal prepping to reduce restaurant expenses.",
  "You could save $42 monthly by switching to a different phone plan based on your usage patterns.",
  "You have 3 unused subscriptions that could save you $35.97 monthly if canceled.",
  "Setting up automatic transfers to your savings account could help you save 5-10% more each month."
];
