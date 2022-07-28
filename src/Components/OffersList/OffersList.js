import "./OffersList.css";
import React from "react";
import PropTypes from 'prop-types';
import OfferCard from "../OfferCard/OfferCard";
import { connect } from "react-redux";
import { getOffers } from "../../Redux/Actions/OffersActions";


class OffersList extends React.Component {
    componentDidMount() {
        this.props.getOffers();
    }

    render() {
        const { offers } = this.props;
        return (
            <div className="offer-list d-flex flex-wrap justify-content-center">
                {offers.length > 0 && offers.map(offer => <OfferCard key={offer.id} offer={offer} />)}
            </div>
        );
    }
}

OffersList.propTypes = {
    offers: PropTypes.array.isRequired,
};


const mapStateToProps = state => ({ offers: state.offers });
export default connect(mapStateToProps, { getOffers })(OffersList);
