import React, {useEffect} from 'react';
import {store as appStore} from 'ice';
import { ResponsiveGrid, Grid } from '@alifd/next';
import _ from 'lodash';
import moment from 'moment';
import 'moment/locale/zh-cn';
import Map, {IGeoCoordMapData, IData} from './components/Map';
import DashboardTitle from './components/DashBoardTitle';
import DeviceTypePieChart from './components/DeviceTypePieChart';
import DeviceActiveLineChart from './components/DeviceActiveLineChart';
import DeviceBarChart from './components/DeviceBarChart';

moment.locale('zh-cn');
const { Cell } = ResponsiveGrid;
const {Row, Col} = Grid;

const Dashboard = () => {

  const [brokerStats, brokerStatsDispatchers] = appStore.useModel('brokerStats');
  const [deviceCount, deviceCountDispatchers] = appStore.useModel('deviceCount');
  const [peripheralCount, peripheralCountDispatchers] = appStore.useModel('peripheralCount');
  const [dayActive, dayActiveDispatchers] = appStore.useModel('dayActive');
  const [peripheralDayActive, peripheralDayActiveDispatchers] = appStore.useModel('peripheralDayActive');
  const [deviceGps, deviceGpsDispatchers] = appStore.useModel('deviceGps');
  const [topCmdReceive, topCmdReceiveDispatchers] = appStore.useModel('topCmdReceive');
  useEffect(() => {
    brokerStatsDispatchers.fetchBrokerStats();
    deviceCountDispatchers.fetchDevicesCount();
    peripheralCountDispatchers.fetchPeripheralCount();
    dayActiveDispatchers.fetchDayActive({days:7});
    peripheralDayActiveDispatchers.fetchPeripheralDayActive({days:7});
    deviceGpsDispatchers.fetchDeviceGps({sn:'test'});
    topCmdReceiveDispatchers.fetchTopCmdReceive({top:5});
  }, [brokerStatsDispatchers,deviceCountDispatchers,peripheralCountDispatchers,dayActiveDispatchers,peripheralDayActiveDispatchers,deviceGpsDispatchers,topCmdReceiveDispatchers]);

  const geoCoordMapData: IGeoCoordMapData = {}

  deviceGps.data.forEach(item => {
    interface ILocation {
      lat: number;
      lng: number;
    }
    const pos: ILocation = JSON.parse(item.pos);
    geoCoordMapData[item.sn] = [pos.lng, pos.lat];
  });

  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12} style={{backgroundColor: '#1b253c', height:'100vh',position:'relative',color:'#fff'}}>
        <div role="grid"> 
          <Row justify="space-between" align='top'>
            <Col fixedSpan={12} style={{height:'100vh',lineHeight:'100vh'}}>
              <Row><Col><DeviceTypePieChart title="总设备数" data={[{name:'设备',value:deviceCount.data.total},{name:'终端', value:peripheralCount.data.total}]} /></Col></Row>
              <Row><Col><DeviceActiveLineChart title="7日设备活跃数" seriesName="设备活跃数" data={dayActive.data.map(item => item.count)} xAxisData={dayActive.data.map(item =>moment(item.time * 1000).format('MM-DD'))} /></Col></Row>
              <Row><Col><DeviceActiveLineChart title="7日终端活跃数" seriesName="终端活跃数" data={peripheralDayActive.data.map(item => item.count)} xAxisData={peripheralDayActive.data.map(item =>moment(item.time * 1000).format('MM-DD'))} /></Col></Row>
              <Row><Col><DeviceBarChart title="接受命令最多设备top5" seriesName="接收命令数" data={_.sortBy(topCmdReceive.data, function(item){
                return -item.count
              }).map(item => item.count)} yAxisData={topCmdReceive.data.map(item => item.sn)} /></Col></Row>
            </Col>
            <Col style={{height:'100vh',lineHeight:'100vh'}}>
              <Row style={{height:'80px',lineHeight:'80px' }}><Col> <DashboardTitle title="IOT设备运维监控" data={{brokerStats:brokerStats.data.metrics,deviceStats:deviceCount.data,peripheralStats:peripheralCount.data}}/></Col></Row>
              <Row><Col> <Map geoCoordMapData={geoCoordMapData} data={deviceGps.data.map(item => {
                const dataItem: IData = {name:item.sn,value:10}
                return dataItem
              })} /></Col></Row>
            </Col>
            <Col fixedSpan={12} style={{height:'100vh',lineHeight:'100vh'}}>统计</Col>
          </Row>
        </div>
      </Cell>
    </ResponsiveGrid>
  );
};

export default Dashboard;
