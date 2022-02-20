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

function QuotesLayout() {
    const [quotes, setQuotes] = useState([
        {
            id: 1,
            title: "Title 1".toUpperCase(),
            quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
            size:"small"
        },
        {
            id: 2,
            title: "Title 1".toUpperCase(),
            quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."
        }
    ])
    const cards = quotes.map((quote) => {
        return (
            <QuotesCards
                key={quote.id}
                title={quote.title}
                quote={quote.quote}
                size={quote.size}
            />
        )
        })
    return (
        <div style={styles.quotes_container}>
            {cards}
        </div>
    )
}

export default QuotesLayout