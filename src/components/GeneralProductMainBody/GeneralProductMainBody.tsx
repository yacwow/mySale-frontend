import React, { useEffect, useState } from 'react';
import RightDisplay from './RightDisplay';
import { generalProductMainBodyUrl } from "@/constants";
import LeftNavigate from "./LeftNavigate";
import styles from './GeneralProductMainBody.less'
import { request } from '@umijs/max';
import { useModel } from '@umijs/max';
import { history } from '@umijs/max';
import { type } from './../../.umi/plugin-dva/types.d';

interface Props {
}
let unlisten: (() => void) | undefined;


const App: React.FC<Props> = (props) => {//需要查出总商品数量
  const { firstLevelCategory, setFirstLevelCategory, secondLevelCategory, setSecondLevelCategory,setTitle,title } = useModel("generalSale");
  const [page, setPage] = useState(1);//右边图片展示下面分页变化
  const [param, setParam] = useState('');//左侧所搜兰按钮，可以直接按照该值去搜索
  const [sortType, setSortType] = useState('recommend');
  const [order, setOrder] = useState('asc')
  // const [firstLevelCategory, setFirstLevelCategory] = useState("")
  // const [secondLevelCategory, setSecondLevelCategory] = useState("")
  const [totalSize, setTotalSize] = useState(0);//总数据
  const [dataList, setDataList] = useState();//每次的具体数据
  
  // if(typeof(unlisten)==='function'){
  //   unlisten();
  // }
  // unlisten=history.listen(({ action, location }) => {
  //   console.log(firstLevelCategory)
  //       request(`/api/generalSale?firstLevelCategory=${firstLevelCategory === '' ? 'girlsLoveGeneral' : firstLevelCategory}`).then((data) => {
  //     setTotalSize(data.data.total)
  //     setDataList(data.data.product);
  //   })
  //   console.log(
  //     `The current URL is ${location.pathname}${location.search}${location.hash}`
  //   );
  //   console.log(`The last navigation action was ${action}`);
  // });
  // console.log(typeof(unlisten))

  // /**无论是page还是左侧的 */
  useEffect(() => {
    if (firstLevelCategory === '') {
      return;
    }
    console.log("in333")
    console.log(firstLevelCategory, secondLevelCategory, sortType, order)
    //发送ajax
    request(`/api/generalSale?firstLevelCategory=${firstLevelCategory}&secondLevelCategory=${secondLevelCategory}&orderType=${sortType}&orderAsc=${order}&page=${page}`).then(
      (data) => {
        setTotalSize(data.data.total)
        setDataList(data.data.product);
      }
    )

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    // console.log('in', page, listPath, sortType,param)//这里的sorttype注意newproduct是and条件的意思，asc和desc才是sort
  }, [firstLevelCategory, secondLevelCategory, sortType, order, page])

  //param单纯的搜索，搜玩了按recommend排序，是另一个请求了
  useEffect(() => {
    if (param === '') return;
    request(`/api/generalQuery?param=${param}`).then((data) => {
      setTotalSize(data.data.total)
      setDataList(data.data.product);
    })
  }, [param])
  /**一开始需要按照默认的搜索方式请求一次资源 */
  useEffect(() => {
    console.log("test123")
    if (firstLevelCategory === '') {
      request(`/api/generalSale?girlsLoveGeneral`)
        .then((data) => {
          setTotalSize(data.data.total)
          setDataList(data.data.product);
        })
    }

    // console.log(firstLevelCategory, secondLevelCategory)

    // request(`/api/generalSale?firstLevelCategory=${firstLevelCategory === '' ? 'girlsLoveGeneral' : firstLevelCategory}`).then((data) => {
    //   setTotalSize(data.data.total)
    //   setDataList(data.data.product);
    // })
    // unlisten = history.listen(({ action, location }) => {
    //   let params: string;
    //   if (firstLevelCategory === '') {
    //     params = 'girlsLoveGeneral'
    //   } else if (secondLevelCategory === '') {
    //     params = firstLevelCategory;
    //   } else {
    //     params = `${firstLevelCategory}&secondLevelCategory=${secondLevelCategory}`
    //   }
    //   request(`/api/generalSale?firstLevelCategory=${params}`).then((data) => {
    //     setTotalSize(data.data.total)
    //     setDataList(data.data.product);
    //   })
    //   // console.log(
    //   //   `The current URL is ${location.pathname}${location.search}${location.hash}`
    //   // );
    //   // console.log(`The last navigation action was ${action}`);
    // });

    // // Later, when you're done...
    // return unlisten();
  }, [])
  return (
    <div className={styles.container}>
      <LeftNavigate setSecondLevelCategory={setSecondLevelCategory}
        setTitle={setTitle} setFirstLevelCategory={setFirstLevelCategory}
        navLinkData={generalProductMainBodyUrl} productCnt={totalSize} setParam={setParam} />
      {dataList ? <RightDisplay page={page} setOrder={setOrder} size={totalSize} dataList={dataList} title={title} setPage={setPage} setSortType={setSortType} /> : null}

    </div>

  )
};
export default App;


