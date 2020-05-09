// import React from 'react';
import { createApp, IAppConfig, config, APP_MODE } from 'ice';
// import LocaleProvider from '@/components/LocaleProvider';
// import { getLocale } from '@/utils/locale';

console.log('APP_MODE', APP_MODE);
// const locale = getLocale();
console.log(config.API_SERVER);
const appConfig: IAppConfig = {
  app: {
    rootId: 'ice-container',
  },
  request:{
    baseURL: config.API_SERVER,
    interceptors: {
      request: {
        onConfig: (conf) => {
          return conf;
        }
      }
    }
  }
};
createApp(appConfig);
