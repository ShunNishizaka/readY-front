import { decodeToken } from './tokenDecoder'

const BASEURL = 'http://readybook.ddns.net:8000'

async function _fetch (method, endpoint, { headers = {}, data = {}, queryParams = {} }) {
  const url = `${BASEURL}${endpoint}?${new URLSearchParams(queryParams)}`

  const actualHeaders = {
    'Content-Type': 'application/json',
    accept: 'application/json',
    ...headers
  }

  const res = await fetch(url, {
    method: method,
    cache: 'no-cache',
    headers: actualHeaders,
    body: JSON.stringify(data)
  })

  if (res.status !== 401) return res

  const token = localStorage.getItem('token')

  if (!token) return res

  const payload = decodeToken(token)
  const refresh = localStorage.getItem('refresh_token')

  const a = await refreshToken(payload.id, refresh)

  return _fetch(method, endpoint, {
    headers: {
      ...headers,
      Authorization: `Bearer ${a}`
    },
    data: data,
    queryParams: queryParams
  })
}

async function _post (endpoint, { headers = {}, data = {} }) {
  return await _fetch('POST', endpoint, {
    headers: headers,
    data: data
  })
}

async function _get (endpoint, { headers = {}, queryParams = {} }) {
  return await _fetch('GET', endpoint, {
    headers: headers,
    queryParams: queryParams
  })
}

async function _delete (endpoint, { headers = {}, data = {} }) {
  return await _fetch('DELETE', endpoint, {
    headers: headers,
    data: data
  })
}

async function _patch (endpoint, { headers = {}, data = {} }) {
  return await _fetch('PATCH', endpoint, {
    headers: headers,
    data: data
  })
}

export async function refreshToken (userId, refreshToken) {
  return await _post('/api/refresh', {
    data: {
      user_id: userId,
      refresh_token: refreshToken
    }
  })
}

export async function createUser (email, password, name) {
  await _post('/api/users', {
    data: {
      email: email,
      password: password,
      display_name: name
    }
  })
}

export async function getUser () {
  await _get('/api/users')
}

export async function editUser () {
  await _patch('/api/users')
}

export async function deleteUser () {
  await _delete('/api/users')
}
