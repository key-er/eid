// class stateful component

import React from 'react';

class ThesaurusList extends React.Component {
  render() {
    return (
        <li> {this.props.data} </li>
      )
  }
}


export default ThesaurusList;