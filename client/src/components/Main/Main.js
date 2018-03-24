import React from 'react'

import ResizeType from '../ResizeType/ResizeType'
import Uploader from '../Uploader/Uploader'
import Masonry from '../Masonry/Masonry'

import libraries from './libraries.json'

import style from './styles.scss'

const Main = () => (
  <main className={style.main}>
    <h1 className={style.title}>Выбери файл и инструмент нарезки</h1>
    <div className={style.wrapper}>
      <ResizeType libraries={libraries} />
      <Uploader />
    </div>
    <Masonry />
  </main>
)

export default Main
