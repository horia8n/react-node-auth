import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Header extends Component {
    renderLinks() {
        if (this.props.authenticated) {
            return (
                <div>
                    <li>
                        <Link to="/signout">Sign Out</Link>
                    </li>
                    <li>
                        <Link to="/feature">Feature</Link>
                    </li>
                </div>
            );
        } else {
            return (
                <div>
                    <li>
                        <Link to="/signup">Sign Up</Link>
                    </li>
                    <li>
                        <Link to="/signin">Login</Link>
                    </li>
                </div>
            );
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo left">Redux Auth</Link>
                    <ul className="right">
                        {this.renderLinks()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {authenticated: state.auth.authenticated};
}

export default connect(mapStateToProps)(Header);
