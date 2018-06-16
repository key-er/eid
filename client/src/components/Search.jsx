// class stateful component

import React from 'react';
import ThesaurusList from './ThesaurusList.jsx'


class Search extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <ThesaurusList thesaurus={this.props.thesauri} />
        </ul>
      </div>
      )
  }
}


export default Search;