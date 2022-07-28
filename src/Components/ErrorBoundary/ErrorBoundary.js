import React from "react";
import PropTypes from 'prop-types';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return this.props.errorMessageElement;
        }

        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    errorMessageElement: PropTypes.string | PropTypes.object,
};
