import './Work.css';
import js from '../../Images/js.png';
import html from '../../Images/html.png';
import react from '../../Images/react.jpeg';
import angular from '../../Images/angular.png';
import css from '../../Images/css.png';
import {motion} from 'framer-motion';
export default function Work(){
    const transition = {duration:2,type:'spring'}
    return(
        <>
        <div className='works' id='Experience'>
            <div className='left para'>
                <span>Worked with</span>
                <span>Technologis</span>
                <span>
                I am a proficient web developer with hands-on experience in <br/>
                HTML, CSS, and JavaScript. I specialize in front-end frameworks <br/>
                such as Angular and React creating dynamic and responsive user <br/>interfaces. 
                My expertise lies in crafting visually appealing and <br/>
                    functional web applications,combining a keen eye for design with<br/>
                     a solid technical foundation.
                </span>
                <button className=' hireme' >Hire me</button>
            </div>
            <div className='w-right'>
                <motion.div  
                initial={{rotate:45}}
                whileInView={{rotate:0}}
                viewport={{margin:'-40px'}}
                transition={{duration:2.5, type:'spring'}}
                className='w-maincircle'>
                    <div className='w-incircle'>
                        <img src={css}/>
                    </div>
                    <div className='w-incircle'>
                        <img src={html}/>
                    </div>
                    <div className='w-incircle'>
                        <img src={angular}/>
                    </div>
                    <div className='w-incircle'>
                        <img src={react}/>
                    </div>{""}
                    <div className='w-incircle'>
                        <img src={js}/>
                    </div>
                   
                </motion.div >
                <div className='w-back blue'></div>
                <div className='w-back purple'></div>
            </div>
        </div>
        </>
    )
}