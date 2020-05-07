import React,{useEffect} from 'react';
import {store as appStore} from 'ice';

export interface ITopCommandDeviceProps {
  top: number;
}
export default function TopCommandDevice(props: ITopCommandDeviceProps){
  const { top } = props
  const [topCmdReceive, topCmdReceiveDispatchers] = appStore.useModel('topCmdReceive');
  useEffect(() => {
    topCmdReceiveDispatchers.fetchBrokerStats({top});
  }, [topCmdReceiveDispatchers, top]);

  return (
    <>
      <span>{topCmdReceive.data.count}/{topCmdReceive.data.time}</span>
    </>
  );
}