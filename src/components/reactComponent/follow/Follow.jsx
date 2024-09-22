import React from "react";
import { FaUser } from "react-icons/fa6";
import style from "./follow.module.css";
import { HiBadgeCheck } from "react-icons/hi";

export default function Follow() {
  const toFollow = [
    {
      id: 1,
      image: "freeCodeCamp-462da58b.jpg",
      name: "freeCodeCamp.org",
      email: "@freeCodeCamp",
      description:
        "We're a community of millions of people who are building new skills and getting new jobs together. A 501(c)(3) public charity. Tweets by @abbeyrenn",
      isChecked: true,
      followBy: "Nodejs and 9 others follow",
    },
    {
      id: 2,
      image: "TS.png",
      name: "TypeScript",
      email: "@typescript",
      description:
        "TypeScript is a language for application-scale JavaScript development. It's a typed superset of JavaScript that compiles to plain JavaScript .",

      isChecked: false,
      followBy: "Nodejs and 5 others follow",
    },
    {
      id: 3,
      image: "test-6a5027ae.png",
      name: "Tailwind CSS",
      email: "@tailwindcss",
      description:
        "The utility-first CSS framework. Rapidly build modern websites, without ever leaving your HTML.",
      isChecked: true,
      followBy: "Yazeed Obaid and 9 others follow",
    },
  ];
  return (
    <div className={style.follow}>
      <h5>Who to follow</h5>
      <ul>
        {toFollow.length &&
          toFollow.map((follow) => (
            <li key={follow.id}>
              <p className={style.followBy}>
                <FaUser />
                <span>{follow.followBy}</span>
              </p>
              <div className={`d-flex justify-content-between`}>
                <div className={`d-flex gap-2`}>
                  <img
                    src={follow.image}
                    alt="imageUser"
                    className={style.image}
                    title="image"
                  />
                  <div>
                    <p className={`style.name mb-1`}>
                      {follow.name}
                      {follow.isChecked && (
                        <HiBadgeCheck className={style.checkIcon} />
                      )}
                    </p>

                    <p className={style.email}>{follow.email}</p>
                  </div>
                </div>
                <button className={style.followBut}>follow</button>
              </div>
              <p className={style.description}>{follow.description}</p>

            </li>
          ))}
      </ul>
      <p className={style.more}>show more</p>
    </div>
  );
}
