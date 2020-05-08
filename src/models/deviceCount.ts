import { request, IRootDispatch } from 'ice';

export interface IDeviceCount {
  offline: number;
  online: number;
  total: number;
}

interface IDeviceCountState {
  data: IDeviceCount;
}

export default {
  state: {
    data:{
      offline: 0,
      online: 0,
      total: 0,
    }
  },
  effects: (dispatch: IRootDispatch) =>({
    async fetchDevicesCount() {
      const res = await request('/v1/iotserver/monitor/devices/count');
      if (res.status === 'ok') {
        dispatch.deviceCount.update({data: res.data});
      }
    },
  }),
  reducers: {
    update(prevState: IDeviceCountState, payload: IDeviceCountState) {
      return { ...prevState, ...payload };
    },
  },
};