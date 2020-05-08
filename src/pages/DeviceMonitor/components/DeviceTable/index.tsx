import React, {useState,useEffect} from 'react';
import {store as appStore} from 'ice';
import {Table,Button,Divider, Grid, Box,Form, Pagination, ResponsiveGrid, Input, Select, Icon, Loading} from '@alifd/next';
import moment from 'moment';
import 'moment/locale/zh-cn';

import styles from './index.module.scss';

const {Row,Col} = Grid;
const { Cell } = ResponsiveGrid;
const { Option } = Select;
const FormItem = Form.Item;

const limit = 10;

interface IDeviceTableProps {
  changeTab?: (tabKey: string) => void;
  selectDevice?: (record: object) => void;
}

const DeviceTable = (props: IDeviceTableProps) => {
  const {changeTab=()=>{},selectDevice=()=>{}}=props;
  const [loading, setLoading] = useState(true);
  const [deviceCode, setDeviceCode] = useState('');
  const [status, setStatus] = useState('');
  const [page, setPage] = useState(1);
  const [device, deviceDispatchers] = appStore.useModel('device');

  useEffect(() =>{
    deviceDispatchers.fetchDevice({sn:'',limit,page:1});
    setLoading(false);
  },[deviceCode, deviceDispatchers, page]);

  const tableData = device.data.list.map(item => {
    return {sn:item.sn,status:item.online,mem:item.dur,load:item.dur,onlineTime:item.onlineTime};
  })

  const deviceChange = (value) => {
    setDeviceCode(value);
  }

  const onPaginationChange = (value) => {
    setLoading(true);
    setPage(value);
    deviceDispatchers.fetchDevice({sn:'',limit,page});
    setLoading(false);
  };

  const onSearch = () => {
    setLoading(true);
    deviceDispatchers.fetchDevice({sn:deviceCode,limit:10,page:1});
    setLoading(false);
  };

  const onReset = () =>{
    setDeviceCode('');
  }

  const onStatusChange = (value) => {
    setStatus(value);
  }

  const onClick = (e) => {
    changeTab(e.target.offsetParent.name);
  }

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
  const onRowClick = (record,index,e) =>{
    selectDevice(device.data.list[index]);
  }

  return (
    <Row>
      <Col span={24}>
        <Box  padding={10}>
          <Form responsive fullWidth labelAlign="top">
            <FormItem colSpan={3} label="">
              <Input
                placeholder="输入设备号进行搜索"
                value={deviceCode}
                onChange={deviceChange}
                innerAfter={<Icon type="search" size="xs" className={styles.searchIcon} />}
              />
            </FormItem>
            <FormItem colSpan={3} label="" >
              <Select placeholder="选择状态" onChange={onStatusChange}>
                <Option value="online">在线</Option>
                <Option value="offline">离线</Option>
              </Select>
            </FormItem>
            <Cell colSpan={3} className={styles.btns}>
              <Box spacing={8} direction="row" align="flex-end" justify='center' style={{ height: '100%' }}>
                <Button type="primary" onClick={onSearch}>查询</Button>
                <Button type="secondary" onClick={onReset}>重置</Button>
              </Box>
            </Cell>
          </Form>
        </Box>
        <div className={styles.Main}>
          <Loading  visible={loading} >
            <Table dataSource={tableData}
              isZebra
              rowSelection={{ columnProps: () => ({ lock: 'left' }) }}
              onRowClick={onRowClick}
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
              <Table.Column
                title="操作"
                cell={(value, index, record) => (
                  <div className={styles.opt}>
                    <Button name='runStatus' type="primary" text onClick={onClick}>状态</Button>
                    <Divider direction="ver" />
                    <Button name='logUpload' type="primary" text onClick={onClick}>日志上传</Button>
                    <Divider direction="ver" />
                    <Button name='realTimeLog' type="primary" text onClick={onClick}>实时日志</Button>
                    <Divider direction="ver" />
                    <Button name='remoteShell' type="primary" text onClick={onClick}>shell</Button>
                    <Divider direction="ver" />
                    <Button name='cmdSearch' type="primary" text onClick={onClick}>命令</Button>
                    <Divider direction="ver" />
                    <Button name='deviceWarn' type="primary" text onClick={onClick}>告警</Button>
                  </div>
                )}
              />
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

export default DeviceTable;