import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {Link} from 'react-router';

import songsQuery from '../queries/songs-query';

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

    renderSong() {
        return this.props.data.songs.map(song => {
            return (
                <li key={song.id} className="collection-item">
                    {song.title}
                </li>
            );
        });
    }
}

export default graphql(songsQuery)(SongsList);