"use client"
import React from "react";
import ProfileForms from "../../../../components/forms/ProfileForms";
import ProfilePicture from "./_components/ProfilePicture";
import { db } from "../../../../lib/db";
import { getUserImage, removeProfileImage, updateUserInfo, uploadProfileImage } from "../../../../lib/actions/settings.actions";


type Props = {};

const Settings = async (props: Props) => {
  

  
const user = getUserImage()
  

  
  return (
    <div className="flex flex-col gap-4">
      <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
        <span>Settings</span>
      </h1>
      <div className="flex flex-col gap-10 p-6">
        <div>
          <h2 className="text-2xl font-bold">User Profile</h2>
          <p className="text-base text-white/50">
            Add or update your information
          </p>
        </div>
        <ProfilePicture
          onDelete={removeProfileImage}
          userImage={user|| ""}
          onUpload={uploadProfileImage}
        />
        <ProfileForms user={user} onUpdate={updateUserInfo} />
      </div>
    </div>
  );
};

export default Settings;
