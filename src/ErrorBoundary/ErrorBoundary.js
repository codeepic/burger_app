import React, {Component} from 'react';

class ErrorBoundary extends Component {
    state = {
        hasErro: false,
        errorMessage: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({
            hasError: true,
            errorMessage: error
        })
    }

    render() {
        if(this.state.hasError){
            return <h1>Something went wrong</h1>;
        }else{
            return this.props.children;
        }
    }
}

export default ErrorBoundary;

// this.props.children will return whatever is wrapped inside
// <ErrorBooundary> Some Component </ErrorBoundary>
