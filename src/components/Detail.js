// @flow
import React, { Fragment } from 'react'
import styled from 'styled-components'

import useApi from '../hooks/useApi'

import Spinner from './Spinner'
import Sentiment from './Sentiment'
import Sad from './icons/Sad'

type Props = {
  itemId: ?number,
  onClose: () => void
}

const Details = ({ itemId, onClose }: Props) => {
  const { loading, error, data } = useApi({
    endpoint: 'songs',
    query: itemId ? String(itemId) : ''
  })

  const { song, lyrics, sentiment } = data
  console.log('sentiment', sentiment)
  return (
    <Container open={!!itemId ? 1 : 0}>
      <Header>
        <Title>
          {!loading && !error && song && song.full_title.toLowerCase()}
          {loading && <Spinner color="#fff" width={20} height={20} />}
        </Title>
        <ButtonClose onClick={() => onClose()}>✕</ButtonClose>
      </Header>
      <Scroll>
        <Content>
          {!loading && !error && lyrics && (
            <Fragment>
              <Lyrics dangerouslySetInnerHTML={{ __html: lyrics }} />
              <Sentiment
                score={sentiment.score}
                magnitude={sentiment.magnitude}
              />
            </Fragment>
          )}
          {error && <Sad width="4em" height="4em" />}
        </Content>
      </Scroll>
    </Container>
  )
}

export default Details

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  background: #fff;
  transform: ${props =>
    props.open ? 'translate3d(0,0,0)' : 'translate3d(0,100%,0)'};
  transition: transform 0.25s cubic-bezier(1, 0, 0, 1);
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  position: fixed;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  background: #222;
  box-sizing: border-box;
  padding: 24px;
  height: 60px;

  > button {
    margin-left: auto;
  }
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

const Title = styled.h1`
  font-size: 24px;
  color: #fff;
  font-family: 'Major Mono Display', monospace;
`

const Scroll = styled.div`
  overflow-y: auto;
  margin-top: 60px;
`

const Lyrics = styled.div`
  white-space: pre-line;
  line-height: 22px;
  max-width: 320px;
`

const Content = styled.div`
  display: flex;
  padding: 24px;
`
