import React, { useEffect, useState } from 'react';
import CheckoutTop from './CheckoutTop';

import { request } from '@umijs/max';



const App: React.FC<Props> = (props) => {
    useEffect(()=>{
        request("/api/secure/1").then((data)=>{
            console.log(data)
        })
    },[])

    // const [paymentMethod, setPaymentMethod] = useState('')//付款方式,不能为空，visa，ae，jcb，shop
    // const [deliveryMethodId, setDeliveryMethodId] = useState(1);//分别对应不同方式快递，不能为空，1,2,3分别为ems，iexpress，normal
    // const [updatedInfo, setUpdatedInfo] = useState<updateInfoType | undefined>()//支付后台所需的其他信息 pid，size，color，amount,totalPmt
    // const [userInfoFromCustomer,setUserInfoFromCustomer]=useState();//和userinfo不一样，这个是用户填完表格上传上来的

    // useEffect(() => {
    //     let deliveryMethod
    //     console.log(userInfoFromCustomer)
    //     console.log(updatedInfo)
    //     // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    //     deliveryMethodId === 1 ? deliveryMethod = 'normal' : (deliveryMethodId === 2 ? deliveryMethod = 'ems' : (deliveryMethodId === 3 ? deliveryMethod = 'express' : ''));
    //     if (deliveryMethod === '' || paymentMethod === '') return;
    //     let params = { ...updatedInfo, paymentMethod: paymentMethod, deliveryMethod: deliveryMethod }
    // }, [])
    return (
        <div >
            <CheckoutTop   />
            {/* <DeliveryMethod setDeliveryMethodId={setDeliveryMethodId} deliveryMethodId={deliveryMethodId} />
            <CheckoutPaymentMethod setPaymentMethod={setPaymentMethod} />
            <CheckoutDetail setNeedUpdate={setNeedUpdate} setUpdatedInfo={setUpdatedInfo} /> */}
        </div>
    )
};
export default App;