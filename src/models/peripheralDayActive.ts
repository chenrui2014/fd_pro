import { request,IRootDispatch } from 'ice';

interface IPeripheraDayActive {
  count: number;
  time: number;
}

interface IPeripheraDayActiveState {
  data: IPeripheraDayActive[];
}

interface IPeripheralActiveParams {
  days: number;
}


export default {
  state: {
    data:[{
      count: 0,
      time: 0,
    }]
  },
  effects: (dispatch: IRootDispatch) => ({
    async fetchPeripheralDayActive(params: IPeripheralActiveParams) {
      const res = await request({url:'/statistics/overview/active/peripheral/count', params});
      if (res.status === 'ok') {
        dispatch.peripheralDayActive.update({data:res.data});
      }
    },
  }),
  reducers: {
    update(prevState: IPeripheraDayActiveState, payload: IPeripheraDayActiveState) {
      return { ...prevState, ...payload };
    },
  },
};