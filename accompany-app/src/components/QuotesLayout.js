import { orderBy } from '@firebase/firestore'
import { borderRadius, flexbox } from '@mui/system'
import React from 'react'
import QuotesCards from './QuotesCards'
import { useState } from 'react'

const styles = {
    quotes_container: {
        display: "grid",
        margin: '8px 8px 12px 0px',
        padding:'0',
        width: '80vw',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 225px)',
        gridAutoRows: '10px',
        position: 'absolute',
        right: '0%',
        justifyContent: 'center',
        backgroundColor: '#d9fcf8',
        borderRadius: "5%",

    }
}

function QuotesLayout(quotesList) {
  console.log(quotesList.props);
  console.log(Object.entries(quotesList.props));

  const [quotes, setQuotes] = useState([], []);

  console.log(quotesList.props);
  let i = 3;
  Object.entries(quotesList.props).map(([key, value]) => {
    //console.log(key, value);
    //console.log("i: ", i);
    quotes.push({ title: key, quote: value, size: "small" });
    // setQuotes({  id: i, title: key, quote: value, size: "small" });
    //console.log(quotes);
    //i++;
  });
  //console.log(quotes);

  //use setQuotes to add new quotes from quotesList
  //   quotesList.forEach((quote) => {
  //     quotes.push(quote);
  //   });

  const cards = quotes.map((quote) => {
    return (
      <QuotesCards
        //key={quote.id}
        title={quote.title}
        quote={quote.quote}
        size={quote.size}
      />
    );
  });

  return <div style={styles.quotes_container}>{cards}</div>;
}

export default QuotesLayout