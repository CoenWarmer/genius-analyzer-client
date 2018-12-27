// @flow
import React from 'react'
import styled from 'styled-components'

import SearchBar from '../SearchBar'

type Props = {
  onSearch: (query: string) => void
}

const Header = ({ onSearch }: Props) => (
  <Container>
    <Title>sentiment in lyrics</Title>
    <SearchBar onSearch={onSearch} />
  </Container>
)

export default Header

const Container = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #ffff64;
  border-bottom: solid 8px #000;
  font-family: Helvetica, sans-serif;
  padding: 24px;
  z-index: 5;
`

const Title = styled.h1`
  font-family: 'Major Mono Display', monospace;
`
