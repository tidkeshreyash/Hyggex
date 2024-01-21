// src/Home.jsx

import React, { useState } from 'react';
import img1 from '../../assets/img1.png';
import logo1 from '../../assets/logo1.png'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faVolumeUp, faLightbulb,faSync, faExpand, faPlus} from '@fortawesome/free-solid-svg-icons';
import './Home.css'
import FaqSection from './FaqSection';


const Home = () => {
    

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slides = [
    {
      content: '9 + 6 + 7x - 2x - 3',
    },
    {
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
   
  ];
  const [activeSection, setActiveSection] = useState(null);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };
  
   

  return (
    <div className="p-8 ml-1">
      {/* Image on the left-top side */}
      <img src={img1} alt="Your Alt Text" className="w-1/3 h-auto" />
      <p className="mt-8 font-bold text-2xl text-blue-800">Relations and Functions ( Mathematics )</p>
      <div className="flex justify-center mt-8 font-bold">
        <span
          className={`mx-4 ${activeSection === 1 ? 'text-blue-800 border-b-2 border-blue-800' : 'cursor-pointer'}`}
          onClick={() => handleSectionClick(1)}
        >
          Study
        </span>
        <span
          className={`mx-4 ${activeSection === 2 ? 'text-blue-800 border-b-2 border-blue-800' : 'cursor-pointer'}`}
          onClick={() => handleSectionClick(2)}
        >
          Quiz
        </span>
        <span
          className={`mx-4 ${activeSection === 3 ? 'text-blue-800 border-b-2 border-blue-800' : 'cursor-pointer'}`}
          onClick={() => handleSectionClick(3)}
        >
          Test
        </span>
        <span
          className={`mx-4 ${activeSection === 4 ? 'text-blue-800 border-b-2 border-blue-800' : 'cursor-pointer'}`}
          onClick={() => handleSectionClick(4)}
        >
          Game
        </span>
        <span
          className={`mx-4 ${activeSection === 5 ? 'text-blue-800 border-b-2 border-blue-800' : 'cursor-pointer'}`}
          onClick={() => handleSectionClick(5)}
        >
          Others
        </span>
      </div>
      <div className="flex flex-col items-center mt-8">
        <Slider {...sliderSettings} className="bg-violet-800 relative" style={{ width: '50%', height: '250px', borderRadius: '15px' }}>
          {slides.map((slide, index) => (
            <div key={index} className="text-center text-white">
              <p className="text-3xl font-bold mt-24">{slide.content}</p>
            </div>
          ))}
        </Slider>
      </div>
      <div className="icon">
      <FontAwesomeIcon icon={faChevronLeft} className='icon1'/>
      <FontAwesomeIcon icon={faChevronRight} className='icon2'/>
      <FontAwesomeIcon icon={faVolumeUp} className='icon3'/>
      <FontAwesomeIcon icon={faLightbulb} className='icon4' />
      <FontAwesomeIcon icon={faSync}  className='icon5'/>
      <FontAwesomeIcon icon={faExpand} className='icon6'/>
    </div>
    <img src={logo1} alt="Your Alt Text" className="w-32 mt-8" />
    <div className="flex items-center txt">
    <FontAwesomeIcon icon={faPlus} className="ml-2 p-2 icon7" />
    <span className="text-xl ml-1 text-violet-800 font-bold">Create Flashcard</span> 
  </div>
  <h2 className="mt-8 text-4xl font-bold ml-4 text-violet-800">FAQ</h2>
  <FaqSection/>
    </div>
  );
};

export default Home;
