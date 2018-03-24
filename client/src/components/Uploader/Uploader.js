import React from 'react'

import style from './styles.scss'

const Uploader = () => (
  <label htmlFor="file" className={style.uploadLabel}>
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

export default Uploader
