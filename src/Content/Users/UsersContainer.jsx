import { connect } from "react-redux";
import Users from "./Users";
import { follow, unFollow, setUsers, setCurrentPage, setTotalCount, toogleIsLoader, getUsers, changePage } from "../../Redux/users-reducer"
import React from "react";
import { compose } from "redux";
import { getUsersSelector, getCurrentPageSelector, getPageSizeSelector, getTotalUsersCountSelector, getIsLoadingSelector, getFollowongInProgressSelector } from '../../Redux/users-selector'


class UsersC extends React.Component {

    componentDidMount() {
        
        this.props.getUsers(this.props.pageSize, this.props.currentPage);

    }

    onChagePage = (page) => {
        this.props.changePage(this.props.pageSize, page)
    }

    render() {
        return (
                <div>
                   <Users
                        follow={this.props.follow}
                        unFollow={this.props.unFollow}
                        users={this.props.users}
                        pageSize={this.props.pageSize}
                        totalUsersCount={this.props.totalUsersCount}
                        followongInProgress={this.props.followongInProgress}
                        onChagePage ={this.onChagePage } 
                        currentPage={this.props.currentPage}
                        isLoading={this.props.isLoading}
                        />
                    
                </div>
                
            
            );
    }
    

}

let mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        currentPage: getCurrentPageSelector(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        isLoading: getIsLoadingSelector(state),
        followongInProgress: getFollowongInProgressSelector(state),
        
    }
};

export default compose(
    connect(mapStateToProps, {follow, unFollow, setUsers, setCurrentPage, setTotalCount, toogleIsLoader, getUsers, changePage,}),
)(UsersC)

export const UsersContainer = (UsersC);