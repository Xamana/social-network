import React from 'react';
import { Form, Field } from 'react-final-form'
import TextInput from '../../common/TextInput/TextInput';
import { maxLength, require, combineValidators } from '../../utils/validators/validators';
import { login } from '../../Redux/auth-reducer';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom'

const Login = (props) => {

      if(props.isAuth) {
            return <Navigate to={'/profile'}/>
      }

      return (
            <div>
                  <Form
                      onSubmit={(values) => props.login(values.email, values.password, values.rememberMe, values.captcha)}
                      render={({ handleSubmit, form, submitting, pristine, values, submitError }) =>
                                    <form onSubmit={handleSubmit}>
                                          <div className="">
                                                <TextInput name={'email'} placeholder={'Email'} validate={combineValidators(require, maxLength(30))}/>
                                          </div>
                                          <div className="">
                                                <TextInput  name={'password'} placeholder={'Password'} type='password' validate={combineValidators(require)}/>
                                          </div>
                                          <div className="">
                                                <TextInput  name={'rememberMe'} type={'checkbox'} >remember me</TextInput>
                                                
                                          </div>
                                          <div className="">
                                                {submitError && <div className="">{submitError}</div>}
                                          </div>
                                          <div className="">
                                                {props.captcha && 
                                                <div className="">
                                                      <img src={props.captcha}></img>
                                                      <TextInput  name={'captcha'} placeholder={'Введите капчу'}/>
                                                </div>
                                                }

                                          </div>  
                                          <div className="">
                                                <button type={'submit'}>Login</button>
                                          </div>
                                                                                                             
                                    </form>
                         }
                  />
            </div>
      );
}


const mapStateToProps = (state) => ({
      isAuth: state.auth.isAuth,
      captcha: state.auth.captcha,
})
export default connect(mapStateToProps,{login})(Login);
