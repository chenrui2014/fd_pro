import React from 'react';
import { Box } from '@alifd/next';
import ReactEcharts from 'echarts-for-react';
import {IDeviceOnlineHistory} from '../../../../models/deviceOnlineHistory';

interface IDeviceOnlineHistoryProps {
  title: string;
  seriesName: string;
  yCates: string[];
  xCates: string[];
  data: [number,number,number][];
  historyData: IDeviceOnlineHistory[];
}
export default function DeviceOnlineHistory(props: IDeviceOnlineHistoryProps){
  const {title, seriesName,yCates, xCates, data, historyData} = props;
  const DEFAULT_OPTION = {
    backgroundColor: '#394056',
    visualMap: {
      min: 0,
      max: 10,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: '10%',
      inRange: {
        color: [  '#286E2A','#D56869']
      },
      text: {
        color:  '#F1F1F3'
      }
    },
    title:{
      text: title,
      textStyle: {
        fontWeight: 'normal',
        fontSize: 18,
        color: '#F1F1F3'
      },
      left: '6%'
    },
    tooltip: {
      position: 'top',
      formatter(params){
        return `离线时间:<br/>${params.data[0]},${params.data[1]},${params.data[2]}`
      }
    },
    animation: false,
    grid: {
      height: '50%',
      y: '10%'
    },
    xAxis: [{
      type: 'category',
      boundaryGap: ['5%','5%'], // 坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
      axisTick: {
        show: false // 是否显示坐标轴刻度
      },
      axisLabel: {
        color: '#fff',
        fontSize: 14
      },
      data: xCates
    }],
    yAxis: {
      type: 'category', // 坐标轴类型。'value' 数值轴，适用于连续数据;'category' 类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据;'time' 时间轴;'log' 对数轴.
      data: yCates,
      axisTick: {
        show: false // 是否显示坐标轴刻度
      },
      axisLabel: {
        margin: 10, // 刻度标签与轴线之间的距离
        color: '#fff',
        fontSize: 14
      },
    },
    series: [
      {
        name: seriesName,
        type: 'heatmap',
        label: {
          normal: {
            show: true
          }
        },
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          },
        },
        data
      }
    ],
  }

  return (
    <Box style={{height:300,lineHeight:300}}>
      <ReactEcharts option={DEFAULT_OPTION} style={{ height: '100%' }} />
    </Box>
  );
}