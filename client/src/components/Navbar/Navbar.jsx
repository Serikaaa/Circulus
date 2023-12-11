import React, { useState } from "react";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import SearchIcon from "@mui/icons-material/Search";

import axios from "axios";
import { useLocation,Routes, Route, useNavigate } from "react-router-dom";
import UserPlaceholder from "../UserPlaceholder/UserPlaceholder";

const Navbar = () => {
  const [userData, setUserData] = useState(null);
  const location = useLocation().pathname;
  const [username,setUserName] = useState('');
  const navigate = useNavigate();
  const handleKeyDown = async (event) => {
    if (event.key === 'Enter') {
      setUserName(event.target.value);
      console.log(username);
      const findUser = await axios.get(`/users/findName/${username}`);
      if(findUser.data==null)
      {
        console.log("b");
      }
      else
      {
        navigate(`/profile/${findUser.data._id.toString()}`);
      }
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 my-5 justify-center">
      
      <div className="mx-auto md:mx-0">
        <img
          src="/twitter-logo.png"
          alt="Twitter Logo"
          width={"150px"}
          className="ml-8"
        />
      </div>

      <div className="col-span-2 md:border-x-2 md:border-slate-200 md:px-6 my-6 md:my-0">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl">
            {location.includes("profile") ? (
              <UserPlaceholder setUserData={setUserData} userData={userData} />
            ) : location.includes("explore") ? (
              "Explore"
            ) : (
              "Home"
            )}
          </h2>
          <StarBorderPurple500Icon />
        </div>
      </div>

      <div className="px-0 md:px-6 mx-auto">
        <SearchIcon className="absolute m-2" />
        <input 
          type="text" 
          className="bg-blue-100 rounded-full py-2 px-8" 
          name ="username" 
          id="username"
          onKeyDown={handleKeyDown} 
        />
      </div>
    </div>
  );
};

export default Navbar;
