import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('EN');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'IT' : 'EN');
  };

  return (
    <nav className="w-full bg-slate-900 bg-opacity-90 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="https://via.placeholder.com/50" alt="Logo" className="w-12 h-12" />
          <div className="text-2xl font-bold">QuizMaster</div>
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            className="text-lg font-bold hover:text-gray-400"
          >
            New Game
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            className="text-lg font-bold hover:text-gray-400"
          >
            Credits
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            className="text-lg font-bold hover:text-gray-400"
          >
            Collaborate
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={toggleLanguage}
            className="text-lg font-bold hover:text-gray-400"
          >
            {language}
          </motion.button>
        </div>
        <div className="md:hidden flex items-center">
          <motion.button
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            className="text-2xl"
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </motion.button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="flex flex-col space-y-4 mt-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-lg font-bold hover:text-gray-400"
              >
                New Game
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-lg font-bold hover:text-gray-400"
              >
                Credits
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-lg font-bold hover:text-gray-400"
              >
                Collaborate
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={toggleLanguage}
                className="text-lg font-bold hover:text-gray-400"
              >
                {language}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
