import './Experience.css';
import { themeContext } from '../../Context';
import { useContext } from 'react';
export default function Experience() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <>
            <div className="experience" id='Experience' >
            <div className="achievements">
                    <div className="circle">0</div>

                    <span style={{color:darkMode? 'white ':''}}>years</span>
                    <span>Experience</span>
                </div>
                <div className="achievements">
                    <div className="circle">2 +</div>

                    <span style={{color:darkMode? 'white ':''}}>completed</span>
                    <span>Projects</span>
                </div>
                <div className="achievements">
                    <div className="circle">0</div>

                    <span style={{color:darkMode? 'white ':''}}>Companies</span>
                    <span>Worked</span>
                    
                </div>
            </div>
        </>
    )
}