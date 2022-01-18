
export function decodeToken (token) {
  const [header, payload, sign] = token.split('.')
  if (!(Boolean(header) && Boolean(payload) && Boolean(sign))) {
    return null
  }

  return JSON.parse(Buffer.from(payload, 'base64').toString('base64'))
}
