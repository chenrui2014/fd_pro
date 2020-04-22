import React from 'react';
import styles from './index.module.scss';
import {IPeripheralCount} from '../../../../models/peripheralCount'

interface IPeripheralStatsProps {
  title: string;
  data: IPeripheralCount;
}
export default function PeripheralStats(props: IPeripheralStatsProps){

  const {title, data } = props;

  return (
    <div className={styles.stats_bg}><span>{title}</span>: <span className={styles.online}>{data.online}</span>/<span>{data.total}</span></div>
  );
}