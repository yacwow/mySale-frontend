import UserLayout from '@/components/UserLayout'
import ShoppingHistory from '@/components/User/ShoppingHistory'
import { history, useModel } from '@umijs/max';
import { useEffect } from 'react';

export default function Index() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const{setTitle}=useModel('account');

    // const{isLogin}=useModel('isLogin');
    // useEffect(()=>{
    //     if(!isLogin){
    //         localStorage.setItem("backUrl",window.location.href)
    //         history.push("/login")
    //     }
    // },[])
    return (
        <UserLayout >
           <ShoppingHistory  setTitle={setTitle} />
        </UserLayout>
    )
}