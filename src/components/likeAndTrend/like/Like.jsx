import React from "react";
import style from "./like.module.css";
import { HiBadgeCheck } from "react-icons/hi";

export default function Like() {
  const toLike = [
    {
      id: 1,
      image: "freeCodeCamp-462da58b.jpg",
      name: "freeCodeCamp.org",
      email: "@freeCodeCamp",
      isChecked: true,
    },
    {
      id: 2,
      image: "TS.png",
      name: "TypeScript",
      email: "@typescript",

      isChecked: false,
    },
    {
      id: 3,
      image: "test-6a5027ae.png",
      name: "Tailwind CSS",
      email: "@tailwindcss",
      isChecked: true,
    },
  ];
  return (
    <div className={style.like}>
      <h5>You might like</h5>
      <ul>
        {toLike.length &&
          toLike.map((like) => (
            <li key={like.id}>
              <div className={`d-flex justify-content-between`}>
                <div className={`d-flex gap-2`}>
                  <img
                    src={like.image}
                    alt="imageUser"
                    className={style.image}
                    title="image"
                  />
                  <div>
                    <p className={`style.name mb-1`}>
                      {like.name}
                      {like.isChecked && (
                        <HiBadgeCheck className={style.checkIcon} />
                      )}
                    </p>

                    <p className={style.email}>{like.email}</p>
                  </div>
                </div>
                <button className={style.followBut}>follow</button>
              </div>
            </li>
          ))}
      </ul>
      <p className={style.more}>show more</p>
    </div>
  );
}
