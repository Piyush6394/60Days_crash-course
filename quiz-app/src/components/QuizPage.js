import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Question from './Question'
import Timer from './Timer'
import { useLocalStorage } from './hooks/useLocalStorage'

const QuizPage = () => {
  const [questions, setQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [timerKey, setTimerKey] = useState(0)
  const { getItem } = useLocalStorage()

  useEffect(() => {
    const quizData = JSON.parse(getItem('quizData'))
    const { category, difficulty, numQuestions } = quizData

    axios
      .get(
        `https://opentdb.com/api.php?amount=${numQuestions}&category=${category}&difficulty=${difficulty}&type=multiple`
      )
      .then((response) => {
        setQuestions(response.data.results)
      })
      .catch((error) => console.error('Error fetching questions:', error))
  }, [getItem])

  const handleNextQuestion = (isCorrect) => {
    if (isCorrect) setScore(score + 1)

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setTimerKey(timerKey + 1) // reset the timer
    } else {
      // End of quiz
      alert(`Quiz completed! Your score is ${score}/${questions.length}`)
      saveToLeaderboard(score)
    }
  }

  const saveToLeaderboard = (finalScore) => {
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || []
    const quizData = JSON.parse(getItem('quizData'))
    leaderboard.push({ name: quizData.name, score: finalScore })
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard))
  }

  return (
    <div className="quiz-page">
      {questions.length > 0 && (
        <>
          <Timer key={timerKey} onTimeOut={() => handleNextQuestion(false)} />
          <Question
            question={questions[currentQuestionIndex]}
            questionIndex={currentQuestionIndex}
            totalQuestions={questions.length}
            onNext={handleNextQuestion}
          />
        </>
      )}
    </div>
  )
}

export default QuizPage
