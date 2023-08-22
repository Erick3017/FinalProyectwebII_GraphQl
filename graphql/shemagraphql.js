const { gql } = require('apollo-server-express');
const schema = gql`
  type Prompt {
    name: String!
    type: String
    instruction: String!
    context: String
    size: String
    userId: ID!
    tags: [Tag]
    responses: [String]
    createdAt: String
    updatedAt: String
  }

  type Tag {
    id: ID!
    description: String!
    color: String
    createdAt: String
    updatedAt: String
  }

  type Query {
    searchPromptsByName(name: String!): [Prompt]
    searchPromptsByTagDescription(description: String!): [Prompt]
    searchTagsByDescription(description: String!): [Tag]
  }
`;
module.exports=schema;
