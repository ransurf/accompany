import { orderBy } from '@firebase/firestore'
import { borderRadius, flexbox } from '@mui/system'
import React from 'react'
import QuotesCards from './QuotesCards'
import { useState } from 'react'

const styles = {
    quotes_container: {
        display: "grid",
        margin: '0 24px 24px 0',
        width: '70%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 250px)',
        minHeight:'300px',
        gridAutoRows: '10px',
        position: 'absolute',
        right: '0%',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(197, 142, 102, 0.683)',
        borderRadius: "25px",
    }
}

function QuotesLayout() {
    const [quotes, setQuotes] = useState([
        {
            id: 1,
            title: "Title 1".toUpperCase(),
            quote: "I'm selfish, asd impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
            size:"small"
        },
        {
            id: 2,
            title: "Title 1".toUpperCase(),
            quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
            size:"medium"
        },
        {
            id: 3,
            title: "Title 3".toUpperCase(),
            quote: "I'm selfish, asd impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
            size:"large"
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