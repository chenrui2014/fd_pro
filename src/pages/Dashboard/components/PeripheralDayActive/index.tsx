import React,{useEffect} from 'react';
import {store as appStore} from 'ice';

export interface IPeripheralDayActiveProps {
  days: number;
}
export default function PeripheralDayActive(props: IPeripheralDayActiveProps){
  const { days } = props
  const [peripheralDayActive, peripheralDispatchers] = appStore.useModel('peripheralDayActive');
  useEffect(() => {
    peripheralDispatchers.fetchBrokerStats({days});
  }, [peripheralDispatchers, days]);

  return (
    <>
      <span>{peripheralDayActive.data.count}/{peripheralDayActive.data.time}</span>
    </>
  );
}