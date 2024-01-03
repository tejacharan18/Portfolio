import './Cards.css'
import { themeContext } from '../../Context';
import { useContext } from 'react';
export default function Cards({emoji,heading,detail}){
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(
        <>
        <div className='Cards'
        style={{background: darkMode? 'black':''}}
        >
            <img src={emoji}/>
            <span>{heading}</span>
            <span>{detail}</span>
            <button className='learn'>Learn more</button>
        </div>
        </>
    )
    }