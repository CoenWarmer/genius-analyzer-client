// @flow
import * as React from 'react'
import Particles from 'react-particles-js'

import particlesConfig from '../constants/particlesConfig.json'

const Background = React.memo<{}>(() => (
  <Particles width="100%" height="100%" params={particlesConfig} />
))

export default Background
