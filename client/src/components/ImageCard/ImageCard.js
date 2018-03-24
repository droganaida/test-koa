import React from 'react'
import PropTypes from 'prop-types'

import style from './styles.scss'

const ImageCard = ({ path, size, time }) => (
  <div className={style.imageCard}>
    <img src={path} alt="img" className={style.image} />
    <span className={style.text}>{`${(size / 1000000).toFixed(2)}mb`}&nbsp;</span>
    <span className={style.text}>{`${time}ms`}</span>
  </div>
)

ImageCard.propTypes = {
  path: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
}

export default ImageCard
