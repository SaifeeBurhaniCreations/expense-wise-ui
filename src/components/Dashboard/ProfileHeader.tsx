
import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { BellIcon } from "lucide-react";

interface ProfileHeaderProps {
  name: string;
  initials: string;
  lastUpdateDate: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ name, initials, lastUpdateDate }) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12">
          <AvatarFallback className="bg-primary text-primary-foreground">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-bold">Welcome back, {name}</h1>
          <p className="text-sm text-muted-foreground">
            Last updated: {lastUpdateDate}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="rounded-full p-2 hover:bg-muted">
          <BellIcon className="h-5 w-5 text-muted-foreground" />
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;
