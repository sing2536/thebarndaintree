(() => {

    if (!specialOfferShow()) return

    let e = `
    <div class="special-offer-wrapper">
        <div class="special-offer-box">
            <div class="special-offer-title">Get 10% off your booking!</div>
            <div>Offer available until end of March 2023.</div>
            <div>Enquire now to get your discounted quote.</div>
            <button class="special-offer-button" onclick="specialOfferAck()">Ok</button>
        </div>
    <div/>
    `

    document.head.insertAdjacentHTML("beforeend",`<link rel="stylesheet" href="css/special-offer.css"/>`)
    document.body.insertAdjacentHTML('afterbegin', e)
})()

function specialOfferAck() {
    document.querySelector('.special-offer-wrapper').remove()
    localStorage.setItem('specialOfferAck', Date.now())
}

function specialOfferShow() {
    let ack = localStorage.getItem('specialOfferAck')
    if (ack) {
        let ackTime = parseInt(localStorage.getItem('specialOfferAck'))
        if (Date.now()-ackTime > 259200000) return true

        return false
    }

    return true
}