// @flow
import React, { useState } from 'react'
import styled from 'styled-components'

import useApi from './hooks/useApi'

import Header from './components/navigation/Header'
import Background from './components/Background'
import Results from './components/Results'
import Detail from './components/Detail'
import GlobalStyles from './components/GlobalStyles'

const App = () => {
  const [query = '', setQuery] = useState()
  const [item, selectItem] = useState()

  const changeQuery = query => {
    setQuery(query)
  }

  const setVisible = itemId => {
    selectItem(itemId)
  }
  const { loading, error, data: results } = useApi({
    endpoint: 'search',
    query
  })

  return (
    <Wrapper>
      <GlobalStyles />
      <Header onSearch={changeQuery} />
      <Background />
      <Content>
        <Results
          query={query}
          results={results}
          loading={loading}
          error={error}
          onSelectItem={setVisible}
        />
        <Detail itemId={item} onClose={setVisible} />
      </Content>
    </Wrapper>
  )
}

export default App

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
`

const Content = styled.div`
  padding-top: 134px;
  position: absolute;
`
