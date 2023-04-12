"use strict";
exports.__esModule = true;
var FavoriteProduct_1 = require("@/components/User/FavoriteProduct");
var UserLayout_1 = require("@/components/UserLayout");
var max_1 = require("@umijs/max");
var max_2 = require("@umijs/max");
var react_1 = require("react");
function Favorite() {
    var _a = react_1.useState(), serverSideData = _a[0], setServerSideData = _a[1];
    react_1.useEffect(function () {
        max_2.request("/api/secure/getFavoriteProduct").then(function (_a) {
            var result = _a.result, data = _a.data;
            console.log(result, data.serverSideData);
            if (result) {
                //验证成功，那就正常的流程
                setServerSideData(data.serverSideData);
            }
            else {
                //没认证成功，滚去注册界面，把当前的url存在localstorage里面，到了login取出
                localStorage.setItem("backUrl", window.location.href);
                max_1.history.push('/login');
            }
            console.log(data);
        });
    }, []);
    return (React.createElement(UserLayout_1["default"], null, serverSideData ? React.createElement(FavoriteProduct_1["default"], { serverSideData: serverSideData }) : null));
}
exports["default"] = Favorite;
