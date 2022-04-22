import React, { useState, useEffect } from 'react';
import PortfolioList from '../portfolioList/PortfolioList'
import './portfolio.scss'
import { allPortfolio, reactPortfolio, javascriptPortfolio, nodePortfolio, pythonPortfolio, flaskPortfolio } from '../../data';


export default function Portfolio() {
  const[selected, setSelected] = useState("node");
  const[data, setData] = useState([]);

  const list = [ 
    {
      id: 'all',
      title: 'All',
      
    },
    {
      id: 'node',
      title: 'Node.js',
    },
    {
      id: 'react',
      title: 'React.js',
    },
    {
      id: 'flask',
      title: 'Flask',
    },
    {
      id: 'javascript',
      title: 'JavaScript',
    },
    {
      id: 'python',
      title: 'Python',
    },
  ];

  useEffect(() => {
    switch(selected){
      case 'all':
        setData(allPortfolio);
        break;
      case 'node':
        setData(nodePortfolio);
        break;
      case 'react':
        setData(reactPortfolio);
        break;
      case 'flask':
        setData(flaskPortfolio);
        break;
      case 'javascript':
        setData(javascriptPortfolio);
        break;
      case 'python':
        setData(pythonPortfolio);
        break;
      default:
        setData(allPortfolio);

    }

  }, [selected])

  return (
    <div className='portfolio' id='portfolio'>
      <h1>portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList 
          title={item.title} 
          active={selected === item.id} 
          setSelected={setSelected}
          id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          
        <div className="item">
          <img src={d.img} alt="" />
          <a href={d.url}>{d.title}</a>
          <div className='skills'>Skills: {d.skills}</div>
        </div>
          
        ))}
      </div>
    </div>
  );
}
