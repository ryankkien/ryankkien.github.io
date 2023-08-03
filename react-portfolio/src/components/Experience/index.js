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
      <div className="container experience-page">
      <div className="text-zone">
          <h1 className = 'experience'>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['🛠️','e', 'x', 'p', 'e', 'r','i', 'e', 'n', 'c',  'e']}
              idx={15}
            />
          </h1>
        </div>
      </div>
    </>
  )
}
export default About
