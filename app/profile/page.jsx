import React from "react";
import { UserProfile } from "@clerk/nextjs";

const ProfilePage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <UserProfile
        appearance={{
          elements: {
            card: "h-[80vh]",
          },
        }}
      />
    </div>
  );
};

export default ProfilePage;
