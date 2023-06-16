import FavoriteProduct from '@/components/User/FavoriteProduct';
import UserLayout from '@/components/UserLayout';
import { useModel } from '@umijs/max';
import { history } from '@umijs/max';
import { request } from '@umijs/max';
import { useEffect, useState } from 'react';
export default function Favorite() {
  const [serverSideData, setServerSideData] = useState();
  const { isLogin } = useModel('isLogin');
  useEffect(() => {
    request('/api/secure/getFavoriteProduct').then((data) => {
      // console.log(result,data.serverSideData)
      if (data.result) {
        //验证成功，那就正常的流程
        setServerSideData(data.data.serverSideData);
      } else {
        if (isLogin) {
          setServerSideData([]);
        } else {
          //没认证成功，滚去注册界面，把当前的url存在localstorage里面，到了login取出
          localStorage.setItem('backUrl', window.location.href);
          history.push('/login');
        }
      }
    });
  }, []);
  return (
    <UserLayout>
      {serverSideData ? (
        <FavoriteProduct serverSideData={serverSideData} />
      ) : null}
    </UserLayout>
  );
}
