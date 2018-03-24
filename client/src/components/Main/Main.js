import React, { PureComponent } from 'react'

import ResizeType from '../ResizeType/ResizeType'
import Uploader from '../Uploader/Uploader'
import Masonry from '../Masonry/Masonry'

import libraries from './libraries.json'

import style from './styles.scss'


class Main extends PureComponent {
  state = {
    selectValue: 'im',
  }

  handleChangeSelect = (event) => {
    this.setState({ selectValue: event.target.value })
  }

  render() {
    console.log(this.state.selectValue)
    return (
      <main className={style.main}>
        <h1 className={style.title}>Выбери файл и инструмент нарезки</h1>
        <div className={style.wrapper}>
          <ResizeType libraries={libraries} changeSelect={this.handleChangeSelect} />
          <Uploader />
        </div>
        <Masonry />
      </main>
    )
  }
}

export default Main
