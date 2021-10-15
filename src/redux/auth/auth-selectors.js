const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserEmail = state => state.auth.user.email;

const getFetchingCurrentUser = state => state.auth.fetchingCurrentUser;

const authSelectors = {
    getIsLoggedIn,
    getUserEmail,
    getFetchingCurrentUser,
}
export default authSelectors;