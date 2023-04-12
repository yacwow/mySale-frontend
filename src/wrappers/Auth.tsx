import React, { useEffect, useState } from 'react';
import { Navigate } from '@umijs/max';

const AuthRouter = (props:any) => {
  // 这个根据自己判断是否登录
  const [isLogin,setIsLogin]=useState(true);
  
  useEffect(()=>{

  },[])
  return (
  isLogin ? <div>{props.children}</div>: <Navigate to="/login" />
  )
}

export default AuthRouter;
