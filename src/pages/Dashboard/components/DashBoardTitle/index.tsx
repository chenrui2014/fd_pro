import React from 'react';
import { Grid } from '@alifd/next';
import BrokerStats from '../BrokerStats';
import DeviceStats from '../DeviceStats';
import PeripheralStats from '../PeripheralStats';
import styles from './index.module.scss';
import {IMetrics} from '../../../../models/brokerStats';
import {IDeviceCount} from '../../../../models/deviceCount'
import {IPeripheralCount} from '../../../../models/peripheralCount'

const {Row, Col} = Grid;

interface ITitleData {
  brokerStats: IMetrics;
  deviceStats: IDeviceCount;
  peripheralStats: IPeripheralCount;
}
interface IDashBoardTitleProps {
  title: string;
  data: ITitleData;
}
export default function DashBoardTitle(props: IDashBoardTitleProps) {
  const {title, data} = props;
  return (
    <div role="grid" className={styles.title_bg}>
      <Row justify="center"><Col><h1 style={{textAlign:'center'}}>{title}</h1></Col></Row>
      <Row className={styles.title_bg}>
        <Col style={{zIndex:999}}><DeviceStats title="设备" data={data.deviceStats} /></Col>
        <Col style={{zIndex:999}}><PeripheralStats title="桌牌/终端" data={data.peripheralStats}/></Col>
        <Col style={{zIndex:999}}><BrokerStats title="消息(接收/发送)" data={data.brokerStats} /></Col>
      </Row>
    </div>
  );
};