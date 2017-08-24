import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Posts extends Component {
  //{this.props.posts.map((post, i) => <li key={i}>{post.title}</li>)}

  render() {
    
    return (
      <ul>

        {this.props.posts.map((post, i) => <li key={i}>{post.username}</li>)}
      </ul>
    )
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}
