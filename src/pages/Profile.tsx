
import React, { useState } from "react";
import AppLayout from "@/components/Layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import {
  UserCircle,
  Settings,
  CreditCard,
  Bell,
  Lock,
  DollarSign,
  Euro,
  PoundSterling,
  Check,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Profile: React.FC = () => {
  const [currency, setCurrency] = useState("USD");
  const [theme, setTheme] = useState("light");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [name, setName] = useState("Alex Johnson");
  const [email, setEmail] = useState("alex.johnson@example.com");
  const { toast } = useToast();

  const handleSaveChanges = () => {
    toast({
      title: "Settings updated",
      description: "Your profile settings have been saved successfully.",
      duration: 3000,
    });
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">My Profile</h1>
          <p className="text-muted-foreground">
            Manage your account settings and preferences
          </p>
        </div>

        <Tabs defaultValue="account" className="space-y-6">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>

          <TabsContent value="account" className="space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <UserCircle className="h-5 w-5 text-blue-500 mr-2" />
                  <CardTitle className="text-xl">Personal Information</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-4">
                    <div className="bg-blue-100 rounded-full h-20 w-20 flex items-center justify-center text-2xl font-bold text-blue-600">
                      AJ
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">{name}</h3>
                      <p className="text-sm text-muted-foreground">{email}</p>
                      <p className="text-sm text-muted-foreground">Member since April 2024</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Change Photo
                  </Button>
                </div>

                <Separator className="my-6" />

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="(555) 123-4567" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Select defaultValue="america_new_york">
                      <SelectTrigger id="timezone">
                        <SelectValue placeholder="Select timezone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="america_new_york">America/New York</SelectItem>
                        <SelectItem value="america_los_angeles">America/Los Angeles</SelectItem>
                        <SelectItem value="europe_london">Europe/London</SelectItem>
                        <SelectItem value="asia_tokyo">Asia/Tokyo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex justify-end mt-6">
                  <Button onClick={handleSaveChanges}>Save Changes</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <CreditCard className="h-5 w-5 text-purple-500 mr-2" />
                  <CardTitle className="text-xl">Linked Accounts</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-4 space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-md bg-blue-100 flex items-center justify-center mr-3">
                      <span className="font-medium text-blue-700">B</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Bank Account</h3>
                      <p className="text-sm text-muted-foreground">••••4567</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Manage
                  </Button>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-md bg-amber-100 flex items-center justify-center mr-3">
                      <span className="font-medium text-amber-700">C</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Credit Card</h3>
                      <p className="text-sm text-muted-foreground">Visa ••••8901</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Manage
                  </Button>
                </div>
                <div className="pt-2">
                  <Button variant="ghost" className="gap-2">
                    <span>+ Add Payment Method</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preferences" className="space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <Settings className="h-5 w-5 text-emerald-500 mr-2" />
                  <CardTitle className="text-xl">App Preferences</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-4 space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="currency">Currency</Label>
                    <Select value={currency} onValueChange={setCurrency}>
                      <SelectTrigger id="currency" className="flex items-center">
                        <SelectValue placeholder="Select currency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="USD" className="flex items-center">
                          <div className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-2" />
                            <span>USD - US Dollar</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="EUR">
                          <div className="flex items-center">
                            <Euro className="h-4 w-4 mr-2" />
                            <span>EUR - Euro</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="GBP">
                          <div className="flex items-center">
                            <PoundSterling className="h-4 w-4 mr-2" />
                            <span>GBP - British Pound</span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="theme">Theme</Label>
                    <Select value={theme} onValueChange={setTheme}>
                      <SelectTrigger id="theme">
                        <SelectValue placeholder="Select theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light Mode</SelectItem>
                        <SelectItem value="dark">Dark Mode</SelectItem>
                        <SelectItem value="system">System Default</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <Select defaultValue="en">
                      <SelectTrigger id="language">
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Spanish</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                        <SelectItem value="de">German</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dateFormat">Date Format</Label>
                    <Select defaultValue="mdy">
                      <SelectTrigger id="dateFormat">
                        <SelectValue placeholder="Select date format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                        <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                        <SelectItem value="ymd">YYYY/MM/DD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Budget Settings</h3>
                  <div className="grid gap-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">Monthly Budget Alert</h4>
                        <p className="text-sm text-muted-foreground">
                          Get notified when you reach 80% of your budget
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">Enable Automatic Savings</h4>
                        <p className="text-sm text-muted-foreground">
                          Automatically move funds to savings at the end of each month
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">Show Recurring Bills</h4>
                        <p className="text-sm text-muted-foreground">
                          Display upcoming bills on your dashboard
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mt-6">
                  <Button onClick={handleSaveChanges}>Save Preferences</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <Bell className="h-5 w-5 text-amber-500 mr-2" />
                  <CardTitle className="text-xl">Notification Settings</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-4 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Email Notifications</h3>
                  <div className="grid gap-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">Account Updates</h4>
                        <p className="text-sm text-muted-foreground">
                          Important information about your account
                        </p>
                      </div>
                      <Switch 
                        checked={emailNotifications} 
                        onCheckedChange={setEmailNotifications}
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">Budget Alerts</h4>
                        <p className="text-sm text-muted-foreground">
                          Notifications when you're close to exceeding your budget
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">Financial Tips</h4>
                        <p className="text-sm text-muted-foreground">
                          Personalized financial advice and savings opportunities
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Push Notifications</h3>
                  <div className="grid gap-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">Transaction Alerts</h4>
                        <p className="text-sm text-muted-foreground">
                          Get notified for new transactions in your account
                        </p>
                      </div>
                      <Switch 
                        checked={pushNotifications}
                        onCheckedChange={setPushNotifications}
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">Subscription Reminders</h4>
                        <p className="text-sm text-muted-foreground">
                          Notifications before your subscriptions renew
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">Goal Milestones</h4>
                        <p className="text-sm text-muted-foreground">
                          Celebrate when you reach savings goal milestones
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mt-6">
                  <Button onClick={handleSaveChanges}>Save Notification Settings</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <Lock className="h-5 w-5 text-red-500 mr-2" />
                  <CardTitle className="text-xl">Security Settings</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-4 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Change Password</h3>
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                  </div>
                  <Button variant="outline">Update Password</Button>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">Enable Two-Factor Authentication</h4>
                      <p className="text-sm text-muted-foreground">
                        Add an extra layer of security to your account
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Button variant="outline">Configure Two-Factor</Button>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Session Management</h3>
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">Active Sessions</h4>
                      <p className="text-sm text-muted-foreground">
                        This device (Chrome on MacOS) - Last active now
                      </p>
                    </div>
                    <Button variant="outline" size="sm">Sign Out</Button>
                  </div>
                  <Button variant="outline" className="text-red-500">Sign Out of All Devices</Button>
                </div>

                <Separator />

                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-red-500">Delete Account</h4>
                    <p className="text-sm text-muted-foreground">
                      Permanently delete your account and all associated data
                    </p>
                  </div>
                  <Button variant="destructive">Delete Account</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default Profile;
