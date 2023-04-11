import React, { useState, useEffect } from 'react'
import './styles/Aside.css'
function Aside() {

    const [fix, setFix] = useState(false)

    function asideFixed(){
            if(window.scrollY >= 875){
                setFix(true)
            } else {
                setFix(false)
            }
        };
    

    window.addEventListener('scroll', asideFixed)


  return (
            <aside className='aside'>
              <div className='aside-container y'>
                  <div className='aside-con'>
                    <div className='aside-header y'>
                        <div className='y'>
                            <div className='aside-text y'>
                                <h2 className='aside-h2'>Discover more of what matters to you</h2>
                            </div>
                            <div className='söl'>
                                <div className='lös'>
                                    <a href='#' className='aside-link'>
                                    <div className='aside-div'>
                                        <div>
                                            Programing
                                        </div>
                                    </div>
                                    </a>
                                </div>
                                <div className='lös'>
                                    <a href='#' className='aside-link'>
                                    <div className='aside-div'>
                                         Data Science
                                    </div>
                                    </a>
                                </div>   
                                <div className='lös'>
                                    <a href='#' className='aside-link'>
                                        
                                    <div className='aside-div'>
                                        Technology
                                    </div>
                                    </a>
                                </div>   
                                <div className='lös'>
                                    <a href='#' className='aside-link'>
                                    <div className='aside-div'>
                                        Self Improvement
                                    </div>
                                    </a>
                                </div>   
                                <div className='lös'>
                                    
                                    <a href='#' className='aside-link'>
                                    <div className='aside-div'>
                                     Writing
                                    </div>
                                    </a>
                                </div>   
                                <div className='lös'>
                                    <a href='#' className='aside-link'>
                                    <div className='aside-div'>
                                      Relationship
                                    </div>
                                    </a>
                                </div>   
                                <div className='lös'>
                                     
                                    <a href='#' className='aside-link'>
                                    <div className='aside-div'>
                                    Machine Learning
                                    </div>
                                    </a>
                                </div>   
                                <div className='lös'>
                                    <a href='#' className='aside-link'>
                                    <div className='aside-div'>
                                     Productivity
                                    </div>
                                    </a>
                                </div>   
                                <div className='lös'>
                              
                                    
                                    <a href='#' className='aside-link'>
                                    <div className='aside-div'>
                                    Politics
                                    </div>
                                    </a>
                                </div>
                            </div>
                            <div className='köl'>
                                <p className='lök'>
                                    <a href='#' className='j'>See more topics</a>
                                </p>
                            </div>
                        </div>
                    </div>
                  </div>
                  <div className='aside-menu'>
                    <div className='aside-menu-item'>
                        <a href='#' className='aside-menu-link'>
                            <p className='aside-menu-p'>Help</p>
                        </a>

                    </div>
                    <div className='aside-menu-item'>
                        <a href='#' className='aside-menu-link'>
                            <p className='aside-menu-p'>Status</p>
                        </a>

                    </div>
                    <div className='aside-menu-item'>
                        <a href='#' className='aside-menu-link'>
                            <p className='aside-menu-p'>Writers</p>
                        </a>

                    </div>
                    <div className='aside-menu-item'>
                        <a href='#' className='aside-menu-link'>
                            <p className='aside-menu-p'>Blog</p>
                        </a>

                    </div>

                    <div className='aside-menu-item'>
                        <a href='#' className='aside-menu-link'>
                            <p className='aside-menu-p'>Careers</p>
                        </a>

                    </div>
                    <div className='aside-menu-item'>
                        <a href='#' className='aside-menu-link'>
                            <p className='aside-menu-p'>Privacy</p>
                        </a>

                    </div>
                    <div className='aside-menu-item'>
                        <a href='#' className='aside-menu-link'>
                            <p className='aside-menu-p'>Terms</p>
                        </a>

                    </div>
                    <div className='aside-menu-item'>
                        <a href='#' className='aside-menu-link'>
                            <p className='aside-menu-p'>About</p>
                        </a>

                    </div>
                    <div className='aside-menu-item'>
                        <a href='#' className='aside-menu-link'>
                            <p className='aside-menu-p'>Text to speech</p>
                        </a>

                    </div>
                    
                  </div>
                  
              </div>
            
            </aside>
  )
}
export default Aside
