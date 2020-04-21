import React,{useEffect} from 'react';
import {store as appStore} from 'ice';
import { Card } from '@alifd/next';
import styles from './index.module.scss';

export default function DeviceStats(){
  const [deviceCount, deviceCountDispatchers] = appStore.useModel('deviceCount');
  useEffect(() => {
    deviceCountDispatchers.fetchDevicesCount();
  }, [deviceCountDispatchers]);

  return (
    <Card free className={styles.stats_bg}>
      <Card.Header title="设备" className={styles.stats_bg}/>
      <Card.Content>
        <span className={styles.online}>{deviceCount.data.online}</span>/<span>{deviceCount.data.total}</span>
      </Card.Content>
    </Card>
  );
}
