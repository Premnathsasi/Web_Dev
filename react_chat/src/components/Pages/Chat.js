import React, { useContext } from "react";
import classes from "./Chat.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faUserPlus, faEllipsis} from "@fortawesome/free-solid-svg-icons";
import Messages from "./Messages";
import InputField from "./InputField";
import { ChatContext } from "../Context/ChatContext";

const Chat = () => {

  const {data} = useContext(ChatContext);

  return (
    <div className={classes.chat}>
      <div className={classes.chatInfo}>
        <span>{data.user?.displayName}</span>
        <div className={classes.chatIcons}>
          <FontAwesomeIcon className="fa-sm" icon={faVideo} />
          <FontAwesomeIcon className="fa-sm" icon={faUserPlus} />
          <FontAwesomeIcon className="fa-sm" icon={faEllipsis} />
        </div>
      </div>
      <Messages /> 
      <InputField />
    </div>
  );
};

export default Chat;
