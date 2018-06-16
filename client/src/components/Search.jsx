// class stateful component

import React from 'react';
import ThesaurusList from './ThesaurusList.jsx'


function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>
}

function Search(props) {
  //props = {numbers: [1, 2, 3, 4, 5]}
  const thesauri = props.thesauri;
  const listItems1 = thesauri.map((thesaurus) =>
    // Correct! Key should be specified inside the array.
    <ListItem key={thesaurus.word}
              value={thesaurus.word} />
  );

  const listItems2 = thesauri.map((thesaurus, index, coll) => {

    return <ListItem key={thesaurus.word}
        value={coll[0].synonyms[0].text} />
  });
  return (
    <ul>
      {listItems1}
      {listItems2}
    </ul>
  );
}


export default Search;