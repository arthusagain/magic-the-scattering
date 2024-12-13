import Image from "next/image";
import style from "./cardinstance.module.scss";

export default function CardInstance() {
    return (
        <div className={style.card}>
            <div className={style.cardName}>Card Name</div>
            <div className={style.cardImage}>
            <Image
                src="/samplecard.jpg"
                alt="A Card"
                width={180}
                height={38}
                priority
            />
            </div>
            <div className={style.cardAuthor}>By: Card Author</div>
        </div>
    )
}
