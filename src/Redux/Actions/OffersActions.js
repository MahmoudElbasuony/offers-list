import OffersService from "../../Services/OffersService";


export const OFFERS_ACTIONS = {
  FETCH_OFFERS: "FETCH_OFFERS"
};

export const getOffers = () => async dispatch => {
  const offers = await OffersService.getOffers();
  dispatch({
    type: OFFERS_ACTIONS.FETCH_OFFERS,
    payload: offers
  });
};
