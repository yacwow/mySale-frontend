import React, { useEffect, useState } from 'react';
import styles from './Reset.less'
import { Input, message } from 'antd';
import LayoutWithOutLeftNavigate from '@/components/Layout/LayoutWithOutLeftNavigate';
//@ts-ignore
import $ from 'jquery'
import { history, request } from '@umijs/max';

const App: React.FC = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const[token,setToken]=useState('');
    const loginError = () => {
        messageApi.open({
            type: 'error',
            content: 'パスワードは空にできません。',
            className: 'custom-class',
            style: {
                marginTop: '30vh',
            },
        });
    }
    const loginNetError = () => {
        messageApi.open({
            type: 'error',
            content: '请求已过期/已经修改成功',
            className: 'custom-class',
            style: {
                marginTop: '30vh',
            },
        });
    }
    const loginSuccess = () => {
        messageApi.open({
            type: 'success',
            content: 'パスワード変更に成功しました',
            className: 'custom-class',
            style: {
                marginTop: '30vh',
            },
        });
    }
    useEffect(()=>{
        try{
            let str= window.location.search.split("=")[1];
            console.log(str)
            setToken(str);
        }catch(e){
            history.replace('/home')
        }
    },[])
    const handleClick = () => {
        let password = $('#resetPassword').val().trim();
        if (password.length === 0) {
            //提示密码不能为空
            loginError()
        } else {
            request(`/api/resetPassword/${token}/${password}`).then(({result}) => {
                console.log(result)
                if (result) {
                    loginSuccess();
                } else {
                    loginNetError()
                }

            })
        }

    }
    return (
        <LayoutWithOutLeftNavigate>
            {contextHolder}
            <div id="partialUserResetForm" className={styles.display}>

                <p className={styles.second}>新しいパスワードを入力して確認ボタンを押してくださいます。</p>

                <div >
                    <label style={{ fontSize: 15, marginBottom: 10 }}>新しいパスワードです</label>
                    <Input name="email" type="email" id="resetPassword" placeholder="新しいパスワードをお願いします" />
                </div>

                <button type="submit" className={styles.btn} onClick={handleClick}>確認します</button>

            </div>
        </LayoutWithOutLeftNavigate>

    )
};
export default App;