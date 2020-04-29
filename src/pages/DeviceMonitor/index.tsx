import React, {useEffect} from 'react';
import {store as appStore } from 'ice';
import {Tab, ResponsiveGrid,Grid } from '@alifd/next';
import _ from 'lodash';
import moment from 'moment';
import 'moment/locale/zh-cn';
import DeviceTable from './components/DeviceTable';
import DeviceLoadLineChart from './components/DeviceLoadLineChart';
import DeviceMemLineChart from './components/DeviceMemLineChart';
import DeviceOnlineHistory from './components/DeviceOnlineHistory';

function onChange(key) {
  console.log(key);
}

const { Cell } = ResponsiveGrid;
const {Row,Col}=Grid;
const days = 7;
const DeviceMonitor = () => {

  const [memLoad, memLoadDispatcher ]= appStore.useModel('memLoad');
  const [deviceOfflineHistory, deviceOfflineHistoryDispatcher] = appStore.useModel('deviceOfflineHistory');
  const [deviceOnlineHistory, deviceOnlineHistoryDispatcher] = appStore.useModel('deviceOnlineHistory');

  useEffect(() =>{
    memLoadDispatcher.fetchMemLoad({sn:'',hours:1});
    deviceOfflineHistoryDispatcher.fetchDeviceOfflineHistory({sn:'',days});
    deviceOnlineHistoryDispatcher.fetchDeviceOnlineHistory({sn:'',days});
  },[memLoadDispatcher,deviceOfflineHistoryDispatcher,deviceOnlineHistoryDispatcher]);

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
      const startTime = moment(`${yCates[i]} ${xCates[j]}`);
      const endTime = startTime.add(1,'hours');
      let count = 0;
      historyData.forEach(item =>{
        if(startTime.unix() < item.time  && item.time < endTime.unix()){
          count++;
        }
      });
      data.push([j,i,count]);
    }
  }
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
            <Row><Col>
              <DeviceOnlineHistory title='设备上(离)线历史' seriesName='离线次数' xCates={xCates} 
                yCates={yCates} data={data} />
            </Col></Row>
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