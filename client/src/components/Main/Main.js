import React, { Component } from 'react'

import ResizeType from '../ResizeType/ResizeType'
import Uploader from '../Uploader/Uploader'
import Masonry from '../Masonry/Masonry'

import libraries from './libraries.json'

import style from './styles.scss'


class Main extends Component {
  state = {
    selectedType: 'im',
    selectedFiles: null,
  }

  handlerSelectedType = (event) => {
    this.setState({ selectedType: event.target.value })
  }

  handlerSelectedFiles = (event) => {
    this.setState({ selectedFiles: event.target.files })
  }

  render() {
    console.log(this.state.selectedType, this.state.selectedFiles)
    return (
      <main className={style.main}>
        <h1 className={style.title}>Выбери файл и инструмент нарезки</h1>
        <div className={style.wrapper}>
          <ResizeType libraries={libraries} changeType={this.handlerSelectedType} />
          <Uploader changeFiles={this.handlerSelectedFiles} />
        </div>
        <Masonry />
      </main>
    )
  }
}

export default Main
