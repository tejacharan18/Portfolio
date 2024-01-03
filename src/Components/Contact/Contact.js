import './Contact.css';
import emailjs from '@emailjs/browser';
import {useRef, useState} from "react";
import { themeContext } from '../../Context';
import { useContext } from 'react';
export default function Contact(){
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const form = useRef();
    const[done,setDone]=useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k0t4qfq', 'template_3ic6wr1', form.current, 'OEJ6_qe8Xi_Evcn1A')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };
    return(
        <>
        <div className='contact-form'>
            <div className='w-left'>
                <div className='left'>
                    <span>Get in touch</span>
                    <span>Contact me</span>
                    <div className='blur'>

                    </div>
                </div>
            </div>
            <div className='c-right'>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='user_name' className='user' placeholder='Name'/>
                    <input type="email" name='user_email' className='user' placeholder='Email'/>
                    <textarea name='message' className='user' placeholder='Message'/>
                    <input type='submit' value="send" className=' hireme'/>
                    <span style={{color: darkMode? 'white':''}}>{done && "Thanks for Contacting me!!"}</span>
                    <div className='blur cblur1'></div>

                </form>
            </div>
        </div>
        </>
    )
}