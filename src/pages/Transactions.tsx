
import React, { useState } from "react";
import AppLayout from "@/components/Layout/AppLayout";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { recentTransactions } from "@/utils/mockData";
import { ArrowUp, ArrowDown, Search, CalendarIcon, SlidersHorizontal } from "lucide-react";
import { format } from "date-fns";

const Transactions: React.FC = () => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState<string>("all");
  const [category, setCategory] = useState<string>("all");

  // Extract unique categories from transactions
  const categories = Array.from(
    new Set(recentTransactions.map((t) => t.category))
  );

  // Filter transactions based on search, type, and category
  const filteredTransactions = recentTransactions.filter((transaction) => {
    const matchesSearch =
      search === "" ||
      transaction.vendor.toLowerCase().includes(search.toLowerCase()) ||
      transaction.category.toLowerCase().includes(search.toLowerCase());
      
    const matchesType =
      type === "all" || transaction.type === type;
      
    const matchesCategory =
      category === "all" || transaction.category === category;

    return matchesSearch && matchesType && matchesCategory;
  });

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">Transactions</h1>
          <p className="text-muted-foreground">
            View and filter all your income and expense records
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 py-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search transactions..."
              className="pl-10"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Select value={type} onValueChange={setType}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="income">Income</SelectItem>
              <SelectItem value="expense">Expense</SelectItem>
            </SelectContent>
          </Select>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <CalendarIcon className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <SlidersHorizontal className="h-4 w-4" />
          </Button>
        </div>

        {/* Transactions Table */}
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Vendor</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTransactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-medium">
                    {format(new Date(transaction.date), "MMM dd, yyyy")}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      {transaction.type === "income" ? (
                        <ArrowUp className="mr-1 h-4 w-4 text-green-500" />
                      ) : (
                        <ArrowDown className="mr-1 h-4 w-4 text-red-500" />
                      )}
                      <span className="capitalize">{transaction.type}</span>
                    </div>
                  </TableCell>
                  <TableCell>{transaction.category}</TableCell>
                  <TableCell>{transaction.vendor}</TableCell>
                  <TableCell className="text-right font-medium">
                    <span
                      className={
                        transaction.type === "income"
                          ? "text-green-500"
                          : "text-red-500"
                      }
                    >
                      {transaction.type === "income" ? "+" : "-"}$
                      {transaction.amount.toFixed(2)}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </AppLayout>
  );
};

export default Transactions;
