import './Intro.css';
import git from '../../Images/git.png';
import insta from '../../Images/insta.png';
import linked from '../../Images/liked.png';
import vector1 from '../../Images/vectors1-removebg-preview.png';
import teja from '../../Images/teja.png';
import Floating from '../Floating/Floating';
import crown from '../../Images/crowns.png';
import thumb from '../../Images/thumb.png';
import {motion} from 'framer-motion';
import glassemoji from '../../Images/glassesimoji.png';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
export default function Intro() {
const transition = {duration:2,type:'spring'}

    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
    return (
        <>
            <div className="intro" 
            >
                <div className="intro-left">
                    <div className="intro-name">
                        <span style={{
                color : darkMode? 'white':''
            }}>Hi!! I Am</span>
                        <span>Teja Charan</span>
                        <span style={{
                color : darkMode? 'white':''
            }}>
                           "I am a third-year Computer Science Engineering student 
                           at Narasaraopeta Engineering College.
                            {/* With a passion for
                            technology and innovation, I have been actively engaged in
                             diverse projects and coursework.  */}
                             My studies have equipped me
                              with a strong foundation in computer science principles, and
                               I am adept at applying them to real-world challenges.
                                Eager to contribute to the tech industry
                                {/* , I am constantly 
                                expanding my skills in areas such as software development 
                                and problem-solving */}
                                . Looking forward to leveraging my education
                                 and experiences to make meaningful contributions to the field of computer science."
                        </span>
                    </div>
                    <button className="hireme">Hire me</button>
                    <div className='f-icons intro-logos'>
                    <a href="https://github.com/tejacharan18"> <Github color='blue' size='3.5rem'/></a>
                    <a href='https://www.linkedin.com/in/dulla-teja-charan-151b6b274/'><Linkedin color='blue' size='3rem'/></a>
                    <a href='https://www.instagram.com/namedastejacharan/'><Insta color='blue' size='3rem'/></a>
    </div>
                    {/* <div className='intro-logos'>
                        <a href="https://github.com/tejacharan18"><img src={git} alt='' /></a>
                        <a href='https://www.linkedin.com/in/dulla-teja-charan-151b6b274/'><img src={linked} alt='' /></a>
                        <a href='https://www.instagram.com/namedastejacharan/'><img src={insta} alt='' /></a>
                    </div> */}
                </div>
                <div className="intro-right">
                    <img src={vector1} />
                    <img src={teja} />
                    {/* <img src={glassemoji} /> */}
                    <motion.div 
                    initial={{top:'-10%',left:'90%'}}
                    whileInView={{left:'73%'}}
                    transition={transition}


                    style={{ top: '-10%', left: '73%',
                color : darkMode? 'black':'' }}>
                        <Floating image={crown} txt1='Web' txt2='Developer' />


                    </motion.div>
                    <motion.div
                    initial={{top:'23rem',left:'20rem'}}
                    whileInView={{left:'1rem'}}
                    transition={transition}
                    
                    style={{ top: '23rem', left: '1rem',color : darkMode? 'black':'' }}>
                        <Floating image={thumb} txt1='Full Stack' txt2='Developer' />
                    </motion.div>
                    {/*blur divs*/}
                    <div className='blur' style={{background:"rgb(238 210 255"}}></div>
                    <div className='blur' style={{background:"#C1F5FF",
                top:'17rem',
                width:'21rem',
                height:'11rem',
                left:'-9rem'
                }}></div>
                </div>
            </div>
        </>
    )
}