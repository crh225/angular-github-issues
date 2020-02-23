// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyB_oLOM5CglXXkH3A1a3oauOUxysPcjmzY',
    authDomain: 'chris-house.firebaseapp.com',
    databaseURL: 'https://chris-house.firebaseio.com',
    projectId: 'chris-house',
    storageBucket: 'chris-house.appspot.com',
    messagingSenderId: '524971702368',
    appId: '1:524971702368:web:4087daa10d90025776ab05'
  }
};
