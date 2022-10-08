const BASE_URL = 'https://api.cra7y.movies.nomoredomains.sbs'
// const BASE_URL = 'http://localhost:3000'

export const saveMovie = (movie, token) => {
  return fetch(`${ BASE_URL }/movies`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ token }`
    },
    credentials: 'include',
    body: JSON.stringify({
      country: movie.country || 'не известно',
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      trailerLink: movie?.trailerLink,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN || movie.nameRU,
      thumbnail: `https://api.nomoreparties.co${movie.thumbnail}`,
      movieId: movie.id
    })
  })
    .then(res => res.json())
    .then(data => data)
}

export const deleteMovie = (token, movieId) => {
  return fetch(`${ BASE_URL }/movies/${ movieId }`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ token }`
    },
    credentials: 'include'
  })
    .then(res => res.json())
    .then(data => data)
}

const checkResponse = (res) => {
  if (res.ok) {
    return res.json()
  }
  return res.json()
    .then((data) => {
      throw new Error(`statusCode: ${ data.statusCode } messageError: ${ data.message }`)
    })
}

export const register = (name, email, password) => {
  return fetch(`${ BASE_URL }/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      email,
      password
    })
  })
    .then(checkResponse)
}

export const authorize = (email, password) => {
  return fetch(`${ BASE_URL }/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  })
    .then(checkResponse)
}

export const getContent = (token) => {
  return fetch(`${ BASE_URL }/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${ token }`
    }
  })
    .then(checkResponse)
}

export const getApiUserInfo = (token) => {
  return fetch(`${ BASE_URL }/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ token }`
    }
  })
    .then(checkResponse)
}

export const patchUserInfo = (token, user) => {
  return fetch(`${ BASE_URL }/users/me`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ token }`
    },
    body: JSON.stringify({
      name: user.name,
      email: user.email
    })
  })
    .then(checkResponse)
}

export const getSavedMovies = (token) => {
  return fetch(`${BASE_URL}/movies`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
      'Accept': 'application/json',
      "Content-Type": "application/json"
    },
  })
    .then(checkResponse)
}