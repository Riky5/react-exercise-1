import './Header.css'
import profilePic from '../images/my-photo.jpg'

function Header() {
  return (
    <header className='header'>
      <img className="profile-pic" alt="profile-pic" src={profilePic} />
      <h1>Riky Moroni</h1>
      <h4>Full-Stack Developer</h4>
      <p>riky-moroni.website</p>
      <div>
        <button>Email</button>
        <button>LinkedIn</button>
      </div>
    </header>
  )
}

export default Header;