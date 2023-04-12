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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var antd_1 = require("antd");
var react_1 = require("react");
var Checkout_less_1 = require("./Checkout.less");
// import HeaderOfEachComp from '../HeaderOfEachComp';
var HeaderOfEachComp_1 = require("./HeaderOfEachComp");
var umi_1 = require("umi");
// import { NavLink } from '@umijs/max';
var DeliveryMethod_1 = require("./DeliveryMethod");
var CheckoutPaymentMethod_1 = require("./CheckoutPaymentMethod");
var CheckoutDetail_1 = require("./CheckoutDetail");
var constants_1 = require("@/constants");
var max_1 = require("@umijs/max");
;
var formItemLayout = {
    labelCol: {
        span: 24
    },
    wrapperCol: {
        span: 24
    }
};
//这里需要把数据给后端看对不对，如果对了，就直接跳转到支付页面去了。告知支付页面要付多少钱。不对就通知客户网页异常，八小时后下单，到时候我查看这里错误的异常log
var App = function (props) {
    var userInfo = props.userInfo; //用户具体信息
    console.log(userInfo);
    var _a = max_1.useModel('invoiceAddress'), setNeedUpdateIndex = _a.setNeedUpdateIndex, setInvoiceId = _a.setInvoiceId, setBackUrl = _a.setBackUrl;
    var _b = max_1.useModel("isLogin"), invoiceNum = _b.invoiceNum, setInvoiceNum = _b.setInvoiceNum, setNum = _b.setNum;
    var form = antd_1.Form.useForm()[0];
    var _c = react_1.useState(''), paymentMethod = _c[0], setPaymentMethod = _c[1]; //付款方式,不能为空，visa，ae，jcb，shop
    var _d = react_1.useState(1), deliveryMethodId = _d[0], setDeliveryMethodId = _d[1]; //分别对应不同方式快递，不能为空，1,2,3分别为ems，iexpress，normal
    var _e = react_1.useState(), updatedInfo = _e[0], setUpdatedInfo = _e[1]; //支付后台所需的其他信息 pid，size，color，amount,totalPmt
    // const [needUpdate, setNeedUpdate] = useState(false)//通知下面，可以提交了
    var _f = react_1.useState(''), postcode = _f[0], setPostcode = _f[1]; //邮编
    var _g = react_1.useState(true), postStatus = _g[0], setPostStatus = _g[1]; //判断邮编是否正确
    var _h = react_1.useState(0), selectedAddress = _h[0], setSelectedAddress = _h[1]; //控制第几个,用于全部信息都有的时候，几条不同地址的选择
    var _j = react_1.useState(true), cityStatus = _j[0], setCityStatus = _j[1];
    var _k = react_1.useState([]), cityData = _k[0], setCityData = _k[1];
    var _l = react_1.useState(true), addressStatus = _l[0], setAddressStatus = _l[1];
    var _m = react_1.useState([]), addressData = _m[0], setAddressData = _m[1];
    // const [userInfo, setUserInfo] = useState<any>()//用来给checkouttop组件个人信息自动填写的
    var _o = react_1.useState(-1), showPart = _o[0], setShowPart = _o[1]; //用来给checkouttop判断具体展示那个组件
    var _p = react_1.useState(), tableUserInfo = _p[0], setTableUserInfo = _p[1]; //用来保存用户信息，到时候我们直接用来传递，不用验证
    var _q = react_1.useState(''), tips = _q[0], setTips = _q[1]; //以下这四个都是给checkout detail用的
    var _r = react_1.useState(), checkoutTotal = _r[0], setCheckoutTotal = _r[1];
    var _s = react_1.useState(), checkoutData = _s[0], setCheckoutTotalData = _s[1];
    var _t = react_1.useState(0), deliveryAmount = _t[0], setDeliveryAmount = _t[1];
    var _u = react_1.useState(0), showedNormalDeliveryAmount = _u[0], setShowedNormalDeliveryAmount = _u[1];
    var _v = react_1.useState(false), disabled = _v[0], setDisabled = _v[1];
    var _w = antd_1.message.useMessage(), messageApi = _w[0], contextHolder = _w[1];
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
    // const handleRequest = (params: { orderData: boolean, cartListData: boolean }) => {
    //     request("/api/secure/getCheckOutProductData", { params }).then(data => {
    //         if (data.result) {
    //             localStorage.setItem("orderData", JSON.stringify(data.data.orderData));
    //             localStorage.setItem("cartList", JSON.stringify(data.data.cartListData));
    //             setCheckoutTotalData(data.data.cartListData)
    //             setCheckoutTotal(data.data.orderData)
    //             setShowedNormalDeliveryAmount(data.data.orderData.deliveryAmount);
    //             setDeliveryAmount(data.data.orderData.deliveryAmount)
    //         } else {
    //             history.push('/cart')
    //         }
    //     })
    // }
    react_1.useEffect(function () {
        if (userInfo.fullAddress) {
            setShowPart(1); //数据全的
            setTableUserInfo(__assign({ userInfo: userInfo.email, firstName: userInfo.firstName, lastName: userInfo.lastName }, userInfo.address[0]));
        }
        else {
            setShowPart(2); //数据不全
        }
        try {
            var orderDataJson = localStorage.getItem("orderData");
            var cartListDataJson = localStorage.getItem("cartList");
            if (orderDataJson && cartListDataJson) {
                var orderData = JSON.parse(orderDataJson);
                setCheckoutTotal(orderData);
                setShowedNormalDeliveryAmount(orderData.deliveryAmount);
                setDeliveryAmount(orderData.deliveryAmount);
                var cartListData = JSON.parse(cartListDataJson);
                setCheckoutTotalData(cartListData);
            }
            else {
                umi_1.history.push('/cart');
            }
        }
        catch (e) {
            //localstorage出问题了，提示重新选取
            localStorage.removeItem("productList");
            localStorage.removeItem("orderData");
            //请求并setstate 和上面一样，可以提取
            umi_1.history.push('/cart');
            // handleRequest({ orderData: true, cartListData: true });
        }
    }, []);
    //如果是表格，就进入这里，先valid
    var onFinish = function (values) {
        console.log('Received values of form: ', values);
        if (paymentMethod === '') {
            window.alert('お支払い方法の選択をお願いします。');
            return;
        }
        //由于postcode被我们自己做过了，所以数据需要自己获取
        var newUpdateInfo = __assign({}, values);
        newUpdateInfo.postcode = postcode;
        newUpdateInfo.tips = tips;
        var params = { userInfo: __assign({}, newUpdateInfo), updatedInfo: __assign({}, updatedInfo), deliveryMethodId: deliveryMethodId, paymentMethod: paymentMethod, needUpdateAddress: true };
        console.log(params);
        //先设置提交的button为disabled
        setDisabled(true);
        umi_1.request("/api/secure/createInvoice", {
            // param
            method: "POST",
            params: __assign({}, params)
        }).then(function (data) {
            console.log(data);
            //这边把cart和orderdata和productlistdata都去掉
            //跳转到支付页面，支付成功与否关系的是invoice的paid与否，跟这里无关了
            if (data.result) {
                localStorage.removeItem("productList");
                localStorage.removeItem("orderData");
                localStorage.removeItem("cartList");
                //用户的那个invoicenumber的state要加一，cart的number要归零
                setInvoiceNum(invoiceNum + 1);
                setNum(0);
                // //跳转到主页/timeseller
                // history.push("/timeseller")
            }
        })["catch"](function (e) {
            //提交按钮又可以用了，然后提示网络异常，重新提交
            setDisabled(false);
            failed();
        });
    };
    //如果是table我们只需要选择第几个，那就没必要valid用户信息
    var submitInfoWithoutValid = function () {
        if (paymentMethod === '') {
            window.alert('お支払い方法の選択をお願いします。');
            return;
        }
        var values = tableUserInfo;
        values.tips = tips;
        console.log(values);
        //先设置提交的button为disabled
        setDisabled(true);
        umi_1.request("/api/secure/createInvoice", {
            // param
            method: "POST",
            params: {
                userInfo: values,
                updatedInfo: updatedInfo, deliveryMethodId: deliveryMethodId, paymentMethod: paymentMethod,
                needUpdateAddress: false
            }
        }).then(function (data) {
            console.log(data);
            //这边把cart和orderdata和productlistdata都去掉
            //跳转到支付页面，支付成功与否关系的是invoice的paid与否，跟这里无关了
            if (data.result) {
                localStorage.removeItem("productList");
                localStorage.removeItem("orderData");
                localStorage.removeItem("cartList");
                //用户的那个invoicenumber的state要加一，cart的number要归零
                setInvoiceNum(invoiceNum + 1);
                setNum(0);
                // //跳转到主页/timeseller
                //  history.push("/timeseller")
            }
        })["catch"](function (e) {
            //提交按钮又可以用了，然后提示网络异常，重新提交
            setDisabled(false);
            failed();
        });
        console.log(values, updatedInfo, deliveryMethodId, paymentMethod);
    };
    //邮编input时间
    var handleBlur = function (e) {
        umi_1.request("/api/getAddress/" + e.target.value.trim()).then(function (serverSideData) {
            if (serverSideData.result === false) {
                setPostStatus(false);
                return;
            }
            var data = serverSideData.data;
            // console.log(data,serverSideData);
            // setProvince(data.province);
            form.setFieldValue("province", data.province);
            form.setFieldValue("address", data.area);
            form.setFieldValue("city", data.city);
            // setAddress(data.area);
            // setCity(data.city);
            setCityData(data.newCityList);
            setAddressData(data.newAreaList);
            setCityStatus(false);
            setAddressStatus(false);
            setPostStatus(true);
        });
    };
    //用于处理请求地址
    var handleFieldsChange = function (changedFields, allFields) {
        var _a, _b, _c;
        if (!changedFields)
            return; //好像修改代码时候会出问题，加一行吧
        if (((_a = changedFields[0]) === null || _a === void 0 ? void 0 : _a.name[0]) === 'province') {
            form.setFieldValue("address", '');
            form.setFieldValue("city", '');
            // setCityStatus(true);
            setAddressStatus(true);
            console.log(changedFields);
            umi_1.request("api/getCityList/" + changedFields[0].value).then(function (data) {
                // setCityStatus(false);
                // console.log(data);
                setCityData(data);
            });
        }
        else if (((_b = changedFields[0]) === null || _b === void 0 ? void 0 : _b.name[0]) === 'city') {
            form.setFieldValue("address", '');
            umi_1.request("api/getAddressList/" + changedFields[0].value).then(function (data) {
                setAddressStatus(false);
                // console.log(data);
                setAddressData(data);
            });
        }
        else if (((_c = changedFields[0]) === null || _c === void 0 ? void 0 : _c.name[0]) === 'address') {
            // console.log(allFields[8].value,allFields[9],allFields[10])
            umi_1.request("api/getPostCode/" + allFields[8].value + "/" + allFields[9].value + "/" + allFields[10].value).then(function (data) {
                setPostcode(data[0]);
            });
        }
    };
    var handlePostcodeChange = function (e) {
        setPostcode(e.target.value);
    };
    //具体地址选择
    var handleAddressChoose = function (index, item) {
        setSelectedAddress(index);
        console.log(item);
        setTableUserInfo(__assign({ userInfo: userInfo.email, firstName: userInfo.firstName, lastName: userInfo.lastName }, item));
    };
    var buildTrListIfHasDetail = function () {
        var trList = userInfo.address.map(function (item, index) {
            return (react_1["default"].createElement("tr", { key: index, className: Checkout_less_1["default"].choose },
                react_1["default"].createElement("td", { style: { verticalAlign: 'middle' } },
                    react_1["default"].createElement("input", { type: "radio", checked: selectedAddress === index, onChange: function () { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        handleAddressChoose(index, item);
                                        return [4 /*yield*/, setNeedUpdateIndex(index)];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, setInvoiceId(item.invoiceId)];
                                    case 2:
                                        _a.sent();
                                        setBackUrl('/checkout');
                                        return [2 /*return*/];
                                }
                            });
                        }); } })),
                react_1["default"].createElement("td", { className: Checkout_less_1["default"].center, style: { verticalAlign: 'middle', width: '20%' } }, item.email),
                react_1["default"].createElement("td", { className: Checkout_less_1["default"].center, style: { verticalAlign: 'middle', width: '10%' } }, item.firstName + " " + item.lastName),
                react_1["default"].createElement("td", { className: Checkout_less_1["default"].center, style: { width: '57%' } }, item.country + "," + item.province + "," + item.city + "," + item.area + "," + item.detailAddress + "," + item.mobilePhone + "," + item.postcode),
                react_1["default"].createElement("td", { style: { textAlign: 'center', verticalAlign: 'middle', width: '10%' } },
                    react_1["default"].createElement(antd_1.Button, { onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, setNeedUpdateIndex(index)];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, setInvoiceId(item.invoiceId)];
                                    case 2:
                                        _a.sent();
                                        setBackUrl('/checkout');
                                        umi_1.history.push("/updateOrAddAddress");
                                        return [2 /*return*/];
                                }
                            });
                        }); }, style: { color: '#89a9d2', fontWeight: 'bold' } }, "\u5185\u5BB9\u5909\u66F4"))));
        });
        return react_1["default"].createElement(react_1["default"].Fragment, null,
            " ",
            react_1["default"].createElement("table", { className: Checkout_less_1["default"].table, style: { marginBottom: 10, border: '1px solid #EFE3D2', width: 820, marginLeft: 55, marginTop: 10 } },
                react_1["default"].createElement("tbody", null, trList)),
            react_1["default"].createElement("div", { style: { cursor: 'pointer', textDecoration: 'underline', color: '#f40' } },
                react_1["default"].createElement("div", { onClick: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, setNeedUpdateIndex(-1)];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, setInvoiceId(-1)];
                            case 2:
                                _a.sent();
                                setBackUrl('/checkout');
                                umi_1.history.push("/updateOrAddAddress");
                                return [2 /*return*/];
                        }
                    }); }); }, style: { color: 'red', fontSize: 12, paddingLeft: 55 } }, "\u65B0\u3057\u3044\u9001\u4ED8\u5148\u3092\u8FFD\u52A0\u3059\u308B")));
    };
    var buildForm = function () {
        return (react_1["default"].createElement(antd_1.Form, __assign({ onFinish: onFinish, onFieldsChange: handleFieldsChange }, formItemLayout, { initialValues: { country: '日本', firstName: userInfo.tableValue.firstName, lastName: userInfo.tableValue.lastName, email: userInfo.tableValue.email }, size: 'small', form: form, name: "register", 
            // onFinish={onFinish}
            style: { width: 820, marginLeft: 55 }, layout: "vertical", scrollToFirstError: true }),
            react_1["default"].createElement(antd_1.Form.Item, { style: { width: 400 }, name: "firstName", label: react_1["default"].createElement("div", null,
                    " ",
                    react_1["default"].createElement("span", null, "\u6C0F\u540D\uFF08\u6F22\u5B57\uFF09"),
                    " ",
                    react_1["default"].createElement("span", { style: { color: '#c9302c' } }, "\uFF08\u4F8B\uFF09\u7530\u4E2D\u6D0B\u5B50"),
                    " "), 
                // tooltip="(例）田中洋子"
                rules: [{ required: true, message: '名前を空欄にしてはいけません!', whitespace: true }] },
                react_1["default"].createElement(antd_1.Input, { placeholder: '\u6C0F\u540D' })),
            react_1["default"].createElement(antd_1.Form.Item, { style: { width: 400 }, name: "lastName", label: react_1["default"].createElement("div", null,
                    " ",
                    react_1["default"].createElement("span", null, "\u30B7\u30E1\u30A4\uFF08\u30AB\u30BF\u30AB\u30CA\uFF09"),
                    " ",
                    react_1["default"].createElement("span", { style: { color: '#c9302c' } }, "\uFF08\u4F8B\uFF09\u30BF\u30CA\u30AB\u3000\u30E8\u30A6\u30B3"),
                    " "), rules: [{ required: true, message: '姓を空にしてはいけません!', whitespace: true }] },
                react_1["default"].createElement(antd_1.Input, { placeholder: '\u30B7\u30E1\u30A4' })),
            react_1["default"].createElement(antd_1.Form.Item, { style: { width: 400 }, name: "email", label: "E\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9", rules: [
                    {
                        type: 'email',
                        message: '有効なメールアドレスではありません!'
                    },
                    {
                        required: true,
                        message: 'メールボックスは空にできません!'
                    },
                ] },
                react_1["default"].createElement(antd_1.Input, null)),
            react_1["default"].createElement("div", { style: { display: 'flex', justifyContent: 'space-between' } },
                react_1["default"].createElement(antd_1.Form.Item, { style: { width: 400 }, name: "mobilePhone", label: react_1["default"].createElement(react_1["default"].Fragment, null,
                        react_1["default"].createElement("span", { style: { fontWeight: 'normal', marginRight: 5 } }, "\u643A\u5E2F\u96FB\u8A71\u304A\u5B85"),
                        react_1["default"].createElement("span", { style: { color: '#c9302c', fontWeight: 'normal' } }, " \u643A\u5E2F\u756A\u53F7\u3092\u6B63\u3057\u304F\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\uFF08\u9023\u7D61\u7528\uFF09")), rules: [{
                            required: true,
                            validator: function (rule, val) {
                                var mobileReg = /^(0([1-9]{1}-?[1-9]\d{3}|[1-9]{2}-?\d{3}|[1-9]{2}\d{1}-?\d{2}|[1-9]{2}\d{2}-?\d{1})-?\d{4}|0[789]0-?\d{4}-?\d{4}|050-?\d{4}-?\d{4})$/;
                                switch (true) {
                                    case !Boolean(val):
                                        return Promise.reject('携帯電話の番号を空にすることはできません。');
                                    case !mobileReg.test(val.trim()):
                                        return Promise.reject('携帯電話番号のフォーマットが間違っています。');
                                    default:
                                        return Promise.resolve();
                                }
                            }
                        }] },
                    react_1["default"].createElement(antd_1.Input, null)),
                react_1["default"].createElement(antd_1.Form.Item, { style: { width: 400, paddingTop: 30 } },
                    react_1["default"].createElement("div", { style: { color: '#c9302c', fontWeight: 300 } }, "\uFF08\u4F8B\uFF09090-1234-5678 \u534A\u89D2"))),
            react_1["default"].createElement("div", { style: { display: 'flex', justifyContent: 'space-between' } },
                react_1["default"].createElement(antd_1.Form.Item, { style: { width: 400 }, name: "phone", label: "\u56FA\u5B9A\u96FB\u8A71", rules: [{
                            validator: function (rule, val) {
                                var mobileReg = /^(0([1-9]{1}-?[1-9]\d{3}|[1-9]{2}-?\d{3}|[1-9]{2}\d{1}-?\d{2}|[1-9]{2}\d{2}-?\d{1})-?\d{4}|0[789]0-?\d{4}-?\d{4}|050-?\d{4}-?\d{4})$/;
                                switch (true) {
                                    case !Boolean(val):
                                        return Promise.resolve();
                                    case !Boolean(val.trim()):
                                        return Promise.resolve();
                                    case !mobileReg.test(val.trim()):
                                        return Promise.reject('固定電話番号のフォーマットが間違っています。');
                                    default:
                                        return Promise.resolve();
                                }
                            }
                        }] },
                    react_1["default"].createElement(antd_1.Input, null)),
                react_1["default"].createElement(antd_1.Form.Item, { style: { width: 400, paddingTop: 30 } },
                    react_1["default"].createElement("div", { style: { color: '#c9302c', fontWeight: 300 } }, "\uFF08\u4F8B\uFF09086-123-4567 \u534A\u89D2"))),
            react_1["default"].createElement("div", { style: { display: 'flex', justifyContent: 'space-between' } },
                react_1["default"].createElement(antd_1.Form.Item, { style: { width: 400 }, name: "postcode", label: react_1["default"].createElement(react_1["default"].Fragment, null,
                        react_1["default"].createElement("span", { style: { fontWeight: 'normal' } }, "\u90F5\u4FBF\u756A\u53F7")) },
                    react_1["default"].createElement(react_1["default"].Fragment, null,
                        react_1["default"].createElement(antd_1.Input, { onBlur: handleBlur, value: postcode, onChange: handlePostcodeChange }),
                        !postStatus ? react_1["default"].createElement("div", { style: { position: 'absolute', zIndex: 1000, color: '#c9302c' } }, "\u6709\u52B9\u306A\u90F5\u4FBF\u756A\u53F7\u3067\u306F\u3042\u308A\u307E\u305B\u3093") : null)),
                react_1["default"].createElement(antd_1.Form.Item, { style: { width: 400, paddingTop: 30 }, name: "tips" },
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("span", { style: { color: '#f40' } }, "\u90F5\u4FBF\u756A\u53F7\u5165\u529B\u3059\u308B\u3068\u3001\u4F4F\u6240\u304C\u81EA\u52D5\u7684\u306B\u8868\u793A\u3055\u308C\u308B"),
                        react_1["default"].createElement("a", { style: { background: '#c9302c', color: '#fff', fontWeight: 300 }, target: "_blank", href: "http://www.post.japanpost.jp/zipcode/", rel: "noreferrer" }, "\u90F5\u4FBF\u756A\u53F7\u691C\u7D22")))),
            react_1["default"].createElement("div", { style: { display: 'flex', justifyContent: 'space-between' } },
                react_1["default"].createElement(antd_1.Form.Item, { style: { width: 400 }, name: "country", label: "\u56FD" },
                    react_1["default"].createElement(antd_1.Input, { disabled: true, value: '日本' })),
                react_1["default"].createElement(antd_1.Form.Item, { style: { width: 400 }, name: "province", label: "\u90FD\u9053\u5E9C\u770C", rules: [{ required: true, message: '具体的な住所は空にしてはいけません!' }] },
                    react_1["default"].createElement(antd_1.Select, null, constants_1.checkOutOptions.map(function (item, index) {
                        return react_1["default"].createElement(antd_1.Select.Option, { key: index, value: item.label }, item.label);
                    })))),
            react_1["default"].createElement("div", { style: { display: 'flex', justifyContent: 'space-between' } },
                react_1["default"].createElement(antd_1.Form.Item, { style: { width: 400 }, name: "city", label: "\u5E02", rules: [{ required: true, message: '具体的な住所は空にしてはいけません!' }] },
                    react_1["default"].createElement(antd_1.Select, { disabled: cityStatus }, cityData === null || cityData === void 0 ? void 0 : cityData.map(function (item, index) {
                        return react_1["default"].createElement(antd_1.Select.Option, { key: index, value: item }, item);
                    }))),
                react_1["default"].createElement(antd_1.Form.Item, { style: { width: 400 }, name: "address", label: "\u753A", rules: [{ required: true, message: '具体的な住所は空にしてはいけません!' }] }, react_1["default"].createElement(antd_1.Select, { disabled: addressStatus }, addressData === null || addressData === void 0 ? void 0 : addressData.map(function (item, index) {
                    return react_1["default"].createElement(antd_1.Select.Option, { key: index, value: item }, item);
                })))),
            react_1["default"].createElement(antd_1.Form.Item, { style: { width: 400 }, name: "detailAddress", label: "\u756A\u5730\u2022\u30DE\u30F3\u30B7\u30E7\u30F3\u540D\u2022\u90E8\u5C4B\u756A\u53F7", 
                // <span>（例）6－01小林マンション201</span>
                rules: [{ required: true, message: '具体的な住所は空にしてはいけません!' }] },
                react_1["default"].createElement(antd_1.Input, null))));
    };
    return (react_1["default"].createElement("div", null,
        contextHolder,
        react_1["default"].createElement(HeaderOfEachComp_1["default"], { imgSrc: '/emailCheckout.png', title: '\u304A\u5C4A\u3051\u5148' }),
        showPart === 1 ? buildTrListIfHasDetail() : null,
        showPart === 2 ? buildForm() : null,
        showPart === -1 ? null : react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(DeliveryMethod_1["default"], { setDeliveryMethodId: setDeliveryMethodId, deliveryMethodId: deliveryMethodId, showedNormalDeliveryAmount: showedNormalDeliveryAmount }),
            react_1["default"].createElement(CheckoutPaymentMethod_1["default"], { setPaymentMethod: setPaymentMethod }),
            checkoutTotal !== undefined && checkoutData !== undefined && deliveryAmount !== undefined ?
                react_1["default"].createElement(CheckoutDetail_1["default"], { Total: checkoutTotal, Data: checkoutData, deliveryAmount: deliveryAmount, setTips: setTips, setDeliveryAmount: setDeliveryAmount, setUpdatedInfo: setUpdatedInfo, deliveryMethodId: deliveryMethodId }) : null,
            react_1["default"].createElement("div", { className: Checkout_less_1["default"].checkOut },
                react_1["default"].createElement("div", { className: Checkout_less_1["default"].button },
                    react_1["default"].createElement(antd_1.Button, { htmlType: "submit", className: Checkout_less_1["default"].center, disabled: disabled, onClick: function () {
                            if (showPart === 2) {
                                form.submit();
                            }
                            else if (showPart === 1) {
                                submitInfoWithoutValid();
                            }
                        }, title: "\u3054\u6CE8\u6587\u3092\u78BA\u5B9A\u3059\u308B" },
                        react_1["default"].createElement("span", { style: { color: 'white' } }, "\u3054\u6CE8\u6587\u3092\u78BA\u5B9A\u3059\u308B")),
                    react_1["default"].createElement("div", { style: { color: '#ccc', textAlign: 'start' } }, "\u3054\u6CE8\u610F\uFF1A\u6CE8\u6587\u5F8C\u306E\u5185\u5BB9\u5909\u66F4\u306F\u627F\u308A\u307E\u305B\u3093\u306E\u3067\u3001\u3054\u6CE8\u610F\u304F\u3060\u3055\u3044\u307E\u305B")),
                react_1["default"].createElement("br", null)),
            " ")));
};
exports["default"] = App;
