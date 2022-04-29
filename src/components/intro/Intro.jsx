import './intro.scss'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { init } from 'ityped'
import { useEffect, useRef } from 'react';

export default function Intro() {
  const textRef = useRef();


  useEffect(() => {
    init(textRef.current, { 
      showCursor: true, 
      backDelay: 1500,
      loop: false,
      backSpeed: 60,
      strings: ['Software Engineer', 'Front-end Developer', 'Programmer']
      
    })
  }, [textRef]);

  return (
    <div className='intro' id='intro'>
      <div className='left'> 
        <div className='imgContainer'>
          <img src="assets/jayden_main_pic.png" alt="img" />
        </div>
      </div>  
      <div className='right'>
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Jayden Pak</h1>
          <h3>And I'm a <span ref={textRef}></span></h3>  
        </div> 
        <a href="#portfolio">
          <KeyboardDoubleArrowDownIcon sx={{fontSize:100}} className='icon'/>
        </a>
      </div>  
    </div>
  )
}
