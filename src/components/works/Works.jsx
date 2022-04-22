
import { useState } from 'react'
import './works.scss'

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const data =[
    {
      id: '1',
      icon: './assets/reactIcon.png',
      title: 'nextDate',
      desc:
      "nextDate is a web site to get people to meet in the real world which can be challenging.",
      img: '/assets/nextDatedatePlansPage.png',
      git: 'https://github.com/jppak86/nextDate',
    },
    {
      id: '2',
      icon: './assets/pythonIcon.png',
      title: 'beCoder',
      desc:
      "beCoder is a web site to help developers to practice and track code interview questions.",
      img: '/assets/beCoderPostPage.png',
      git: 'https://github.com/jppak86/beCoder-front-end',
    },
    {
      id: '3',
      icon: './assets/nodeIcon.png',
      title: 'Spurs Best Eleven',
      desc:
      "Spurs-best-eleven is a web site to build a soccer team with customizing a team feature by adding new players.",
      img: '/assets/spe_main_index_page.png',
      git:'https://github.com/jppak86/spurs-best-eleven',
    },
    {
      id: '4',
      icon: './assets/jsIcon.png',
      title: 'snakeBob',
      desc:
      "SnakeBob is a web-based snake game which is recreated with spongebob theme.",
      img: '/assets/snakeBob.png',
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
                <div className="imgContainer">
                  <img src={d.icon} alt="" />
                 
                </div>
                <h1>{d.title}</h1>
                <p>
                  {d.desc}
                </p>
                <a href={d.git}> 
                 <img src="/assets/githubIcon.png" id="github" alt="" />
                </a>
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
