import React, { Component } from 'react';

import CommentBox from './comment_box';
import CommentList from './comment_list';
import Header from './header'


export default class App extends Component {
  render() {
    return (
        <div>
          <Header />
          {this.props.children}
        </div>
    );
  }
}
