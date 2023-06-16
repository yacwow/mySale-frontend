import React, { useEffect, useState } from 'react';
import LoginBody from '@/components/LoginBody';
import Layout from '@/components/Layout';
import { useModel } from '@umijs/max';
import { history } from '@umijs/max';
import { request } from '@umijs/max';

interface Props {}
const App: React.FC<Props> = (props) => {
  const { isLogin } = useModel('isLogin');
  const [show, setShow] = useState(false);
  useEffect(() => {
    //1.如果islogin，直接跳转了
    if (isLogin) {
      let backUrl = localStorage.getItem('backUrl');
      if (backUrl) {
        history.push(backUrl);
      } else {
        history.push('/home');
      }
    }
    //2.如果不是islogin，就发送请求确定是不是，如果是就跳转，不是就显示
    //平时统一的入口都是带token了的，所以进secure通道，验证下如果没token那就直接return
    let token = localStorage.getItem('token');
    if (!token) {
      setShow(true);
      return;
    }
    //只验证登录就行了，其他的数据，在我们验证这个的时候，他就已经开始请求了
    request('/api/secure/checkIfLogin').then((data) => {
      if (data.result) {
        //也是直接跳转了
        let backUrl = localStorage.getItem('backUrl');
        if (backUrl) {
          history.push(backUrl);
        } else {
          history.push('/home');
        }
      } else {
        setShow(true);
      }
    });
  }, []);
  return show ? (
    <Layout>
      <LoginBody />
    </Layout>
  ) : (
    <></>
  );
};
export default App;
