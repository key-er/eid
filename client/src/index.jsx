import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import SearchHistory from './components/SearchHistory.jsx'
import initdata from '../../server/models/data.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      thesauri: initdata,
      history: false,
    }
  }


  search() {
    $.post('/word', {word: this.state.word}, (data) => {
      this.setState({
        thesauri: data
      })
    })
  }

  handleChange(event) {
    this.setState({
      word: event.target.value
    })
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.search.apply(this)
    }
  }

  showOrHideHistory(event) {
    this.setState({
      history: !this.state.history
    });

  }


  handleUser(event) {
    if (event.key === 'Enter') {

    debugger
    sessionStorage.getItem('user')
    sessionStorage.setItem('user', event.target.value)
    }
  }


  render() {
    // conditional rendering
    const history = this.state.history;
    if (history) {
      var searchHistory = <SearchHistory history={history} />
    }

    return (
      <div>
        <h2> Oxford Dictionaries Search </h2>

          username: <input type="email" onKeyPress={this.handleUser.bind(this)}/> <br/><br/>
          {/* passwd: <input type="password" /> <br/> */}

        Enter a word: <input value={this.state.word} onChange={this.handleChange.bind(this)} onKeyPress={this.handleKeyPress.bind(this)} />
        <button onClick={this.search.bind(this)}> Go Search! </button>
        <Search thesauri={this.state.thesauri}/>
        <button onClick={this.showOrHideHistory.bind(this)}> My History </button>
        {searchHistory}

      </div>
      )
  }

}

ReactDOM.render(<App />, document.getElementById('app'))