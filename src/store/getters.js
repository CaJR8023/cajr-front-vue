const getters = {
  token: state => state.user.token,
  userName: state => state.user.userName,
  userId: state => state.user.userId,
  roles: state => state.user.roles,
  introduce: state => state.user.introduce
};

export default getters;
