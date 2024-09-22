import React from "react";
import style from "./posts.module.css";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { FiMessageCircle } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineAlignCenter } from "react-icons/ai";
import { LuShare } from "react-icons/lu";

export default function Posts() {
  return (
    <div className={style.posts}>
      <div className={style.recentPost}>
        <HiArrowPathRoundedSquare className={style.recentIcon} />
        <span> React reposted</span>
      </div>
      <div className={style.post}>
        <img src="personPost.jpg" alt="Author" title="Author" />
        <div className={style.content}>
          <p className={style.authorName}>
            danabramov.bsky.social <span> @dan_abramov - May29</span>
          </p>
          <p className={style.postContent}>
            happy 10th birthday to <span>@reactjs</span>!
          </p>
        </div>
      </div>
      <div className={style.postReact}>
        <div className={style.replay} title="replay">
          <FiMessageCircle />
          <span>46</span>
        </div>
        <div className={style.repost} title="repost">
          <HiArrowPathRoundedSquare />
          <span>46</span>
        </div>

        <div className={style.like} title="like">
          <FaRegHeart />

          <span>3,701</span>
        </div>

        <div className={style.view} title="view">
          <AiOutlineAlignCenter />

          <span>1.1M</span>
        </div>
        <LuShare title="share" />
      </div>
    </div>
  );
}
