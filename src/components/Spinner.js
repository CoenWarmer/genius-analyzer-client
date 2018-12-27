// @flow

import React from 'react'
import styled, { keyframes, css } from 'styled-components'

type LoaderProps = {
  fullscreen?: boolean,
  width?: number,
  height?: number,
  color?: string
}

const defaultProps = {
  fullscreen: false,
  width: 66,
  height: 66,
  color: '#222'
}

const Spinner = (props: LoaderProps) => (
  <Container
    fullscreen={props.fullscreen}
    width={props.width}
    height={props.height}
  >
    <OuterCircle height="100%" width="100%" viewBox="0 0 66 66">
      <Circle
        color={props.color}
        fill="none"
        strokeWidth="6"
        strokeLinecap="round"
        cx="33"
        cy="33"
        r="30"
      />
    </OuterCircle>
  </Container>
)

Spinner.defaultProps = defaultProps

export default Spinner

const Container = styled.div`
  display: flex;
  position: ${props => (props.fullscreen ? 'fixed' : 'initial')};
  z-index: 0;
  left: ${props => (props.fullscreen ? 0 : 'auto')};
  top: ${props => (props.fullscreen ? 0 : 'auto')};
  align-items: center;
  justify-content: center;
  width: ${props => (props.fullscreen ? '100%' : `${props.width}px`)};
  height: ${props => (props.fullscreen ? '100%' : `${props.height}px`)};

  > svg {
    max-width: 100px;
    max-height: 100px;
  }
`

const OFFSET = 187
const DURATION = 1.4

const rotator = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(270deg); }
`

const dash = keyframes`
  0% { stroke-dashoffset: ${OFFSET}; }
  50% {
    stroke-dashoffset: ${OFFSET / 4};
    transform:rotate(135deg);
  }
  100% {
    stroke-dashoffset: ${OFFSET};
    transform:rotate(450deg);
  }
`

const OuterCircle = styled.svg`
  animation: ${rotator} ${DURATION}s linear infinite;
`

const Circle = styled.circle`
  stroke-dasharray: ${OFFSET};
  stroke-dashoffset: 0;
  transform-origin: center;
  stroke: ${props => (props.color ? props.color : 'white')};
  animation: ${props =>
    css`
      ${dash} ${DURATION}s ease-in-out infinite;
    `};
`
