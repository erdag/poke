import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'https://reddix.herokuapp.com/v1/graphql',
    }),
    cache: new InMemoryCache(),
  });
 };

 const client = createApolloClient();



ReactDOM.render(
  
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
    
  ,document.getElementById('root')
);

