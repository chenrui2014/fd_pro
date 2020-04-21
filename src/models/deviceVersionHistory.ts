import { request, IRootDispatch } from 'ice';

interface IDeviceVersion {
  version: string;
  time: number;
}

interface IDeviceVersionState {
  data: IDeviceVersion;
}

export default {
  state: {
    data:{
      version: '',
      time: 0,
    }
  },
  effects: (dispatch: IRootDispatch) => ({
    async fetchDeviceVersionHistory() {
      const res = await request('/statistics/device/version/history');
      if (res.status === 'ok') {
        dispatch.deviceVersionHistory.update({data: res.data});
      }
    },
  }),
  reducers: {
    update(prevState: IDeviceVersionState, payload: IDeviceVersionState) {
      return { ...prevState, ...payload };
    },
  },
};