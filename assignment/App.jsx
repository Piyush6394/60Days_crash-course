import React from 'react'
import GreetingCard from './GreetingCard'

const App = () => {
  // Array of greeting card data
  const greetingCards = [
    { greeting: 'Happy Birthday!', name: 'John Doe' },
    { greeting: 'Congratulations!', name: 'Jane Smith' },
    { greeting: 'Get Well Soon!', name: 'Chris Evans' },
  ]

  return (
    <div style={styles.app}>
      <h1>Greeting Cards</h1>
      <div style={styles.cardsContainer}>
        {greetingCards.map((card, index) => (
          <GreetingCard key={index} greeting={card.greeting} name={card.name} />
        ))}
      </div>
    </div>
  )
}

// Inline styling for the app
const styles = {
  app: {
    textAlign: 'center',
  },
  cardsContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
}

export default App
