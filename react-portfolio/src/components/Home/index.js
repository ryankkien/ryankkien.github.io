import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import profilePic from '../../assets/images/ryanphoto.jpeg'
import React from 'react';
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['r', 'y', 'a', 'n']
    const jobArray = ['s', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'e', 'n', 'g', 'i', 'n', 'e', 'e', 'r']

    useEffect(() => {
        const timer = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
    
        return () => clearTimeout(timer) // This is the cleanup function
      }, [])
    return(
        <div className="container home-page">
        <div className = 'text-zone'>
            <h1> 👋
            <span className = {letterClass}>h </span>
            <span className = {`${letterClass} _12`}>i,</span>
            <span className = {`${letterClass} _13`}> </span>
            <span className = {`${letterClass} _14`}>i</span>
            <span className = {`${letterClass} _15`}>'m</span>
            <br />😋
            <AnimatedLetters letterClass = {letterClass}
            strArray = {nameArray}
            idx = {16}
            />
            <br /> 💻
            <AnimatedLetters letterClass = {letterClass}
            strArray = {jobArray}
            idx = {19}
            />
            </h1>
            <h2>  machine learning researcher and web developer</h2>
            <Link to="/contact" className = 'flat-button' > contact me</Link>
            <Link to="https://drive.google.com/file/d/1mzifRuukNqnBXOlA5UiEJafnAq85EMLi/view?usp=sharing" className="flat-button" target="_blank">resume</Link>
            </div>
        <img src={profilePic} alt="Ryan" className="profile-image" />
        </div>
        
    );
}
export default Home