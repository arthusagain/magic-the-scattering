import React, { useState } from "react";
import style from "./banner.module.scss";
import Image from "next/image";

export default function Banner() {
    return (
        <header className={style.banner}>
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
                <li className={style.buttonContainer}>Home</li>
                <li className={style.buttonContainer}>Projetos</li> 
                <li className={style.buttonContainer}>Contato</li>
            </ul>
        </header>
    );
}