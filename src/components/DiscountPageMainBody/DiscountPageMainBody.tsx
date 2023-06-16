import { useModel } from '@umijs/max';
import { request } from '@umijs/max';
import React, { useEffect, useState } from 'react';
import TimeCountDown from '../TimeSaleMainComp/TimeCountDown';
import DiscountPagePicture from './DiscountPagePicture';

const App: React.FC = () => {
  const { discountExpireTime } = useModel('global');
  const [pictureData, setPictureData] = useState([]);
  useEffect(() => {
    //ajax请求过期时间和pictureData
    request('/api/discount').then(({ data }) => {
      setPictureData(data.data);
    });
  }, []);
  const buildPictureList = () => {
    return pictureData.map((item, index: number) => {
      return <DiscountPagePicture pictureData={item} key={index} />;
    });
  };
  return (
    <div style={{ marginTop: 50 }}>
      {discountExpireTime && <TimeCountDown expire={discountExpireTime} />}
      <div
        style={{
          display: 'flex',
          width: 1180,
          flexWrap: 'wrap',
          margin: '0 auto',
          justifyContent: 'space-between',
          marginTop: 50,
        }}
      >
        {pictureData ? buildPictureList() : null}
      </div>
    </div>
  );
};
export default App;
