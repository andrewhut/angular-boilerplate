import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import main from './modules/main'

angular.module('app', [uirouter, main])
  .config(routing);

