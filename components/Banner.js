import Image from 'next/image'

export default function Banner() {
    return(
        <header className="bg-light border-bottom mb-4">
        <div className="banner">
            <div className="text-center">
            <Image
                src="/banner.png"
                alt="The Geek Gazette Banner"
                width={1800}
                height={500}
                />
            </div>
        </div>
    </header>
    )
}