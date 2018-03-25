import React from 'react'
import PropTypes from 'prop-types'

import style from './styles.scss'

const Uploader = ({ selectedFiles }) => (
  <label htmlFor="file" className={style.uploadLabel}>
    <input
      className={style.uploadInput}
      id="file"
      type="file"
      name="uploader"
      multiple="multiple"
      accept=".jpg, .jpeg, .png"
      onChange={selectedFiles}
    />
    Нажми меня
  </label>
)

Uploader.propTypes = {
  selectedFiles: PropTypes.func.isRequired,
}

export default Uploader
