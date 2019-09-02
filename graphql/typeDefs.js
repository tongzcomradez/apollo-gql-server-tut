const { gql } = require('apollo-server')

const Post = gql`
    type Post {
        id: Int
        userId: Int
        title: String
        body: String
        user: User
    }
`

const Company = gql`
    type Company {
        name: String!
        catchPhrase: String!
        bs: String!
    }
`

const User = gql`
    type User {
        id: Int!
        name: String!
        email: String
        company: Company
        posts: [Post]
    }
`
const Query = gql`
    type Query {
        getPosts: [Post]!
        getPost(id: Int): Post!
    }
`
module.exports = gql`
    ${Post}
    ${Company}
    ${User}
    ${Query}
`
