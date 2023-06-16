import React, { useEffect, useState } from 'react';
import LayoutWithOutLeftNavigate from '@/components/Layout/LayoutWithOutLeftNavigate';
import Checkout from '@/components/Checkout';
import { history, request, useModel } from '@umijs/max';

const App: React.FC = () => {
  const [userInfo, setUserInfo] = useState();
  const { setInvoiceAddressInfo } = useModel('invoiceAddress');
  useEffect(() => {
    request('/api/secure/checkOut').then(({ result, data }) => {
      if (result) {
        //验证成功，那就正常的流程
        setUserInfo(data);
        setInvoiceAddressInfo(data.address);
        console.log(data);
      } else {
        //没认证成功，滚去注册界面，把当前的url存在localstorage里面，到了login取出
        localStorage.setItem('backUrl', window.location.href);
        history.push('/login');
      }
    });
  }, []);
  return (
    <LayoutWithOutLeftNavigate>
      <div style={{ width: 875, margin: '0 auto', marginTop: 130 }}>
        {userInfo ? (
          <Checkout userInfo={userInfo} setUserInfo={setUserInfo} />
        ) : null}
      </div>
    </LayoutWithOutLeftNavigate>
  );
};
export default App;
