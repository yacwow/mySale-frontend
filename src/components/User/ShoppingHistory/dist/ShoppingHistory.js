"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
var TableForShoppingHistory_1 = require("./TableForShoppingHistory");
var max_1 = require("@umijs/max");
var App = function (props) {
    var setTitle = props.setTitle;
    var _a = react_1.useState('orderHistory'), current = _a[0], setCurrent = _a[1]; //只有请求回来的四种string
    var _b = react_1.useState([]), data = _b[0], setData = _b[1]; //展示用的已经排序好了的数据
    var _c = react_1.useState(), originData = _c[0], setOriginData = _c[1];
    var _d = react_1.useState(), items = _d[0], setItems = _d[1];
    react_1.useEffect(function () {
        max_1.request("/api/secure/getOrderInvoiceHistory").then(function (data) {
            console.log(data);
            if (data.result) {
                var serverSideData = data.data.serverSideData;
                var tempData = {};
                var unpaidData = serverSideData.filter(function (item) {
                    return item.paidStatus === 'unpaid';
                });
                var paidData = serverSideData.filter(function (item) {
                    return item.paidStatus === 'paid';
                });
                var deliveryData = serverSideData.filter(function (item) {
                    return item.paidStatus === 'delivery';
                });
                var cancelledData = serverSideData.filter(function (item) {
                    return item.paidStatus === 'cancelled';
                });
                tempData.unpaid = unpaidData;
                tempData.paid = paidData;
                tempData.delivery = deliveryData;
                tempData.cancelled = cancelledData;
                console.log(tempData);
                setOriginData(tempData);
                var newData = void 0;
                if (current === 'orderHistory') {
                    newData = __spreadArrays(tempData.unpaid, tempData.paid, tempData.delivery, tempData.cancelled);
                }
                else {
                    //@ts-ignore
                    newData = tempData[current];
                }
                setData(newData);
                var unpaid = tempData.unpaid.length;
                var paid = tempData.paid.length;
                var delivery = tempData.delivery.length;
                var cancelled = tempData.cancelled.length;
                var items_1 = [
                    {
                        label: "\u6CE8\u6587\u5C65\u6B74(" + (unpaid + paid + delivery + cancelled) + ")",
                        key: 'orderHistory'
                    },
                    {
                        label: "\u672A\u5165\u91D1(" + unpaid + ")",
                        key: 'unpaid'
                    },
                    {
                        label: "\u652F\u6255\u3044\u6E08\u307F(" + paid + ")",
                        key: 'paid'
                    },
                    {
                        label: "\u914D\u9001\u6E08\u307F(" + delivery + ")",
                        key: 'delivery'
                    }, {
                        label: "\u30AD\u30E3\u30F3\u30BB\u30EB(" + cancelled + ")",
                        key: 'cancelled'
                    },
                ];
                setItems(items_1);
            }
        });
        //请求数据,因为历史包括所有，就一起请求回来
        var data = {
            unpaid: [{
                    invoiceNum: '142131414212312312', paidStatus: 'unpaid', invoiceDate: '20214557154', totalPayment: 23333, productData: [
                        { href: '', description: 'testtestttttttttttttttttttttttt', color: 'test', size: 's', price: 1234, amount: 3, imgSrc: '/img/recommendPicture1.jpg' },
                        { href: '', description: 'testtestttttttttttttttttttttttt', color: 'test', size: 's', price: 1234, amount: 3, imgSrc: '/img/recommendPicture1.jpg' }
                    ]
                }, {
                    invoiceNum: '242131414212312312', paidStatus: 'unpaid', invoiceDate: '20214557154', totalPayment: 23333, productData: [
                        { href: '', description: 'testtestttttttttttttttttttttttt', color: 'test', size: 's', price: 1234, amount: 3, imgSrc: '/img/recommendPicture1.jpg' },
                        { href: '', description: 'testtestttttttttttttttttttttttt', color: 'test', size: 's', price: 1234, amount: 3, imgSrc: '/img/recommendPicture1.jpg' }
                    ]
                }],
            paid: [{
                    invoiceNum: '342131414212312312', paidStatus: 'paid', invoiceDate: '20214557154', totalPayment: 23333, productData: [
                        { href: '', description: 'testtestttttttttttttttttttttttt', color: 'test', size: 's', price: 1234, amount: 3, imgSrc: '/img/recommendPicture1.jpg' },
                        { href: '', description: 'testtestttttttttttttttttttttttt', color: 'test', size: 's', price: 1234, amount: 3, imgSrc: '/img/recommendPicture1.jpg' }
                    ]
                }, {
                    invoiceNum: '742131414212312312', paidStatus: 'paid', invoiceDate: '20214557154', totalPayment: 23333, productData: [
                        { href: '', description: 'testtestttttttttttttttttttttttt', color: 'test', size: 's', price: 1234, amount: 3, imgSrc: '/img/recommendPicture1.jpg' },
                        { href: '', description: 'testtestttttttttttttttttttttttt', color: 'test', size: 's', price: 1234, amount: 3, imgSrc: '/img/recommendPicture1.jpg' }
                    ]
                }],
            delivery: [{
                    invoiceNum: '442131414212312312', paidStatus: 'delivery', invoiceDate: '20214557154', totalPayment: 23333, productData: [
                        { href: '', description: 'testtestttttttttttttttttttttttt', color: 'test', size: 's', price: 1234, amount: 3, imgSrc: '/img/recommendPicture1.jpg' },
                        { href: '', description: 'testtestttttttttttttttttttttttt', color: 'test', size: 's', price: 1234, amount: 3, imgSrc: '/img/recommendPicture1.jpg' }
                    ]
                }, {
                    invoiceNum: '642131414212312312', paidStatus: 'delivery', invoiceDate: '20214557154', totalPayment: 23333, productData: [
                        { href: '', description: 'testtestttttttttttttttttttttttt', color: 'test', size: 's', price: 1234, amount: 3, imgSrc: '/img/recommendPicture1.jpg' },
                        { href: '', description: 'testtestttttttttttttttttttttttt', color: 'test', size: 's', price: 1234, amount: 3, imgSrc: '/img/recommendPicture1.jpg' }
                    ]
                }],
            cancelled: [{
                    invoiceNum: '542131414212312312', paidStatus: 'cancelled', invoiceDate: '20214557154', totalPayment: 23333, productData: [
                        { href: '', description: 'testtestttttttttttttttttttttttt', color: 'test', size: 's', price: 1234, amount: 3, imgSrc: '/img/recommendPicture1.jpg' }
                    ]
                }]
        };
    }, []);
    var buildTable = function () {
        //@ts-ignore
        return data.map(function (item, index) {
            return react_1["default"].createElement(TableForShoppingHistory_1["default"], { key: index, serverSideData: item, setTitle: setTitle });
        });
    };
    var onClick = function (e) {
        if (e.key !== 'orderHistory') {
            setData(originData[e.key]);
        }
        else {
            setData(__spreadArrays(originData.unpaid, originData.paid, originData.delivery, originData.cancelled));
        }
        setCurrent(e.key);
    };
    return react_1["default"].createElement("div", null,
        items ? react_1["default"].createElement(antd_1.Menu, { onClick: onClick, selectedKeys: [current], mode: "horizontal", items: items, style: { height: 60 } }) : null,
        data.length ? buildTable() : null);
};
exports["default"] = App;
