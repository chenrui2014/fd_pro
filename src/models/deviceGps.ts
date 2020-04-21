import { request, IRootDispatch } from 'ice';

interface IDeviceGps {
  pos: string;
  sn: string;
  time: number;
}

interface IDeviceGpsState {
  data: IDeviceGps;
}

export default {
  state: {
    pos: '',
    sn:'',
    time: 0,
  },
  effects: (dispatch: IRootDispatch) => ({
    async fetchDeviceGps() {
      const res = await request('/statistics/live/device/gps');
      dispatch.deviceGps.update({data: res.data});
    },
  }),
  reducers: {
    update(prevState: IDeviceGpsState, payload: IDeviceGpsState) {
      return { ...prevState, ...payload };
    },
  },
};