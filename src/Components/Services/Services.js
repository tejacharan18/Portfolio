import './Services.css';
import heart from '../../Images/heartemoji.png';
import glass from '../../Images/glasses.png';
import humble from '../../Images/humble.png';
import Cards from '../Cards/Cards';
import Resume from './tejacharanresume.pdf';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';
import { useContext } from 'react';
export default function Services() {
    const transition = { duration: 1, type: 'spring' }
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <>
            <div className="service" id='Services'>
                <div className="left">
                    <span>My Awesome</span>
                    <span>Services</span>
                    <span>

                    </span>
                    <a href={Resume} download>
                        <button className='button'>Download Resume</button>

                    </a>

                </div>
                <div className="right">

                    <motion.div 
                    whileInView={{left:'14rem'}}
                    initial={{left:'25rem'}}
                    transition={transition}


                    style={{left: '14rem'}} >
                        <Cards emoji={heart}
                            heading={'Design'}
                            detail={'Figma,Adobe,Photoshop'}

                        />


                    </motion.div >
                    <motion.div 
                    whileInView={{left:'-4rem'}}
                    initial={{left:'-15rem'}}
                    transition={transition} 
                    style={{ top: '12rem', left: '-4rem' }} >
                        <Cards emoji={glass}
                            heading={'Developer'}
                            detail={'Html,Css,JavaScript,React'}
                            style={{ background: darkMode ? 'black' : '' }}
                        />


                    </motion.div >
                    <motion.div  
                    whileInView={{left:'12rem'}}
                    initial={{left:'25rem'}}
                    transition={transition}

                    style={{ top: '19rem', left: '12rem', background: darkMode ? 'black' : '' }} >
                        <Cards emoji={humble}
                            heading={'UI/UX'}
                            detail={'---'} />


                    </motion.div >
                    <div className='blur s-blur2' style={{ background: 'var(--purple' }}></div>
                    <div className='blur' style={{
                        background: "#C1F5FF",
                        top: '17rem',
                        width: '21rem',
                        height: '11rem',
                        left: '-50rem'
                    }}></div>
                </div>
            </div>
        </>
    )
}