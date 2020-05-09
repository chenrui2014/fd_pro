import { request, IRootDispatch } from 'ice';

interface IDayOffline {
  count: number;
  time: number;
}

interface IDayOfflineState {
  data: IDayOffline;
}

export default {
  state: {
    data: {
      count: 0,
      time: 0,
    }
  },
  effects: (dispatch: IRootDispatch) =>({
    async fetchDayOffline() {
      const res = await request('/statistics/overview/offline/device/count');
      if (res.status === 'ok') {
        dispatch.dayOffline.update({data: res.data});
      }
    },
  }),
  reducers: {
    update(prevState: IDayOfflineState, payload: IDayOfflineState) {
      return { ...prevState, ...payload };
    },
  },
};