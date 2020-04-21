import React from 'react';
import { Grid } from '@alifd/next';
import BrokerStats from '../BrokerStats';
import DeviceStats from '../DeviceStats';
import PeripheralStats from '../PeripheralStats';
import styles from './index.module.scss';

const {Row, Col} = Grid;
interface IDashBoardTitleProps {
  title: string;
}
export default function DashBoardTitle(props: IDashBoardTitleProps) {
  const {title} = props;
  return (
    <div role="grid" className={styles.title_bg}>
      <Row justify="center"><Col><h1 style={{textAlign:'center'}}>{title}</h1></Col></Row>
      <Row className={styles.title_bg}>
        <Col><DeviceStats /></Col>
        <Col><PeripheralStats /></Col>
        <Col><BrokerStats /></Col>
      </Row>
    </div>
  );
};