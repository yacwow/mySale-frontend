import { useEffect } from 'react';
// 全局共享数据示例
import { DEFAULT_NAME } from '@/constants';
import { useState } from 'react';
import { request } from '@umijs/max';

const useUser = () => {
  const [name, setName] = useState<string>(DEFAULT_NAME);
  const [expireTime, setExpireTime] = useState<number>();
  const [discountExpireTime, setDiscountExpireTime] = useState<number>();
  const [secondHalfPriceExpireTime, setSecondHalfPriceExpireTime] =
    useState<number>();
  useEffect(() => {
    request('/api/getExpireTime').then((data) => {
      if (data.result) {
        //第一个是timeseller
        setExpireTime(data.data.expireTime);
        setSecondHalfPriceExpireTime(data.data.secondHalfPriceExpireTime);
        setDiscountExpireTime(data.data.discountExpireTime);
      }
    });
  }, []);
  return {
    name,
    setName,
    expireTime,
    setExpireTime,
    discountExpireTime,
    setDiscountExpireTime,
    secondHalfPriceExpireTime,
    setSecondHalfPriceExpireTime,
  };
};

export default useUser;
