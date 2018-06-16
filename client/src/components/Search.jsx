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
  const listAntonyms = antonyms.map((d, index) =>
    <ListItem key={index} value={d} />
  );

  const listSynonyms = synonyms.map((d, index) =>
    <ListItem key={index} value = {d} />
    )


  return (
    <div>
      <ul>
        <h3> Antonyms are </h3>
        {listAntonyms}
      </ul>

      <ul>
        <h3> Synonyms are </h3>
        {listSynonyms}
      </ul>



    </div>
  );
}



// export default Search;
export default Search;