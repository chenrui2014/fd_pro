import React,{useEffect} from 'react';
import {store as appStore} from 'ice';
import { Card } from '@alifd/next';
import styles from './index.module.scss';

export default function BrokerStats(){
  const [brokerStats, brokerStatsDispatchers] = appStore.useModel('brokerStats');
  useEffect(() => {
    brokerStatsDispatchers.fetchBrokerStats();
  }, [brokerStatsDispatchers]);

  return (
    <Card free>
      <Card.Header title="消息(接收/发送)"/>
      <Card.Content>
        <span className={styles.online}>{brokerStats.data.metrics.byteSentCount}</span>/<span>{brokerStats.data.metrics.byteReceivedCount}</span>
      </Card.Content>
    </Card>
  );
}