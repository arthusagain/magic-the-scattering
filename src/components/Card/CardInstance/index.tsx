import Image from "next/image";
import style from "./cardinstance.module.scss";
import Link from "next/link";

export default function CardInstance() {
    return (
        <div className={style.card}>
            <Link href="/card-info">
                <div className={style.cardName}>Card Name</div>
                <div className={style.cardImage}>
                    <Image
                        src="/samplecard.jpg"
                        alt="A Card"
                        width={244}
                        height={340}
                        priority
                    />
                </div>
                <div className={style.cardAuthor}>By: Card Author</div>
            </Link>
        </div>
    )
}
