import React, { Component } from 'react'

import ResizeType from '../ResizeType/ResizeType'
import Uploader from '../Uploader/Uploader'
import Masonry from '../Masonry/Masonry'
import ServerError from '../ServerError/ServerError'

import fetchPostApi from '../../api'
import libraries from './libraries.json'

import style from './styles.scss'


class Main extends Component {
  state = {
    selectedType: 'im',
    resizeFiles: [],
    error: false,
  }

  handlerSelectedType = (event) => {
    this.setState({ selectedType: event.target.value })
  }

  handlerSelectedFiles = (event) => {
    this.uploadFiles(Array.from(event.target.files))
  }

  async uploadFiles(files) {
    try {
      const resizeFiles = await fetchPostApi('http://localhost:6008', files, this.state.selectedType)
      this.setState(prevState => ({
        resizeFiles: [...prevState.resizeFiles, ...resizeFiles],
      }))
    } catch (error) {
      this.setState({ error: true })
    }
  }

  render() {
    const { resizeFiles, error } = this.state
    return (
      <main className={style.main}>
        <h1 className={style.title}>Выбери файл и инструмент нарезки</h1>
        <div className={style.wrapper}>
          <ResizeType libraries={libraries} changeType={this.handlerSelectedType} />
          <Uploader selectedFiles={this.handlerSelectedFiles} />
        </div>
        {
          error ? (
            <ServerError />
          ) : (
            <Masonry files={resizeFiles} />
          )
        }
      </main>
    )
  }
}

export default Main
