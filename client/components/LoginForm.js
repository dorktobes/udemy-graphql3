import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import AuthForm from './AuthForm';
import mutation from '../mutations/Login';
import query from '../queries/CurrentUser';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state={
      errors: [],
    };
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    if(nextProps.data.user) {
      
    }
    return nextState;
  }

  onSubmit({ email, password }) {
    this.props.mutate({
      variables: {
        email,
        password,
      },
      refetchQueries: [ { query } ],
    }).catch((err) => {
      const errors = err.graphQLErrors.map(error => error.message);
      this.setState({ errors });

    })
  }

  render() {
    return (
      <div>
        <h3>Login</h3>
        <AuthForm onSubmit={this.onSubmit.bind(this)} errors={this.state.errors} />
      </div>
    );
  }
}

export default graphql(query)(
  graphql(mutation)(LoginForm)
);
