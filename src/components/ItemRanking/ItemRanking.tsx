import React, { useEffect, useRef, useState } from 'react';
import ItemRankingHeader from './ItemRankingHeader';
import ItemRankingLayout from './ItemRankingLayout';
import { DownOutlined } from '@ant-design/icons';
import styles from './ItemRanking.less'
import PictureWithModel from '../PictureWithModel';
import { request } from '@umijs/max';
import { NavLink } from '@umijs/max';
import { itemRankingList } from '@/constants';
import { dataList } from './type';
import userAPI from 'mock/userAPI';
interface Props {
  picture: JSX.Element
}

const App: React.FC<Props> = (props) => {
  const [selectItem, setSelectItem] = useState<keyof (dataList)>('topGeneral');
  const count = useRef(1);
  const selectList = useRef(['topGeneral', 'outerGeneral', 'dressGeneral', 'bottomGeneral', 'setUp', 'generalShoes', 'bagGoods',
    'indoorWearInner', 'generalGoods', 'swimwearInner',])
  const [dataList, setDataList] = useState<dataList>();
  const [itemRankingDataProp, SetItemRankingDataProp] = useState<JSX.Element[]>();
  let timer: string | number | NodeJS.Timeout | null | undefined ;
  const myTimer=useRef(timer);
  useEffect(() => {
    console.log(dataList?.topGeneral)
    console.log(selectItem)
    console.log(dataList?.[selectItem])
    SetItemRankingDataProp(dataList?.[selectItem].map((item, index) => {
      return <PictureWithModel key={index} content={{ title: item.productDescription, price: item.price }}
        rank={item.rank} discount={item.discount} href={item.href} imgSrc={item.imgSrc} />;
    }))

    if (dataList !== undefined) {
      myTimer.current = setInterval(() => {
        if (count.current >= 9) {
          console.log(selectList.current[count.current])
          console.log(count.current)
          setSelectItem(selectList.current[count.current])
          count.current = 0;
        } else {
          console.log(count.current)
          console.log(selectList.current[count.current])
          setSelectItem(selectList.current[count.current])
          count.current = count.current + 1;
        }
      }, 5000)
    }
    console.log(timer)
    return (() => {
      if (myTimer.current !== null) {
        clearInterval(myTimer.current)
      }
    })
  }, [dataList])
  useEffect(() => {
    let params = [];
    // eslint-disable-next-line guard-for-in
    for (const key in itemRankingList) {
      //@ts-ignore
      params.push(itemRankingList[key].url);
    }
    JSON.stringify(params)
    console.log(params);
    request(`/api/itemRanking`, {
      params
    }).then(({ data }) => {
      setDataList(data.itemRanking)
    })
    return (() => {
      console.log("in2")
    })
  }, [])
  useEffect(() => {
    console.log('item ranking search', selectItem);
    console.log(dataList?.[selectItem])
    SetItemRankingDataProp(dataList?.[selectItem].map((item, index) => {
      return <PictureWithModel key={index} content={{ title: item.productDescription, price: item.price }}
        rank={item.rank} discount={item.discount} href={item.href} imgSrc={item.imgSrc} />;
    }))

  }, [selectItem])
  return (
    <div className={styles.container}>
      <ItemRankingHeader selectItem={selectItem} setSelectItem={setSelectItem} myTimer={myTimer}/>
      {itemRankingDataProp ? <ItemRankingLayout itemRankingDataProp={itemRankingDataProp} /> : null}
      {/* <div className={styles.center}>
        <NavLink to={`/generalSale?${selectItem}`}>
          <Button size='large' type="primary">MORE</Button>
        </NavLink>
      </div> */}
      <div className={styles.center} style={{ paddingTop: 30 }} >
        <NavLink to={`/generalSale?${selectItem}`}
          className={styles.center} style={{ width: 150, height: 60, paddingTop: 10, color: 'black', textDecoration: 'none' }}>
          <div >
            <div style={{ fontSize: 24 }}>MORE</div>
            <div className={styles.down}
            ><DownOutlined /></div>
          </div>
        </NavLink>
      </div>
    </div>
  )
};
export default App;