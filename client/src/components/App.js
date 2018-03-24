import React, { Fragment } from 'react'

import Main from './Main/Main'
import Footer from './Footer/Footer'
import config from '../../../server/config'

const App = () => (
  <Fragment>
    <Main />
    <Footer
      brand={config.brand}
      url="https://www.youtube.com/channel/UCSsg9NLCse2XQCIRgfmJu3Q"
    />
  </Fragment>
)

export default App
