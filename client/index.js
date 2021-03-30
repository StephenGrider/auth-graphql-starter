import React from 'react';
import ReactDOM from 'react-dom';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from "apollo-link-http";
import { ApolloClient, ApolloProvider } from "@apollo/client";
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './components/App';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Dashboard from './components/Dashboard';

const cache = new InMemoryCache();

const httpLink = createHttpLink({
    uri: "http://localhost:4000/graphql"
});

const client = new ApolloClient({
    dataIdFromObject: o => o.id,
    link: httpLink,
    cache
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
        <HashRouter>
            <Switch>
                <Route exact path="/">
                    <App children={<div>test</div>}></App>
                </Route>
                <Route exact path="/dashboard">
                    <App children={<Dashboard />}></App>
                </Route>
                <Route exact path="/login">
                    <App children={<LoginForm />}></App>
                </Route>
                <Route exact path="/signup">
                    <App children={<SignupForm />}></App>
                </Route>
            </Switch>
        </HashRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
