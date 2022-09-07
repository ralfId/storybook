"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tertiary = exports.Secundary = exports.AllCaps = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MyLabel_1 = require("../../components/MyLabel");
exports.default = {
    title: 'ReactCourse/MyLabel',
    component: MyLabel_1.MyLabel,
    argTypes: {
        size: { control: { type: 'select' } },
        allCaps: { control: { type: 'boolean' }, defaultValue: false },
        color: { control: { type: 'select' } },
    }
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(MyLabel_1.MyLabel, __assign({}, args)); };
exports.Basic = Template.bind({});
//Default values
exports.Basic.args = {
    label: 'custom label text',
    size: 'normal'
};
exports.AllCaps = Template.bind({});
exports.AllCaps.args = {
    label: 'custom label text',
    allCaps: true,
    size: 'normal'
};
exports.Secundary = Template.bind({});
exports.Secundary.args = {
    label: 'custom label text',
    color: 'secondary',
    size: 'normal'
};
exports.Tertiary = Template.bind({});
exports.Tertiary.args = {
    label: 'custom label text',
    color: 'tertiary',
    size: 'normal'
};
