import React, { useEffect, useState } from 'react'

const Timer = ({ onTimeOut }) => {
  const [timeLeft, setTimeLeft] = useState(10)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1)
    }, 1000)

    if (timeLeft === 0) {
      clearInterval(timer)
      onTimeOut()
    }

    return () => clearInterval(timer)
  }, [timeLeft, onTimeOut])

  return <div>Time Left: {timeLeft} seconds</div>
}

export default Timer
