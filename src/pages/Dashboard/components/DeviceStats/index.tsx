import React from 'react';
import styles from './index.module.scss';
import {IDeviceCount} from '../../../../models/deviceCount'

interface IDeviceStatsProps {
  title: string;
  data: IDeviceCount;
}

export default function DeviceStats(props: IDeviceStatsProps){

  const {title, data } = props;

  return (
    <div className={styles.stats_bg}><span>{title}</span>: <span className={styles.online}>{data.online}</span>/<span>{data.total}</span></div>
  );
}
