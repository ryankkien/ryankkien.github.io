import { useEffect, useState } from 'react'
import './index.scss'

const Experience = () => {
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
      {/* <div className="text-zone">
          <h1 className = 'experience'> */}
      <section class="cards">
<article class="card card--1">
  <div class="card__info-hover">
  </div>
  <div class="card__img"></div>
  <a href="https://observablehq.com/@ryan-kien-ws/semantify" target="_blank" rel="noopener noreferrer" class="card_link">
     <div class="card__img--hover"></div>
   </a>
  <div class="card__info">
    <span class="card__category"> project</span>
    <h3 class="card__title">semantify</h3>
  </div>
</article>
  
  
<article class="card card--2">
  <div class="card__info-hover">
  </div>
  <div class="card__img"></div>
  <a href="http://datafest.stat.ucla.edu/past-datafests/2022-asa-datafesttm-results/" target="_blank" rel="noopener noreferrer" class="card_link">
     <div class="card__img--hover"></div>
   </a>
  <div class="card__info">
    <span class="card__category"> datafest 2022</span>
    <h3 class="card__title">best insight award</h3>
  </div>
</article>  

<article class="card card--3">
  <div class="card__info-hover">
  </div>
  <div class="card__img"></div>
  <a href="http://processing.linguistics.ucla.edu/research.html" target="_blank" rel="noopener noreferrer" class="card_link">
     <div class="card__img--hover"></div>
   </a>
  <div class="card__info">
    <span class="card__category"> research</span>
    <h3 class="card__title">language processing lab @ ucla</h3>
  </div>
</article>  

<article class="card card--4">
  <div class="card__info-hover">
  </div>
  <div class="card__img"></div>
  <a href="https://www.ai.sanken.osaka-u.ac.jp" target="_blank" rel="noopener noreferrer" class="card_link">
     <div class="card__img--hover"></div>
   </a>
  <div class="card__info">
    <span class="card__category">ml research</span>
    <h3 class="card__title">osaka university frontier  lab</h3>
  </div>
</article> 

<article class="card card--5">
  <div class="card__info-hover">
  </div>
  <div class="card__img"></div>
  <a href="https://cdn.discordapp.com/attachments/320650758414532608/1135300908658475098/Screen_Shot_2023-07-30_at_1.00.25_PM.png" target="_blank" rel="noopener noreferrer" class="card_link">
     <div class="card__img--hover"></div>
   </a>
  <div class="card__info">
    <span class="card__category">wip site</span>
    <h3 class="card__title">suppstack</h3>
  </div>
</article> 

<article class="card card--6">
  <div class="card__info-hover">
  </div>
  <div class="card__img"></div>
  <a href="https://ceils.ucla.edu/learning-communities-trainings/learning-assistant-program/" target="_blank" rel="noopener noreferrer" class="card_link">
     <div class="card__img--hover"></div>
   </a>
  <div class="card__info">
    <span class="card__category">internship</span>
    <h3 class="card__title">python learning assistant</h3>
  </div>
</article> 
  
  
  
  </section>
          {/* </h1>
        </div> */}
      </div>
    </>
  )
}
export default Experience
