import './Footer.css';
import foot from '../../Images/vectorss2.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
export default function Footer()
{
    return(
        <>
        <div className='footer'>
<img src={foot} style={{width:'100%'}}/>
<div className='f-content'>
    <span>Tejacharantc1234@gmail.com</span>
    <div className='f-icons i'>
        <Insta color='white' size='3rem'/>
        <Github color='white' size='3rem'/>
        <Linkedin color='white' size='3rem'/>
    </div>
</div>
        </div>
        </>
    )
}