import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `

 type Product {
  _id: ID!
  title: String!
  qty: Int
 }

 type Query {
  getProduct(_id: ID!): Product
  allProducts: [Product]
 }

 input ProductInput {
  title: String!
  qty: Int
 }

 type Mutation {
  createProduct(input: ProductInput) : Product
  updateProduct(_id: ID!, input: ProductInput): Product
  deleteProduct(_id: ID!) : Product
 }
`;

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;