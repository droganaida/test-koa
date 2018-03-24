function makeRequestBody(file, type) {
  const fd = new FormData()
  fd.append('fileUpload', file)
  fd.append('action', type)
  return fd
}

async function requestApi(url, body) {
  return fetch(url, { body, method: 'POST' })
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      return response.text()
    })
    .catch(error => console.log(error))
}

async function fetchPostApi({ url = '/', files = [], type = 'im' }) {
  const bodies = files.map(file => makeRequestBody(file, type))
  //  console.log(bodies)
  const xhrArray = bodies.map(body => requestApi(url, body))
  //  console.log(xhrArray)
  return Promise.all(xhrArray)
}

export default fetchPostApi
