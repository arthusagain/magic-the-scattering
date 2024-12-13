import React, { Children, useState } from "react";
import style from "./bannerButton.module.scss";
import { Link } from "react-router-dom";

interface Props{
    children?: React.ReactNode
    target: string
}

export default function BannerButton({children, target} : Props) {
    return (
        <Link to={target}>{children}</Link>
    )
}
