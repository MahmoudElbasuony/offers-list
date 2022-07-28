import React from "react";
import PropTypes from 'prop-types';

export default class SmartImage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            src: props.src,
            hasError: false,
        };
    }

    onError = () => {
        if (this.state.hasError) {
            return;
        }

        this.setState({
            src: this.props.fallbackSrc,
            hasError: true,
        });
    }

    render() {
        const { src } = this.state;
        const { src: _, fallbackSrc, alt, ...props } = this.props;

        return (
            <img src={src} alt={alt} onError={this.onError}  {...props} />
        );
    }
}

SmartImage.propTypes = {
    src: PropTypes.string,
    fallbackSrc: PropTypes.string,
};
