import { request, IRootDispatch } from 'ice';

interface IDeviceOnlineHistory {
  topic: string;
  time: number;
}

interface IDeviceOnlineHistoryState {
  data: IDeviceOnlineHistory;
}
export default {
  state: {
    data:{
      topic: '',
      time: 0,
    }
  },
  effects: (dispatch: IRootDispatch) => ({
    async fetchDeviceOnlineHistory() {
      const res = await request('/statistics/device/online/history');
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