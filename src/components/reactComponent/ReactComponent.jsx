import React from "react";
import style from "./react.module.css";

import ReactProfile from "./reactProfile/ReactProfile";
import AllPost from "./allPost/AllPost";
import Follow from "./follow/Follow";

export default function ReactComponent() {
  return (
    <div className={style.react}>
      <ReactProfile />
      <AllPost />
      <Follow/>
      <footer className={style.footer}>
      <p>&copy; RAHAF HUSSEIN - 2024</p>

      </footer>
    </div>
  );
}
