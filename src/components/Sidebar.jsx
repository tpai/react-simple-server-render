import React, { Component } from 'react';
import { Link, match } from 'react-router';

class HyperLink extends Component {
    componentWillMount () {
        const { to } = this.props;
        const { routes } = this.context;
        const location = this.context.router.createLocation(to);
        match({
            routes,
            location: location.pathname
        }, (err, redirect, props) => {
            this.setState({ outer: !props });
        });
    }
    render () {
        const { to, children } = this.props;
        const { outer } = this.state;
        if (outer) {
            return <a href={to}>{children}</a>;
        } else {
            return <Link {...this.props}>{children}</Link>;
        }
    }
}

HyperLink.contextTypes = {
    routes: React.PropTypes.array.isRequired,
    router: React.PropTypes.object.isRequired
};

class Sidebar extends Component {
    getChildContext() {
        return { routes: this.props.routes };
    }
    render() {
        return (
            <div>
                <h3>foo</h3>
                <ul>
                    <li><HyperLink to="/foo/1">foo 1</HyperLink></li>
                    <li><HyperLink to="/foo/2">foo 2</HyperLink></li>
                </ul>
                <h3>bar</h3>
                <ul>
                    <li><HyperLink to="/bar/1">bar 1</HyperLink></li>
                    <li><HyperLink to="/bar/2">bar 2</HyperLink></li>
                </ul>
            </div>
        );
    }
}

Sidebar.childContextTypes = {
    routes: React.PropTypes.array.isRequired,
};

export default Sidebar;
