import React from 'react'

import style from './styles.scss'

const UploadHolder = () => (
  <label htmlFor="file" className={style.uploadHolder}>
    <input
      className={style.uploadInput}
      id="file"
      type="file"
      name="uploader"
      multiple="multiple"
      accept=".jpg, .jpeg, .png"
    />
    Нажми меня
  </label>
)

export default UploadHolder
