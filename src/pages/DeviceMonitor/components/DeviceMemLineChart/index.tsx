import React from 'react';
import { Box } from '@alifd/next';
import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';

interface IDeviceMemLineChartProps {
  title: string;
  seriesName: string;
  xAxisData: string[];
  memUsedData: number[];
  memFreeData: number[];
}
export default function DeviceMemLineChart(props: IDeviceMemLineChartProps){
  const {title, seriesName,xAxisData, memUsedData, memFreeData} = props;
  const DEFAULT_OPTION = {
    backgroundColor: '#394056',
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
      trigger: 'axis', // 触发类型。[ default: 'item' ] :数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用;'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用
      axisPointer: {
        lineStyle: {
          color: '#57617B'
        }
      }
    },
    grid: {
      left: '3%', // grid 组件离容器左侧的距离。
      right: '4%', // grid 组件离容器右侧的距离。
      bottom: '10%', // grid 组件离容器下侧的距离。
      containLabel: true // grid 区域是否包含坐标轴的刻度标签[ default: false ] 
    },
    xAxis: [{
      type: 'category',
      boundaryGap: ['5%','5%'], // 坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
      axisLine: {
        lineStyle: {
          color: '#57617B' // 坐标轴线线的颜色。
        }
      },
      data: xAxisData
    }],
    yAxis: [{
      type: 'value', // 坐标轴类型。'value' 数值轴，适用于连续数据;'category' 类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据;'time' 时间轴;'log' 对数轴.
      name: '（byte）', // 坐标轴名称。
      axisTick: {
        show: true // 是否显示坐标轴刻度
      },
      axisLine: {
        lineStyle: {
          color: '#57617B' // 坐标轴线线的颜色
        }
      },
      axisLabel: {
        margin: 10, // 刻度标签与轴线之间的距离
        textStyle: {
          fontSize: 14 // 文字的字体大小
        }
      },
      splitLine: {
        lineStyle: {
          color: '#57617B' // 分隔线颜色设置
        }
      }
    }],
    series: [
      {
        name: '已使用内存',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: true,
        lineStyle: {
          normal: {
            width: 1,
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(137, 189, 27, 0.3)'
            }, {
              offset: 0.8,
              color: 'rgba(137, 189, 27, 0)'
            }], false),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10
          }
        },
        itemStyle: {
          normal: {
            color: 'rgb(137,189,27)',
            borderColor: 'rgba(137,189,27,0.2)',
            borderWidth: 12
          }
        },
        data: memUsedData
      },
      {
        name: '空闲内存',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: true,
        lineStyle: {
          normal: {
            width: 1,
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(0, 136, 212, 0.3)'
            }, {
              offset: 0.8,
              color: 'rgba(0, 136, 112, 0)'
            }], false),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10
          }
        },
        itemStyle: {
          normal: {
            color: 'rgb(0,136,212)',
            borderColor: 'rgba(0,136,212,0.2)',
            borderWidth: 12
          }
        },
        data: memFreeData
      }
    ],
  }

  return (
    <Box style={{height:300,lineHeight:300}}>
      <ReactEcharts option={DEFAULT_OPTION} style={{ height: '100%' }} />
    </Box>
  );
}