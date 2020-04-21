import { request,IRootDispatch } from 'ice';

interface ITopOffline {
  count: number;
  sn: string;
  time: number;
}

interface ITopOfflineState {
  data: ITopOffline;
}

export default {
  state: {
    data:{
      count: 0,
      sn:'',
      time: 0,
    }
  },
  effects: (dispatch: IRootDispatch) =>({
    async fetchTopOffline() {
      const res = await request('/statistics/overview/top/offline/devices');
      if (res.status === 'ok') {
        dispatch.topOffline.update({data: res.data});
      }
    },
  }),
  reducers: {
    update(prevState: ITopOfflineState, payload: ITopOfflineState) {
      return { ...prevState, ...payload };
    },
  },
};