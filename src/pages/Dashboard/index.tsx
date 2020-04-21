import React from 'react';
import { ResponsiveGrid, Grid } from '@alifd/next';
import Map from './components/Map';
import DashboardTitle from './components/DashBoardTitle';

const { Cell } = ResponsiveGrid;
const {Row, Col} = Grid;

const Dashboard = () => {
  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12} style={{backgroundColor: '#1b253c', height:'100vh',position:'relative',color:'#fff'}}>
        <div role="grid"> 
          <Row justify="space-between" align='top'>
            <Col fixedSpan={12} style={{height:'100vh',lineHeight:'100vh'}}>统计</Col>
            <Col style={{height:'100vh',lineHeight:'100vh'}}>
              <Row><Col> <DashboardTitle title="IOT设备运维监控"/></Col></Row>
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
