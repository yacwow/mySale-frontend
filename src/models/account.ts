import { MenuProps } from 'antd';
import { useState } from 'react';

const useUser = () => {
  const [title, setTitle] = useState('マイページトップ');
  const [name, setName] = useState('');
  //以下五个是ShoppingHistory的状态
  const [current, setCurrent] = useState('orderHistory'); //只有请求回来的四种string
  const [data, setData] = useState<any>([]); //展示用的已经排序好了的shoppinghistory的数据
  const [originData, setOriginData] = useState<any>();
  const [items, setItems] = useState<MenuProps['items']>();
  const [deleteNum, setDeleteNum] = useState(0); //invoiceid
  return {
    title,
    setTitle,
    name,
    setName,
    current,
    setCurrent,
    data,
    setData,
    originData,
    setOriginData,
    items,
    setItems,
    deleteNum,
    setDeleteNum,
  };
};

export default useUser;
