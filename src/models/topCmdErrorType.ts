import { request,IRootDispatch } from 'ice';

interface ITopCmdErrorType {
  count: number;
  command: string;
  time: number;
}

interface ITopCmdErrorTypeState {
  data: ITopCmdErrorType;
}

export default {
  state: {
    data:{
      count: 0,
      command:'',
      time: 0,
    }
  },
  effects: (dispatch: IRootDispatch) =>({
    async fetchTopCmdErrorType() {
      const res = await request('/statistics/overview/top/error/commands');
      if (res.status === 'ok') {
        dispatch.topCmdErrorType.update({data:res.data});
      }
    },
  }),
  reducers: {
    update(prevState: ITopCmdErrorTypeState, payload: ITopCmdErrorTypeState) {
      return { ...prevState, ...payload };
    },
  },
};