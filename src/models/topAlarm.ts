import { request, IRootDispatch } from 'ice';

interface ITopAlarmParams {
  top: number;
  level: string;
}
interface ITopAlarm {
  count: number;
  sn: string;
  time: number;
}

interface ITopAlarmState {
  data: ITopAlarm;
}

export default {
  state: {
    data:[{
      count: 0,
      sn:'',
      time: 0,
    }
    ]},
  effects: (dispatch: IRootDispatch) => ({
    async fetchTopAlarm(params: ITopAlarmParams) {
      const res = await request({
        url: '/v1/statistics/overview/top/alarm/devices',
        params
      });
      if (res.status === 'ok') {
        dispatch.topAlarm.update({data: res.data});
      }
    },
  }),
  reducers: {
    update(prevState: ITopAlarmState, payload: ITopAlarmState) {
      return { ...prevState, ...payload };
    },
  },
};