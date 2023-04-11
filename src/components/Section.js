import React from 'react'
import './styles/Section.css'

function Section({message, setMessage}) {
  const switchMessage = () => {
      setMessage(message === '' ? 'selamun aleyküm' :'')
  }

  return (
    <section className='custom'>
        <div className='section'>
            <div className='sec-title'>
              <h2 className='h2'>Stay curious.</h2>
            </div>
            <div className='sec-title'>
               <h3 className='h3'>Discover Stories, thinking, and expertise from writers on any topic.</h3>
            </div>
            <div className='sec-title'>
               <button onClick={switchMessage } className='btn'>Start reading</button>
            </div>

            {message}
        </div>
    </section>
  )
}

export default Section
