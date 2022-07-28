export default class OffersService {
    static getOffers() {
        return fetch(`/assets/offers.json`)
            .then(resp => resp.json())
            .then(data => data.offers);
    }
}
