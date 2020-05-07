import { request, IRootDispatch } from 'ice';

interface IUser {
  name: string;
  department: string;
  avatar: string;
  userid: number | null;
}

interface IUsersState {
  dataSource: IUser[];
}

export default {
  state: {
    dataSource: [
      {
        name: 'default',
        department: '',
        avatar: '',
        userid: null,
      },
    ]
  },
  effects: (dispatch: IRootDispatch) => ({
    async fetchUserProfile() {
      const res = await request('/api/profile');
      dispatch.user.update({dataSource: res.data});
    },
  }),

  reducers: {
    update(prevState: IUsersState, payload: IUsersState) {
      return { ...prevState, ...payload };
    },
  },
};