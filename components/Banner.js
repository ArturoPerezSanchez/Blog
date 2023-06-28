
export default function Banner() {
    return(
        <header style={{  paddingTop: "55px"}} className="mb-4">
        <div className="banner bg-p overflow-hidden transparent-effect">
            <div className="banner-dimensions" style={{backgroundImage:"url('/banner.png')"}} >
            <div className="transparent-effect" style={{display: "flex", alignItems: "center"}}>
            <h3 className="banner-title title-shadow"><span style={{color: "white"}}>The</span> <span style={{color: "#A9A8A7"}}>Geek</span> <span style={{color: "#DC9B20"}}>Gazette</span></h3>
            </div>
            </div>
        </div>
    </header>
    )
}