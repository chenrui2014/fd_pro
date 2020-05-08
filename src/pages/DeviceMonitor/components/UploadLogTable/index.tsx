import React, {useState,useEffect} from 'react';
import {store as appStore} from 'ice';
import {Table, Grid, Box, Pagination, Loading} from '@alifd/next';
import moment from 'moment';
import 'moment/locale/zh-cn';

import styles from './index.module.scss';

const {Row,Col} = Grid;

const limit = 10;

const UploadLogTable = () => {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [device, deviceDispatchers] = appStore.useModel('device');

  useEffect(() =>{
    deviceDispatchers.fetchDevice({sn:'',limit,page:1});
    setLoading(false);
  },[deviceDispatchers, page]);

  const tableData = device.data.list.map(item => {
    return {sn:item.sn,status:item.online,mem:item.dur,load:item.dur,onlineTime:item.onlineTime};
  })

  const onPaginationChange = (value) => {
    setLoading(true);
    setPage(value);
    deviceDispatchers.fetchDevice({sn:'',limit,page});
    setLoading(false);
  };

  const renderStatus = (value, index, record) => {
    return value?'在线':'离线';
  }

  const renderTime = (value, index, record) => {
    return moment(value * 1000).format('YYYY-MM-DD HH:mm:ss');
  }

  const columnProps = [
    {
      key:'sn',
      title:'设备号',
      render: (value,index,record) =>value
    },{
      key:'status',
      title:'设备状态',
      render:renderStatus
    },{
      key:'mem',
      title:'内存',render:(value,index,record) =>value
    },{
      key:'load',
      title:'负载',
      render:(value,index,record) =>value
    },{
      key:'onlineTime',
      title:'上线时间',
      render:renderTime
    }
  ];

  return (
    <Row>
      <Col span={24}>
        <div className={styles.Main}>
          <Loading  visible={loading} >
            <Table dataSource={tableData}
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
              共<span>{device.data.total}</span>条需求
              </div>
              <Pagination pageSize={device.data.limit}  total={device.data.total} onChange={onPaginationChange} />
            </Box>
          </Loading>
        </div>
      </Col>
    </Row>
  );
}

export default UploadLogTable;