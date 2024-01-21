import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const FaqSection = () => {
  const faqData = [
    { question: 'Can education flashcards be used for all age groups?', answer: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus consectetur, voluptate, quisquam quia ipsa nihil placeat soluta repellat cupiditate fuga in accusantium deserunt odit nesciunt officiis maxime repudiandae aspernatur perferendis.' },
    { question: 'How do education flashcards work?', answer: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus consectetur, voluptate, quisquam quia ipsa nihil placeat soluta repellat cupiditate fuga in accusantium deserunt odit nesciunt officiis maxime repudiandae aspernatur perferendis.' },
    { question: 'Can education flashcards be used for test preparation?', answer: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus consectetur, voluptate, quisquam quia ipsa nihil placeat soluta repellat cupiditate fuga in accusantium deserunt odit nesciunt officiis maxime repudiandae aspernatur perferendis.' },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className='ml-4'>
      <div>
        {faqData.map((item, index) => (
          <div key={index} className={`mt-4 border border-blue-500 p-4 rounded-lg mr-40`}>
            <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleAnswer(index)}>
              <p className="text-lg font-semibold">{item.question}</p>
              <FontAwesomeIcon icon={faChevronDown} className={`ml-4 transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`} />
            </div>
            {openIndex === index && <p className="mt-2">{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
