
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, ChevronLeft, EyeIcon, EyeOffIcon, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Auth: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Welcome back!",
      description: "You've successfully logged in to FinGlow.",
      duration: 3000,
    });
    navigate("/");
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Account created!",
      description: "Your FinGlow account has been successfully created.",
      duration: 3000,
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      {/* Left side - Auth forms */}
      <div className="flex flex-col justify-center items-center px-4 py-12">
        <div className="w-full max-w-md space-y-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-8">
              <div className="rounded-full bg-primary/20 p-2">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium">
                  FG
                </div>
              </div>
              <span className="font-bold text-2xl">FinGlow</span>
            </Link>
          </div>

          <Tabs defaultValue="login" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <Card className="border-0 shadow-lg">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl">Welcome back</CardTitle>
                  <CardDescription>
                    Enter your credentials to access your account
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email">Email</Label>
                      <Input 
                        id="login-email" 
                        type="email" 
                        placeholder="name@example.com"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="login-password">Password</Label>
                        <Link to="#" className="text-xs text-primary hover:underline">
                          Forgot Password?
                        </Link>
                      </div>
                      <div className="relative">
                        <Input
                          id="login-password"
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                          required
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-2.5"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOffIcon className="h-4 w-4 text-muted-foreground" />
                          ) : (
                            <EyeIcon className="h-4 w-4 text-muted-foreground" />
                          )}
                        </button>
                      </div>
                    </div>
                    <Button type="submit" className="w-full">
                      Sign In
                    </Button>
                  </form>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <div className="relative w-full">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-muted"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-card px-2 text-muted-foreground">
                        Or continue with
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline">Google</Button>
                    <Button variant="outline">Apple</Button>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="register">
              <Card className="border-0 shadow-lg">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl">Create an account</CardTitle>
                  <CardDescription>
                    Enter your details to create your FinGlow account
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        placeholder="John Doe"
                        value={registerName}
                        onChange={(e) => setRegisterName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-email">Email</Label>
                      <Input 
                        id="register-email" 
                        type="email" 
                        placeholder="name@example.com"
                        value={registerEmail}
                        onChange={(e) => setRegisterEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-password">Password</Label>
                      <div className="relative">
                        <Input
                          id="register-password"
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          value={registerPassword}
                          onChange={(e) => setRegisterPassword(e.target.value)}
                          required
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-2.5"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOffIcon className="h-4 w-4 text-muted-foreground" />
                          ) : (
                            <EyeIcon className="h-4 w-4 text-muted-foreground" />
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <input 
                          type="checkbox" 
                          id="terms" 
                          className="rounded border-gray-300 text-primary focus:ring-primary"
                          required
                        />
                        <Label htmlFor="terms" className="text-xs">
                          I agree to the{" "}
                          <Link to="#" className="text-primary hover:underline">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link to="#" className="text-primary hover:underline">
                            Privacy Policy
                          </Link>
                        </Label>
                      </div>
                    </div>
                    <Button type="submit" className="w-full">
                      Create Account
                    </Button>
                  </form>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <div className="relative w-full">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-muted"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-card px-2 text-muted-foreground">
                        Or continue with
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline">Google</Button>
                    <Button variant="outline">Apple</Button>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
          
          <p className="text-center text-sm text-muted-foreground mt-8">
            <Link to="/" className="flex items-center justify-center gap-1 text-primary hover:underline">
              <ChevronLeft className="h-3 w-3" />
              Back to Homepage
            </Link>
          </p>
        </div>
      </div>
      
      {/* Right side - Feature showcase */}
      <div className="hidden md:flex bg-gradient-to-br from-primary/5 to-primary/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
            <div className="rounded-full h-96 w-96 bg-primary/5 animate-pulse"></div>
          </div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center w-full p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Gain Control of Your Financial Future</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Join thousands of users who are taking control of their finances with FinGlow's powerful budgeting and insights tools.
            </p>
          </div>
          
          <div className="grid gap-6 max-w-md">
            {[
              {
                title: "Smart Financial Dashboard",
                description: "Get a complete overview of your finances in one place"
              },
              {
                title: "AI-Powered Insights",
                description: "Receive personalized suggestions to improve your financial health"
              },
              {
                title: "Goal Tracking",
                description: "Set financial goals and track your progress over time"
              },
              {
                title: "Subscription Management",
                description: "Never forget about active subscriptions and recurring payments"
              }
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-3 bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                <div className="rounded-full bg-primary/20 p-1.5 mt-0.5">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="absolute bottom-8 flex items-center gap-2 text-sm text-muted-foreground">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>Trusted by over 50,000 users worldwide</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
