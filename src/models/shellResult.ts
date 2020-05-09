import { request,IRootDispatch } from 'ice';

interface IShellResult {
  Id: number;
  Command: string;
  Status: number;
  Sn: string;
  Result: number;
}

interface IShellResultState {
  data: IShellResult;
}

export default {
  state: {
    data:{
      Id:0,
      Command: '',
      Status: 0,
      Sn:'',
      Result: 0,
    }
  },
  effects: (dispatch: IRootDispatch) => ({
    async fetchShellResult() {
      const res = await request('/statistics/device/alarm/history');
      if (res.status === 'ok') {
        dispatch.shellResult.update({data:res.data});
      }
    },
  }),
  reducers: {
    update(prevState: IShellResultState, payload: IShellResultState) {
      return { ...prevState, ...payload };
    },
  },
};