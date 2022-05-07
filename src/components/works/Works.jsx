
import { useState } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';
import './works.scss'

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const data =[
    {
      id: '1',
      icon: './assets/reactIcon.png',
      title: 'nextDate',
      desc1:"* Built an app to client specifications in collaboration with a team of three utilizing Git Collaboration for version control.",
      desc2:"* Maintained data for models using Mongoose and MongoDB.",
      desc3: "* Built React components to efficiently render site information, providing the user with a seamless website flow.",
      img: '/assets/nextDatedatePlansPage.png',
      url: 'https://next-date-front.herokuapp.com/login',
      git: 'https://github.com/jppak86/nextDate',
    },
    {
      id: '2',
      icon: './assets/pythonIcon.png',
      title: 'beCoder',
      desc1:"* Built back-end with full CRUD operation hitting all RESTful routes using Flask(Python framework).",
      desc2:"* Stored multiple user inputs as database information through PostgreSQL with the ability for users to update their data directly.",
      desc3: "* Employed React components to render information from a local API pertaining to user-specific posts depending on the authorization route, with the ability to update and delete data fields and saved user input through server-side PostgreSQL.",
      img: '/assets/beCoderPostPage.png',
      url: 'https://thriving-malasada-22873a.netlify.app/login',
      git: 'https://github.com/jppak86/beCoder-front-end',
    },
    {
      id: '3',
      icon: './assets/nodeIcon.png',
      title: 'Spurs Best Eleven',
      desc1:"* Built back-end application with full create, read, update, delete (CRUD) operation hitting all RESTful routes.",
      desc2:"* Utilized Sessions to program a user login and signup authentication experience.",
      desc3: "* Created a two model relational database with MongoDB to allow the app more functionality.",
      img: '/assets/spe_main_index_page.png',
      url: 'https://spurs-best-eleven.herokuapp.com/',
      git:'https://github.com/jppak86/spurs-best-eleven',
    },
    {
      id: '4',
      icon: './assets/jsIcon.png',
      title: 'snakeBob',
      desc1:"* Designed a grid-based snake game with a theme inspired by Spongebob to run on in-browser for desktop computers.",
      desc2:"* Utilized CSS and HTML properties to approximate the experience of a snake game with front-end styling considerations implemented through Grid.",
      desc3: "* Used Javascript arrow function to make a snake move on a CSS grid based game board.",
      img: '/assets/snakeBob.png',
      url: "https://snake-growth-game.surge.sh/",
      git:'https://github.com/jppak86/snake-game-project',
    },

  ];

  const handleClick = (way) =>{
    way === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
    setCurrentSlide(currentSlide < data.length -1 ? currentSlide+1 : 0);
  }

  return (
    <div className='works' id='works'>
      <div className="slider" style={{transform:`translateX(-${currentSlide *100}vw)`}}>
        {data.map(d=>(

          <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <h1>{d.title}</h1>
                <p>
                  {d.desc1}
                </p>
                <p>
                  {d.desc2}
                </p>
                <p>
                  {d.desc3}
                </p>
                <p>
                <IconButton href={d.git}target='_blank' rel='noopener noreferrer'>
                  <GitHubIcon />GITHUB REPO
                </IconButton>
                </p>
              </div>
            </div>
            <div className="right">
              <img src={d.img} alt="" />
            </div>
          </div>
        </div>
          ))
        }
      </div>
      <img src="assets/arrowIconfixed.png" className='arrow left' alt=""
      onClick={()=> handleClick("left")}
      />
      <img src="assets/arrowIconfixed.png" className='arrow right' alt="" 
      onClick={()=> handleClick()}
      />
    </div>
  )
}
