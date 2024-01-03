import Toggle from '../Toggle/Toggle'
import {Link} from 'react-scroll';
import './Navbar.css'
export default function Navbar() {
    return (
        <>
            <div className="nav-wrapper">
                <div className="nav-left">
                    <div className="nav-name" >Charan</div>
                    <Toggle/>
                </div>
                <div className="nav-right">
                    <div className="nav-list">
                        <ul>
                            <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'><li>Home</li></Link>
                            
                            <Link spy={true} to='Services' smooth={true} activeClass='activeClass'> <li>Services</li></Link>
                            <Link spy={true} to='Experience' smooth={true} activeClass='activeClass'><li>Experience</li> </Link>
                            <Link spy={true} to='Certifications' smooth={true} activeClass='activeClass'><li>Certifications</li></Link>
                        </ul>
                    </div>
                    <button className="contact">Contact</button>
                </div>
            </div>
        </>
    )
}