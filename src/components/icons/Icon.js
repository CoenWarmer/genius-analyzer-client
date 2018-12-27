// @flow
import React from 'react'
import styled from 'styled-components'

import Angry from './Sad'
import Happy from './Happy'
import Medium from './Medium'
import Sad from './Sad'

export const iconMap = {
  angry: Angry,
  happy: Happy,
  medium: Medium,
  sad: Sad
}

type Props = {
  icon: $Keys<typeof iconMap>,
  width?: string,
  height?: string
}

const defaultProps = {
  width: 20,
  height: 20
}

const Icon = (props: Props) => {
  const { icon, width, height } = props
  const IconComponent = iconMap[icon]
  return (
    <Container width={width} height={height}>
      <IconComponent {...props} />
    </Container>
  )
}

Icon.defaultProps = defaultProps

export default Icon

const Container = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  overflow: hidden;
`
