import React, {useEffect, useState} from 'react';
import {store as appStore } from 'ice';
import {Tab, ResponsiveGrid,Grid } from '@alifd/next';
import _ from 'lodash';
import moment from 'moment';
import 'moment/locale/zh-cn';
import DeviceStatus from './components/DeviceStatus';
import DeviceTable from './components/DeviceTable';
import DeviceLoadLineChart from './components/DeviceLoadLineChart';
import DeviceMemLineChart from './components/DeviceMemLineChart';
import DeviceOnlineHistory from './components/DeviceOnlineHistory';
import DeviceVersionList from './components/DeviceVersionList';
import {IDevice} from '../../models/device';

const { Cell } = ResponsiveGrid;
const {Row,Col}=Grid;
const days = 7;
const DEFAULT_DEVICE: IDevice = {
  activeTime: 1586316066000,
  addTime: 1586316066000,
  bootTime: 1586316066000,
  dur: 626174,
  offlineTime: 1586316066000,
  online: false,
  onlineTime: 1586316066000,
  procs: '',
  reg: '',
  regTime: 1586316066000,
  sn: '',
  sys: '',
  tagIds: [],
  tagNames: [],
  versions: '',
}
const DeviceMonitor = () => {

  const [tabKey, setTabKey] = useState('deviceList');
  const [device,setDevice] = useState(DEFAULT_DEVICE);
  const [memLoad, memLoadDispatcher ]= appStore.useModel('memLoad');
  const [deviceOfflineHistory, deviceOfflineHistoryDispatcher] = appStore.useModel('deviceOfflineHistory');
  const [deviceOnlineHistory, deviceOnlineHistoryDispatcher] = appStore.useModel('deviceOnlineHistory');

  useEffect(() =>{
    if(!_.isEmpty(device.sn)){
      memLoadDispatcher.fetchMemLoad({sn:device.sn,hours:1});
      deviceOfflineHistoryDispatcher.fetchDeviceOfflineHistory({sn:device.sn,days});
      deviceOnlineHistoryDispatcher.fetchDeviceOnlineHistory({sn:device.sn,days});
    }
  },[memLoadDispatcher,deviceOfflineHistoryDispatcher,deviceOnlineHistoryDispatcher,device]);

  const historyData = _.sortBy(deviceOnlineHistory.data.concat(deviceOfflineHistory.data),function(item){
    return -item.time;
  });
  const yCates: string[]=[];
  for(let i = 0; i < days; i++){
    yCates.push(moment().subtract(i,'days').format('LL'));
  }
  const xCates: string[] = ['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00'];
  const data: [number,number,number][] = []
  for(let i = yCates.length-1; i >= 0 ; i--){
    for(let j=0; j<xCates.length; j++){
      const startTime = moment(`${yCates[i]} ${xCates[j]}`,'YYYY年MM月DD日 HH:mm');
      let count = 0;
      historyData.forEach(item =>{
        if(startTime.unix() < item.time  && item.time < (startTime.unix() + 3600)){
          count++;
        }
      });
      data.push([j,i,count]);
    }
  }

  const onChange = (key) => {
    console.log(key);
    setTabKey(key)
  }
  const selectDevice = (selDevice: IDevice)=>{
    setDevice(selDevice);
  }

  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12} style={{textAlign:'center'}}>
        <Tab size='small' shape='capsule' activeKey={tabKey} onChange={onChange}>
          <Tab.Item title='所有设备' key='deviceList'>
            <DeviceTable changeTab={onChange} selectDevice={selectDevice} />
          </Tab.Item>
          <Tab.Item title='运行状态' key='runStatus'>
            <Row><Col><DeviceStatus device={device} /></Col></Row>
            <Row><Col>
              <DeviceLoadLineChart title='系统负载曲线' seriesName='cpu负载' data={memLoad.data.map(item => item.cpuLoad)} xAxisData={memLoad.data.map(item =>moment(item.time * 1000).format('HH:mm'))} />
            </Col><Col><DeviceMemLineChart title='系统内存曲线' seriesName='已使用' memUsedData={memLoad.data.map(item => item.memUsed)} memFreeData={memLoad.data.map(item => item.memFree)} xAxisData={memLoad.data.map(item =>moment(item.time * 1000).format('HH:mm'))} /></Col>
            </Row>
            <Row><Col>
              <DeviceOnlineHistory title='设备上(离)线历史' seriesName='离线次数' xCates={xCates} 
                yCates={yCates} data={data} historyData={historyData} />
            </Col></Row>
            <Row><Col><DeviceVersionList device={device} /></Col></Row>
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