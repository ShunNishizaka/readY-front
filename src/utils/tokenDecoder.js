
import { Buffer } from 'buffer'

export function decodeToken (token) {
  const [header, payload, sign] = token.split('.')
  if (!(Boolean(header) && Boolean(payload) && Boolean(sign))) {
    return null
  }
  console.log(Buffer.from(payload, 'base64').toString())
  return JSON.parse(Buffer.from(payload, 'base64').toString())
}
