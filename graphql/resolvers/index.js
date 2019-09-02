const postsResolvers = require('./posts')
const userResolvers = require('./users')

module.exports = {
  Post: {
    user: userResolvers.Query.getUser
  },
  Query: {
    ...postsResolvers.Query,
  },
}
