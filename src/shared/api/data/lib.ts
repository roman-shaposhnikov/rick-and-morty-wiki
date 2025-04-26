import {
  ApiResponse,
  ResponseError,
  ResponseInfo,
} from './interfaces'

export function selectCurrentPage(info: ResponseInfo): number {
  if (info.next) {
    const nextUrl = new URL(info.next)

    return parseInt(nextUrl.searchParams.get('page')!) - 1
  }

  return info.pages
}

export function isResponseError(obj: unknown): obj is ResponseError {
  return typeof obj === 'object' && obj !== null && 'error' in obj
}

interface ApiResponseError extends ApiResponse<ResponseError> {}

export function isApiResponse(
  obj: unknown
): obj is ApiResponse<unknown> {
  const isObj = typeof obj === 'object' && obj !== null
  const isApiResponse =
    isObj &&
    'data' in obj &&
    'status' in obj &&
    'statusMessage' in obj

  return isApiResponse
}

export function isApiResponseError(
  obj: unknown
): obj is ApiResponseError {
  if (isApiResponse(obj) && isResponseError(obj.data)) {
    return isResponseError(obj.data)
  }

  return false
}
