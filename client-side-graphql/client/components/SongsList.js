import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import songsQuery from '../queries/songs-query';

export class SongsList extends Component {

    render() {
        if (this.props.data.loading)
            return <div>LOADING ... </div>;

        return (
            <ul>
                {this.props.data.songs.map(song => {
                    return <li id={song.id}>{song.title}</li>;
                })}
            </ul>
        );
    }
}

export default graphql(songsQuery)(SongsList);