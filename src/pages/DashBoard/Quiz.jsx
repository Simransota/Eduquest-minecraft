import React, { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import heart from '../../assets/heart.png';
import questions from '../DashBoard/Questions.js';
import DialogBox from '../../components/DialogBox.jsx';
import "../../components/Button.css";
import "./Quiz.css";

function Quiz() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [quizFinished, setQuizFinished] = useState(false);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
    const [offCanvasOpen, setOffCanvasOpen] = useState(false);
    const [checkAnswerVisible, setCheckAnswerVisible] = useState(true);

    const handleNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setOffCanvasOpen(false);
        setIsAnswerCorrect(false);
        setCheckAnswerVisible(true);
    };

    const handleOptionClick = (option) => {
        const updatedAnswers = [...answers];
        updatedAnswers[currentQuestionIndex] = option;
        setAnswers(updatedAnswers);
    };

    const handleAnswerChange = (event) => {
        const updatedAnswers = [...answers];
        updatedAnswers[currentQuestionIndex] = event.target.value;
        setAnswers(updatedAnswers);
    };

    const checkAnswer = () => {
        if (answers[currentQuestionIndex] === questions[currentQuestionIndex].correctAnswer) {
            setIsAnswerCorrect(true);
        } else {
            setIsAnswerCorrect(false);
        }
        setOffCanvasOpen(true);
        setCheckAnswerVisible(false);
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
                        {currentQuestion.type === 'mcq' ? (
                            <div className="grid grid-cols-2 gap-4">
                                {currentQuestion.options.map((option, index) => (
                                    <button key={index} className="option w-20 h-20 border-solid border-2 rounded-md border-blue-100" onClick={() => handleOptionClick(option)}>
                                        {option}
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <textarea 
                                className="w-64 h-32 border-solid border-2 rounded-md border-blue-100 p-2"
                                value={answers[currentQuestionIndex] || ''}
                                onChange={handleAnswerChange}
                            />
                        )}
                        {currentQuestionIndex < questions.length - 1 ? (
                            <>
                                {checkAnswerVisible && (
                                    <div className="button">
                                        <button className="btn btn-primary vt323-regular" onClick={checkAnswer} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Check Answer</button>
                                    </div>
                                )}
                                <div className={`offcanvas offcanvas-bottom border rounded-xl border-gray-300 ${isAnswerCorrect ? 'bg-green-200' : 'bg-red-200'} ${offCanvasOpen ? 'show' : ''}`} tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
                                    <div className="offcanvas-header ml-5 mt-6 font-bold">
                                        <h5 className="offcanvas-title " id="offcanvasBottomLabel ">Answer</h5>
                                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div className="offcanvas-body small">
                                        <p className={`vt323-regular ml-5 ${isAnswerCorrect ? 'correct' : 'incorrect'}`}>
                                            {isAnswerCorrect ? 'Correct!' : 'Incorrect!'}
                                        </p>
                                        <div className="button-next">
                                        <button className='btn btn-primary vt323-regular ml-5 ' onClick={handleNextQuestion}>Next</button></div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="button">
                                 <button className="btn btn-primary vt323-regular" onClick={handleFinishQuiz}>Finish</button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </>
    );
}

export default Quiz;
