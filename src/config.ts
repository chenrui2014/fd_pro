const config = {
  default:{
    API_SERVER:'http://10.10.35.68:3333'
  },
  local:{
    API_SERVER: 'http://10.252.96.137:8001'
  },
  dev: {
    API_SERVER: 'http://10.252.96.137:80'
  },
  prod: {
    API_SERVER: `http://${process.env.SERVER_IP}:${process.env.SERVER_PORT}/v1`
  }
};

export default config;