import { useState } from 'react';

const useUser = () => {
  const [invoiceAddressInfo, setInvoiceAddressInfo] = useState();//有几个地址就显示几个崽table上
  const [needUpdateIndex, setNeedUpdateIndex] = useState<number>();//控制页面显示哪个数据
  const [invoiceId, setInvoiceId] = useState<number>(-1);//具体改的是哪个address的id
  const [backUrl, setBackUrl] = useState("")//成功之后返回的url地址，因为updateuserinfo组件是复用的，跳转去哪里不确定

  return {
    invoiceAddressInfo,
    setInvoiceAddressInfo,
    needUpdateIndex,
    setNeedUpdateIndex,
    invoiceId,
    setInvoiceId,
    backUrl, setBackUrl
  };
};

export default useUser;
