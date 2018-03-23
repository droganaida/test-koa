import React from 'react'
import PropTypes from 'prop-types'

import UploadHolder from '../UploadHolder/UploadHolder'

import styles from './styles.scss'

// "type-holder flex-col flex-center"

const TypeHolder = ({ libraries }) => (
  <div className={styles.typeHolder}>
    <select className={styles.resizeType}>
      {
        libraries.map(library => (
          <option value={library.code}>{library.title}</option>
        ))
      }
    </select>
    <UploadHolder />
  </div>
)

TypeHolder.propTypes = {
  libraries: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string,
    title: PropTypes.string,
  })).isRequired,
}

export default TypeHolder
