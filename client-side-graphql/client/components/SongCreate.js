import React, {Component} from 'react';
import {Link, hashHistory} from 'react-router';

import addSong from '../mutations/add-song';
import {graphql} from 'react-apollo';
class SongCreate extends Component {
    constructor(props) {
        super(props);

        this.state = {title: ''};
    }

    render() {
        return (
            <div>
                <Link to="/">Back</Link>
                <h3> Create a new song </h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Song Title:</label>
                    <input
                        onChange={event => this.setState({title: event.target.value})}
                        value={this.state.title}
                    />
                </form>
            </div>
        );
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.mutate({
            variables: {
                title: this.state.title
            }
        }).then(() => hashHistory.push('/'));
    };

}

export default graphql(addSong)(SongCreate);