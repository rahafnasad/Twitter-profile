import React from 'react'
import style from './search.module.css'
import { FaSearch } from "react-icons/fa";

export default function Search() {
  return (
    <div className={style.search}>
        <input type="text" placeholder='Search' />
        <FaSearch className={style.searchIcon}/>

    </div>
  )
}
