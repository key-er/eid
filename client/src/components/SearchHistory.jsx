import React from 'react';
import $ from 'jquery';


function query(event) {
    debugger;
    $.get('/word')
  }


function SearchHistory () {
  // Note it is not html <input> elem rather react's <input />
  return <input id="date" type="date" onChange={query.bind(this)} />
}


export default SearchHistory;