import store from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Link } from "react-router-dom";
import SuggestedUsers from "./SuggestedUsers";

const RightsideBar = () => {
  const { user } = useSelector((store) => store.auth);
  return (
    <div className="w-fit my-10 pr-32">
      <div className="fles items-center gap-2">
        <Link to={`/profile/${user?._id}`}>
          <Avatar>
            <AvatarImage src={user?.profilePicture} alt="image" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Link>
        <div>
          <h1 className="font-semibold text-sm">
            <Link to={`/profile/${user?._id}`}>{user?.username}</Link>
          </h1>
          <span className="text-sm text-gray-600">
            {user?.bio || "Bio here..."}
          </span>
        </div>
      </div>
      <SuggestedUsers />
    </div>
  );
};

export default RightsideBar;
