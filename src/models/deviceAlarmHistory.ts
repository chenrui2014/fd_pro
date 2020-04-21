import { request, IRootDispatch } from 'ice';

interface IDeviceAlarmHistory {
  alertName: string;
  level: string;
  message: string;
  time: number;
}

interface IDeviceAlarmHistoryState {
  data: IDeviceAlarmHistory;
}

export default {
  state: {
    data:{
      alertName: '',
      level:'',
      message:'',
      time: 0,
    }
  },
  effects: (dispatch: IRootDispatch)=>({
    async fetchDeviceAlarmHistory() {
      const res = await request('/statistics/device/alarm/history');
      dispatch.deviceAlarmHistory.update({data: res.data});
    },
  }),
  reducers: {
    update(prevState: IDeviceAlarmHistoryState, payload: IDeviceAlarmHistoryState) {
      return { ...prevState, ...payload };
    },
  },
};