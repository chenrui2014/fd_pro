import { request, IRootDispatch } from 'ice';


interface IDeviceVersionParams {
  sn: string;
  comp: string;
  limit: number;
  page: number;
}
interface IDeviceVersion {
  version: string;
  time: number;
}

interface IDeviceVersionState {
  data: IDeviceVersion;
}

export default {
  state: {
    data:[{
      version: '',
      time: 0,
    }]
  },
  effects: (dispatch: IRootDispatch) => ({
    async fetchDeviceVersionHistory(params: IDeviceVersionParams) {
      const res = await request({
        url:'/v1/statistics/device/version/history', 
        params
      });
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