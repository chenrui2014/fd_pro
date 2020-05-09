import React,{useEffect} from 'react';
import {store as appStore} from 'ice';

export interface IDeviceDayActiveProps {
  days: number;
}
export default function DeviceDayActive(props: IDeviceDayActiveProps){
  const { days } = props
  const [dayActive, dayActiveDispatchers] = appStore.useModel('dayActive');
  useEffect(() => {
    dayActiveDispatchers.fetchBrokerStats({days});
  }, [dayActiveDispatchers, days]);

  return (
    <>
      <span>{dayActive.data.count}/{dayActive.data.time}</span>
    </>
  );
}