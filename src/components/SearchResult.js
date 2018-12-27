// @flow
import React from 'react'
import styled from 'styled-components'

import type { Hit } from '../types'

type Props = {
  data: Hit,
  onSelectItem: (itemId: number) => void
}

const SearchResult = ({ data, onSelectItem }: Props) => {
  const onSelectResult = () => {
    onSelectItem(data.result.id)
  }

  return (
    <Container
      bg={data.result.header_image_thumbnail_url}
      onClick={onSelectResult}
    >
      <Title>
        {data.result.primary_artist.name.toLowerCase()} -{' '}
        {data.result.title.toLowerCase()}
      </Title>
    </Container>
  )
}

export default SearchResult

const Container = styled.button`
  display: flex;
  flex-direction: column;
  border: solid 2px #fff;
  border-radius: 4px;
  margin: 0 10px 10px 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  background: #fff;
  width: 175px;
  height: 250px;
  transition: box-shadow 0.25s ease-in-out;
  background: url(${props => props.bg});
  background-size: cover;
  background-position: 50% 50%;
  cursor: pointer;
  padding: 0;

  :hover {
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.7);
  }
`

const Title = styled.h2`
  color: #fff;
  margin: auto 0 0 0;
  padding: 12px 24px;
  background: rgba(0, 0, 0, 0.2);
  font-family: 'Major Mono Display', monospace;
  box-sizing: border-box;
`
