import { request,IRootDispatch } from 'ice';

interface ITopCmdError {
  count: number;
  sn: string;
  time: number;
}
interface ITopCmdErrorState {
  data: ITopCmdError;
}
export default {
  state: {
    count: 0,
    sn:'',
    time: 0,
  },
  effects: (dispatch: IRootDispatch) => ({
    async fetchTopCmdError() {
      const res = await request('/statistics/overview/top/command/error/devices');
      if (res.status === 'ok') {
        dispatch.topCmdError.update({data:res.data});
      }
    },
  }),
  reducers: {
    update(prevState: ITopCmdErrorState, payload: ITopCmdErrorState) {
      return { ...prevState, ...payload };
    },
  },
};