import React, { useState } from 'react';
import styles from './PasswordRecovery.less'
import { Input, message } from 'antd';
import LayoutWithOutLeftNavigate from '@/components/Layout/LayoutWithOutLeftNavigate';
//@ts-ignore
import $ from 'jquery'
import { NavLink, request } from '@umijs/max';

const App: React.FC = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const loginError = () => {
        messageApi.open({
            type: 'error',
            content: '有効なメール形式ではありません。',
            className: 'custom-class',
            style: {
                marginTop: '30vh',
            },
        });
    }
    const toLogin = () => {
        messageApi.open({
            type: 'error',
            content: 'メールを送信中です。',
            className: 'custom-class',
            style: {
                marginTop: '30vh',
            },
        });
    }
    const success = () => {
        messageApi.open({
            type: 'error',
            content: 'メールの送信に成功しました。',
            className: 'custom-class',
            style: {
                marginTop: '30vh',
            },
        });
    }
    const failed = () => {
        messageApi.open({
            type: 'error',
            content: 'ネットワーク/技術障害のため、再送を遅れます。',
            className: 'custom-class',
            style: {
                marginTop: '30vh',
            },
        });
    }
    const handleClick = () => {
        let email = $('#userRestoreEmail').val().trim();
        console.log(email)
        let regex = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        if (regex.test(email)) {
            toLogin()
            request(`/api/recoveryPassword?email=${email}`,{timeout:50000}).then(({result}) => {
                if(result){
                    success()
                }else{
                    failed()
                }

            })
        } else {
            loginError()
        }


    }
    return (
        <LayoutWithOutLeftNavigate>
            <div className={styles.homeWrapper}>
                <NavLink to="/home" className={styles.toHome}>
                    <span>&lt; ホームページに戻ります</span>
                </NavLink>
            </div>

            {contextHolder}
            <div id="partialUserResetForm" className={styles.display}>
                <p className={styles.lead}>
                    パスワードをお忘れの場合
                </p>
                <p className={styles.second}>ご登録のメールアドレスを入力し、「パスワードを再設定」ボタンを押してください。</p>

                <div >
                    <label style={{ fontSize: 15 }}>メールアドレス</label>
                    <Input name="email" type="email" id="userRestoreEmail" placeholder="メールアドレスをご入力下さい" />
                </div>

                <button type="submit" className={styles.btn} onClick={handleClick}>パスワードを再設定</button>

            </div>
        </LayoutWithOutLeftNavigate>

    )
};
export default App;