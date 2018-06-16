// class stateful component

import React from 'react';
import ThesaurusList from './ThesaurusList.jsx'


// class stateful component


function ListItem(props) {
  const value = props.value;
  return <li>{props.value}</li>;
}

function Search(props) {
  const antonyms = props['thesauri']['antonyms'];
  const synonyms = props.thesauri.synonyms;
  debugger;
  const listAntonyms = antonyms.map((d, index) =>
    <ListItem key={index} value={d} />
  );
  return (
    <ul>
      {listAntonyms}
    </ul>
  );
}



// export default Search;
export default Search;