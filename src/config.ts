const config = {
  default:{
    API_SERVER:'http://localhost:3333'
  },
  local:{
    API_SERVER: 'http://localhost:3333'
  },
  dev: {
    API_SERVER: 'http://10.252.96.137:8001'
  },
  prod: {
    API_SERVER: `http://${process.env.SERVER_IP}:${process.env.SERVER_PORT}/v1`
  }
};

export default config;