import React from 'react';
import { motion } from 'framer-motion';

const QuestionCard = ({ question, options, image, selectedOption, onSelectOption, onNext, onPrev }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="bg-slate-950 border border-gray-700 rounded-lg p-4 mb-4 w-full max-w-2xl mx-auto"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-extrabold">Question</h2>
        <button className="bg-gray-700 text-white font-extrabold rounded-lg p-2 "> ? </button>
      </div>
      {image && (
        <motion.img
          src={image}
          alt="Question media"
          className="w-full h-64 object-cover mb-4 rounded"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        />
      )}
      <p className="mb-4 font-bold">{question}</p>
      <div className="mb-4">
        <h3 className="font-bold text-xl mb-2">Choose an answer carefully:</h3>
        {options.map((option, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelectOption(option)}
            className={`block w-full text-left py-2 px-4 rounded mb-2 ${selectedOption === option ? 'bg-blue-500 text-white' : 'bg-gray-800 text-white'}`}
          >
            {option}
          </motion.button>
        ))}
      </div>
      <div className="flex justify-between">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onPrev}
          className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Previous
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Next
        </motion.button>
      </div>
    </motion.div>
  );
};

export default QuestionCard;
