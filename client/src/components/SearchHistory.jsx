import React from 'react';
import $ from 'jquery';
import ListSearchHistory from './ListSearchHistory.jsx'


// class SearchHistory extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       queryResult: []
//     }
//   }


//   query(event) {
//     debugger
//       $.get(`/word/${event.target.value}`, (data) => {
//         debugger
//         this.setState({
//           queryResult: data
//         })
//       })
//     }

//     render() {
//       return (
//         <input id="date" type="date" onChange={this.query.bind(this)} />
//         <ListSearchHistory wordList = {this.state.queryResult} />

//         )
//     }

// }




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
      debugger;
    }

    return (
      <div>
        <input id="date" type="date" onChange={this.query.bind(this)} />
        <h4> your search history </h4>
          {listWords}
      </div>
      )
  }
}


export default SearchHistory;


