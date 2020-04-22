import React from 'react';
import styles from './index.module.scss';
import {IMetrics} from '../../../../models/brokerStats'

interface IBrokerStatsProps {
  title: string;
  data: IMetrics;
}
export default function BrokerStats(props: IBrokerStatsProps){
  // const [brokerStats, brokerStatsDispatchers] = appStore.useModel('brokerStats');
  const { title, data } = props;
  // useEffect(() => {
  //   brokerStatsDispatchers.fetchBrokerStats();
  // }, [brokerStatsDispatchers]);

  return (
    <div className={styles.stats_bg}><span>{title}</span>: <span className={styles.online}>{data.byteSentCount}</span>/<span>{data.byteReceivedCount}</span></div>
  );
}