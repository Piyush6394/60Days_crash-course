import React, { useState } from 'react'

const Question = ({ question, questionIndex, totalQuestions, onNext }) => {
  const [selectedOption, setSelectedOption] = useState('')

  const handleSubmit = () => {
    const isCorrect = selectedOption === question.correct_answer
    onNext(isCorrect)
  }

  return (
    <div>
      <h3>
        Question {questionIndex + 1} of {totalQuestions}
      </h3>
      <p>{question.question}</p>
      {question.incorrect_answers
        .concat(question.correct_answer)
        .map((option, idx) => (
          <div key={idx}>
            <input
              type="radio"
              name="option"
              value={option}
              onChange={() => setSelectedOption(option)}
            />
            {option}
          </div>
        ))}
      <button onClick={handleSubmit}>Next</button>
    </div>
  )
}

export default Question
