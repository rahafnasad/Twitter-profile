import React from "react";
import style from "./profile.module.css";
import { IoIosMore } from "react-icons/io";

export default function Profile() {
  return (
    <div className={style.profile}>
      <img
        src="profile.jpg"
        alt="profile image"
        title="profile image"
        className={style.profileImage}
      />
      <div className={style.info}>
        <b className={style.name}>Mohammad Dwika...</b>
        <b className={style.email}>@Mohammad Dwika...</b>
      </div>
      <IoIosMore className={style.moreIcon}/>

    </div>
  );
}
