import React, {useEffect} from 'react';
import {store as appStore} from 'ice';
import { ResponsiveGrid, Grid } from '@alifd/next';
import Map from './components/Map';
import DashboardTitle from './components/DashBoardTitle';

const { Cell } = ResponsiveGrid;
const {Row, Col} = Grid;

const Dashboard = () => {

  const [brokerStats, brokerStatsDispatchers] = appStore.useModel('brokerStats');
  const [deviceCount, deviceCountDispatchers] = appStore.useModel('deviceCount');
  const [peripheralCount, peripheralCountDispatchers] = appStore.useModel('peripheralCount');
  useEffect(() => {
    brokerStatsDispatchers.fetchBrokerStats();
    deviceCountDispatchers.fetchDevicesCount();
    peripheralCountDispatchers.fetchPeripheralCount();
  }, [brokerStatsDispatchers,deviceCountDispatchers,peripheralCountDispatchers]);

  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12} style={{backgroundColor: '#1b253c', height:'100vh',position:'relative',color:'#fff'}}>
        <div role="grid"> 
          <Row justify="space-between" align='top'>
            <Col fixedSpan={12} style={{height:'100vh',lineHeight:'100vh'}}>统计</Col>
            <Col style={{height:'100vh',lineHeight:'100vh'}}>
              <Row style={{height:'80px',lineHeight:'80px' }}><Col> <DashboardTitle title="IOT设备运维监控" data={{brokerStats:brokerStats.data.metrics,deviceStats:deviceCount.data,peripheralStats:peripheralCount.data}}/></Col></Row>
              <Row><Col> <Map /></Col></Row>
            </Col>
            <Col fixedSpan={12} style={{height:'100vh',lineHeight:'100vh'}}>统计</Col>
          </Row>
        </div>
      </Cell>
    </ResponsiveGrid>
  );
};

export default Dashboard;
