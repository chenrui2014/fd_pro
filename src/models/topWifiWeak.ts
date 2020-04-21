import { request,IRootDispatch } from 'ice';

interface ITopWifiWeak {
  rssi: number;
  sn: string;
  time: number;
}

interface ITopWifiWeakState {
  data: ITopWifiWeak;
}

export default {
  state: {
    data:{
      rssi: 0,
      sn:'',
      time: 0,
    }
  },
  effects: (dispatch: IRootDispatch) => ({
    async fetchTopWifiWeak() {
      const res = await request('/statistics/overview/top/weak/wifi/devices');
      if (res.status === 'ok') {
        dispatch.topWifiWeak.update({data:res.data});
      }
    },
  }),
  reducers: {
    update(prevState: ITopWifiWeakState, payload: ITopWifiWeakState) {
      return { ...prevState, ...payload };
    },
  },
};