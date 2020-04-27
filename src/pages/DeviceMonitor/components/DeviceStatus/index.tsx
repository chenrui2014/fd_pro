import React from 'react';
import {Box,Grid} from '@alifd/next';

const {Row,Col} = Grid;

const DeviceStatus = () =>{
  return (
    <Row>
      <Col span={23}>
        <Row><span>device</span><span>离线</span></Row>
      </Col>
    </Row>
  );
}

export default DeviceStatus;