import React from 'react';
import { Field } from 'react-final-form';

const TestInputComponent = props => {

      const {
            input,
            meta,
            children,
            ...rest
      } = props;

      const isTextArea = input.type === 'textarea';
      const {type, ...inputWithoutType} = input;

      const inputProps = isTextArea ? 
            {
                  ...inputWithoutType,
                  ...rest,
            } : {
                  type,
                  ...inputWithoutType,
                  ...rest,
            };


      return(
            <div>
                  {isTextArea ? <textarea {...inputProps} /> : <input  {...inputProps}/>}
                  {children}
                  {meta.error && meta.touched && <span>{meta.error}</span>}
            </div>
      )
}



const TextInput = (props) => {
      return <Field component={TestInputComponent} {...props}/>
}

export default TextInput;
