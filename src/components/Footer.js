import './Footer.css'
import { FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaGithubSquare } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="footer">
      <p><FaTwitterSquare /></p>
      <p><FaFacebookSquare /></p>
      <p><FaInstagramSquare /></p>
      <p><FaGithubSquare /></p>
    </footer>
  )
}