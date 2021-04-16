import React, { Component } from 'react'

class CommentInput extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      content: ''
    }
  }
  handleUsernameChange (e) {
    this.setState({
      username: e.target.value
    })
  }
  handleContentChange (e) {
    this.setState({
      content: e.target.value
    })
  }
  render() {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>⽤⼾名：</span>
          <div className='comment-field-input'>
            <input value={ this.state.username } onChange={ this.handleUsernameChange.bind(this)}/>
          </div>
        </div>
      <div className='comment-field'>
        <span className='comment-field-name'>评论内容：</span>
        <div className='comment-field-input'>
          <textarea value={ this.state.content } onChange={this.handleContentChange.bind(this)} />
        </div>
      </div>
      <div className='comment-field-button'>
        <button>
          发布
        </button>
      </div>
      </div>
    )
  }
}

export default CommentInput