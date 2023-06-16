import React, { useEffect, useState } from 'react';
import RightDisplay from './RightDisplay';
import { generalProductMainBodyUrl } from '@/constants';
import LeftNavigate from './LeftNavigate';
import styles from './GeneralProductMainBody.less';
import { request } from '@umijs/max';

interface Props {}
const App: React.FC<Props> = (props) => {
  //需要查出总商品数量
  const [page, setPage] = useState(1); //右边图片展示下面分页变化
  const [param, setParam] = useState(''); //左侧所搜兰按钮，可以直接按照该值去搜索
  const [sortType, setSortType] = useState('recommend');
  const [order, setOrder] = useState('asc');
  const [firstLevelCategory, setFirstLevelCategory] = useState('');
  const [secondLevelCategory, setSecondLevelCategory] = useState('');
  const [totalSize, setTotalSize] = useState(0); //总数据
  const [dataList, setDataList] = useState(); //每次的具体数据
  const [title, setTitle] = useState('レディース');
  /**无论是page还是左侧的 */
  useEffect(() => {
    console.log(firstLevelCategory, secondLevelCategory, sortType, order);
    if (page === 1) {
      //发送ajax
      request(
        `/api/generalSale?firstLevelCategory=${firstLevelCategory}&secondLevelCategory=${secondLevelCategory}&orderType=${sortType}&orderAsc=${order}&page=${page}`,
      ).then((data) => {
        setTotalSize(data.data.total);
        setDataList(data.data.product);
      });
    } else {
      //自动就会发送了
      setPage(1);
    }

    // console.log('in', page, listPath, sortType,param)//这里的sorttype注意newproduct是and条件的意思，asc和desc才是sort
  }, [firstLevelCategory, secondLevelCategory, sortType, order]);
  //监控页面的改变，来发送ajax，其他条件的改变直接就是把page数字变1，导致发生请求就可以了
  useEffect(() => {
    request(
      `/api/generalSale?firstLevelCategory=${firstLevelCategory}&secondLevelCategory=${secondLevelCategory}&orderType=${sortType}&orderAsc=${order}&page=${page}`,
    ).then((data) => {
      setTotalSize(data.data.total);
      setDataList(data.data.product);
    });
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [page]);
  //param单纯的搜索，搜玩了按recommend排序，是另一个请求了
  useEffect(() => {
    request(`/api/generalQuery?param=${param}`).then((data) => {
      setTotalSize(data.data.total);
      setDataList(data.data.product);
    });
  }, [param]);
  /**一开始需要按照默认的搜索方式请求一次资源 */
  useEffect(() => {
    console.log('3');
    let e = window.location.pathname;
    console.log(e);
    request(`/api/generalSale?firstLevelCategory=girlsLoveGeneral`).then(
      (data) => {
        setTotalSize(data.data.total);
        setDataList(data.data.product);
      },
    );
  }, []);
  return (
    <div className={styles.container}>
      <LeftNavigate
        setSecondLevelCategory={setSecondLevelCategory}
        setTitle={setTitle}
        setFirstLevelCategory={setFirstLevelCategory}
        navLinkData={generalProductMainBodyUrl}
        productCnt={totalSize}
        setParam={setParam}
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
