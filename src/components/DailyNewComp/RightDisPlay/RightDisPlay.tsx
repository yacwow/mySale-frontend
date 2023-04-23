import React, { useEffect, useState } from 'react';
import FullyParamPictureWithoutComment from '../FullyParamPictureWithoutComment';
import styles from './RightDisplay.less'
import ReactVisibilitySensor from 'react-visibility-sensor';
import { request } from '@umijs/max';
interface Props {
}
//有些搜索词条可能不对，到时候再改
let searchList = [
  {
    url: "ALL",
    name: "ALL"
  }, {
    url: "topGeneral",
    name: "トップス"
  }, {
    url: "dressGeneral",
    name: "ワンピース"
  }, {
    url: "outerGeneral",
    name: "アウター"
  }, {
    url: "bottomGeneral",
    name: "ボトムス"
  }, {
    url: "setup",
    name: "セット"
  }, {
    url: "generalShoes",
    name: "シューズ"
  }, {
    url: "bagGoods",
    name: "バッグ"
  }, {
    url: "generalGoods",
    name: "小物"
  },
]

const App: React.FC<Props> = (props) => {
  const [activeNum, setActiveNum] = useState(0);
  const [requestParam, setRequestParam] = useState('ALL');
  const [page, setPage] = useState(1);//到了加载这个位置就加一页，触发effect加载新的数据
  const [maxPage, setMaxPage] = useState(1);
  const [visible, setVisible] = useState(true);
  const [dailyPictureData, setDailyPictureData] = useState([]);
  const handleClick = (searchParam: string, index: number) => {
    console.log(searchParam)
    setRequestParam(searchParam)
    setActiveNum(index)
    setPage(1)
  }
  // useEffect(() => {
  //   //发送ajax获取所有新品的信息（数量目前未定）
  //   request(`/api/dailyNew?params=${requestParam}&page=${page}`).then(({ data }) => {
  //     setDailyPictureData(data.dailyNewProduct);
  //     setMaxPage(Math.ceil(data.total / 60));
  //   })
  // }, [])
  useEffect(() => {
    if (page === 1) {
      request(`/api/dailyNew?params=${requestParam}&page=${page}`).then(({ data }) => {
        setMaxPage(Math.ceil(data.total / 60));
        setDailyPictureData(data.dailyNewProduct);
      })
    } else {
      request(`/api/dailyNew?params=${requestParam}&page=${page}`).then(({ data }) => {
        console.log(data)
        let newData=[...dailyPictureData, ...data.dailyNewProduct]
        setDailyPictureData(newData);
      })
    }

    if (page === maxPage) {//证明是最后一页了,ajax请求失败
      setVisible(false)
    }
  }, [page,requestParam])
  // useEffect(() => {
  //   if (page !== 1) {
  //     setPage(1)
  //   } else {
  //     request(`/api/dailyNew?params=${requestParam}&page=${page}`).then(({ data }) => {
  //       setMaxPage(Math.ceil(data.total / 60));
  //       setDailyPictureData(data.dailyNewProduct);
  //     })
  //   }

  // }, [requestParam])
  const buildList = () => {
    return searchList.map((item, index: number) => {
      return <li className={activeNum === index ? styles.active : ''} key={index} onClick={() => handleClick(item.url, index)}>
        {item.name}
      </li>
    })
  }
  const buildDisplay = () => {
    return dailyPictureData.map((item, index: number) => {
      return <div key={index} className={styles.mylist}>
        <FullyParamPictureWithoutComment
          imgSrc={item.imgSrc}
          href={item.href}
          title={item.productDescription}
          discount={item.discount}
          price={item.price}
          originPrice={item.marketPrice}
          secondOneDiscount={item.secondOneHalf} />
      </div>

    })
  }
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {buildList()}
      </div>
      <div className={styles.display}>
        {dailyPictureData?buildDisplay():null}
      </div>
      <ReactVisibilitySensor onChange={(isVisible: boolean) => {
        console.log('changed' + isVisible)
        if (isVisible && page < maxPage) {
          setPage(page + 1)
        }
      }} >
        {visible ? <div>
          <img style={{ width: '50%' }} src='/loading.gif' />
          <img style={{ width: '50%' }} src='/loading.gif' />
          <h3 style={{
            padding: 0, margin: 0, fontSize: 24,
            textAlign: 'center'
          }}>
            ロード中です...
          </h3></div> : <h3 style={{
            padding: 0, margin: 0, fontSize: 24,
            textAlign: 'center'
          }}>
          すべてロードされています
        </h3>}

      </ReactVisibilitySensor>
    </div>
  )
};
export default App;





