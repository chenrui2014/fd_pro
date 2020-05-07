import React, {useState,useEffect} from 'react';
import {store as appStore} from 'ice';
import {Table, Grid, Box,Form, Pagination, Select, Loading} from '@alifd/next';
import moment from 'moment';
import 'moment/locale/zh-cn';

import styles from './index.module.scss';

const {Row,Col} = Grid;
const { Option } = Select;
const FormItem = Form.Item;

const limit = 10;

const DeviceVersionList = () => {
  const [loading, setLoading] = useState(true);
  const [comp, setComp] = useState('');
  const [page, setPage] = useState(1);
  const [deviceVersionHistory, deviceVersionHistoryDispatchers] = appStore.useModel('deviceVersionHistory');

  useEffect(() =>{
    deviceVersionHistoryDispatchers.fetchDeviceVersionHistory({sn:'', limit,comp,page:1});
    setLoading(false);
  },[comp, deviceVersionHistoryDispatchers, page]);

  const onPaginationChange = (value) => {
    setLoading(true);
    setPage(value);
    deviceVersionHistoryDispatchers.fetchDeviceVersionHistory({sn:'',comp,limit,page});
    setLoading(false);
  };

  const onCompChange = (value) =>{
    setComp(value);
    setLoading(true);
    deviceVersionHistoryDispatchers.fetchDeviceVersionHistory({sn:'',comp,limit,page});
    setLoading(false);
  }

  const renderTime = (value, index, record) => {
    return moment(value * 1000).format('YYYY-MM-DD HH:mm:ss');
  }

  const columnProps = [
    {
      key:'version',
      title:'设备版本号',
      render: (value,index,record) =>value
    },{
      key:'time',
      title:'更新时间',
      render:renderTime
    }
  ];

  return (
    <Row>
      <Col span={24}>
        <Box  padding={10}>
          <Form responsive fullWidth labelAlign="top">
            <FormItem colSpan={3} label="" >
              <Select placeholder="选择组件" onChange={onCompChange}>
                <Option value="msghub">msghub</Option>
                <Option value="msghub12">msghub12</Option>
              </Select>
            </FormItem>
          </Form>
        </Box>
        <div className={styles.Main}>
          <Loading  visible={loading} >
            <Table dataSource={deviceVersionHistory.data}
              isZebra
              rowSelection={{ columnProps: () => ({ lock: 'left' }) }}
            >
              {
                columnProps.map(col =>(
                  <Table.Column
                    cell={col.render}
                    title={col.title}
                    dataIndex={col.key}
                    key={col.key}
                  />))
              }
            </Table>
            <Box margin={[15, 0, 0, 0]} direction="row" align="center" justify="space-between">
              <div className={styles.total}>
              共<span>{deviceVersionHistory.data.total?deviceVersionHistory.data.total:0}</span>条需求
              </div>
              <Pagination pageSize={limit}  total={deviceVersionHistory.data.total?deviceVersionHistory.data.total:0} onChange={onPaginationChange} />
            </Box>
          </Loading>
        </div>
      </Col>
    </Row>
  );
}

export default DeviceVersionList;