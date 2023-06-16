import React, { useEffect, useState } from 'react';
import RightDisplay from './RightDisplay';
import { generalProductMainBodyUrl } from '@/constants';
import LeftNavigate from './LeftNavigate';
import styles from './GeneralProductMainBody.less';
import { request } from '@umijs/max';
import { useModel } from '@umijs/max';

const App: React.FC = () => {
  //需要查出总商品数量
  const {
    firstLevelCategory,
    setFirstLevelCategory,
    secondLevelCategory,
    setSecondLevelCategory,
    setTitle,
    title,
  } = useModel('generalSale');
  const [page, setPage] = useState(1); //右边图片展示下面分页变化
  const [sortType, setSortType] = useState('recommend');
  const [order, setOrder] = useState('');
  const [totalSize, setTotalSize] = useState(0); //总数据
  const [dataList, setDataList] = useState(); //每次的具体数据
  const [params, setParams] = useState('');
  // /**无论是page还是左侧的 */
  useEffect(() => {
    if (params !== '' && params !== undefined) {
      request(
        `/api/generalQuery?param=${params}&orderType=${sortType}&orderAsc=${order}&page=${page}`,
      ).then((data) => {
        setTotalSize(data.data.total);
        setDataList(data.data.product);
      });
      return;
    }
    let pathArr = location.pathname.split('/');
    console.log(pathArr);
    if (pathArr.length === 2) {
      request(
        `/api/generalSale?firstLevelCategory=girlsLoveGeneral&orderType=${sortType}&orderAsc=${order}&page=${page}`,
      ).then((data) => {
        setTotalSize(data.data.total);
        setDataList(data.data.product);
      });
      return;
    }
    if (pathArr.length === 3) {
      setFirstLevelCategory(pathArr[2]);
      //发送ajax
      request(
        `/api/generalSale?firstLevelCategory=${pathArr[2]}&orderType=${sortType}&orderAsc=${order}&page=${page}`,
      ).then((data) => {
        setTotalSize(data.data.total);
        setDataList(data.data.product);
      });
    } else if (pathArr.length === 4) {
      console.log('in11111');
      setFirstLevelCategory(pathArr[2]);
      setSecondLevelCategory(pathArr[3]);
      //发送ajax
      request(
        `/api/generalSale?firstLevelCategory=${pathArr[2]}&secondLevelCategory=${pathArr[3]}&orderType=${sortType}&orderAsc=${order}&page=${page}`,
      ).then((data) => {
        setTotalSize(data.data.total);
        setDataList(data.data.product);
      });
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [firstLevelCategory, secondLevelCategory, sortType, order, page, params]);

  return (
    <div className={styles.container}>
      <LeftNavigate
        setSecondLevelCategory={setSecondLevelCategory}
        setTitle={setTitle}
        setFirstLevelCategory={setFirstLevelCategory}
        setTotalSize={setTotalSize}
        setDataList={setDataList}
        navLinkData={generalProductMainBodyUrl}
        productCnt={totalSize}
        sortType={sortType}
        order={order}
        page={page}
        params={params}
        setParams={setParams}
      />
      {dataList ? (
        <RightDisplay
          page={page}
          setOrder={setOrder}
          size={totalSize}
          dataList={dataList}
          title={title}
          setPage={setPage}
          setSortType={setSortType}
        />
      ) : null}
    </div>
  );
};
export default App;
