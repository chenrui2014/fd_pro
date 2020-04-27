import { request, IRootDispatch } from 'ice';


interface ITopAlarmLevelParams {
  top: number;
  level: string;
}
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
    data:[{
      count: 0,
      alertName:'',
      time: 0,
    }
    ]},
  effects: (dispatch: IRootDispatch) => ({
    async fetchTopAlarmLevel(params: ITopAlarmLevelParams) {
      const res = await request({
        url: '/v1/statistics/overview/top/alarms',
        params
      });
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