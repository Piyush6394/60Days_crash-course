import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles.css'

const QuizSetup = () => {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const [numQuestions, setNumQuestions] = useState(10)
  const navigate = useNavigate()

  const handleStartQuiz = () => {
    if (name && category && difficulty && numQuestions) {
      localStorage.setItem(
        'quizData',
        JSON.stringify({ name, category, difficulty, numQuestions })
      )
      navigate('/quiz')
    } else {
      alert('Please fill all fields')
    }
  }

  return (
    <div className="setup-container">
      <h2>Setup Your Quiz</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option value="9">General Knowledge</option>
        <option value="21">Sports</option>
        <option value="22">Geography</option>
      </select>
      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      >
        <option value="">Select Difficulty</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <input
        type="number"
        value={numQuestions}
        onChange={(e) => setNumQuestions(e.target.value)}
        min="1"
        max="50"
      />
      <button onClick={handleStartQuiz}>Start Quiz</button>
    </div>
  )
}

export default QuizSetup
