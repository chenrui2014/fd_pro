/* eslint no-plusplus:0 */
import React from 'react';
import ReactEcharts from 'echarts-for-react';
import 'echarts/lib/chart/map';
import 'echarts/map/js/china';

// var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
// const planePath = 'arrow';  
// const planePath = 'path://M.6,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705';
// const color = ['#3ed4ff', '#ffa022', '#a6c84c'];
// eslint-disable-next-line @typescript-eslint/no-explicit-any

export interface IGeoCoordMapData {
  [key: string]: [number,number];
}

export interface IData {
  name: string;
  value: number;
}

interface IMapProps {
  geoCoordMapData: IGeoCoordMapData;
  data: IData[];
}     

export default function Map(props: IMapProps) {
  const {geoCoordMapData, data} = props;

  const convertData = (itemData: IData[]) => {
    interface ITempData {
      name: string;
      value: number[];
    }
    const res: ITempData[] = [];
    for (let i = 0; i < data.length; i++) {
      const geoCoord = geoCoordMapData[itemData[i].name];
      if (geoCoord) {
        res.push({
          name: itemData[i].name,
          value: geoCoord.concat(data[i].value),
        });
      }
    }
    // 有数据的地区的名称和value值
    return res;
  } 

  const option = {
    tooltip : {
      trigger: 'item'
    },
    geo: {
      name: 'IOT物联设备分布',
      type: 'map',
      map: 'china',
      label: {
        emphasis: {
          show: false,
        },
      },
      roam:true,
      itemStyle: {
        normal: {
          areaColor: '#022548',
          borderColor: '#0DABEA',
        },
        emphasis: {
          areaColor: '#011B34',
        },
      },
    },
    series:[
      {
        name: 'IOT物联设备分布',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 1,
        rippleEffect: {
          brushType: 'stroke'
        },
        label: {
          normal: {
            show: true,
            position: 'right',
            formatter: '{b}'
          },
          emphasis: {
            formatter: '{b}',
            position: 'right',
            show: true
          }
        },
        symbolSize:8,
        hoverAnimation: true,
        itemStyle: {
          normal: {
            color: '#9ed488'
          }
        },
        data: convertData(data)
      }
    ]
  }

  return (
    <div>
      <ReactEcharts option={option} style={{height:'850px'}} />
    </div>
  );
}
