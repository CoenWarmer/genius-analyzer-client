// @flow

import React, { type Node } from 'react'
import styled from 'styled-components'

type Props = {
  children: Node
}

const Message = ({ children }: Props) => <Container>{children}</Container>

export default Message

const Container = styled.div`
  justify-content: center;
`
