import Image from 'next/image'

export default function Banner() {
    return(
        <header className="mb-4">
        <div className="banner bg-p">

            <Image
                src="/banner.png"
                alt="The Geek Gazette Banner"
                width={1800}
                height={500}
                />

        </div>
    </header>
    )
}