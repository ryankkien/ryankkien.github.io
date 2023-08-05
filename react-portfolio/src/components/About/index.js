import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timer) // This is the cleanup function
  }, [])
  

  return (
    <>
      <div className="container about-page">
        <div id="blue-background">
          <div id="card-group">
            <div data-index="8" class="card-container">
                  <div class="card"></div>
              </div>
              <div data-index="7" class="card-container">
                  <div class="card"></div>
              </div>
              <div data-index="6" class="card-container">
                  <div class="card"></div>
              </div>
              <div data-index="5" class="card-container">
                  <div class="card"></div>
              </div>
              <div data-index="4" class="card-container">
                  <div class="card"></div>
              </div>
              <div data-index="3" class="card-container">
                  <div class="card"></div>
              </div>
              <div data-index="2" class="card-container">
                  <div class="card"></div>
              </div>
              <div data-index="1" class="card-container">
                  <div class="card"></div>
              </div>
          </div>
        </div>
      <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['👤','a', 'b', 'o', 'u', 't', ' ',' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a driven and passionate software engineer with a strong background in natural language processing, full stack development, and machine learning.
            At the moment, I am looking for an internship as a software engineer in any of those fields to build up my experience and knowledge.
          </p>
          <p align="LEFT">
            I have a bachelor's degree in cognitive science w/ a specialization in computation from UCLA. Here, I spent much of my time in the Language Processing Lab and UCLA's
            League of Legends team. Another pride of mine is my victory at UCLA's DataFest 2022, where my team and I won the best insight award. I do want to continue pursuing my education
            with either a masters or a PhD in computer science.
          </p>
          <p>
            If I were to describe myself in a sentence, it would be that I am always curious about everything.
            Keep looking through the site to learn more about me! I will try to update it with things I find interesting.
          </p>
        </div>

      </div>
    </>
  )
}

export default About
