/** @format */
import s from './UserProfile.module.css'
import React from 'react';
import Preloader from '../../../common/Preloader/Preloader';
import ProfileStatusWithHooc from './Comonents/ProfileStatusWithHooc';



const UserProfile = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

Object.entries(props.profile.contacts)
  return (
    <div className={s.userProfileWrapper}>
      <div className={s.imgWrapper}>
        <img src={props.profile.photos.large} alt={s.userPhoto} width={200} />
      </div>
      <div className={s.userContent}>
        <div className={s.basicInfo}>
          <div className={s.userName}><h3>{props.profile.fullName}</h3></div>
          <div className={s.aboutMe}>{props.profile.aboutMe}</div>
          <ProfileStatusWithHooc status={props.status} updateStatus={props.updateStatus}/>
        </div>
        <div className={s.jobInfo}>
          {props.profile.lookingForAJob ? props.profile.lookingForAJobDescription: 'работу не ищет'}
        </div>
        <div className={s.contacts}>
            {Object.entries(props.profile.contacts).map(([key, value]) => {
              if (value) { return <a href={value} className="" target={"_blank"}>{key} </a> }
              })}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
