import s from './User.module.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
import Preloader from '../../common/Preloader/Preloader';
import Paginator from "../../common/Paginator/Paginator";

const DEFAULT_IMG = 'https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png';


const Users = (props) => {
    return (
        <div>
            <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage} onChangePage={props.onChagePage}/>
            {props.isLoading ?  <div className={s.preloader} onChangePage={props.onChagePage}><Preloader/></div>  :
                (props.users.map(user => {
                    return (
                            <div key={user.id} className={s.userContainer}>
                                <div className={s.avatar}>
                                    <div className={s.userImge}>
                                        <NavLink to={`/profile/${user.id}`}>
                                            <img src={user.photos.small ? user.photos.small : DEFAULT_IMG} alt="userPhoto" className={s.img}/>
                                        </NavLink>
                                    </div>
                                    <div>
                                        {user.followed
                                         ? <button disabled={props.followongInProgress.some(id => id === user.id)} className={s.userButton}
                                             onClick={() => { props.unFollow(user.id) }}>Unfollow</button>
                                         : <button disabled={props.followongInProgress.some(id => id === user.id)} className={s.userButton}
                                          onClick={() => { props.follow(user.id) }}>Follow</button>
                                            }
                                    </div>
                                </div>
                                <div className={s.userInfo}>
                                    <div>
                                        <div className={s.userName}>{user.name}</div>
                                        <div className={s.userStatus}>{user.status}</div>
                                    </div>
                                    <div className="">
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                    )
                })

            )}


        </div>
    );
}

export default Users;
