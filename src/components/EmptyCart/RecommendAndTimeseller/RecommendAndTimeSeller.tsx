//@ts-nocheck
import React, { useEffect, useState } from 'react';
import RecommendAndBestSellerHeader from './RecommendAndBestSellerHeader';
import RecommendAndTimeSellerBanner from './RecommendAndTimeSellerBanner';
import { Button } from 'antd';
import { NavLink } from '@umijs/max';
import { RecommendAndTimeSeller } from '@/constants'
import styles from './RecommendAndTimeSeller.less';
import { request } from '@umijs/max';

interface dataListType {
  bestSeller: any[];
  newProduct: any[]
}

const App: React.FC = () => {
  const [selectItem, setSelectItem] = useState('bestSeller');
  const [bestSellerAndNewProductDataList, setBestSellerAndNewProductDataList] = useState<dataListType>();
  useEffect(() => {
    request("/api/bestSellerAndTimeSeller/20").then(({ data }) => {
      console.log(data)
      setBestSellerAndNewProductDataList(data);
    })

  }, [])

  useEffect(() => {
    // console.log('new product and best seller search', selectItem)
    // console.log(selectItem==='newProduct',selectItem==='bestSeller')
  }, [selectItem])
  return (
    <div className={styles.container}>
      <RecommendAndBestSellerHeader selectItem={selectItem} setSelectItem={setSelectItem}
        dataList={RecommendAndTimeSeller} />
      <div className={styles.pictureWrapper}
        style={{ width: 1100 }}>
        {
          bestSellerAndNewProductDataList ?
            <RecommendAndTimeSellerBanner dots={false} slidesToShow={5}
              newsBanner={bestSellerAndNewProductDataList[selectItem]} arrows={true} /> : null
        }

      </div>
      {/* <div className={styles.center} >
        <NavLink to={`/${selectItem}`}>
          <Button size='large' type="primary">MORE</Button>
        </NavLink>
      </div> */}
    </div>
  )
};
export default App;