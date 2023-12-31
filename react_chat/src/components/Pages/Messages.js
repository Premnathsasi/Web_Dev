import React, { useContext, useEffect, useState } from "react";
import Message from "./Message";
import classes from "./Messages.module.css";
import { ChatContext } from "../Context/ChatContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../Firebase";

const Messages = () => {
  const [messages, setMessages] = useState([])
  const {data} = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc)=> {
      doc.exists() && setMessages(doc.data().messages)
    });

    return ()=> {
      unSub()
    }
  }, [data.chatId])
  return (
    <div className={classes.messages}>
      {messages.map((m) => (
        <Message message={m} key={m.id}/>
      ))}
    </div>
  );
};

export default Messages;
