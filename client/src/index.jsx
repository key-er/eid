import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.search = this.search.bind(this)
    this.state = {
      word: '',
      result: []
    }
  }


  search(word) {
    $.post('/word', {word: this.state.word}, (data) => {
      console.log('entered data: ', data)
      this.setState({
        result: data
      })
    })
  }

  handleChange(event) {
    this.setState({
      word: event.target.value
    })
  }


  render() {
    return (
      <div>
        <h3> Oxford Dictionaries Search </h3>
        Enter a word: <input value={this.state.word} onChange={this.handleChange.bind(this)} />
        <button onClick={this.search.bind(this)} > Go Search! </button>
        <Search />
      </div>
      )
  }

}

ReactDOM.render(<App />, document.getElementById('app'))