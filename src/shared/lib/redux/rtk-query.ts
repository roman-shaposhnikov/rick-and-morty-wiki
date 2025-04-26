import { isResponseError, ResponseError } from 'shared/api/data'

interface RTKQResponseError {
  data: ResponseError
}

export function isRTKQResponseError(
  obj: unknown
): obj is RTKQResponseError {
  const hasData =
    typeof obj === 'object' && obj !== null && 'data' in obj

  if (hasData) {
    return isResponseError(obj.data)
  }
  return false
}
