import React, { useContext, useState } from 'react';
import classes from './InputField.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faImage } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../Context/AuthContext';
import { ChatContext } from '../Context/ChatContext';
import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db, storage } from '../../Firebase';
import {v4 as  uuid} from 'uuid'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

const InputField = () => {
    const [text, setText] = useState("")
    const [img, setImg] = useState(null)

  const curCtx = useContext(AuthContext);
  const {data} = useContext(ChatContext);

  const handleSend = async() => {
    if (img){
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img).then(
        () => {
          getDownloadURL(storageRef).then( async(downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId:curCtx.uid,
                date: Timestamp.now(),
                img: downloadURL,
              })
            });
          });
        }
      );
    }else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId:curCtx.uid,
          date: Timestamp.now(),
        })
      });
    }

    await  updateDoc(doc(db, "userschats", curCtx.uid), {
      [data.chatId + ".lastMessage"]: {
        text
      },
      [data.chatId + ".date"]: serverTimestamp()
    });

    await  updateDoc(doc(db, "userschats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text
      },
      [data.chatId + ".date"]: serverTimestamp()
    })
    setText("");
    setImg(null)
    
  };
  return (
    <div className={classes.inputField}>
      <input type='text' placeholder='type something...' value={text} onChange={(e) => setText(e.target.value)} />
      <div className={classes.send}>
      <FontAwesomeIcon icon={faImage} />
        <input type='file' style={{display: 'none'}} id='file'  onChange={(e)=> setImg(e.target.files[0])}/>
        <label htmlFor='file'>
          <FontAwesomeIcon icon={faPaperclip} />
        </label>
        <button onClick={handleSend}>send</button>
      </div>
    </div>
  )
}

export default InputField