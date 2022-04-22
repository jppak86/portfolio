import './topbar.scss'
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Link } from '@mui/material';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <Link href="#intro" className="logo" color="orange" variant="h1" underline='none'>
            developer.
          </Link>
          <div className="itemContainer">
            <GitHubIcon className="icon" />
            <span>https://github.com/jppak86</span>
          </div>
          <div className="itemContainer">
            <MailOutlineIcon className="icon" />
            <span>jppak86@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}