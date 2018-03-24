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
      throw new Error(response.statusText)
    })
    .catch((error) => {
      throw error
    })
}

async function fetchPostApi({ url = '/', files = [], type = 'im' }) {
  try {
    const xhrArray = files
      .map(file => makeRequestBody(file, type))
      .map(body => requestApi(url, body))
    return Promise.all(xhrArray)
  } catch (error) {
    throw error
  }
}

export default fetchPostApi
