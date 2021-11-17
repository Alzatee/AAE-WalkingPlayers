// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  environmentName: 'Ambiente Default',
  production: false,
  urlWalkingPlayerSanctions: {
    bans: 'https://walkingplayers.net/control/bans.php',
    mutes: 'https://walkingplayers.net/control/mutes.php',
    warnings: 'https://walkingplayers.net/control/warnings.php',
    kicks: 'https://walkingplayers.net/control/kicks.php'
  },
  urlShopWalkingPlayers: 'https://walkingplayers.tebex.io/',
  urlShopNewsWalkingPlayers: 'https://walkingplayers.tebex.io/category/edicion-limitada'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
