import { request, IRootDispatch } from 'ice';


interface IPeripheralLiveActive {
  count: number;
  time: number;
}

interface IPeripheralLiveActiveState {
  data: IPeripheralLiveActive;
}

export default {
  state: {
    data:{
      count: 0,
      time: 0,
    }
  },
  effects: (dispatch: IRootDispatch) =>({
    async fetchPeripheralLiveActive() {
      const res = await request('/statistics/overview/active/peripheral/live/count');
      if (res.status === 'ok') {
        dispatch.peripheralLiveActive.update({data: res.data});
      }
    },
  }),
  reducers: {
    update(prevState: IPeripheralLiveActiveState, payload: IPeripheralLiveActiveState) {
      return { ...prevState, ...payload };
    },
  },
};