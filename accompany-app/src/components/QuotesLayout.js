import { orderBy } from '@firebase/firestore'
import { borderRadius, flexbox } from '@mui/system'
import React from 'react'
import QuotesCards from './QuotesCards'

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
        // transform: 'translateX(-25%)',
        // transform: 'translateY(0)',
        justifyContent: 'center',
        backgroundColor: '#d9fcf8',
        borderRadius: "5%",

    }
}

function QuotesLayout() {
    return (
        <div style={styles.quotes_container}>
            <QuotesCards size="medium" />
            <QuotesCards size="large" />
            <QuotesCards size="small" />
            <QuotesCards size="medium" />
            <QuotesCards size="large" />
            <QuotesCards size="small" />
            <QuotesCards size="medium" />
            <QuotesCards size="large" />

        </div>
    )
}

export default QuotesLayout