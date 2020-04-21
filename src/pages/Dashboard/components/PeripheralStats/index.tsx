import React,{useEffect} from 'react';
import {store as appStore} from 'ice';
import { Card } from '@alifd/next';
import styles from './index.module.scss';

export default function PeripheralStats(){
  
  const [peripheralCount, peripheralCountDispatchers] = appStore.useModel('peripheralCount');

  useEffect(() => {
    peripheralCountDispatchers.fetchPeripheralCount();
  }, [peripheralCountDispatchers]);

  return (
    <Card free className={styles.stats_bg}>
      <Card.Header title="桌牌终端" className={styles.stats_bg}/>
      <Card.Content>
        <span className={styles.online}>{peripheralCount.data.online}</span>/<span>{peripheralCount.data.total}</span>
      </Card.Content>
    </Card>
  );
}