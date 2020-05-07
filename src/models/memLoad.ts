import { request,IRootDispatch } from 'ice';

interface IMemloadParams {
  sn: string;
  hours: number;
}
interface IMemLoad {
  cpu_load: number;
  mem_free: number;
  mem_used: number;
  time: number;
}

interface IMemLoadState {
  data: IMemLoad;
}

export default {
  state: {
    data:[{
    // eslint-disable-next-line @typescript-eslint/camelcase
      cpu_load: 0,
      // eslint-disable-next-line @typescript-eslint/camelcase
      mem_free: 0,
      // eslint-disable-next-line @typescript-eslint/camelcase
      mem_used: 0,
      time: 0,
    }]
  },
  effects: (dispatch: IRootDispatch) =>({
    async fetchMemLoad(params: IMemloadParams) {
      const res = await request({
        url: '/v1/statistics/device/sys/history', 
        params
      });
      if (res.status === 'ok') {
        dispatch.memLoad.update({data: res.data});
      }
    },
  }),
  reducers: {
    update(prevState: IMemLoadState, payload: IMemLoadState) {
      return { ...prevState, ...payload };
    },
  },
};