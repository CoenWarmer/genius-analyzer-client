// @flow

import React from 'react'
import styled from 'styled-components'

import SearchResult from './SearchResult'
import Message from './Message'

import type { Hit } from '../types'

type Props = {
  error: boolean,
  loading: boolean,
  results: Array<Hit>,
  query: string,
  onSelectItem: () => void
}

const Results = ({ error, loading, results, query, onSelectItem }: Props) => (
  <Container>
    {!error &&
      results &&
      results.map((hit, index) => (
        <SearchResult
          key={index}
          data={hit}
          loading={loading}
          onSelectItem={onSelectItem}
        />
      ))}

    {results.length === 0 && query.length > 0 && !loading && (
      <Message>No results for {query}</Message>
    )}

    {error && 'Something went wrong :('}
  </Container>
)

export default Results

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  padding-top: 24px;
`
