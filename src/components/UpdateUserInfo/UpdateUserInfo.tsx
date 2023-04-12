import React, { useEffect, useState } from 'react';
import {  useModel } from 'umi';
import UpdateUserInfoInitialValue from './UpdateUserInfoInitialValue';
interface Props {
}

const App: React.FC<Props> = (props) => {
  const { needUpdateIndex, invoiceAddressInfo } = useModel('invoiceAddress');
  const [initialValues, setInitialValues] = useState<any>();
  useEffect(() => {
    if (invoiceAddressInfo !== undefined&&needUpdateIndex!==-1) {
      // console.log(invoiceAddressInfo[needUpdateIndex])
      setInitialValues(invoiceAddressInfo[needUpdateIndex]);
    } else {
      setInitialValues({ country: '日本' })
    }

  }, [])

  return (
    <>{initialValues? <UpdateUserInfoInitialValue initialValues={initialValues}  />:null}</>
   )
};
export default App;