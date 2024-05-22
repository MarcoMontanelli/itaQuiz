import React from 'react';
import { motion } from 'framer-motion';

const QuestionCard = ({ question, options, media, mediaType, selectedOption, onSelectOption, onNext, onPrev }) => {
  const renderMedia = () => {
    switch (mediaType) {
      case 'image':
        return (
          <motion.img
            src={media}
            alt="Question media"
            className="w-full h-64 object-cover mb-4 rounded"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          />
        );
      case 'video':
        return (
          <motion.video
            controls
            src={media}
            className="w-full h-64 object-cover mb-4 rounded"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          />
        );
      case 'youtube':
        return (
          <motion.iframe
            src={media}
            className="w-full h-64 object-cover mb-4 rounded"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></motion.iframe>
        );
      case 'text':
        return (
          <motion.div
            className="w-full h-64 bg-gray-800 text-white text-bold p-4 rounded mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            {media}
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="bg-slate-950 border border-gray-700 rounded-lg p-4 mb-4 w-full max-w-3xl mx-auto"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-extrabold">Question</h2>
        <button className="bg-gray-700 text-white font-extrabold rounded-lg p-2 "> ? </button>
      </div>
      {renderMedia()}
      <p className="mb-4 text-2xl font-bold">{question}</p>
      <div className="mb-4">
        <h3 className="font-bold  mb-2">Choose an answer carefully:</h3>
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
