import React, { useState, useEffect } from 'react';
import image from "../assets/Image.png";
import "./header.css";
import sslider from './Slider';



const Header = () => {
    const [typedText, setTypedText] = useState('');
    const headerText = "Gaurav Game Designer [GGD]";
    const scrollToSection = (sectionId) => {
        const targetSection = document.querySelector(sectionId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Adjust the offset as needed
                behavior: 'smooth',
            });
        }
    };
    var texttyped=0
    useEffect(() => {
        const typeText = (text, index) => {
            
            if (index <= text.length) {
                setTypedText(text.substring(0, index));
                setTimeout(() => typeText(text, index + 1), 75); // Adjust typing speed here
                
            }
            
        };

        typeText(headerText, 0); 
        
    } , []);
   
    const handleDownloadClick = () => {
        const fileUrl = 'https://drive.google.com/file/d/1zXQh9X5MrdHf3VZr5ieniCzXquN-8OHQ/view?usp=sharing';
        const anchor = document.createElement('a');
        anchor.href = fileUrl;
        anchor.target = '_blank';
        anchor.download = 'GameDesigner_GauravBaraiResume.pdf';
        anchor.click();
        anchor.remove();
    };

    return (
        <div className='header'>
            <h1>GAURAV BARAI</h1>
            <div className="content">
                <h2>{typedText}<span>_</span></h2>
                
                <p className="fade-swipe-animation" >
                    <font size="4">Hey there! I'm Gaurav, a game designer immersed in PC and console gaming. My skills are ever-evolving, drawing inspiration from psychology, philosophy, science, and the mysteries of extraterrestrial realms. Always at the forefront of industry trends, my ultimate goal is to create my own gaming studio.</font>
                </p>
                <div className="btns">
                    <button id='btn1' className="swipe-fade-up-animation" onClick={() => scrollToSection('#slider')}>See Games I’ve Designed</button>

                    <div className="btnsDiv">
                        <button id='btn2' className='swipe-fade-down-animation' onClick={() => scrollToSection('#contact')}>Contact</button>
                        <button id='btn3' className='swipe-fade-down-animation' onClick={handleDownloadClick}>Resume</button>
                    </div>
                    
                    <p></p><p> Please Click on the Last Icon in the games section to look at Additional Documents</p>
                </div>
            </div>
            <div className="image">
                <img src={image} alt="" />
            </div>
        </div>
    );
};


     


export default Header;
