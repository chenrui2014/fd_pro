import { request, IRootDispatch } from 'ice';

export interface IMetrics {
  messageSentCount: number;
  messageReceivedCount: number;
  packetSentCount: number;
  packetReceivedCount: number;
  byteSentCount: number;
  byteReceivedCount: number;
}
interface IStats {
  nodeCount: number;
  sessionCount: number;
  connectionCount: number;
}
interface IBrokerState  {
  data: {
    metrics: IMetrics;
    stats: IStats;
  };
}

export default {
  state: {
    data:{
      metrics: {
        messageSentCount: 0,
        messageReceivedCount: 0,
        packetSentCount: 0,
        packetReceivedCount: 0,
        byteSentCount: 0,
        byteReceivedCount: 0,
      },
      stats: {
        nodeCount: 0,
        sessionCount: 0,
        connectionCount: 0,
      },
    }
  },
  effects: (dispatch: IRootDispatch) => ({
    async fetchBrokerStats() {
      const res = await request('/v1/iotserver/monitor/brokers/stats');
      dispatch.brokerStats.update({data: res.data});
    },
  }),
  reducers: {
    update(prevState: IBrokerState, payload: IBrokerState) {
      return { ...prevState, ...payload };
    },
  },
};