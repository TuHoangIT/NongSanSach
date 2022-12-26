/*!
 * Remark (http://getbootstrapadmin.com/remark)
 * Copyright 2017 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

!(function (global, factory) {
    if ("function" == typeof define && define.amd)
        define("/forms/editor-summernote", ["jquery", "Site"], factory);
    else if ("undefined" != typeof exports)
        factory(require("jquery"), require("Site"));
    else {
        var mod = { exports: {} };
        factory(global.jQuery, global.Site),
            (global.formsEditorSummernote = mod.exports);
    }
})(this, function (_jquery, _Site) {
    "use strict";
    var _jquery2 = babelHelpers.interopRequireDefault(_jquery),
        Site = babelHelpers.interopRequireWildcard(_Site);
    (0, _jquery2.default)(document).ready(function ($) {
        Site.run();
    }),
        (window.edit = function () {
            (0, _jquery2.default)(".click2edit").summernote({ focus: !0 });
        }),
        (window.save = function () {
            (0, _jquery2.default)(".click2edit").summernote("destroy");
        }),
        (0, _jquery2.default)("#exampleHint2Basic").summernote({
            height: 100,
            toolbar: !1,
            placeholder: "type with apple, orange, watermelon and lemon",
            hint: {
                words: ["apple", "arange", "watermelon", "lemon"],
                match: /\b(\w{1,})$/,
                search: function (keyword, callback) {
                    callback(
                        _jquery2.default.grep(this.words, function (item) {
                            return 0 === item.indexOf(keyword);
                        })
                    );
                },
            },
        }),
        (0, _jquery2.default)("#exampleHint2Mention").summernote({
            height: 100,
            toolbar: !1,
            hint: {
                mentions: ["jayden", "sam", "alvin", "david"],
                match: /\B@(\w*)$/,
                search: function (keyword, callback) {
                    callback(
                        _jquery2.default.grep(this.mentions, function (item) {
                            return 0 == item.indexOf(keyword);
                        })
                    );
                },
                content: function (item) {
                    return "@" + item;
                },
            },
        });
});
