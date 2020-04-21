import { request,IRootDispatch } from 'ice';

interface IPerpheralDayOffline {
  count: number;
  time: number;
}

interface IPerpheralDayOfflineState {
  data: IPerpheralDayOffline;
}

export default {
  state: {
    data:{
      count: 0,
      time: 0,
    }
  },
  effects: (dispatch: IRootDispatch) =>({
    async fetchPeripheralDayOffline() {
      const res = await request('/statistics/overview/offline/peripheral/count');
      if (res.status === 'ok') {
        dispatch.peripheralDayOffline.update({data: res.data});
      }
    },
  }),
  reducers: {
    update(prevState: IPerpheralDayOfflineState, payload: IPerpheralDayOfflineState) {
      return { ...prevState, ...payload };
    },
  },
};