// @flow
import { useState, useEffect } from 'react'

import useDebounce from './useDebounce'

const API = '/api/v1/'

type Props = {
  endpoint: 'search' | 'songs',
  query: string
}

type Result = {
  loading: boolean,
  error: boolean,
  succeeded: boolean,
  data: any
}

const isErrorState = status =>
  status === 401 || status === 404 || status === 500

const fetchFromApi = async ({
  endpoint,
  query,
  fixedQuery,
  requests,
  setRequest
}) => {
  const response = await fetch(`${API}${endpoint}${query ? `/${query}` : ''}`)
  const { status } = response

  const data = !isErrorState(status) ? await response.json() : {}

  const newRequest = !isErrorState(status)
    ? {
        loading: false,
        error: false,
        succeeded: true,
        data
      }
    : {
        loading: false,
        error: true,
        succeeded: false,
        data: []
      }

  const newRequests = {
    ...requests,
    [endpoint]: {
      ...requests[endpoint],
      [fixedQuery]: newRequest
    }
  }

  setRequest(newRequests)
}

function useApi({ endpoint, query }: Props): Result {
  const [requests, setRequest] = useState({ [endpoint]: {} })
  const fixedQuery = query
    ? String(query)
        .replace(' ', '-')
        .replace('/', '-')
    : ''
  const request = requests[endpoint][fixedQuery]

  if (!request && query && query.length > 0) {
    const newRequests = {
      ...requests,
      [endpoint]: {
        ...requests[endpoint],
        [fixedQuery]: {
          loading: true,
          error: false,
          succeeded: false,
          data: []
        }
      }
    }

    setRequest(newRequests)
  }

  useEffect(
    () => {
      if (query && query.length > 0 && (!request || !request.succeeded)) {
        fetchFromApi({
          endpoint,
          query,
          fixedQuery,
          requests,
          setRequest
        })
      }

      return () => {}
    },
    [useDebounce(query, 200)]
  )

  return request || { loading: false, error: false, succeeded: false, data: [] }
}

export default useApi
