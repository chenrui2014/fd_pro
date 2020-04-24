import React from 'react';
import { Box } from '@alifd/next';
import ReactEcharts from 'echarts-for-react';

interface IPieChartData {
  name: string;
  value: number;
}
interface IDeviceTypePieChartProps {
  title: string;
  data: IPieChartData[];
}
const rich = {
  yellow: {
    color: '#ffc72b',
    fontSize: 30,
    padding: [5, 4],
    align: 'center'
  },
  total: {
    color: '#ffc72b',
    fontSize: 40,
    align: 'center'
  },
  white: {
    color: '#fff',
    align: 'center',
    fontSize: 14,
    padding: [21, 0]
  },
  blue: {
    color: '#49dff0',
    fontSize: 16,
    align: 'center'
  }
}
export default function DeviceTypePieChart(props: IDeviceTypePieChartProps){
  const {title, data} = props;
  const DEFAULT_OPTION = {
    title:{
      text:title,
      left:'center',
      top:'53%',
      padding:[24,0],
      textStyle:{
        color:'#fff',
        fontSize:14,
        align:'center'
      }
    },
    grid: {
      bottom: 150,
      left: 0,
      right: '10%'
    },
    tooltip: {
      trigger: 'item',
      formatter:'{b0}<br/>{c0}({d0}%)',
    },
    legend: {
      selectedMode:false,
      formatter(name) {
        let total = 0; 
        data.forEach(function(item, index, array) {
          total += item.value;
        });
        return `{total|${  total  }}`;
      },
      data: [data[0].name],
      left: 'center',
      top: 'center',
      icon: 'none',
      align:'center',
      textStyle: {
        color: '#fff',
        fontSize: 16,
        rich
      },
    },
    series: [
      {
        name: '总设备数',
        type: 'pie',
        radius: ['50%', '70%'],
        color: ['#6f81da', '#00ffb4','#c487ee', '#deb140', '#49dff0', '#034079'],
        emphasis: {
          label: {
            show: true,
            fontSize: '30',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data
      }
    ],
  }

  return (
    <Box style={{height:250,lineHeight:250}}>
      <ReactEcharts option={DEFAULT_OPTION} style={{ height: '100%' }} />
    </Box>
  );
}