import { createSelector } from "reselect";

export const getUsers = (state) => {
      return state.usersPage.users;
}

export const getCurrentPageSelector = (state) => {
      return state.usersPage.currentPage;
}

export const getPageSizeSelector = (state) => {
      return state.usersPage.pageSize;
}
export const getTotalUsersCountSelector = (state) => {
      return state.usersPage.totalUsersCount;
}
export const getIsLoadingSelector = (state) => {
      return state.usersPage.isLoading;
}
export const getFollowongInProgressSelector = (state) => {
      return state.usersPage.followongInProgress;
}

export const getUsersSelector = createSelector(getUsers, getIsLoadingSelector, (users, isLoading) => {
      return users.filter(user => true);
})  