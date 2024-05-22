import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/Navbar';


const Homepage = () => {
  return (
    <>
    <Navbar />
    <div className="relative min-h-screen bg-gray-900 text-white flex flex-col items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-sm"
        style={{ backgroundImage: `url(/italy.PNG)`  }}
      ></div>
      <div className="relative z-10 flex flex-col items-center text-center space-y-8 px-4 py-16 flex-grow">
        
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl text-gray-700 font-extrabold"
        >
          Welcome to QuizMaster
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-2xl"
        >
          Test your knowledge and challenge your friends!
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ scale: 1.1 }}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() =>window.location.href = `/quiz.html`}
        >
          Start Quiz
        </motion.button>
        <div className="flex space-x-4 mt-8">
          <motion.a
            href="https://facebook.com"
            whileHover={{ scale: 1.2 }}
            className="text-xl"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </motion.a>
          <motion.a
            href="https://twitter.com"
            whileHover={{ scale: 1.2 }}
            className="text-xl"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </motion.a>
          <motion.a
            href="https://instagram.com"
            whileHover={{ scale: 1.2 }}
            className="text-xl"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </motion.a>
        </div>
      </div>

      <div className="relative z-10 w-full px-4 py-16 bg-gray-800 bg-opacity-80">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          Latest News
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-700 p-4 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-2">QuizMaster Championship</h3>
            <p>The annual QuizMaster Championship is coming soon. Prepare your teams and get ready for an exciting competition!</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-700 p-4 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-2">New Features</h3>
            <p>We've added new features to enhance your quiz experience. Check out the latest updates in our app.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gray-700 p-4 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-2">Community Highlights</h3>
            <p>Our community is growing! See what our top players are saying about their experiences.</p>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 w-full px-4 py-16 bg-gray-900 bg-opacity-90">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          Recent Quizzes
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-700 p-4 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-2">General Knowledge Quiz</h3>
            <p>Challenge yourself with our latest general knowledge quiz. Are you ready?</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-700 p-4 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-2">History Quiz</h3>
            <p>How well do you know history? Take our history quiz and find out!</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gray-700 p-4 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-2">Science Quiz</h3>
            <p>Test your knowledge of science with our challenging science quiz.</p>
          </motion.div>
        </div>
      </div>

      <footer className="relative z-10 w-full px-4 py-8 bg-gray-800 bg-opacity-95">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-4">
            <motion.a
              href="mailto:contact@quizmaster.com"
              whileHover={{ scale: 1.2 }}
              className="text-xl"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </motion.a>
            <motion.a
              href="tel:+1234567890"
              whileHover={{ scale: 1.2 }}
              className="text-xl"
            >
              <FontAwesomeIcon icon={faPhone} />
            </motion.a>
          </div>
          <p className="text-center">© 2024 QuizMaster. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </>
    
  );
};

export default Homepage;
