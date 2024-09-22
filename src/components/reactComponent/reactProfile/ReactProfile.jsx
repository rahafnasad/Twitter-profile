import React, { useState } from "react";
import style from "./reactProfile.module.css";
import { MdKeyboardBackspace } from "react-icons/md";
import { HiBadgeCheck } from "react-icons/hi";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { MdNotificationsNone } from "react-icons/md";
import { FaLink } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

export default function ReactProfile() {
  const [buttonHover, setButtonHover] = useState(false);

  return (
    <div className={style.profile}>
      <nav className={style.navbar}>
        <MdKeyboardBackspace className={style.backIcon} />
        <div>
          <p className={style.name}>
            React
            <HiBadgeCheck className={style.checkIcon} />
            <p className={style.posts}>2,611 posts</p>
          </p>
        </div>
      </nav>
      <div className={style.profileImage}>
        <img
          src="cover.jfif"
          alt="cover image"
          title="cover image"
          className={style.coverImage}
        />
        <img
          src="profileImage.png"
          alt="user image"
          title="user image"
          className={style.userImage}
        />
        <div className={style.followingIcon}>
          <MdOutlineMoreHoriz className={style.more} title="more" />
          <MdNotificationsNone className={style.notification} />
          <button
            className={buttonHover ? style.unFollow : style.following}
            onMouseEnter={() => setButtonHover(true)}
            onMouseLeave={() => setButtonHover(false)}
          >
            {buttonHover ? "Unfollow" : "Following"}
          </button>
        </div>
      </div>
      <div className={style.profileContent}>
        <div>
          <p className={style.name}>
            React
            <HiBadgeCheck className={style.checkIcon} />
            <p className={style.posts}>@reactjs</p>
          </p>
          <p className={style.description}>The library for web and native user interfaces
          </p>
          <div className="d-flex gap-3">
            <div className={style.link}>
            <FaLink className={style.linkIcon}/>
            <a href="https://react.dev/" target="_blank">react.dev</a>

            </div>
            <div className={style.joined}>
            <SlCalender className={style.joinedICon}/>
            <span>Joined July 2013
            </span>

            </div>
       
          </div>
          <div className="d-flex gap-3 mt-2">
          <div className={style.followingNumb}>
            <p> <span>267</span> Following</p>
          </div>
          <div className={style.followersNum}><p> <span>782.7K</span>  Followers
          </p></div>
          

        </div>
        <div className={style.followBy}>
          <div className={style.allImage}>
            <img src="person1.jfif" alt="person 1" className={style.personOne}/>
            <img src="person2.jfif" alt="person 2 " className={style.personTwo}/>
            <img src="person3.jfif" alt="person 3" className={style.personThree}/>
            <span>Followed by Mohammad Kukhun, Yazen Alsade 💫 and 14 others you follow
            </span>
          </div>
        </div>
        <ul>
          <li className={style.postLI}><span>Posts</span> <div className={style.line}></div></li>
          <li><span>Replies</span></li>
          <li><span>Media</span></li>
          <li><span>Likes</span></li>

        </ul>
        </div>
      </div>
    </div>
  );
}