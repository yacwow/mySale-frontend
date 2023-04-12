import UserLayout from '@/components/UserLayout'
import InvoiceComp from '@/components/User/InvoiceComp'
import { useModel } from '@umijs/max';
import { history } from '@umijs/max';
import { useEffect } from 'react';

export default function Index() {
    // const { isLogin } = useModel('isLogin');
    // useEffect(() => {
    //     if (!isLogin) {
    //         localStorage.setItem("backUrl",window.location.href)
    //         history.push("/login")
    //     }
    // }, [])
    return (
        <UserLayout >
            <InvoiceComp />
        </UserLayout>
    )
}