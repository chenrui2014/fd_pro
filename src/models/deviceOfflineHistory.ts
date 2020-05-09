import { request, IRootDispatch } from 'ice';

interface IDeviceOfflineHistoryParams {
  sn: string;
  days: number;
}
interface IDeviceOfflineHistory {
  topic: string;
  time: number;
}

interface IDeviceOfflineHistoryState {
  data: IDeviceOfflineHistory;
}

export default {
  state: {
    data:[{
      topic: '',
      time: 0,
    }]
  },
  effects: (dispatch: IRootDispatch) => ({
    async fetchDeviceOfflineHistory(params: IDeviceOfflineHistoryParams) {
      const res = await request({
        url:'/v1/statistics/device/offline/history',
        params
      });
      if (res.status === 'ok') {
        dispatch.deviceOfflineHistory.update({data: res.data});
      }
    },
  }),
  reducers: {
    update(prevState: IDeviceOfflineHistoryState, payload: IDeviceOfflineHistoryState) {
      return { ...prevState, ...payload };
    },
  },
};