"use strict";
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var NumToString_1 = require("@/utils/NumToString");
var max_1 = require("@umijs/max");
var TableForShoppingHistory_less_1 = require("./TableForShoppingHistory.less");
require("./test.css");
var Column = antd_1.Table.Column;
var englishToJapan = {
    unpaid: '保留中',
    paid: '支払い済み',
    delivery: '配送済み',
    cancelled: 'キャンセル'
};
var App = function (props) {
    var serverSideData = props.serverSideData, setTitle = props.setTitle;
    var _a = react_1.useState(), data = _a[0], setData = _a[1]; //展示在table上的具体数据
    var summary;
    // console.log(serverSideData)
    var totalAmount = serverSideData.totalPayment;
    var len = serverSideData.productData.length;
    var paidStatus = serverSideData.paidStatus;
    summary = react_1["default"].createElement("td", { className: TableForShoppingHistory_less_1["default"].invoiceNum },
        react_1["default"].createElement(max_1.NavLink, { to: '/account/invoiceComp', onClick: function () {
                setTitle('お買物履歴詳細');
            } },
            react_1["default"].createElement("b", null, "\u6CE8\u6587NO.\uFF1A"),
            serverSideData.invoiceNum),
        "\u00A0\u00A0\u00A0\u00A0",
        react_1["default"].createElement("b", null, "\u3054\u6CE8\u6587\u65E5\u4ED8\u3068\u6642\u9593\uFF1A"),
        react_1["default"].createElement("span", null, serverSideData.invoiceDate));
    react_1.useEffect(function () {
        //@ts-ignore
        setData(serverSideData.productData.map(function (item, index) {
            return ({
                key: index,
                productInfo: react_1["default"].createElement("div", { className: TableForShoppingHistory_less_1["default"].container },
                    react_1["default"].createElement("a", { href: item.href, title: item.description, target: "_blank", rel: "noreferrer" },
                        react_1["default"].createElement("img", { src: item.imgSrc })),
                    react_1["default"].createElement("div", { className: TableForShoppingHistory_less_1["default"].description },
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement("a", { href: item.href, target: "_blank", rel: "noreferrer" }, item.description)),
                        react_1["default"].createElement("span", { className: TableForShoppingHistory_less_1["default"].bottom },
                            react_1["default"].createElement("span", null,
                                "\u30AB\u30E9\u30FC:",
                                item.color),
                            react_1["default"].createElement("span", null,
                                "\u30B5\u30A4\u30BA:",
                                item.size,
                                " "),
                            react_1["default"].createElement("span", null,
                                "\u00A5 ",
                                NumToString_1["default"](item.price),
                                " \u00D7 ",
                                item.amount)))),
                price: react_1["default"].createElement("span", { className: TableForShoppingHistory_less_1["default"].total }, "\uFFE5" + NumToString_1["default"](totalAmount)),
                status: react_1["default"].createElement("span", { className: TableForShoppingHistory_less_1["default"].type }, englishToJapan[paidStatus]),
                action: react_1["default"].createElement("div", { className: TableForShoppingHistory_less_1["default"].icon },
                    react_1["default"].createElement("div", { className: TableForShoppingHistory_less_1["default"].flex },
                        react_1["default"].createElement("a", { href: "" },
                            react_1["default"].createElement(icons_1.MailOutlined, null)),
                        react_1["default"].createElement("a", { href: "" }, "\u4ECA\u3059\u3050\u652F\u6255\u3046"),
                        react_1["default"].createElement("a", { href: "" }, "\u30AD\u30E3\u30F3\u30BB\u30EB")))
            });
        }));
    }, []);
    var column = [{
            title: '商品情報',
            dataIndex: 'productInfo',
            key: 'productInfo',
            width: 380,
            align: 'center'
        }, {
            title: '商品金額',
            dataIndex: 'price',
            key: 'price',
            align: 'center',
            //@ts-ignore
            onCell: function (record, index) {
                if (index > 0) {
                    return { rowSpan: 0 };
                }
                else {
                    return { rowSpan: len };
                }
            }
        }, {
            title: '注文状態',
            dataIndex: 'status',
            key: 'status',
            align: 'center',
            //@ts-ignore
            onCell: function (record, index) {
                if (index > 0) {
                    return { rowSpan: 0 };
                }
                else {
                    return { rowSpan: len };
                }
            }
        }, {
            title: '関連操作',
            dataIndex: 'action',
            key: 'action',
            align: 'center',
            width: 120,
            //@ts-ignore
            onCell: function (record, index) {
                if (index > 0) {
                    return { rowSpan: 0 };
                }
                else {
                    return { rowSpan: len };
                }
            }
        },
    ];
    return (react_1["default"].createElement("div", { style: { marginBottom: 20, borderBottom: '2px dotted black' } },
        react_1["default"].createElement(antd_1.Table, { dataSource: data, columns: column, style: { width: 810 }, bordered: true, sticky: true, locale: { emptyText: '仮無数の根拠です' }, pagination: false, summary: function () { return (react_1["default"].createElement(antd_1.Table.Summary, null,
                react_1["default"].createElement(antd_1.Table.Summary.Row, null, summary))); } },
            react_1["default"].createElement(Column, { title: "\u5546\u54C1\u60C5\u5831", dataIndex: "productInfo", key: "productInfo" }),
            react_1["default"].createElement(Column, { title: "\u5546\u54C1\u91D1\u984D", dataIndex: "price", key: "price", align: 'center' }),
            react_1["default"].createElement(Column, { title: "\u6CE8\u6587\u72B6\u614B", dataIndex: "status", key: "status", align: 'right' }),
            react_1["default"].createElement(Column, { title: "\u95A2\u9023\u64CD\u4F5C", key: "action", dataIndex: "action", align: 'center' }))));
};
exports["default"] = App;
