// class stateful component

import React from 'react';
import ThesaurusList from './ThesaurusList.jsx'


class Search extends React.Component {
  render() {
    return (
      <div>
        <p> You looked for word </p>
        <ThesaurusList />
      </div>
      )
  }
}


export default Search;