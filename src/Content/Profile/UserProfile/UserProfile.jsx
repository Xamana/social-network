/** @format */
import s from './UserProfile.module.css'
import React from 'react';
import Preloader from '../../../common/Preloader/Preloader';
import ProfileStatusWithHooc from './Comonents/ProfileStatusWithHooc';

const USER_PHOTO = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNzXYh-X4wxX1jfbPywa8HWoNGDnx1Tlo0-g&usqp=CAU';
const UserProfile = (props) => {
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
        <div className={s.basicInfo}>
          <div className={s.userName}><h3>{props.profile.fullName}</h3></div>
          <div className={s.aboutMe}><b>About me:</b>{props.profile.aboutMe}</div>
          <ProfileStatusWithHooc status={props.status} updateStatus={props.updateStatus}/>
        </div>
        <div className={s.jobInfo}>
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
      </div>
    </div>
  );
};

export default UserProfile;
