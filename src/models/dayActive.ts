import { request, IRootDispatch } from 'ice';

interface IDayActive{
  count: number;
  time: number;
}

interface IDayActiveState {
  data: IDayActive[];
}

interface IDayActiveParams {
  days: number;
}


export default {
  state: {
    data:[{
      count: 0,
      time: 0,
    }]
  },
  effects: (dispatch: IRootDispatch) =>({
    async fetchDayActive(params: IDayActiveParams) {
      const res = await request({
        url:'/v1/statistics/overview/active/device/count',
        params
      });
      if (res.status === 'ok') {
        dispatch.dayActive.update({data: res.data});
      }
    },
  }),
  reducers: {
    update(prevState: IDayActiveState, payload: IDayActiveState) {
      return { ...prevState, ...payload };
    },
  },
};