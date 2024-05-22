import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import QuestionCard from './QuizCard';
import questions from '../questions/Questions';
import Navbar from '../components/Navbar';
const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
    const [selectedOptions, setSelectedOptions] = React.useState({});
    const [score, setScore] = React.useState(0);

    const handleSelectOption = (option) => {
        setSelectedOptions((prev) => ({
            ...prev,
            [currentQuestionIndex]: option,
        }));
    };

    const handleNext = () => {
        if (selectedOptions[currentQuestionIndex] === questions[currentQuestionIndex].correctAnswer) {
            setScore((prev) => prev + 1);
        }
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    };

    const handlePrev = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
        }
    };

    return (
        <>
            <Navbar />
            <div className="relative min-h-screen bg-gray-900 text-white flex items-center justify-center">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-sm"
                    style={{ backgroundImage: "url('/italy.PNG')" }}
                ></div>
                <div className="relative z-10 w-full max-w-4xl px-4 py-16">
                    <AnimatePresence mode='wait'>
                        {currentQuestionIndex < questions.length ? (
                            <QuestionCard
                                key={currentQuestionIndex}
                                question={questions[currentQuestionIndex].question}
                                options={questions[currentQuestionIndex].options}
                                media={questions[currentQuestionIndex].media}
                                mediaType={questions[currentQuestionIndex].mediaType}
                                selectedOption={selectedOptions[currentQuestionIndex]}
                                onSelectOption={handleSelectOption}
                                onNext={handleNext}
                                onPrev={handlePrev}
                            />
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-center"
                            >
                                <h2 className="text-3xl font-bold mb-4">Quiz Complete!</h2>
                                <p>Your score: {score} / {questions.length}</p>
                                <p>Thank you for participating in the quiz.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </>

    );
};

export default Quiz;
