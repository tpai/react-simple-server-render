import React, { Component } from 'react';

class Index extends Component {
    render() {
        return (
            <div>
                <h1>Hello, {this.props.name}!</h1>
                <script src="https://fb.me/react-0.14.0.js"></script>
                <script src="https://fb.me/react-dom-0.14.0.js"></script>
            </div>
        );
    }
}

export default Index;
