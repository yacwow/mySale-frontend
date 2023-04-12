import UserLayout from '@/components/UserLayout'
import UserInfo from '@/components/User/UserInfo'
import { history, useModel } from '@umijs/max'
import { useEffect } from 'react';

export default function Index() {
    const{userName,userEmail,isLogin}=useModel('isLogin')
    // useEffect(()=>{
    //     if(!isLogin){
    //         localStorage.setItem("backUrl",window.location.href)
    //         history.push("/login")
    //     }
    // },[])
    return (
        <UserLayout >
           <UserInfo name={userName===undefined?'':userName}  email={userEmail} />
        </UserLayout>
    )
}