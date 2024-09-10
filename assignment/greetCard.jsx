import React from 'react'

// GreetingCard Component
const GreetingCard = ({ greeting, name }) => {
  return (
    <div style={styles.card}>
      <h2>{greeting}</h2>
      <p>From: {name}</p>
    </div>
  )
}

// Inline styling
const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '20px',
    margin: '10px',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
  },
}

export default GreetingCard
