import { request, IRootDispatch } from 'ice';

interface IDeviceOfflineHistory {
  topic: string;
  time: number;
}

interface IDeviceOfflineHistoryState {
  data: IDeviceOfflineHistory;
}

export default {
  state: {
    data:{
      topic: '',
      time: 0,
    }
  },
  effects: (dispatch: IRootDispatch) => ({
    async fetchDeviceOfflineHistory() {
      const res = await request('/statistics/device/offline/history');
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