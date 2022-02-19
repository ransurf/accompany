import { color, style, textAlign } from '@mui/system'
import React from 'react'

const styles = {

  card: {
      margin: '15px 10px',
      padding: 0,
      borderRadius: '16px',
      backgroundColor: '#fcba03',
      textAlign:"center"
  },
  small: {
      gridRowEnd: 'span 20'
     
  },
  medium: {
      gridRowEnd: 'span 30'
  },
  large: {
      gridRowEnd: 'span 40'
  }
}

function QuotesCards(props) {
  return (
    <div style={{
      ...styles.card,
      ...styles[props.size]
    }}>Test1</div>
  )
}

export default QuotesCards

