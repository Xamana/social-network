import React from 'react';
import s from './Message.module.css';
const Messages = ({id, message}) => {
    return (
        <>
            <div className={s.message}>
                {message}
            </div>
        </>
    );
}

export default Messages;
