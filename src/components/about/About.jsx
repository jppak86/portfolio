import './about.scss'
import DevicesIcon from '@mui/icons-material/Devices';
import CTA from './CTA';

export default function About() {
  return (
    <section id='about'>
      
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src='/assets/imgjayden.png' alt="About_Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            
            <article className='about_card'>
              
              <h3>Technical Skills<br/>
              <DevicesIcon className='about_icon'/>
              </h3>
              <div className='tech-skills'>
                <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="" />
                <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="" />
                <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="" />
                <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="" />
                <img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" alt="" />
                <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="" />
                <img src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white" alt="" />
                <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="" />
                <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="" />
                <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="" />
                <img src="https://img.shields.io/badge/Sass-e874bb?style=for-the-badge&logo=sass&logoColor=white" alt="" />
                <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="" />
              </div>
            </article>
          </div>
          <p>
          I am a genuine blend of developer and detailer, I naturally get excited and passionate about all things requiring detail, problem-solving, tech, and collaborative work. I specialize in full-stack Javascript technologies (MERN stack -PostgresSQL, Express JS, React JS, Node JS) to build complete web applications with API systems.
          </p>
          <CTA/>
        </div>
      </div>
    </section>
  )
}
