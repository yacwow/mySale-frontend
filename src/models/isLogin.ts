import { request } from '@umijs/max';
import { useEffect, useState } from 'react';

const useUser = () => {
  const [num, setNum] = useState(0); //总的cart的商品数
  const [wishListNum, setWishListNum] = useState(0); //总的红心数
  const [invoiceNum, setInvoiceNum] = useState(0); //搜索栏头像这里，总的发票数
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  useEffect(() => {
    let number = 0;
    let wishListNum = 0;

    console.log('in1');
    let str = localStorage.getItem('productList');
    if (str) {
      let newStr = JSON.parse(str);
      if (Array.isArray(newStr)) {
        for (let i = 0; i < newStr.length; i++) {
          number += newStr[i].amount;
        }
      }
    }
    let wishListStr = localStorage.getItem('wishList');
    if (wishListStr) {
      let newWishListStr = JSON.parse(wishListStr);
      if (Array.isArray(newWishListStr)) {
        wishListNum = newWishListStr.length;
      }
    }
    setNum(number);
    setWishListNum(wishListNum);

    request('/api/secure/getUserInfo').then((data) => {
      if (data.result) {
        console.log(data);
        setIsLogin(true);
        setUserName(data.data.data.userName);
        setUserEmail(data.data.data.email);
      }
    });
  }, []);
  useEffect(() => {
    if (isLogin === true) {
      request('/api/secure/queryNumberOfWishAndProductAndInvoiceNum').then(
        (data) => {
          if (data.result) {
            setNum(data.data.productNum);
            setWishListNum(data.data.wishNum);
            setInvoiceNum(data.data.invoiceNum);
          }
        },
      );
    }
  }, [isLogin]);
  return {
    isLogin,
    setIsLogin,
    userName,
    setUserName,
    userEmail,
    setUserEmail,
    num,
    setNum,
    wishListNum,
    setWishListNum,
    invoiceNum,
    setInvoiceNum,
  };
};

export default useUser;
