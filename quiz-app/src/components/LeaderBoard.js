import React from 'react'
import { useLocalStorage } from './hooks/useLocalStorage'

const Leaderboard = () => {
  const { getItem } = useLocalStorage()
  const leaderboard = JSON.parse(getItem('leaderboard')) || []

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {leaderboard
          .sort((a, b) => b.score - a.score)
          .map((user, index) => (
            <li key={index}>
              {user.name}: {user.score}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Leaderboard
