import React, { useContext, useEffect, useState } from "react";
import classes from "./Chats.module.css";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../Firebase";
import { AuthContext } from "../Context/AuthContext";
import { ChatContext } from "../Context/ChatContext";

const Chats = () => {
  const [chats, setchats] = useState([]);
  const curCtx = useContext(AuthContext)
  const {dispatch} = useContext(ChatContext)

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userschats", curCtx.uid), (doc) => {
        setchats(doc.data())
      });
  
      return () =>  {
        unsub()
      }
    }
    curCtx.uid && getChats()
  }, [curCtx.uid]);

  const handleSelect = (e) => {
    dispatch({type: 'CHANGE_USER', payload:e})
  };

  return (
    <div className={classes.chats}>
      { chats && Object.entries(chats)?.sort((a,b) => b[1].date - a[1].date).map((chat) => (
        <div className={classes.userChat} key={chat[0]} onClick={() => handleSelect(chat[1].userInfo)}>
        <img
          className={classes.img}
          src={chat[1].userInfo.photoURL}
          alt="img"
        />
        <div className={classes.userChatInfo}>
          <span>{chat[1].userInfo.displayName}</span>
          <p>{chat[1].lastMessage?.text}</p>
        </div>
      </div>
      ))}
      
    </div>
  );
};

export default Chats;
