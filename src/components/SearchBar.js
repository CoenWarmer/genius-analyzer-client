// @flow
import React, { useState } from 'react'
import styled from 'styled-components'

import useApi from '../hooks/useApi'

import Spinner from './Spinner'

type Props = {
  onSearch: (query: string) => void
}

const SearchBar = ({ onSearch }: Props) => {
  const [query = '', setQuery] = useState()
  const { loading, succeeded } = useApi({
    endpoint: 'search',
    query
  })

  const changeQuery = e => {
    const value = e ? e.target.value : ''
    setQuery(value)
    onSearch(value)
  }
  return (
    <Container>
      <Input
        type="text"
        onChange={changeQuery}
        value={query}
        placeholder="search for a song"
      />
      <Meta>
        {succeeded && (
          <ButtonClose onClick={() => changeQuery()}>✕</ButtonClose>
        )}
        {loading && <Spinner width={24} height={24} />}
      </Meta>
    </Container>
  )
}

export default SearchBar

const Container = styled.div`
  position: absolute;
  left: 50%;
  margin-left: -100px;
  top: 50px;
`

const Input = styled.input`
  border: solid 2px #000;
  border-radius: 2px;
  width: 200px;
  height: 40px;
  padding: 14px;
  box-sizing: border-box;
  font-size: 16px;
`

const Meta = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
`

const ButtonClose = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  cursor: pointer;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: 20px;
  transition: all 0.25s ease-in-out;
  color: #000;
  background: #fff;

  :hover {
    color: #fff;
    background: #000;
  }
`
