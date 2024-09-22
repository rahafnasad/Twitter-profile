import React from 'react'
import Like from './like/Like'
import Trends from './trends/Trends'
import Search from './search/Search'
import style from './likeAndTrens.module.css'
export default function LikeAndTrend() {
  return (
    <div className={style.parent}>
      <Search/>
        <Like/>
        <Trends/>
    </div>
  )
}
