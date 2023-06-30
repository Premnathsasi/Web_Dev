import React, { useContext, useReducer} from "react";
import { ChatContext } from "./ChatContext";
import { AuthContext } from "./AuthContext";

const ChatContextProvider = ({children}) => {
    const curCtx = useContext(AuthContext)
    const INITAL_STATE = {
        chatId: 'null',
        user:{}
    }

    const chartReducer = (state, action) => {
        switch (action.type) {
            case 'CHANGE_USER':
                return {
                    user: action.payload,
                    chatId: curCtx.uid > action.payload.uid ? curCtx.uid + action.payload.uid : action.payload.uid + curCtx.uid,
                }
                        
            default:
                return state
            }
    };

    const [state, dispatch] = useReducer(chartReducer, INITAL_STATE)

    return (
        <ChatContext.Provider value={{data:state, dispatch}}>
            {children}
        </ChatContext.Provider>
    )

};

export default ChatContextProvider;