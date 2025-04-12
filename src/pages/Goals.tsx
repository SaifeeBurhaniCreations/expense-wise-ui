
import React, { useState } from "react";
import AppLayout from "@/components/Layout/AppLayout";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Plus,
  Target,
  Car,
  Home,
  Plane,
  Briefcase,
  Graduation,
  Calendar,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

// Sample goal data
const initialGoals = [
  {
    id: 1,
    title: "Emergency Fund",
    icon: <Briefcase className="h-5 w-5" />,
    target: 10000,
    current: 6500,
    dueDate: "2025-12-31",
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "New Car",
    icon: <Car className="h-5 w-5" />,
    target: 25000,
    current: 8750,
    dueDate: "2026-06-15",
    color: "bg-amber-500",
  },
  {
    id: 3,
    title: "Home Down Payment",
    icon: <Home className="h-5 w-5" />,
    target: 60000,
    current: 12000,
    dueDate: "2027-09-01",
    color: "bg-emerald-500",
  },
  {
    id: 4,
    title: "Vacation",
    icon: <Plane className="h-5 w-5" />,
    target: 5000,
    current: 2500,
    dueDate: "2025-07-15",
    color: "bg-purple-500",
  },
];

const Goals: React.FC = () => {
  const [goals, setGoals] = useState(initialGoals);
  const [open, setOpen] = useState(false);
  const [newGoal, setNewGoal] = useState({
    title: "",
    target: "",
    current: "0",
    dueDate: "",
  });

  const handleCreateGoal = () => {
    const goalData = {
      id: goals.length + 1,
      title: newGoal.title,
      icon: <Target className="h-5 w-5" />,
      target: parseFloat(newGoal.target),
      current: parseFloat(newGoal.current),
      dueDate: newGoal.dueDate,
      color: "bg-blue-500",
    };
    
    setGoals([...goals, goalData]);
    setNewGoal({ title: "", target: "", current: "0", dueDate: "" });
    setOpen(false);
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Savings Goals</h1>
            <p className="text-muted-foreground">
              Track your financial targets and watch your progress
            </p>
          </div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                New Goal
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Create New Savings Goal</DialogTitle>
                <DialogDescription>
                  Define your financial goal and track your progress over time.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="goal-name">Goal Name</Label>
                  <Input
                    id="goal-name"
                    placeholder="e.g. New Car, Vacation, etc."
                    value={newGoal.title}
                    onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="target-amount">Target Amount ($)</Label>
                  <Input
                    id="target-amount"
                    type="number"
                    placeholder="5000"
                    value={newGoal.target}
                    onChange={(e) => setNewGoal({ ...newGoal, target: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="current-amount">Current Amount ($)</Label>
                  <Input
                    id="current-amount"
                    type="number"
                    placeholder="0"
                    value={newGoal.current}
                    onChange={(e) => setNewGoal({ ...newGoal, current: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="due-date">Target Date</Label>
                  <Input
                    id="due-date"
                    type="date"
                    value={newGoal.dueDate}
                    onChange={(e) => setNewGoal({ ...newGoal, dueDate: e.target.value })}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
                <Button onClick={handleCreateGoal}>Create Goal</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Total Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{goals.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Total Target</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                ${goals.reduce((sum, goal) => sum + goal.target, 0).toLocaleString()}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Total Saved</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                ${goals.reduce((sum, goal) => sum + goal.current, 0).toLocaleString()}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Overall Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {Math.round(
                  (goals.reduce((sum, goal) => sum + goal.current, 0) /
                    goals.reduce((sum, goal) => sum + goal.target, 0)) *
                    100
                )}%
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList>
            <TabsTrigger value="all">All Goals</TabsTrigger>
            <TabsTrigger value="inprogress">In Progress</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {goals.map((goal) => {
                const progressPercent = (goal.current / goal.target) * 100;
                return (
                  <Card key={goal.id} className="overflow-hidden">
                    <CardHeader className={cn("pb-2", goal.color, "text-white")}>
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg flex items-center gap-2">
                          {goal.icon}
                          {goal.title}
                        </CardTitle>
                        <span className="text-sm opacity-90 bg-white/20 px-2 py-1 rounded-md">
                          {Math.round(progressPercent)}%
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <div className="mb-4">
                        <Progress value={progressPercent} className="h-2" />
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>${goal.current.toLocaleString()}</span>
                        <span className="text-muted-foreground">
                          ${goal.target.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        Target date: {format(new Date(goal.dueDate), "MMM d, yyyy")}
                      </div>
                    </CardContent>
                    <CardFooter className="border-t pt-4 gap-2">
                      <Button variant="outline" size="sm" className="flex-1">Deposit</Button>
                      <Button variant="outline" size="sm" className="flex-1">Edit</Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
          
          <TabsContent value="inprogress">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {goals
                .filter(goal => (goal.current / goal.target) * 100 < 100)
                .map((goal) => {
                  const progressPercent = (goal.current / goal.target) * 100;
                  return (
                    <Card key={goal.id} className="overflow-hidden">
                      <CardHeader className={cn("pb-2", goal.color, "text-white")}>
                        <div className="flex justify-between items-center">
                          <CardTitle className="text-lg flex items-center gap-2">
                            {goal.icon}
                            {goal.title}
                          </CardTitle>
                          <span className="text-sm opacity-90 bg-white/20 px-2 py-1 rounded-md">
                            {Math.round(progressPercent)}%
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <div className="mb-4">
                          <Progress value={progressPercent} className="h-2" />
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>${goal.current.toLocaleString()}</span>
                          <span className="text-muted-foreground">
                            ${goal.target.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          Target date: {format(new Date(goal.dueDate), "MMM d, yyyy")}
                        </div>
                      </CardContent>
                      <CardFooter className="border-t pt-4 gap-2">
                        <Button variant="outline" size="sm" className="flex-1">Deposit</Button>
                        <Button variant="outline" size="sm" className="flex-1">Edit</Button>
                      </CardFooter>
                    </Card>
                  );
                })}
            </div>
          </TabsContent>
          
          <TabsContent value="completed">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {goals
                .filter(goal => (goal.current / goal.target) * 100 >= 100)
                .map((goal) => {
                  const progressPercent = (goal.current / goal.target) * 100;
                  return (
                    <Card key={goal.id} className="overflow-hidden">
                      <CardHeader className={cn("pb-2", goal.color, "text-white")}>
                        <div className="flex justify-between items-center">
                          <CardTitle className="text-lg flex items-center gap-2">
                            {goal.icon}
                            {goal.title}
                          </CardTitle>
                          <span className="text-sm opacity-90 bg-white/20 px-2 py-1 rounded-md">
                            {Math.round(progressPercent)}%
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <div className="mb-4">
                          <Progress value={progressPercent} className="h-2" />
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>${goal.current.toLocaleString()}</span>
                          <span className="text-muted-foreground">
                            ${goal.target.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          Target date: {format(new Date(goal.dueDate), "MMM d, yyyy")}
                        </div>
                      </CardContent>
                      <CardFooter className="border-t pt-4 gap-2">
                        <Button variant="outline" size="sm" className="flex-1">Withdraw</Button>
                        <Button variant="outline" size="sm" className="flex-1">Edit</Button>
                      </CardFooter>
                    </Card>
                  );
                })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default Goals;
