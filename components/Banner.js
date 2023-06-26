import Image from 'next/image'

export default function Banner() {
    return(
        <header className="mb-4">
        <div className="banner bg-p">
            <div style={{paddingTop: "55px", backgroundImage:"url('/banner.png')", backgroundSize: "100vw 350px", width:"100vw", height:"350px"}} >
            </div>
        </div>
    </header>
    )
}