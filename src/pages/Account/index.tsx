import UserLayout from '@/components/UserLayout'
import DashBoard from '@/components/User/DashBoard'
import { history, useModel } from '@umijs/max'
import { request } from '@umijs/max';
import { useEffect, useState } from 'react';
export default function Account() {

  const { setTitle, setName } = useModel('account');
  const [userScore, setUserScore] = useState(0);
  useEffect(() => {
    request("/api/secure/getDashboardInfo").then(({ result, data }) => {
      console.log(result)
      if (result) {
        //验证成功，那就正常的流程
        setName(`${data.userInfo.firstName} ${data.userInfo.lastName}`);
        setUserScore(data.userInfo.deduction)
      } else {
        //没认证成功，滚去注册界面，把当前的url存在localstorage里面，到了login取出
        localStorage.setItem("backUrl", window.location.href);
        history.push('/login')
      }

      console.log(data)
    })
  }, [])

  return (
    <UserLayout>
      <DashBoard userScore={userScore} setTitle={setTitle}  />
    </UserLayout>
  )
}
