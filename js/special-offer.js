const specialOfferAckName = 'specialOfferAck2';

(() => {

    if (!specialOfferShow()) return

    let e = `
    <div class="special-offer-wrapper">
        <div class="special-offer-box">
            <div class="special-offer-title">Get 10% off when you stay between now and end of March 2023!</div>
            <div>Offer only available specifically for booking dates that are before end of March 2023.</div>
            <div><br>Enquire now to get your discounted quote.</div>
            <button class="special-offer-button" onclick="specialOfferAck()">Ok</button>
        </div>
    <div/>
    `

    document.head.insertAdjacentHTML("beforeend",`<link rel="stylesheet" href="css/special-offer.css"/>`)
    document.body.insertAdjacentHTML('afterbegin', e)
})()

function specialOfferAck() {
    document.querySelector('.special-offer-wrapper').remove()
    localStorage.setItem(specialOfferAckName, Date.now())
}

function specialOfferShow() {
    let ack = localStorage.getItem(specialOfferAckName)
    if (ack) {
        let ackTime = parseInt(localStorage.getItem(specialOfferAckName))
        if (Date.now()-ackTime > 259200000) return true

        return false
    }

    return true
}