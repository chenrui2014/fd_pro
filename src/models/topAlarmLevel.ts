import { request, IRootDispatch } from 'ice';

interface ITopAlarmLevel {
  count: number;
  alertName: string;
  time: number;
}

interface ITopAlarmLevelState {
  data: ITopAlarmLevel;
}

export default {
  state: {
    data:{
      count: 0,
      alertName:'',
      time: 0,
    }
  },
  effects: (dispatch: IRootDispatch) => ({
    async fetchTopAlarmLevel() {
      const res = await request('/statistics/overview/top/alarms');
      if (res.status === 'ok') {
        dispatch.topAlarmLevel.update({data:res.data});
      }
    },
  }),
  reducers: {
    update(prevState: ITopAlarmLevelState, payload: ITopAlarmLevelState) {
      return { ...prevState, ...payload };
    },
  },
};