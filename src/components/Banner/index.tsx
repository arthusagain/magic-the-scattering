import React from "react";
import style from "./banner.module.scss";
import Image from "next/image";
import BannerButton from "../BannerButton";


export default function Banner() {
    return (
        <div className={style.banner}>
            <div className={style.logoContainer}>
                <Image
                    className="dark:invert"
                    src="/next.svg"
                    alt="Next.js logo"
                    width={180}
                    height={38}
                    priority
                />
            </div>
            <ul className={style.buttonList}>
                <li className={style.buttonContainer}>
                    <BannerButton target="/">Home</BannerButton>
                </li>
                <li className={style.buttonContainer}>
                    <BannerButton target="/auth">Log In / Register</BannerButton>
                </li>
                <li className={style.buttonContainer}>
                    <BannerButton target="/card-create">Create a Card</BannerButton>
                </li>
                <li className={style.buttonContainer}>
                    <BannerButton target="/about">About</BannerButton>
                </li> 
                <li className={style.buttonContainer}> 
                    <BannerButton target="/random">Random Card</BannerButton>
                </li>
            </ul>
        </div>
    );
}