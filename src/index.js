import angular from 'angular';
import {ngAnimate} from 'angular-animate';
import {ngSanitize} from 'angular-sanitize';
import 'angular-ui-bootstrap';

import 'angular-ui-router';
import routesConfig from './routes';

import {hello} from './app/hello';
import {test01} from './test01/app';
import {test02} from './test02/app';
import {ButtonInfoService} from './test01/ButtonInfoService' ;
import {setEqualHeight} from './test01/SetEqualHeight' ;
import translateLang from './test01/translate.js';

import './index.scss';

export const app = 'app';

angular
  .module(app, ['ngAnimate', 'ngSanitize','ui.router', 'ui.bootstrap', 'pascalprecht.translate'])
  .config(routesConfig)
  .config(translateLang)
  .component('app', hello)
  .component('test01', test01)
  .component('test02', test02)
  .service('ButtonInfoService',ButtonInfoService)
  .directive('setEqualHeight',setEqualHeight);
