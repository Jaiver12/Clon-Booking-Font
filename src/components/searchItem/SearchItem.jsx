import "./searchItem.css"

export const SearchItem = () => {
  return (
    <div className="searchItem">
        <img src="https://media.istockphoto.com/photos/scandinavian-bedroom-interior-stock-photo-picture-id1264323513?k=20&m=1264323513&s=612x612&w=0&h=r9VwQ53qooD1NJp4JQgFO_LzhISWyE38OVw97AT6wvY=" alt="" className="siImage" />

        <div className="siDesc">
            <h1 className="siTitle">titulo</h1>
            <span className="siDistance">500m</span>
            <span className="sitaxiOp">Free Airpot</span>
            <span className="siSubtitle">Subtitulo</span>
            <span className="siFeatures">features</span>
            <span className="siCancelOp">Cacelar</span>
            <span className="siCancelOpSubtitle">Cacelar subtitulo</span>
        </div>

        <div className="siDetails">

            <div className="siRating">
                <span>Exellent</span>
                <button>8.9</button>
            </div>

            <div className="siDetailText">
                <span className="siPrice">$123</span>
                <span className="siTaxOp">Include texes and fees</span>
                <button className="siCheckButton">See availability</button>
            </div>
        </div>
    </div>
  )
}
