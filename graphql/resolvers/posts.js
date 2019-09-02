const axios = require('axios')

const postUrl = 'https://jsonplaceholder.typicode.com/posts'
module.exports = {
  Query: {
    async getPosts() {
      try {
        const { data } = await axios.get(postUrl)
        return data
      } catch (err) {
        console.log(err)
        throw new Error(err)
      }
    },
    async getPost(_, args) {
      try {
        const { data } = await axios.get(`${postUrl}/${args.id}`)
        return data
      } catch (err) {
        console.log(err)
        throw new Error(err)
      }
    },
  },
}
