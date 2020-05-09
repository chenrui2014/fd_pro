import React from 'react';
import {Tab, ResponsiveGrid } from '@alifd/next';

function onChange(key) {
  console.log(key);
}

const { Cell } = ResponsiveGrid;

const GatewayMonitor = () => {
  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12} style={{textAlign:'center'}}>
        <Tab size='small' shape='capsule' onChange={onChange}>
          <Tab.Item title='网关分组' key='deviceList'>
          网关分组
          </Tab.Item>
          <Tab.Item title='白名单' key='runStatus'>
        白名单
          </Tab.Item>
          <Tab.Item title='当前任务列表' key='logUpload'>
        当前任务列表
          </Tab.Item>
          <Tab.Item title='任务查询' key='realTimeLog'>
        任务查询
          </Tab.Item>
        </Tab>
      </Cell>
    </ResponsiveGrid>
  );
}

export default GatewayMonitor;