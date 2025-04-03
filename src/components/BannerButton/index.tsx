import React from "react";
import Link from 'next/link'
import style from "./bannerButton.module.scss";

interface Props{
    children?: React.ReactNode
    target: string
}

export default function BannerButton({children, target} : Props) {
    return (
        <Link href={target}>{children}</Link>
    )
}
