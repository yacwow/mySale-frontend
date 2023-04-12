"use strict";
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
var NumToString_1 = require("@/utils/NumToString");
var FavoriteProduct_less_1 = require("./FavoriteProduct.less");
var max_1 = require("@umijs/max");
var Column = antd_1.Table.Column;
var App = function (props) {
    var serverSideData = props.serverSideData;
    // console.log(serverSideData)
    var _a = react_1.useState([]), data = _a[0], setData = _a[1];
    var _b = react_1.useState(false), open = _b[0], setOpen = _b[1]; //模态框的开关
    var _c = react_1.useState(), productId = _c[0], setProductId = _c[1];
    var _d = react_1.useState(serverSideData), serverSideData1 = _d[0], setServerSideData1 = _d[1];
    var _e = antd_1.message.useMessage(), messageApi = _e[0], contextHolder = _e[1];
    //模态框关闭
    var hideModal = function (e) {
        e.stopPropagation();
        e.preventDefault();
        setOpen(false);
    };
    var failed = function () {
        messageApi.open({
            type: 'error',
            content: 'ネットワーク異常です,あとでお試しください',
            className: 'custom-class',
            style: {
                marginTop: '40vh'
            }
        });
    };
    var handleModalDelete = function () {
        max_1.request("/api/secure/deleteWishListByProductId", { params: { productId: productId } }).then(function (data) {
            if (data.result) {
                setServerSideData1(serverSideData1.filter(function (item) {
                    return item.pid !== productId;
                }));
            }
            else {
                failed();
            }
            setOpen(false);
        });
    };
    var handleDelete = function (pid) {
        //先给serversidedata减少值，然后改变data,同时上传服务器要砍掉哪个
        console.log(pid);
        setProductId(pid);
        setOpen(true);
        // setData(serverSideData1.map((item, index: number) => {
        //   return ({
        //     key: index, img: <img style={{ width: 70, height: 70 }} src={item.imgSrc} />, description: <a style={{ fontSize: 12 }} href={item.href}>{item.description}</a>,
        //     price: <span style={{ color: '#f00', fontWeight: 600 }}>{`¥${NumToString(item.price)}`}</span>, stockInfo: '在庫有り.',
        //     action: <Space size="middle"><a onClick={() => handleDelete(item.pid)}>削除</a> </Space>
        //   })
        // }))
    };
    react_1.useEffect(function () {
        setData(serverSideData1.map(function (item, index) {
            return ({
                key: index,
                img: react_1["default"].createElement("img", { style: { width: 70, height: 70 }, src: item.imgSrc }), description: react_1["default"].createElement("a", { style: { fontSize: 12 }, href: item.href }, item.description),
                price: react_1["default"].createElement("span", { style: { color: '#f00', fontWeight: 600 } }, "\u00A5" + NumToString_1["default"](item.price)),
                stockInfo: '在庫有り.',
                action: react_1["default"].createElement(antd_1.Space, { size: "middle" },
                    react_1["default"].createElement("a", { onClick: function () { return handleDelete(item.pid); } }, "\u524A\u9664"),
                    " ")
            });
        }));
    }, []);
    react_1.useEffect(function () {
        console.log("in1");
        setData(serverSideData1.map(function (item, index) {
            return ({
                key: index,
                img: react_1["default"].createElement("img", { style: { width: 70, height: 70 }, src: item.imgSrc }), description: react_1["default"].createElement("a", { style: { fontSize: 12 }, href: item.href }, item.description),
                price: react_1["default"].createElement("span", { style: { color: '#f00', fontWeight: 600 } }, "\u00A5" + NumToString_1["default"](item.price)),
                stockInfo: '在庫有り.',
                action: react_1["default"].createElement(antd_1.Space, { size: "middle" },
                    react_1["default"].createElement("a", { onClick: function () { return handleDelete(item.pid); } }, "\u524A\u9664"),
                    " ")
            });
        }));
    }, [serverSideData1]);
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: FavoriteProduct_less_1["default"].mainTitle }, "\u304A\u6C17\u306B\u5165\u308A\u30A2\u30A4\u30C6\u30E0\u4E00\u89A7"),
        contextHolder,
        react_1["default"].createElement(antd_1.Table, { locale: {
                emptyText: function () {
                    return react_1["default"].createElement("div", { className: FavoriteProduct_less_1["default"].empty },
                        react_1["default"].createElement("div", { className: FavoriteProduct_less_1["default"].top },
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement("h3", null, "\u304A\u6C17\u306B\u5165\u308A\u30A2\u30A4\u30C6\u30E0\u306F\u767B\u9332\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002"),
                                react_1["default"].createElement("h4", null, "\u304A\u6C17\u306B\u5165\u308A\u30A2\u30A4\u30C6\u30E0\u3092\u767B\u9332\u3057\u3066\u3001\u3044\u3064\u3067\u3082\u7C21\u5358\u306B\u4E00\u89A7\u3067\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u307E\u3059\u3002"))),
                        react_1["default"].createElement("div", { className: FavoriteProduct_less_1["default"].display },
                            react_1["default"].createElement("a", { href: "/", className: FavoriteProduct_less_1["default"].btn }, "\uFF1E \u30C8\u30C3\u30D7\u30DA\u30FC\u30B8"),
                            react_1["default"].createElement("a", { href: "/account?key=dashboard", className: FavoriteProduct_less_1["default"].btn }, "\uFF1E \u30DE\u30A4\u30DA\u30FC\u30B8\u30C8\u30C3\u30D7")));
                }
            }, dataSource: data, style: { width: 810 }, bordered: true, pagination: { hideOnSinglePage: true } },
            react_1["default"].createElement(Column, { title: "\u5546\u54C1\u540D", dataIndex: "img", key: "img" }),
            react_1["default"].createElement(Column, { title: "\u88FD\u54C1\u7D39\u4ECB\u3067\u3059", dataIndex: "description", key: "description" }),
            react_1["default"].createElement(Column, { title: "\u4FA1\u683C", dataIndex: "price", key: "price" }),
            react_1["default"].createElement(Column, { title: "\u5728\u5EAB\u60C5\u5831", dataIndex: "stockInfo", key: "stockInfo" }),
            react_1["default"].createElement(Column, { title: "\u64CD\u4F5C", key: "action", dataIndex: "action" }),
            " "),
        react_1["default"].createElement(antd_1.Modal, { centered: true, open: open, closeIcon: null, onOk: handleModalDelete, onCancel: hideModal, okText: '\u524A\u9664\u78BA\u5B9A\u3067\u3059', cancelText: "\u524A\u9664\u653E\u68C4\u3067\u3059" },
            react_1["default"].createElement("div", { style: {
                    textAlign: 'center', fontSize: 16, paddingBottom: 15,
                    fontWeight: 700
                } }, "\u8A72\u5F53\u3092\u524A\u9664\u3055\u308C\u308B\u3053\u3068\u306B\u306A\u308A\u307E\u3059\u304B?"))));
};
exports["default"] = App;
