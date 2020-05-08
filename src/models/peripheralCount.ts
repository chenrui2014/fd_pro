import { request,IRootDispatch } from 'ice';

export interface IPeripheralCount {
  offline: number;
  online: number;
  total: number;
}

interface IPeripheralCountState {
  data: IPeripheralCount;
}
export default {
  state: {
    data:{
      offline: 0,
      online: 0,
      total: 0,
    }
  },
  effects: (diapatch: IRootDispatch) =>({
    async fetchPeripheralCount() {
      const res = await request('/v1/iotserver/monitor/devices/peripherals/count');
      if (res.status === 'ok') {
        diapatch.peripheralCount.update({data:res.data});
      }
    },
  }),
  reducers: {
    update(prevState: IPeripheralCountState, payload: IPeripheralCountState) {
      return { ...prevState, ...payload };
    },
  },
};