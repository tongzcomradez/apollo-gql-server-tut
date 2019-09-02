const axios = require('axios')

const userUrl = 'https://jsonplaceholder.typicode.com/users'
module.exports = {
  Query: {
    async getUser({ userId }) {
      try {
        const { data } = await axios.get(`${userUrl}/${userId}`)
        return data
      } catch (err) {
        console.log(err)
        throw new Error(err)
      }
    },
  },
}
