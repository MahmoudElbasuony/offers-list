import "./OfferCard.css";
import React from "react";
import PropTypes from 'prop-types';
import { Card } from "react-bootstrap";
import { NOT_FOUND_IMAGE } from "../../Constants";
import SmartImage from "../SmartImage/SmartImage";

export default class OfferCard extends React.Component {
    render() {
        const imgUrl = this.props.offer.splashImages?.[0]?.url;
        const { description, prices: { totalPrice: { amount: { display, currency } } } } = this.props.offer;

        return (
            <React.Fragment>
                <Card className="offer-card m-3" >
                    <SmartImage className="card-img-top offer-card__image" fallbackSrc={NOT_FOUND_IMAGE} src={imgUrl || NOT_FOUND_IMAGE} loading="lazy" alt={description}></SmartImage>
                    <Card.Body title={description}>
                        <Card.Title className="text-truncate fw-light" >{description}</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                        <Card.Text variant="success" className="text-end fw-bold">{`${display} ${currency}`}</Card.Text>
                    </Card.Footer>
                </Card>
            </React.Fragment>
        );
    }
}

OfferCard.propTypes = {
    offer: PropTypes.shape({
        splashImages: PropTypes.array,
        description: PropTypes.string.isRequired,
        prices: PropTypes.shape({
            totalPrice: PropTypes.shape({
                amount: PropTypes.shape({
                    display: PropTypes.string.isRequired,
                    currency: PropTypes.string.isRequired,
                })
            }),
        })
    }),
    fallbackSrc: PropTypes.string,
};
