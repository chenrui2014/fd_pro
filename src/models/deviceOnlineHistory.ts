import { request, IRootDispatch } from 'ice';


interface IDeviceOnlineHistoryParams {
  sn: string;
  days: number;
}
export interface IDeviceOnlineHistory {
  topic: string;
  time: number;
}

interface IDeviceOnlineHistoryState {
  data: IDeviceOnlineHistory;
}
export default {
  state: {
    data:[{
      topic: '',
      time: 0,
    }]
  },
  effects: (dispatch: IRootDispatch) => ({
    async fetchDeviceOnlineHistory(params: IDeviceOnlineHistoryParams) {
      const res = await request({
        url:'/v1/statistics/device/online/history',
        params
      });
      if (res.status === 'ok') {
        dispatch.deviceOnlineHistory.update(res.data);
      }
    },
  }),
  reducers: {
    update(prevState: IDeviceOnlineHistoryState, payload: IDeviceOnlineHistoryState) {
      return { ...prevState, ...payload };
    },
  },
};