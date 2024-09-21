import React from "react";
import style from "./sidebar.module.css";
import { GoHome } from "react-icons/go";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { LuSquareSlash } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa6";
import { CiCircleMore } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { MdListAlt } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi";
import Profile from "../profile/Profile";

export default function Sidebar() {
  return (
    <div className={style.sidebar}>
<div className={style.sidebarContent} >
<div >
        <FaXTwitter className={style.logo}/>

        </div>
      <ul>
        <li>
          <GoHome  className="me-3"/>
          Home
        </li>
        <li>
          <IoSearchSharp  className="me-3"/>
          Explore
        </li>
        <li>
          <IoIosNotificationsOutline className="me-3" />
          Notifications
        </li>
        <li>
          <MdOutlineEmail  className="me-3"/>
          Messages
        </li>
        <li>
        <MdListAlt className="me-3"/>

            Lists
        </li>
        <li>
        <FaRegBookmark className="me-3"/>

            Bookmarks
        </li>
        <li>
        <HiOutlineUsers className="me-3"/>

            Communities</li>
        <li>
          <FaRegUser  className="me-3"/>
          Profile
        </li>
        <li>
          <CiCircleMore  className="me-3"/>
          More
        </li>
      </ul>
      <button className={`${style.post} rounded-pill`}>Post</button>
</div>
<Profile/>

        
    </div>
  );
}
