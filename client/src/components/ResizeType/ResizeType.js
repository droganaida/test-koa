import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.scss'

const ResizeType = ({ libraries }) => (
  <select className={styles.resizeType}>
    {
      libraries.map(library => (
        <option value={library.code} key={library.code}>{library.title}</option>
      ))
    }
  </select>
)

ResizeType.propTypes = {
  libraries: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string,
    title: PropTypes.string,
  })).isRequired,
}

export default ResizeType
