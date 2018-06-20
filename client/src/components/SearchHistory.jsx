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


   datePicker() {
    return (
        <input id="date" type="date" onChange={this.query.bind(this)} />
      )
    }

  render() {
    // conditional rendering
    const queryResult = this.state.queryResult;
    const username = sessionStorage.getItem('username')
    if (queryResult.length > 0) {
      var savedWords = queryResult.filter((q) => q.word).map((f) => f.word)
    }

    if (username) {
      var datePicker = this.datePicker()
      var greeting = <h4> Hi, {username}! View your search history </h4>
    }
    else if (!username) alert('you are not logged in')

    if (savedWords) {
      var listWords = savedWords.map((word, index) => <ListSearchHistory key={index} value={word}/>)
    }

    return (
      <div>
          {datePicker}
          {greeting}
        <ol>
          {listWords}
        </ol>
      </div>
      )
  }
}


export default SearchHistory;


