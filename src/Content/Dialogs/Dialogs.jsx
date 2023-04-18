import React from 'react';
import s from './Dialogs.module.css'
import Messages from './Messages/Messages'
import { Form, Field } from 'react-final-form';
import { formSubscriptionItems } from 'final-form';

const DialogToUser = ({name, id}) => {
    return(
        <div className={s.dialogToUser}>
            {name}
        </div>
    );
};

const Dialogs = (props) => {
    let arr = props.dialogState.arr;
    let messages = props.dialogState.messages;

    let dialogsElemnts = arr.map( data => <DialogToUser name={data.name} id={data.id}/> );
    let messageElments = messages.map( data => <Messages message={data.message} id={data.id}/>);


    return (
        <div className={s.dialogs}>
            <div className={s.userDialogs}>
                {dialogsElemnts}
            </div>
            <div className={s.messages}>
                {messageElments}
                <div className={s.messageImputElement}>
                    <Form
                        onSubmit={(text) => props.addNewMessage(text.message)}
                        render={({handleSubmit}) => {
                            return (
                               <form onSubmit={handleSubmit}>
                                    <Field component='textarea' placeholder='Введите сообщение' className={s.inputMessage} name='message' />
                                    <button type={'submit'} className={s.inputButton}>submit</button>
                               </form>
                                
                            )
                        }}
                    />                     
                </div>                
            </div>          
        </div>
    );
}

export default Dialogs;
