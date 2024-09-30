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
      <div className={style.sidebarContent}>
        <div>
          <FaXTwitter className={style.logo} />
        </div>
        <ul>
          <li>
            <GoHome className={`me-3 ${style.icon}`} />
            <span className={style.item}>Home</span>
            
          </li>
          <li>
            <IoSearchSharp className="me-3" />
            <span className={style.item}>            Explore
            </span>

          </li>
          <li>
            <IoIosNotificationsOutline className="me-3" />
            <span className={style.item}>            Notifications
            </span>

          </li>
          <li>
            <MdOutlineEmail className="me-3" />
            <span className={style.item}>Messages</span>

            
          </li>
          <li>
            <MdListAlt className="me-3" />
            <span className={style.item}>            Lists
            </span>

          </li>
          <li>
            <FaRegBookmark className="me-3" />
            <span className={style.item}>Bookmarks</span>

            
          </li>
          <li>
            <HiOutlineUsers className="me-3" />
            <span className={style.item}>Communities</span>

            
          </li>
          <li>
            <FaRegUser className="me-3" />
            <span className={style.item}>            Profile
            </span>

          </li>
          <li>
            <CiCircleMore className="me-3" />
            <span className={style.item}>            More
            </span>

          </li>
        </ul>
        <button className={`${style.post} rounded-pill`}>Post</button>
      </div>
      <Profile className={style.item}/>
    </div>
  );
}
