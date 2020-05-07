import { request, IRootDispatch } from 'ice';

interface IDeviceGps {
  pos: string;
  sn: string;
  time: number;
}

interface IDeviceGpsParams {
  sn: string;
}

interface IDeviceGpsState {
  data: IDeviceGps;
}

export default {
  state: {
    data:[{
      pos: '{"lat":40.57,"lng":116.9}',
      sn:'test',
      time: 0,
    }]
  },
  effects: (dispatch: IRootDispatch) => ({
    async fetchDeviceGps(params?: IDeviceGpsParams) {
      const res = await request({
        url: '/v1/statistics/live/device/gps', 
        params
      });
      dispatch.deviceGps.update({data: res.data});
    },
  }),
  reducers: {
    update(prevState: IDeviceGpsState, payload: IDeviceGpsState) {
      return { ...prevState, ...payload };
    },
  },
};