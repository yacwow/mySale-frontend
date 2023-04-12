import React, { useEffect } from 'react';
import LayoutWithOutLeftNavigate from '@/components/Layout/LayoutWithOutLeftNavigate';
import UpdateUserInfo from '@/components/UpdateUserInfo';
import { history, request } from '@umijs/max';
// import LeftList from '@/components/User/LeftList';

const App: React.FC = () => {
    useEffect(() => {
        request("/api/secure/checkOut").then(({ result, data }) => {
            if (result) {
                console.log(data)
            } else {
                //没认证成功，滚去注册界面，把当前的url存在localstorage里面，到了login取出
                localStorage.setItem("backUrl", window.location.href);
                history.push('/login')
            }
        })
    }, [])
    return (
        <div>
            <LayoutWithOutLeftNavigate>
                <div style={{width:830,margin:'40px auto'}}>
                <UpdateUserInfo />
                </div>

            </LayoutWithOutLeftNavigate>
        </div>
    )
};
export default App;