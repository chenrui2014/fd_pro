import React, {useEffect} from 'react';
import {store as appStore } from 'ice';
import {Tab, ResponsiveGrid,Grid } from '@alifd/next';
import moment from 'moment';
import 'moment/locale/zh-cn';
import DeviceTable from './components/DeviceTable';
import DeviceLoadLineChart from './components/DeviceLoadLineChart';
import DeviceMemLineChart from './components/DeviceMemLineChart';

function onChange(key) {
  console.log(key);
}

const { Cell } = ResponsiveGrid;
const {Row,Col}=Grid;
const DeviceMonitor = () => {

  const [memLoad, memLoadDispatcher ]= appStore.useModel('memLoad');

  useEffect(() =>{
    memLoadDispatcher.fetchMemLoad({sn:'',hours:1});
  },[memLoadDispatcher]);

  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12} style={{textAlign:'center'}}>
        <Tab size='small' shape='capsule' onChange={onChange}>
          <Tab.Item title='所有设备' key='deviceList'>
            <DeviceTable />
          </Tab.Item>
          <Tab.Item title='运行状态' key='runStatus'>
            <Row><Col>
              <DeviceLoadLineChart title='系统负载曲线' seriesName='cpu负载' data={memLoad.data.map(item => item.cpuLoad)} xAxisData={memLoad.data.map(item =>moment(item.time * 1000).format('HH:mm'))} />
            </Col><Col><DeviceMemLineChart title='系统内存曲线' seriesName='已使用' memUsedData={memLoad.data.map(item => item.memUsed)} memFreeData={memLoad.data.map(item => item.memFree)} xAxisData={memLoad.data.map(item =>moment(item.time * 1000).format('HH:mm'))} /></Col>
            </Row>
          </Tab.Item>
          <Tab.Item title='日志上传' key='logUpload'>
        日志上传
          </Tab.Item>
          <Tab.Item title='实时日志' key='realTimeLog'>
        实时日志
          </Tab.Item>
          <Tab.Item title='远程shell' key='remoteShell'>
        远程shell
          </Tab.Item>
          <Tab.Item title='命令查询' key='cmdSearch'>
        命令查询
          </Tab.Item>
          <Tab.Item title='设备告警' key='deviceWarn'>
        设备告警
          </Tab.Item>
        </Tab>
      </Cell>
    </ResponsiveGrid>
  );
}

export default DeviceMonitor;