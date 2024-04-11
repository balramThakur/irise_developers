import React from 'react';
import '../CSS/CallIcon.css';
import whatsapp from '../Images/whatsapp.png';

function CallIcon() {
  return (
    <div className='call-icon'>
        <a href="//api.whatsapp.com/send?phone=919819294989"><img src={whatsapp} alt="whatsapp" srcset="" /></a>

    </div>
  )
}

export default CallIcon
