import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {Link} from 'react-router';

import songsQuery from '../queries/songs-query';
import deleteSongMutation from '../mutations/delete-query'

export class SongsList extends Component {

    render() {
        if (this.props.data.loading)
            return <div>LOADING ... </div>;

        return (
            <div>
                <ul className="collection">
                    {this.renderSong()}
                </ul>
                <Link
                    to="/songs/new"
                    className="btn-floating btn-large red right"
                >
                    <i className="material-icons">add</i>
                </Link>

            </div>
        );
    }

    deleteSong(id) {
        this.props.mutate({
            variables: {
                id
            },
            refetchQueries: [{query: songsQuery}]
        })
    };

    renderSong() {
        return this.props.data.songs.map(({id, title}) => {
            return (
                <li key={id} className="collection-item">
                    {title}
                    <i onClick={() => this.deleteSong(id)} className="right material-icons">delete</i>
                </li>
            );
        });
    }
}

export default graphql(deleteSongMutation)(
    graphql(songsQuery)(SongsList)
);