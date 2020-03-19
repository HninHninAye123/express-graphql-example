// tslint:disable:object-literal-sort-keys

import {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
} from 'graphql';
import pageInfo from '../pageInfo';
import authorEdge from '../edges/authorEdge';

const authorConnection = new GraphQLObjectType({
  name: 'AuthorConnection',
  fields: {
    totalCount: {
      description: 'Identifies the total count of items in the connection.',
      type: GraphQLNonNull(GraphQLInt),
    },
    edges: {
      description: 'A list of edges.',
      type: new GraphQLList(authorEdge),
    },
    pageInfo: {
      type: GraphQLNonNull(pageInfo),
    },
  },
});

export default authorConnection;
