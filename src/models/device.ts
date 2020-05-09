import { request, IRootDispatch } from 'ice';

export interface IDevice {
  activeTime: number;
  addTime: number;
  bootTime: number;
  dur: number;
  offlineTime: number;
  online: boolean;
  onlineTime: number;
  procs: string;
  reg: string;
  regTime: number;
  sn: string;
  sys: string;
  tagIds: number[];
  tagNames: string[];
  versions: string;
}

interface IDeviceParams {
  sn: string;
  limit: number;
  page: number;
}

interface IDevicePageData {
  count: number;
  limit: number;
  page: number;
  total: number;
  list: IDevice[];
}

interface IDeviceState {
  data: IDevicePageData;
}

export default {
  state: {
    data:{
      count: 1,
      limit:10,
      page:1,
      total: 1,
      list: [
        {
          activeTime: 1586316066000,
          addTime: 1586316066000,
          bootTime: 1586316066000,
          dur: 626174,
          offlineTime: 1586316066000,
          online: false,
          onlineTime: 1586316066000,
          procs: '',
          reg: '',
          regTime: 1586316066000,
          sn: '',
          sys: '',
          tagIds: [],
          tagNames: [],
          versions: '',
        }
      ]
    }
  },
  effects: (dispatch: IRootDispatch) => ({
    async fetchDevice(params?: IDeviceParams) {
      const res = await request({
        url: '/v1/iotserver/monitor/devices', 
        params
      });
      dispatch.device.update({data: res.data});
    },
  }),
  reducers: {
    update(prevState: IDeviceState, payload: IDeviceState) {
      return { ...prevState, ...payload };
    },
  },
};