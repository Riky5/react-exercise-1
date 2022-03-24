import './Header.css';
import profilePic from '../images/my-photo.jpg';
import { FaLinkedin } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

function Header() {
  return (
    <header className='header'>
      <img className="profile-pic" alt="profile-pic" src={profilePic} />
      <h1>Riky Moroni</h1>
      <h4>Full-Stack Developer</h4>
      <p>riky-moroni.website</p>
      <div className='buttons-box'>
        <button><GrMail className='email' />Email</button>
        <button><FaLinkedin className='linkedin' />LinkedIn</button>
      </div>
    </header>
  )
}

export default Header;