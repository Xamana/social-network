import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import axios from 'axios';
import {getUserProfile, getStatus, updateStatus, savePhoto} from "../../Redux/profile-reducer";
import { useParams } from "react-router-dom";
import { AuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { Navigate } from 'react-router-dom';

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getUserProfile(this.props.userId);
        this.props.getStatus(this.props.userId);
    };
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.userId !== prevProps.userId){
            this.props.getUserProfile(this.props.userId);
        }
    }

    render() {
        return (
            <Profile {...this.props} />
        );
    };
    
}

let getRounterURLComonentContainer = ( props ) => {
    let {userId} = useParams();
    if (!userId) {
        userId = props.myId;
    }
    if (!userId) return <Navigate to={"/login"}/>
    return (
        <ProfileContainer {...props}
                          userId = { userId }
                          isOwner={ userId === props.myId }
        />
    );
       
};

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.userProfile,
        status: state.profilePage.status,
        myId: state.auth.userId,
    };
}

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto}),

)(getRounterURLComonentContainer)
