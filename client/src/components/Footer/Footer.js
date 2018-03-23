import React from 'react'
import PropTypes from 'prop-types'

import style from './styles.scss'

const Footer = ({ brand, url }) => (
  <footer className={style.footer}>
    <a href={url} target="_blank" className={style.brand} >
      {`${brand} © ${new Date().getFullYear()}`}
    </a>
  </footer>
)

Footer.propTypes = {
  brand: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default Footer
