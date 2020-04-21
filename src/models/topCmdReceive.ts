import { request, IRootDispatch } from 'ice';

interface ITopCmdReceive {
  count: number;
  sn: string;
  time: number;
}

interface ITopCmdReceiveState {
  data: ITopCmdReceive;
}

interface ITopCmdReceiveParams {
  top: number;
}

export default {
  state: {
    data:{
      count: 0,
      sn:'',
      time: 0,
    }
  },
  effects: (dispatch: IRootDispatch) => ({
    async fetchTopCmdReceive(params: ITopCmdReceiveParams) {
      const res = await request({url: '/statistics/overview/top/command/devices',params});
      if (res.status === 'ok') {
        dispatch.topCmdReceive.update({data:res.data});
      }
    },
  }),
  reducers: {
    update(prevState: ITopCmdReceiveState, payload: ITopCmdReceiveState) {
      return { ...prevState, ...payload };
    },
  },
};