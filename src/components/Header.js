import React from 'react'
import './styles/Header.css'

function Header({message}) {
  return (
    <div className='header'>
        {/* <h3>Trending on Medium</h3> */}
      <div className='header-component'>
        <div className='header-container'>

          <div className='div-number'>
            <span className='number'>01</span>
          </div>
          
          <div className='header-contain'>
            <a href='#' className='header-link' >
              <img className='header-img'  width='20' height='20' src='https://miro.medium.com/v2/resize:fill:40:40/1*2ywRkIoylLQxGKg9FshvFA.jpeg' alt='Inflect Health'></img>
              Inflect Health
            </a>

            <h2 className='header-title'>I’m an ER doctor: Here’s what I found when I asked ChatGPT to diagnose my patients</h2>

          </div>
          <div className='div-span'>
            <span className='span-date'>Apr 1</span>
            <div className='div-dot'>
              <span className='span-dot'>.</span>
            </div>
            <span className='span-read'>5 min read</span>
          </div>
        </div>

        <div className='header-container'>

          <div className='div-number'>
            <span className='number'>02</span>
          </div>
          
          <div className='header-contain'>
            <a href='#' className='header-link' >
              <img className='header-img'  width='20' height='20' src='https://miro.medium.com/v2/resize:fill:40:40/1*zSp-lkYeeSR2HDGpYouSdA.jpeg' alt='jenka'></img>
              jenka
            </a>

            <h2 className='header-title'>AI and the American Smile</h2>

          </div>
          <div className='div-span'>
            <span className='span-date'>Mar 27</span>
            <div className='div-dot'>
              <span className='span-dot'>.</span>
            </div>
            <span className='span-read'>10 min read</span>
          </div>
        </div>

        <div className='header-container'>

          <div className='div-number'>
            <span className='number'>03</span>
          </div>
          
          <div className='header-contain'>
            <a href='#' className='header-link' >
              <img className='header-img'  width='20' height='20' src='https://miro.medium.com/v2/resize:fill:40:40/1*HBnYc_3J-_5uWc2Sbnx0Jg.jpeg' alt='Obie Fernandez'></img>
              Obie Fernandez
            </a>

            <h2 className='header-title'>My kids and I just played D&D with ChatGPT4 as the DM</h2>

          </div>
          <div className='div-span'>
            <span className='span-date'>Mar 31</span>
            <div className='div-dot'>
              <span className='span-dot'>.</span>
            </div>
            <span className='span-read'>23 min read</span>
          </div>
        </div>

        <div className='header-container'>

          <div className='div-number'>
            <span className='number'>{message}02</span>
          </div>
          
          <div className='header-contain'>
            <a href='#' className='header-link' >
              <img className='header-img'  width='20' height='20' src='https://miro.medium.com/v2/resize:fill:40:40/1*QNoA3XlXLHz22zQazc0syg.png' alt='Maximilian Strauss in Better Programing'></img>
              Maximilian Strauss in Better Programing
            </a>

            <h2 className='header-title'>GPT4All: Running an Open-source ChatGPT Clone on Your Laptop</h2>

          </div>
          <div className='div-span'>
            <span className='span-date'>Mar 30</span>
            <div className='div-dot'>
              <span className='span-dot'>.</span>
            </div>
            <span className='span-read'>5 min read</span>
          </div>
        </div>

        <div className='header-container'>

          <div className='div-number'>
            <span className='number'>05</span>
          </div>
          
          <div className='header-contain'>
            <a href='#' className='header-link' >
              <img className='header-img'  width='20' height='20' src='https://miro.medium.com/v2/resize:fill:40:40/1*e1-WDgc0KCMKp_rHX9TyQQ.png' alt='The PyCoach in Artificial Corner'></img>
              The PyCoach in Artificial Corner
            </a>

            <h2 className='header-title'>You’re Using ChatGPT Wrong! Here’s How to Be Ahead of 99% of ChatGPT Users</h2>

          </div>
          <div className='div-span'>
            <span className='span-date'>Mar 17</span>
            <div className='div-dot'>
              <span className='span-dot'>.</span>
            </div>
            <span className='span-read'>6 min read</span>
          </div>
        </div>

        <div className='header-container'>

          <div className='div-number'>
            <span className='number'>06</span>
          </div>
          
          <div className='header-contain'>
            <a href='#' className='header-link' >
              <img className='header-img'  width='20' height='20' src='https://miro.medium.com/v2/resize:fill:40:40/2*ZDb-ickctyPgD2vFDAIdSA.png' alt='Sahana Singh'></img>
              Sahana Singh
            </a>

            <h2 className='header-title'>How I got my daughter to love India and stay close to her roots</h2>

          </div>
          <div className='div-span'>
            <span className='span-date'>Apr 4</span>
            <div className='div-dot'>
              <span className='span-dot'>.</span>
            </div>
            <span className='span-read'>15 min read</span>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Header
