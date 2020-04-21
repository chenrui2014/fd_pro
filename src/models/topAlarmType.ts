import { request, IRootDispatch } from 'ice';

interface ITopAlarmType {
  count: number;
  alertName: string;
  time: number;
}

interface ITopAlarmTypeState {
  data: ITopAlarmType;
}
export default {
  state: {
    dat:{
      count: 0,
      alertName:'',
      time: 0,
    }

  },
  effects: (dispatch: IRootDispatch) => ({
    async fetchTopAlarmType() {
      const res = await request('/statistics/overview/alarms/types');
      if (res.status === 'ok') {
        dispatch.topAlarmType.update({data:res.data});
      }
    },
  }),
  reducers: {
    update(prevState: ITopAlarmTypeState, payload: ITopAlarmTypeState) {
      return { ...prevState, ...payload };
    },
  },
};