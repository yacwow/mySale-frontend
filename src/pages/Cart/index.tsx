import React, { useEffect, useState } from 'react';
import CartMainBody from '@/components/CartMainBody';
import LayoutWithOutLeftNavigate from '@/components/Layout/LayoutWithOutLeftNavigate';
import { history, request } from '@umijs/max';


const Cart: React.FC = () => {
  const [limit, setLimit] = useState();
  const [timelySale, setTimelySale] = useState();
  const [normalDiscount, setNormalDiscount] = useState();
  const [data, setData] = useState();
  const[luckyBag,setLuckyBag]=useState()
  useEffect(() => {
    console.log(window.location.href)
    //1请求coupon
    //2请求deduction 以上都可以通过token做到，所以我们直接申请secure端口，如果返回错误就是没有登录
    request("/api/secure/getCustomerInfo").then(({ result, data }) => {
      // console.log(limit,normalDiscount,timelySale);
      if (result) {
        //验证成功，那就正常的流程
        const { data: { limit, normalDiscount, timelySale,luckBag } } = data;
        setLimit(limit);
        setTimelySale(timelySale);
        setNormalDiscount(normalDiscount)
        setLuckyBag(luckBag);
      } else {
        //没认证成功，滚去注册界面，把当前的url存在localstorage里面，到了login取出
        localStorage.setItem("backUrl", window.location.href);
        history.push('/login')
      }

      console.log(data)
    })
    request("/api/secure/getCartListInfo").then(({ result, data }) => {
      // console.log(limit,normalDiscount,timelySale);
      if (result) {
        //验证成功，那就正常的流程
        console.log(data);
        setData(data.data)
      } 
      //不成功的话，再上一个请求里面就滚去注册界面了

    })

  }, [])
  return (
    <LayoutWithOutLeftNavigate>
      {(limit !== undefined&&data!==undefined && normalDiscount !== undefined && timelySale !== undefined)&&luckyBag!==undefined ?
        <CartMainBody luckyBag={luckyBag} limit={limit} originData={data} timelySale={timelySale} normalDiscount={normalDiscount} />
        // <div>hello {limit}{normalDiscount}{}</div>
        : null}
    </LayoutWithOutLeftNavigate>

  )
};
export default Cart;