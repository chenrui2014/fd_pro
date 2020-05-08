import React from 'react';
import {Box,Tag} from '@alifd/next';
import {IDevice} from '../../../../models/device';

interface IDeviceStatusProps {
  device: IDevice;
}

const DeviceStatus = (props: IDeviceStatusProps) =>{
  const {device} = props;
  const durDesc = (dur: number) => {
    if (dur < 0) {
      return '0秒';
    } else if (dur< 10) {
      return '几秒前';
    } else if (dur < 60) {
      return `${dur  }秒前`;
    } else if (dur >= 60 && dur < 60 * 60) {
      return `${parseInt(String(dur / 60), 10)  }分钟前`;
    } else if (dur >= 60 * 60 && dur < 60 * 60 * 24) {
      return `${parseInt(String(dur / (60 * 60)), 10)  }小时前`;
    } else {
      return `${parseInt(String(dur / (60 * 60 * 24)), 10)  }天前`;
    }
  };
  return (
    <Box direction="row" justify="flex-end" spacing={10} margin={[5]}>
      <Tag type="normal" size="large">{device.sn}</Tag>{device.online ? <Tag type="normal" size="large" color="green">在线({durDesc(device.dur)})</Tag> : <Tag type="normal" size="large" color="#a6a6a6">离线({durDesc(device.dur)})</Tag>}
    </Box>
  );
}

export default DeviceStatus;