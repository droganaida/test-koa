import React from 'react'
import PropTypes from 'prop-types'

import style from './styles.scss'

const Masonry = ({ files }) => (
  <div id="uploaded" className={style.masonry}>
    {
      files.map(file => `${file.path} ${file.time} ${file.size}`)
    }
  </div>
)

Masonry.propTypes = {
  files: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string,
    time: PropTypes.number,
    size: PropTypes.number,
  })).isRequired,
}

export default Masonry
