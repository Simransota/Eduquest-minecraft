import React, { useState } from 'react';
import "../../components/Sparkles.css";
import ProgressBar from 'react-bootstrap/ProgressBar';
import heart from '../../assets/heart.png';
import questions from '../DashBoard/Questions.js';
// import questions from '../../components/Questions.js';
import DialogBox from '../../components/DialogBox.jsx';
// import DragAndDropExercise from '../../components/DragAndDropExercise.jsx'; // Import DragAndDropExercise component

function Quiz() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [quizFinished, setQuizFinished] = useState(false);

    const handleNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    const handleOptionClick = (option) => {
        // Handle the logic when an option is clicked
        const updatedAnswers = [...answers];
        updatedAnswers[currentQuestionIndex] = option;
        setAnswers(updatedAnswers);
    };

    const handleFinishQuiz = () => {
        setQuizFinished(true);
    };

    const calculateScore = () => {
        let score = 0;
        for (let i = 0; i < questions.length; i++) {
            if (answers[i] === questions[i].correctAnswer) {
                score++;
            }
        }
        return score;
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <>
            <div className='mt-12 grid grid-cols-3 gap-x-0 items-center'>
               <DialogBox/>
                <ProgressBar variant="success" now={(currentQuestionIndex + 1) * 10} />
                <img src={heart} alt="" className='w-17 h-10' />
            </div>
            <div className='grid place-items-center h-screen'>
                {quizFinished ? (
                    <div className="result">
                        <p className="vt323-regular">Score: {calculateScore()} / {questions.length}</p>
                    </div>
                ) : (
                    <>
                        <h3 className='vt323-regular'>{currentQuestion.question}</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {currentQuestion.options.map((option, index) => (
                                <button key={index} className="option w-20 h-20 border-solid border-2 rounded-md border-blue-100" onClick={() => handleOptionClick(option)}>
                                    {option}
                                </button>
                            ))}
                        </div>
                        {/* <DragAndDropExercise questions={questions} /> Add DragAndDropExercise component here */}
                        {currentQuestionIndex < questions.length - 1 ? (
                            <div className="button">
                                <a href="#" className="vt323-regular" onClick={handleNextQuestion}><p>Next</p></a>
                            </div>
                        ) : (
                            <div className="button">
                                <a href="#" className="vt323-regular" onClick={handleFinishQuiz}><p>Finish</p></a>
                            </div>
                        )}
                    </>
                )}
            </div>
        </>
    );
}

export default Quiz;
