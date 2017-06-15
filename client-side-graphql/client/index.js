import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import App from './components/App';
import SongsList from './components/SongsList';
import SongCreate from './components/SongCreate';

const client = new ApolloClient({});
const Root = () => {
    return (
        <ApolloProvider client={client}>
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={SongsList}/>
                </Route>
                <Route path="/songs/new" component={SongCreate}/>
            </Router>
        </ApolloProvider>
    );
};

ReactDOM.render(
    <Root />,
    document.querySelector('#root')
);
