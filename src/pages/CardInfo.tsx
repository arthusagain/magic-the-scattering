import Image from "next/image"

export const CardInfo = () => {
    return (
        <>
            <h1>Card Name</h1>
            <div className="cardInfoContainer">
                <Image
                    src="/samplecard.jpg"
                    alt="A Card"
                    width={488}
                    height={680}
                    priority
                />
            </div>
        </>
    )
}