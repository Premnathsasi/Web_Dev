import React, { useContext, useEffect, useRef } from 'react';
import classes from './Message.module.css';
import { AuthContext } from '../Context/AuthContext';
import { ChatContext } from '../Context/ChatContext';


const Message = ({message}) => {
  const curCtx = useContext(AuthContext);
  const {data} = useContext(ChatContext);

  const ref = useRef();
  useEffect(() => {
    ref.current?.scrollIntoView({behaviour:"smooth"})
  },[message])
  const msg = `${classes.message} ${classes.owner}`;

 let secs = message.date.seconds;
  var t = new Date(1970, 0, 1); // Epoch
  const normal = t.setSeconds(secs);
  let normalDate = new Date(normal).toLocaleTimeString('en-GB',{timeZone:'UTC'})
   


  return (
    <div ref={ref} className={`${message.senderId === curCtx.uid ? msg: classes.message }`}>
      <div className={classes.messageInfo}>
        <img src={message.senderId === curCtx.uid ? curCtx.photoURL: data.user.photoURL} alt='imagess' />
        <span>{normalDate}</span>
      </div>
      <div className={classes.messageContent}>
        {message.img && <img src={message.img} alt='msg' />}
        {message.text && <p>{message.text}</p>}
      </div>

    </div>
  )
}

export default Message