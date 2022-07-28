import { OFFERS_ACTIONS } from "../Actions/OffersActions";


const offersReducer = (offers = [], action) => {
  switch (action.type) {
    case OFFERS_ACTIONS.FETCH_OFFERS:
      return action.payload;
    default:
      return offers;
  }
};

export default offersReducer;
