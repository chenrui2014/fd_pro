import React from 'react';
import {Tab, ResponsiveGrid } from '@alifd/next';
import DeviceTable from './components/DeviceTable';

function onChange(key) {
  console.log(key);
}

const { Cell } = ResponsiveGrid;

const DeviceMonitor = () => {
  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12} style={{textAlign:'center'}}>
        <Tab size='small' shape='capsule' onChange={onChange}>
          <Tab.Item title='所有设备' key='deviceList'>
            <DeviceTable />
          </Tab.Item>
          <Tab.Item title='运行状态' key='runStatus'>
        运行状态
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