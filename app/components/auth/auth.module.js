import angularfire from 'angularfire';
import firebase from 'firebase';
import uiRouter from '@uirouter/angularjs';

const firebaseConfig = {
  apiKey: 'AIzaSyA5_rnAb9MS_x7ur6r9gqHKaJYN_Ylz8gg',
  authDomain: 'meds-storage.firebaseapp.com',
  databaseURL: 'https://meds-storage.firebaseio.com',
  projectId: 'meds-storage',
  storageBucket: 'meds-storage.appspot.com',
  messagingSenderId: '420357244976'
};

export const app = firebase.initializeApp(firebaseConfig);

export const auth = angular
  .module('components.auth', [angularfire, uiRouter])
  .config($firebaseRefProvider => {
    'ngInject';

    $firebaseRefProvider.registerUrl({
      default: firebaseConfig.databaseURL,
      meds: `${firebaseConfig.databaseURL}/meds`
    });
  }).name;
