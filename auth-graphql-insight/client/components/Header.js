import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import query from '../queries/current-user';
import {Link} from 'react-router';
import mutation from '../mutations/logout-user';

class Header extends Component {
    onLogoutClick() {
        this.props.mutate({
            refetchQueries: [{query}]
        });
    }

    renderHeaderButtons() {
        const {loading, user} = this.props.data;

        if (loading) return <div />; // Returns nothing while the query is loading

        if (user) return (<li>
            <a onClick={this.onLogoutClick.bind(this)}>
                Logout
            </a>
        </li>);

        return (
            <div>
                <li>
                    <Link to="/signup">
                        Sign-Up
                    </Link>
                </li>
                <li>
                    <Link to="/login">
                        Login
                    </Link>
                </li>
            </div>
        );
    };

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo left">
                        Home
                    </Link>
                    <ul className="right">
                        {this.renderHeaderButtons()}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default graphql(mutation)(
    graphql(query)(Header)
);