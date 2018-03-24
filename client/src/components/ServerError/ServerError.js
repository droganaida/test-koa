import React from 'react'

import WarningIcon from 'react-icons/lib/ti/warning-outline'

import style from './styles.scss'

const ServerError = () => (
  <div className={style.error}>
    <WarningIcon className={style.errorIcon} />
  </div>
)

export default ServerError
