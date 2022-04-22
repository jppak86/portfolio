import React from 'react'
import CV from './Jayden_Jonghwan Pak_Resume.pdf'
import './about.scss'

const CTA = () => {
  return (
    <div className='cta d-grid gap-2 col-6 mx-auto'>
      <a href={CV} target='_blank' rel='noreferrer'className='btn btn-outline-secondary'>View CV</a>
      <a href={CV} download className='btn btn-outline-secondary'>Download CV</a>
      <a href="#contact" className='btn btn-outline-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA