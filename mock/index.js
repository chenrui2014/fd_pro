module.exports = {
  // 获得mqtt代理状态
  'GET /v1/iotserver/monitor/brokers/stats': { 
    status:'ok',
    data: {
      'metrics': {
        'messageSentCount': 23247,
        'messageReceivedCount': 66452,
        'packetSentCount': 58174,
        'packetReceivedCount': 101347,
        'byteSentCount': 3315420,
        'byteReceivedCount': 9280059
      },
      'stats': {
        'nodeCount': 1,
        'sessionCount': 1,
        'connectionCount': 1
      } },
  },
  // 获得设备在线统计
  'GET /v1/iotserver/monitor/devices/count':  {
    status: 'ok',
    data: {
      'offline': 1,
      'online': 3,
      'total': 6
    } 
  },
  'GET /v1/statistics/overview/active/device/count': (req, res) => {
    const { days } = req.params;
    console.log(days);
    res.send({ 
      status: 'ok',
      code: 200,
      data: [
        {
          'count': 5,
          'time': 1584979200
        }, {
          'count': 15,
          'time': 1585065600
        }, {
          'count': 8,
          'time': 1585152000
        }, {
          'count': 25,
          'time': 1585238400
        }, {
          'count': 10,
          'time': 1585324800
        }, {
          'count': 54,
          'time': 1585411200
        }, {
          'count': 23,
          'time': 1585497600
        }
      ]
    });
  },
  'GET /v1/statistics/overview/offline/device/count': (req, res) => {
    const { days } = req.params;
    console.log(days);
    res.send({ 
      status: 'ok',
      code: 200,
      data: [
        {
          'count': 211,
          'time': 1585411200
        },
        {
          'count': 0,
          'time': 1585497600
        }
      ]
    });
  },

  'GET /v1/statistics/overview/top/offline/devices': (req, res) => {
    const { days,top } = req.params;
    console.log(days);
    console.log(top);
    res.send({ 
      status: 'ok',
      code: 200,
      data: [
        {
          'count': 3,
          'sn': 'BOECLOUD-CLOUD-1',
          'time': 1585411200
        },
        {
          'count': 2,
          'sn': '9CF6DDBF4637',
          'time': 1585411200
        },
        {
          'count': 2,
          'sn': 'BOECLOUD-CLOUD-2',
          'time': 1585411200
        }
      ]
    });
  },

  'GET /v1/statistics/overview/top/alarm/devices': (req, res) => {
    const { top, level } = req.params;
    console.log(level);
    console.log(top);
    res.send({ 
      status: 'ok',
      code: 200,
      data: [
        {
          'count': 94,
          'sn': 'IOT-161',
          'time': 1585411200
        },
        {
          'count': 264,
          'sn': 'IOT-110',
          'time': 1585411200
        },
        {
          'count': 294,
          'sn': 'IOT-1',
          'time': 1585411200
        },
        {
          'count': 154,
          'sn': 'IOT-22',
          'time': 1585411200
        },
        {
          'count': 194,
          'sn': 'IOT-12',
          'time': 1585411200
        }
      ]
    });
  },

  'GET /v1/statistics/overview/top/alarms': (req, res) => {
    const { top, level } = req.params;
    console.log(level);
    console.log(top);
    res.send({ 
      status: 'ok',
      code: 200,
      data: [
        {
          'count': 180,
          'alertName': 'alert_memory',              
          'time': 1585324800
        },
        {
          'count': 120,
          'alertName': 'alert_load',              
          'time': 1585324800
        },
        {
          'count': 100,
          'alertName': 'alert_offline',              
          'time': 1585324800
        },
        {
          'count': 200,
          'alertName': 'alert_net',              
          'time': 1585324800
        },
        {
          'count': 140,
          'alertName': 'alert_cmd',              
          'time': 1585324800
        }                          
      ]
    });
  },

  'GET /v1/statistics/overview/alarms/types': (req, res) => {
    const { days } = req.params;
    console.log(days);
    res.send({ 
      status: 'ok',
      code: 200,
      data: [
        {
          'count': 180,
          'alertName': 'alert_memory_monitor',              
          'time': 1585324800
        },
        {
          'count': 120,
          'alertName': 'alert_load_monitor',              
          'time': 1585324800
        },
        {
          'count': 100,
          'alertName': 'alert_offline_monitor',              
          'time': 1585324800
        },
        {
          'count': 80,
          'alertName': 'alert_weakwifi_monitor',              
          'time': 1585324800
        }                
      ]
    });
  },

  'GET /v1/statistics/overview/top/command/devices': (req, res) => {
    const { top } = req.params;
    console.log(top);
    res.send({ 
      status: 'ok',
      code: 200,
      data: [
        {
          'count': 25,
          'sn': 'PC-5',
          'time': 1585152000
        },{
          'count': 45,
          'sn': 'PC-4',
          'time': 1585152000
        },{
          'count': 15,
          'sn': 'PC-3',
          'time': 1585152000
        },{
          'count': 20,
          'sn': 'PC-2',
          'time': 1585152000
        },{
          'count': 33,
          'sn': 'PC-1',
          'time': 1585152000
        }
      ]
    });
  },

  'GET /v1/statistics/overview/top/command/error/devices': (req, res) => {
    const { top } = req.params;
    console.log(top);
    res.send({ 
      status: 'ok',
      code: 200,
      data: [
        {
          'count': 25,
          'sn': 'PC-F9EED275941E-ROOT',
          'time': 1585152000
        }
      ]
    });
  },

  'GET /v1/statistics/overview/top/error/commands': (req, res) => {
    const { top } = req.params;
    console.log(top);
    res.send({ 
      status: 'ok',
      code: 200,
      data: [
        {
          'count': 25,
          'command': 'hello',
          'time': 1585152000
        }
      ]
    });
  },

  'GET /v1/iotserver/monitor/devices': (req, res) => {
    const { sn,limit,page } = req.params;
    console.log(sn);
    console.log(limit);
    console.log(page);
    res.send({ 
      status: 'ok',
      code: 200,
      data: {
        'count': 2,
        'limit': 10,
        'list': [
          {
            'activeTime': 1586316066,
            'addTime': 0,
            'bootTime': 1586306124,
            'dur': 626174,
            'offlineTime': 1586316079,
            'online': true,
            'onlineTime': 1586316061,
            'procs': '{"d":[{"mem":2380,"n":"daemon"},{"mem":4116,"n":"monitor"},{"err":"restarted","msg":"Run app successfully","n":"msghub"},{"err":"restarted","msg":"Run app successfully","n":"cmdhandler"}],"revtime":1586316061,"sn":"BOECLOUD-CLOUD-1","time":1586316061}',
            'reg': '{"d":{"model":""},"revtime":1586316061,"sn":"BOECLOUD-CLOUD-1","time":1586316061}',
            'regTime': 1586316061,
            'sn': 'BOECLOUD-CLOUD-1',
            'sys': '{"d":{"free":4429948,"load":0.22,"used":3236656},"revtime":1586314113,"sn":"BOECLOUD-CLOUD-1","time":1586314113}',
            'tagIds': [],
            'tagNames': [],
            'versions': '{"d":[{"n":"monitor","v":"1.0.0 20200407-200916"},{"n":"msghub","v":"1.0.0 20200407-200916"},{"n":"cmdhandler","v":"1.0.0 20200407-200916"},{"n":"upgrade.cmd","v":"1.0.0 20200407-200916"},{"n":"logagent.cmd","v":"1.0.0 20200407-200916"}],"revtime":1586316066,"sn":"BOECLOUD-CLOUD-1","time":1586316066}'
          },
          {
            'activeTime': 1586316066,
            'addTime': 0,
            'bootTime': 1586306124,
            'dur': 626174,
            'offlineTime': 1586316079,
            'online': false,
            'onlineTime': 1586316061,
            'procs': '{"d":[{"mem":2380,"n":"daemon"},{"mem":4116,"n":"monitor"},{"err":"restarted","msg":"Run app successfully","n":"msghub"},{"err":"restarted","msg":"Run app successfully","n":"cmdhandler"}],"revtime":1586316061,"sn":"BOECLOUD-CLOUD-1","time":1586316061}',
            'reg': '{"d":{"model":""},"revtime":1586316061,"sn":"BOECLOUD-CLOUD-1","time":1586316061}',
            'regTime': 1586316061,
            'sn': 'BOECLOUD-CLOUD-2',
            'sys': '{"d":{"free":4429948,"load":0.22,"used":3236656},"revtime":1586314113,"sn":"BOECLOUD-CLOUD-1","time":1586314113}',
            'tagIds': [],
            'tagNames': [],
            'versions': '{"d":[{"n":"monitor","v":"1.0.0 20200407-200916"},{"n":"msghub","v":"1.0.0 20200407-200916"},{"n":"cmdhandler","v":"1.0.0 20200407-200916"},{"n":"upgrade.cmd","v":"1.0.0 20200407-200916"},{"n":"logagent.cmd","v":"1.0.0 20200407-200916"}],"revtime":1586316066,"sn":"BOECLOUD-CLOUD-1","time":1586316066}'
          }
        ],
        'page': 1,
        'total': 20
      }
    });
  },

  'GET /v1/statistics/overview/top/weak/wifi/devices': (req, res) => {
    const { top } = req.params;
    console.log(top);
    res.send({ 
      status: 'ok',
      code: 200,
      data: [
        {
          'count': 25,
          'command': 'hello',
          'time': 1585152000
        }
      ]
    });
  },

  'GET /v1/iotserver/monitor/devices/peripherals/count':  {
    status: 'ok',
    data: {
      'offline': 1,
      'online': 2,
      'total': 3
    }
  },

  'GET /v1/statistics/overview/active/peripheral/count': (req, res) => {
    const { days } = req.params;
    console.log(days);
    res.send({ 
      status: 'ok',
      code: 200,
      data: [
        {
          'count': 60,
          'time': 1584979200
        }, {
          'count': 78,
          'time': 1585065600
        }, {
          'count': 83,
          'time': 1585152000
        }, {
          'count': 45,
          'time': 1585238400
        }, {
          'count': 110,
          'time': 1585324800
        }, {
          'count': 64,
          'time': 1585411200
        }, {
          'count': 123,
          'time': 1585497600
        }
      ]
    });
  },

  'GET /v1/statistics/overview/offline/peripheral/count': (req, res) => {
    const { days } = req.params;
    console.log(days);
    res.send({ 
      status: 'ok',
      code: 200,
      data: [
        {
          'count': 211,
          'time': 1585411200
        },
        {
          'count': 0,
          'time': 1585497600
        }
      ]
    });
  },

  'GET /v1/statistics/overview/active/peripheral/live/count': { data: {
    'status': 'ok',
    'code': 200,
    'data': [
      {
        'count': 5,
        'time': 1584979200
      }
    ]
  }},

  'GET /v1/statistics/device/sys/history': (req, res) => {
    const { sn, hours } = req.params;
    console.log(sn);
    console.log(hours);
    res.send({ 
      status: 'ok',
      code: 200,
      data: [
        {
          'cpuLoad': 0.1,
          'memFree': 2345336,
          'memUsed': 7317264,
          'time': 1585105797
        },
        {
          'cpuLoad': 0.09,
          'memFree': 3345364,
          'memUsed': 6317568,
          'time': 1585105802
        },
        {
          'cpuLoad': 0.08,
          'memFree': 2745412,
          'memUsed': 6919112,
          'time': 1585105807
        }
      ]
    });
  },

  'GET /v1/statistics/device/online/history': (req, res) => {
    const { sn, days } = req.params;
    console.log(sn);
    console.log(days);
    res.send({ 
      status: 'ok',
      code: 200,
      data: [
        {
          'time': 1587548271,
          'topic': 'dma_report_on'
        },{
          'time': 1587551871,
          'topic': 'dma_report_on'
        },{
          'time': 1587638271,
          'topic': 'dma_report_on'
        },{
          'time': 1587641871,
          'topic': 'dma_report_on'
        },{
          'time': 1587645471,
          'topic': 'dma_report_on'
        },{
          'time': 1587731871,
          'topic': 'dma_report_on'
        },{
          'time': 1587735471,
          'topic': 'dma_report_on'
        },{
          'time': 1587821871,
          'topic': 'dma_report_on'
        },{
          'time': 1587825471,
          'topic': 'dma_report_on'
        },{
          'time': 1587911871,
          'topic': 'dma_report_on'
        },{
          'time': 1587915471,
          'topic': 'dma_report_on'
        },{
          'time': 1587919071,
          'topic': 'dma_report_on'
        },{
          'time': 1588005471,
          'topic': 'dma_report_on'
        }
      ]
    });
  },

  'GET /v1/statistics/device/offline/history': (req, res) => {
    const { sn, days } = req.params;
    console.log(sn);
    console.log(days);
    res.send({ 
      status: 'ok',
      code: 200,
      data: [
        {
          'time': 1587548571,
          'topic': 'dma_report_off'
        }, {
          'time': 1587552071,
          'topic': 'dma_report_off'
        }, {
          'time': 1587638571,
          'topic': 'dma_report_off'
        }, {
          'time': 1587642071,
          'topic': 'dma_report_off'
        }, {
          'time': 1587645571,
          'topic': 'dma_report_off'
        }, {
          'time': 1587732071,
          'topic': 'dma_report_off'
        }, {
          'time': 1587735571,
          'topic': 'dma_report_off'
        }, {
          'time': 1587822071,
          'topic': 'dma_report_off'
        }, {
          'time': 1587825571,
          'topic': 'dma_report_off'
        }, {
          'time': 1587866400,
          'topic': 'dma_report_off'
        }, {
          'time': 1587866500,
          'topic': 'dma_report_off'
        }, {
          'time': 1587866600,
          'topic': 'dma_report_off'
        }, {
          'time': 1587866700,
          'topic': 'dma_report_off'
        }, {
          'time': 1587866800,
          'topic': 'dma_report_off'
        }, {
          'time': 1587866900,
          'topic': 'dma_report_off'
        }, {
          'time': 1587867000,
          'topic': 'dma_report_off'
        }, {
          'time': 1587912071,
          'topic': 'dma_report_off'
        }, {
          'time': 1587915571,
          'topic': 'dma_report_off'
        }, {
          'time': 1587919271,
          'topic': 'dma_report_off'
        }, {
          'time': 1588005571,
          'topic': 'dma_report_off'
        },
      ]
    });
  },

  'GET /v1/statistics/device/version/history': (req, res) => {
    const { sn, comp } = req.params;
    console.log(sn);
    console.log(comp);
    res.send({ 
      status: 'ok',
      code: 200,
      data: [
        {
          'time': 1585106295,
          'version': '1.0.0 20200323-091556'
        },{
          'time': 1585109295,
          'version': '1.0.0 20200323-091566'
        },{
          'time': 1585116295,
          'version': '1.0.0 20200323-091576'
        },{
          'time': 1585136295,
          'version': '1.0.0 20200323-091586'
        },{
          'time': 1585146295,
          'version': '1.0.0 20200323-091596'
        }
      ]
    });
  },

  'GET /v1/statistics/device/command/history': (req, res) => {
    const { sn, cmdId } = req.params;
    console.log(sn);
    console.log(cmdId);
    res.send({ 
      status: 'ok',
      code: 200,
      data: [
        [
          {
            'command': 'log_file_upload',
            'data': '{"FtpPw":"IoT@2018","FtpSaveName":"zzzz","FtpSavePath":"/iot-logs","FtpServer":"10.252.97.213:21","FtpUser":"iot","LogName":["/tmp/dma.msghub.log","/tmp/dma.daemon.log","/tmp/dma/bin/ext"],"Mode":"ftp","sn":"PC-F9EED275941E-ROOT"}',
            'from': 'iot_web_console',
            'id': '20200331011',
            'sn': 'PC-F9EED275941E-ROOT',                
            'time': 1585635420
          }
        ],
        [
          {
            'command': 'log_file_upload',
            'data': '{"result":"10.252.97.213:21/iot-logs/zzzz.tar.gz","status":"ok"}',
            'id': '20200331011',
            'sn': 'PC-F9EED275941E-ROOT',
            'status': 'ok',
            'time': 1585635423
          }
        ]
      ]});
  },

  'GET /v1/statistics/device/alarm/history': (req, res) => {
    const { sn, days } = req.params;
    console.log(sn);
    console.log(days);
    res.send({ 
      status: 'ok',
      code: 200,
      data: [
        {
          'alertName': 'alert_load_monitor',
          'level': 'CRITICAL',
          'message': 'load:  PC-E580-DUHJ\'s load 1.64 greater than threshold(1.0) ',
          'time': 1585118550
        },
        {
          'alertName': 'alert_load_monitor',
          'level': 'OK',
          'message': 'load:  PC-E580-DUHJ\'s load 0.87 not greater than threshold(1.0) ',
          'time': 1585118700
        }
      ]
    });
  },

  'GET /v1/statistics/live/device/gps': (req, res) => {
    const { sn } = req.params;
    console.log(sn);
    res.send({ 
      status: 'ok',
      code: 200,
      data: [
        {
          'time': 1585106295,
          'sn': 'SN-1',
          'pos': '{"lat":40.57,"lng":116.9}',
    
        },
        {
          'time': 1585106295,
          'sn': 'SN-2',
          'pos': '{"lat":39.57,"lng":115.9}',
        },
        {
          'time': 1585106295,
          'sn': 'SN-3',
          'pos': '{"lat":41.57,"lng":118.9}',
        },
        {
          'time': 1585106295,
          'sn': 'SN-4',
          'pos': '{"lat":33.57,"lng":118.6}',
        },
        {
          'time': 1585106295,
          'sn': 'SN-5',
          'pos': '{"lat":37.57,"lng":88.9}',
        },
        {
          'time': 1585106295,
          'sn': 'SN-6',
          'pos': '{"lat":36.57,"lng":91.9}',
        },
        {
          'time': 1585106295,
          'sn': 'SN-7',
          'pos': '{"lat":36.57,"lng":101.9}',
        },
        {
          'time': 1585106295,
          'sn': 'SN-8',
          'pos': '{"lat":27.57,"lng":111.9}',
        },
        {
          'time': 1585106295,
          'sn': 'SN-9',
          'pos': '{"lat":39.57,"lng":113.9}',
        },
        {
          'time': 1585106295,
          'sn': 'SN-10',
          'pos': '{"lat":30.57,"lng":109.9}',
        },
        {
          'time': 1585106295,
          'sn': 'SN-11',
          'pos': '{"lat":37.57,"lng":116.9}',
        },
        {
          'time': 1585106295,
          'sn': 'SN-12',
          'pos': '{"lat":37.57,"lng":110.9}',
        }
      ]
    });
  },

  'GET /v1/deviceremotes/results/log': (req, res) => {
    const { id } = req.params;
    console.log(id);
    res.send({ 
      status: 'ok',
      code: 200,
      data: {
        'id': 1,
        'command': 'log_file_upload',
        'status': 1,
        'sn': 'PC-F9EED275941E-ROOT',
        'result': 'ftp://10.252.97.213:21/iot-logs/2020-04-08_10-55-18_all.tar.gz'
      }
    });
  },

  // 支持参数
  'POST /v1/deviceremotes/cmds/sh': (req, res) => {
    const { shell } = req.body;
    console.log(shell);
    res.send({ 
      status: 'ok',
      code: 200,
      data: {
        'sn': 'PC-F9EED275941E-ROOT', 
        'id': 20200415001
      }

    });
  },
}