(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  // do not edit .js files directly - edit src/index.jst
  /**
   * The status of the [[Loader]].
   */

  var LoaderStatus;

  (function (LoaderStatus) {
    LoaderStatus[LoaderStatus["INITIALIZED"] = 0] = "INITIALIZED";
    LoaderStatus[LoaderStatus["LOADING"] = 1] = "LOADING";
    LoaderStatus[LoaderStatus["SUCCESS"] = 2] = "SUCCESS";
    LoaderStatus[LoaderStatus["FAILURE"] = 3] = "FAILURE";
  })(LoaderStatus || (LoaderStatus = {}));

}));
//# sourceMappingURL=maps.js.map
