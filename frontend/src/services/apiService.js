const getUsers = async () => {
    return fetch('http://localhost:4000/api', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: `query {
        users {
            id
            username
            email
        }
      }`
    })
  })
  .then(res => res.json())
  .then(res => res.data.users);
}

const getImages = async () => {
  return fetch('http://localhost:4000/api', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    query: `query {
      images
    }`
  })
})
.then(res => res.json())
.then(res => res.data.images);
}

module.exports = { getUsers, getImages };