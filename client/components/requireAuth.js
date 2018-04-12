import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';

import query from '../queries/CurrentUser';


export default (WrappedComponent) => {
  class requireAuth extends Component {
    
    componentDidUpdate(prevProps) {
      if(!this.props.data.loading && !this.props.data.user) {
        hashHistory.push('/login');
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return graphql(query)(requireAuth);
  
}
