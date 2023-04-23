//@ts-nocheck
import React, { useEffect, useState } from 'react';
import BestSellerAndNewProductHeader from './BestSellerAndNewProductHeader';
import BestSellerAndNewProductBanner from './BestSellerAndNewProductBanner';
import { DownOutlined } from '@ant-design/icons';
import { NavLink } from '@umijs/max';
import { BestSellerAndNewProduct } from '@/constants'
import styles from './BestSellerAndNewProduct.less';
import { request } from '@umijs/max';

interface dataListType {
  bestSeller: any[];
  newProduct: any[]
}

const App: React.FC = () => {
  const [selectItem, setSelectItem] = useState('newProduct');
  const [bestSellerAndNewProductDataList, setBestSellerAndNewProductDataList] = useState<dataListType>();
  useEffect(() => {
    request("/api/bestSellerAndNewProduct/20").then(({ data }) => {
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
      <BestSellerAndNewProductHeader selectItem={selectItem} setSelectItem={setSelectItem}
        dataList={BestSellerAndNewProduct} />
      <div className={styles.pictureWrapper}
        style={{ width: 1500 }}>
        {
          bestSellerAndNewProductDataList!==undefined&&bestSellerAndNewProductDataList[selectItem] ?
            <BestSellerAndNewProductBanner dots={false} slidesToShow={5}
              newsBanner={bestSellerAndNewProductDataList[selectItem]} arrows={false} /> : null
        }

      </div>
      <div className={styles.center} style={{paddingTop:30}} >
        <NavLink to={`/${selectItem}`} 
        className={styles.center} style={{width:150,height:60,paddingTop:10,color:'black',textDecoration:'none'}}>
          <div >
            <div style={{fontSize:24}}>MORE</div>
            <div className={styles.down}
            ><DownOutlined /></div>
          </div>
        </NavLink>
      </div>
    </div>
  )
};
export default App;