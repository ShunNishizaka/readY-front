import { decodeToken } from './tokenDecoder'

const BASEURL = 'http://readybook.ddns.net:8000'

const Methods = {
  GET: 'GET',
  POST: 'POST',
  PATCH: 'PATCH',
  DELETE: 'DELETE'
}

async function _fetch (method, endpoint, { data = {}, queryParams = {}, auth = false }) {
  const actualHeaders = {
    'Content-Type': 'application/json',
    accept: 'application/json',
    Authorization: auth ? `Bearer ${localStorage.getItem('token')}` : ''
  }

  let url = `${BASEURL}${endpoint}?${new URLSearchParams(queryParams)}`
  let request = {
    method: method,
    cache: 'no-cache',
    headers: actualHeaders
  }

  if (method === Methods.GET) {
    url = `${url}?${new URLSearchParams(queryParams)}`
  } else {
    request = {
      ...request,
    body: JSON.stringify(data)
    }
  }

  const res = await fetch(url, request)

  if (res.status !== 401) return res.json()

  const token = localStorage.getItem('token')

  if (!token) return res.json()

  const payload = decodeToken(token)
  const refresh = localStorage.getItem('refresh_token')

  const tokenInfo = await refreshToken(payload.id, refresh)
  localStorage.setItem('token', tokenInfo.token)

  return _fetch(method, endpoint, {
    data: data,
    queryParams: queryParams,
    auth: true
  })
}

async function _post (endpoint, { data = {}, auth = false }) {
  return await _fetch(Methods.POST, endpoint, {
    data: data,
    auth: auth
  })
}

async function _get (endpoint, { queryParams = {}, auth = false }) {
  return await _fetch(Methods.GET, endpoint, {
    queryParams: queryParams,
    auth: auth
  })
}

async function _delete (endpoint, { data = {}, auth = false }) {
  return await _fetch(Methods.DELETE, endpoint, {
    data: data,
    auth: auth
  })
}

async function _patch (endpoint, { data = {}, auth = false }) {
  return await _fetch(Methods.PATCH, endpoint, {
    data: data,
    auth: auth
  })
}

export async function auth (email, password) {
  return await _post('/api/auth', {
    data: {
      email: email,
      password: password
    }
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
  return await _post('/api/users', {
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
