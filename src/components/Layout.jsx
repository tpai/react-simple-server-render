import React, { Component } from 'react';

export default class Layout extends Component {
    render() {
        return (
            <div>
                <div>{this.props.sidebar}</div>
                <div>{this.props.content}</div>
            </div>
        );
    }
}
