/** @format */
import s from './UserProfile.module.css'
import React, {useState} from 'react';
import Preloader from '../../../common/Preloader/Preloader';
import ProfileStatusWithHooc from './Comonents/ProfileStatusWithHooc';
import {Form} from "react-final-form";
import TextInput from "../../../common/TextInput/TextInput";


const USER_PHOTO = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNzXYh-X4wxX1jfbPywa8HWoNGDnx1Tlo0-g&usqp=CAU';


const ChageUserProfileMode = ({setNewUserData, setOnChangeMode, profile}) => {
  return (
      <Form
          initialValues={profile || {}}
          onSubmit={(values) => {
              setNewUserData(values)
              // setOnChangeMode(false)
          }
      }
      render={({handleSubmit, form, submitting, pristine, values, submitError}) => (
          <form onSubmit={handleSubmit}>
              <b>Full Name:</b><TextInput name={'fullName'} placeholder={'add full name'}></TextInput>
              <b>About me:</b><TextInput name={'aboutMe'} placeholder={'add info about you'}></TextInput>
              <b>Looking Job:</b><TextInput name={'lookingForAJob'} type={'checkbox'}></TextInput>
              <b>My skills:</b><TextInput name={'lookingForAJobDescription'} placeholder={'send'}></TextInput>
              <div><b>Contacts:</b></div>
              <b>Github:</b><TextInput name={'contacts.github'} placeholder={'add you github profile'}></TextInput>
              <b>Vk:</b><TextInput name={'contacts.vk'} placeholder={'add you vk profile'}></TextInput>
              <b>Facebook:</b><TextInput name={'contacts.facebook'} placeholder={'add you facebook profile'}></TextInput>
              <b>Instagram:</b><TextInput name={'contacts.instagram'} placeholder={'add you instagram profile'}></TextInput>
              <b>Twitter:</b><TextInput name={'contacts.twitter'} placeholder={'add you twitter profile'}></TextInput>
              <b>Website:</b><TextInput name={'contacts.website'} placeholder={'add you website profile'}></TextInput>
              <b>Youtube:</b><TextInput name={'contacts.youtube'} placeholder={'add you youtube profile'}></TextInput>
              <b>MainLink:</b><TextInput name={'contacts.mainLink'} placeholder={'add you mainLink profile'}></TextInput>
              <div className="">
                  {submitError && <div className="">{submitError}</div>}
                  {submitError}
              </div>
              <button type={'submit'}>Save changes</button>
          </form>
      )}
      >
      </Form>
  )
}

const ShowUserInfoMode = (props) => {
    return (
        <>
            <div className={s.jobInfo}>
                <div className={s.aboutMe}><b>About me:</b>{props.profile.aboutMe}</div>
                <b>Looking Job:</b>{props.profile.lookingForAJob ? props.profile.lookingForAJobDescription: 'работу не ищет'}
            </div>
            <div className={s.contacts}>
                {Object.entries(props.profile.contacts).map(([key, value]) => {
                    if (value) { return (<div>
                        <b>{key}:</b>
                        <a href={value} className="" target={"_blank"}>{key} </a>
                    </div>) }
                })}
            </div>
        </>

    )
}
const UserProfile = (props) => {

  const [onChangeMode, setOnChangeMode] = useState(false);

  if (!props.profile) {
    return <Preloader />;
  }

  const onChangePhoto = (e) => {
    if(e.target.files.length){
      props.savePhoto(e.target.files[0])
    }
  }


  return (
    <div className={s.userProfileWrapper}>
      <div className={s.imgWrapper}>
        <img src={props.profile.photos.large ? props.profile.photos.large : USER_PHOTO} alt={s.userPhoto} width={200}  className={s.userImg}/>
        {props.isOwner && <input type={"file"} className={s.setUserImg} onChange={onChangePhoto}/>}
      </div>
      <div className={s.userContent}>
          {props.isOwner && (!onChangeMode ?
              <button onClick={() => setOnChangeMode(true)}>{"open Change mode"}</button> :
              <button onClick={() => setOnChangeMode(false)}>{"close Change mode"}</button>)}
        <div className={s.basicInfo}>
          <div className={s.userName}><h3>{props.profile.fullName}</h3></div>
          <div style={{display: "flex"}} ><b style={{marginRight: '15px'}}>Status:</b><ProfileStatusWithHooc status={props.status} updateStatus={props.updateStatus}/></div>
        </div>
          {!onChangeMode ?
              <ShowUserInfoMode {...props}/> :
              <ChageUserProfileMode
                  setNewUserData={props.setNewUserData}
                  setOnChangeMode={setOnChangeMode}
                  profile={props.profile}
              />}
      </div>
    </div>
  );
};


export default UserProfile;
