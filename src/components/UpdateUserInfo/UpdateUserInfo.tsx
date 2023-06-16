import { request } from '@umijs/max';
import React, { useEffect, useState } from 'react';
import { useModel } from 'umi';
import UpdateUserInfoInitialValue from './UpdateUserInfoInitialValue';
interface Props {}

const App: React.FC<Props> = (props) => {
  const [initialValues, setInitialValues] = useState<any>();
  useEffect(() => {
    let pathArr = location.pathname.split('/');
    console.log(pathArr);
    if (pathArr.length === 3) {
      request(`/api/secure/getInitialValue/${pathArr[2]}`).then((data) => {
        if (data.result) {
          setInitialValues(data.data.userDetail);
        } else {
          setInitialValues({ country: '日本' });
        }
      });
    } else {
      setInitialValues({ country: '日本' });
    }
  }, []);

  return (
    <>
      {initialValues ? (
        <UpdateUserInfoInitialValue initialValues={initialValues} />
      ) : null}
    </>
  );
};
export default App;
