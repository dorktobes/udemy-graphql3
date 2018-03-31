const graphql = require('graphql');
const { GraphQLObjectType } = graphql;

const UserType = require('./user_type');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType'
});

module.exports = RootQueryType;
