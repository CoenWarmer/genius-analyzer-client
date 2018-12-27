// @flow
import React, { Fragment } from 'react'
import styled from 'styled-components'

import Angry from './icons/Angry'
import Sad from './icons/Sad'
import Medium from './icons/Medium'
import Happy from './icons/Happy'

type Props = { score: number, magnitude: number }

const Sentiment = ({ score, magnitude }: Props) => {
  let result = {}

  if (score < -0.1 && magnitude > 4) {
    result.icon = <Angry width="8em" height="8em" />
    result.caption = (
      <Fragment>
        is just so... <strong>ANGRY</strong>
      </Fragment>
    )
  }

  if (score < -0.1 && magnitude <= 4) {
    result.icon = <Sad width="8em" height="8em" />
    result.caption = 'is sad'
  }

  if (score >= -0.1 && score < 0.1) {
    result.icon = <Medium width="8em" height="8em" />
    result.caption = 'just kinda is'
  }

  if (score >= 0.1 && magnitude > 1) {
    result.icon = <Happy width="8em" height="8em" />
    result.caption = 'is happy!'
  }

  return (
    <Container>
      <Inner>
        {result.icon}
        <Caption>This song {result.caption}</Caption>
      </Inner>
    </Container>
  )
}

export default Sentiment

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  margin-left: 20px;
  padding: 60px 30px;
`

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Caption = styled.p`
  margin-top: 15px;
`
