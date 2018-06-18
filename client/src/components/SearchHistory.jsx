import React from 'react';
import $ from 'jquery';
import ListSearchHistory from './ListSearchHistory.jsx'


class SearchHistory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      queryResult: []
    }
  }

  query(event) {
     $.get(`/word/${event.target.value}`, (data) => {
        this.setState({
          queryResult: data
        })
     })
  }

  render() {
    const queryResult = this.state.queryResult;

    if (queryResult.length > 0) {
      var savedWords = queryResult.filter((q) => q.word).map((f) => f.word)
    }

    if (savedWords) {
      var listWords = savedWords.map((word, index) => <ListSearchHistory key={index} value={word}/>)
    }

    return (
      <div>
        <input id="date" type="date" onChange={this.query.bind(this)} />
        <h4> your search history </h4>
        <ol>
          {listWords}
        </ol>
      </div>
      )
  }
}


export default SearchHistory;


