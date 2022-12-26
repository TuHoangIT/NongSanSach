/*!
 * Remark (http://getbootstrapadmin.com/remark)
 * Copyright 2017 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

!(function (global, factory) {
  if ("function" == typeof define && define.amd)
    define("/Plugin/datatables", ["exports", "jquery", "Plugin"], factory);
  else if ("undefined" != typeof exports)
    factory(exports, require("jquery"), require("Plugin"));
  else {
    var mod = { exports: {} };
    factory(mod.exports, global.jQuery, global.Plugin),
      (global.PluginDatatables = mod.exports);
  }
})(this, function (exports, _jquery, _Plugin2) {
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: !0 });
  var _jquery2 = babelHelpers.interopRequireDefault(_jquery),
    _Plugin3 = babelHelpers.interopRequireDefault(_Plugin2),
    DataTable = (function (_Plugin) {
      function DataTable() {
        return (
          babelHelpers.classCallCheck(this, DataTable),
          babelHelpers.possibleConstructorReturn(
            this,
            (DataTable.__proto__ || Object.getPrototypeOf(DataTable)).apply(
              this,
              arguments
            )
          )
        );
      }
      return (
        babelHelpers.inherits(DataTable, _Plugin),
        babelHelpers.createClass(
          DataTable,
          [
            {
              key: "getName",
              value: function () {
                return "dataTable";
              },
            },
            {
              key: "render",
              value: function () {
                _jquery2.default.fn.dataTable &&
                  this.$el.dataTable(this.options);
              },
            },
          ],
          [
            {
              key: "getDefaults",
              value: function () {
                return {
                  responsive: !0,
                  language: {
                    lengthMenu: "_MENU_",
                    searchPlaceholder: "Search..",
                    search: "_INPUT_",
                  },
                };
              },
            },
          ]
        ),
        DataTable
      );
    })(_Plugin3.default);
  _Plugin3.default.register("dataTable", DataTable),
    (exports.default = DataTable);
});
