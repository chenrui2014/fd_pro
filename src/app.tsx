import * as React from 'react';
import { createApp, config, APP_MODE } from 'ice';
import LocaleProvider from '@/components/LocaleProvider';
import { getLocale } from '@/utils/locale';

console.log('APP_MODE', APP_MODE);
const locale = getLocale();
console.log(config.API_SERVER);
const appConfig = {
  app: {
    rootId: 'ice-container',
    addProvider: ({ children }) => (
      <LocaleProvider locale={locale}>{children}</LocaleProvider>
    ),
  },
  request:{
    baseUrl: config.API_SERVER,
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
