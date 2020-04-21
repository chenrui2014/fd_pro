import { request, IRootDispatch } from 'ice';

interface IDeviceCommandHistory {
  command: string;
  data: string;
  from: string;
  id: string;
  sn: string;
  time: number;
}

interface IDeviceCommandHistoryState {
  data: IDeviceCommandHistory;
}

export default {
  state: {
    data:{
      command: '',
      data:'',
      from:'',
      id:'',
      sn:'',
      time: 0,
    }
  },
  effects: (dispatch: IRootDispatch) => ({
    async fetchDeviceCommandHistory() {
      const res = await request('/statistics/device/command/history');
      dispatch.deviceCommandHistory.update({data: res.data});
    },
  }),
  reducers: {
    update(prevState: IDeviceCommandHistoryState, payload: IDeviceCommandHistoryState) {
      return { ...prevState, ...payload };
    },
  },
};