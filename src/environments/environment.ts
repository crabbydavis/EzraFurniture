// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyBiqAm7hBpX93153GhL4vYqUwez_ctZUyk",
    authDomain: "ezra-furniture.firebaseapp.com",
    databaseURL: "https://ezra-furniture.firebaseio.com",
    projectId: "ezra-furniture",
    storageBucket: "ezra-furniture.appspot.com",
    messagingSenderId: "309727413833",
    appId: "1:309727413833:web:dc7900ada7bcdaeaeb6198",
    measurementId: "G-VLR6QVXCGT"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
