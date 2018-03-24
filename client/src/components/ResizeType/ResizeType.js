import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.scss'

const ResizeType = ({ libraries, changeSelect }) => (
  <select className={styles.resizeType} onChange={changeSelect} >
    {
      libraries.map(library => (
        <option value={library.code} key={library.code}>{library.title}</option>
      ))
    }
  </select>
)

ResizeType.propTypes = {
  changeSelect: PropTypes.func.isRequired,
  libraries: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string,
    title: PropTypes.string,
  })).isRequired,
}

export default ResizeType
