import { ResponseError, ResponseInfo } from './interfaces'

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
