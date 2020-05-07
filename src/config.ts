const config = {
  default:{
    API_SERVER:'http://10.252.96.137:8001/v1'
  },
  local:{
    API_SERVER: 'http://10.252.96.137:8001/v1'
  },
  dev: {
    API_SERVER: 'http://10.252.96.137:8001/v1'
  },
  prod: {
    API_SERVER: `http://${process.env.SERVER_IP}:${process.env.SERVER_PORT}/api`
  }
};

export default config;