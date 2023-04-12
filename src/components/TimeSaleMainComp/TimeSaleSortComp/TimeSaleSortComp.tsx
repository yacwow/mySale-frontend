import React, { useState, useEffect, useRef } from 'react';
import OrderTypeHeader from './OrderTypeHeader';
import CategoryHeader from './CategoryHeader';
import TimeSalePictureShowingComp from './TimeSalePictureShowingComp';
import ReactVisibilitySensor from 'react-visibility-sensor';
import sort from '@/utils/sort';
export interface list {
  href: string, imgSrc: string, originPrice: number, currentPrice: number, currentStock: number, recommend: number, alt?: string
}
export interface TimeSaleTOtalDataListInterface {
  topGeneral: list[], dressGeneral: list[], bottomGeneral: list[], outerGeneral: list[], setUp: list[], generalShoes: list[], other: list[]
}
interface Props {
  dataList: any
}
//还要实现每60个读取新的图片，直到全部读取
const App: React.FC<Props> = (props) => {
  const { dataList } = props;
  //这里保存所有数据的ref，目前还是虚拟的 和上面这行对应
  // const dataList = useRef<TimeSaleTOtalDataListInterface>();
  //图片展示用的资源
  const [picShowingDataList, setPicShowingDataList] = useState<TimeSaleTOtalDataListInterface[]>([]);

  //上面的衣服种类选择
  const [selectType, setSelectType] = useState('ALL');
  //下面排序选择
  const [selectOrder, setSelectOrder] = useState('recommend');

  //还没展示但是已经请求过来的剩余图片存储的地方
  const [notShowingPictureDataList, setNotShowingPictureDataList] = useState<TimeSaleTOtalDataListInterface[] | null>();
  //用来判断是否需要最下面出现继续加载图片的一个提示图片,主要原理是：通过判断剩余图片的个数，把他加到展示图片的列表中。需要注意的是，
  const dataSize = useRef(0);
  //三个useeffect基本上一样，提取出来
  const handleSearch = () => {
    let res = sort(dataList as TimeSaleTOtalDataListInterface, selectType, selectOrder)
    console.log(res)
    if (res.length > 60) {
      dataSize.current = res.length;
      let showingPic = res.splice(0, 60);
      
      setPicShowingDataList([...showingPic]);
      setNotShowingPictureDataList(res);
      return
    }
    setPicShowingDataList([...res])
    setNotShowingPictureDataList(null);
  }
  useEffect(()=>{
console.log(picShowingDataList)
  },[picShowingDataList])

  useEffect(() => {
    // request("/api/timeSeller").then(({ data }) => {
    //   console.log(data);
    //   dataList.current = data;
    // })
    handleSearch()
    // let res = sort(dataList.current as TimeSaleTOtalDataListInterface, selectType, selectOrder)
    // setPicShowingDataList(res)
    // dataSize.current = res.length;
  }, [])
  useEffect(() => {
    console.log('new product and best seller search', selectType)
    // let res = sort(dataList.current as TimeSaleTOtalDataListInterface, selectType, selectOrder)
    // setPicShowingDataList(res)
    //我们在这里向后端发送请求或者在这里排序 都可以实现
    handleSearch()

  }, [selectType])
  useEffect(() => {
    console.log('new product and best seller search', selectOrder)
    //我们在这里做排序就行了
    // let res = sort(dataList.current as TimeSaleTOtalDataListInterface, selectType, selectOrder)
    // setPicShowingDataList(res)
    handleSearch()
  }, [selectOrder])

  //第一次加载60个已经排序好的图片，等这个change为true在加载60 直到没了
  const handleLoading = (change: boolean) => {
    if (change && notShowingPictureDataList) {
      console.log(picShowingDataList, notShowingPictureDataList)
      let temp=[...notShowingPictureDataList];
      setPicShowingDataList([...picShowingDataList, ...temp.splice(0, 60)])
      dataSize.current -= 60;
      if (notShowingPictureDataList.length > 60) {
        let temp=[...notShowingPictureDataList];
        setNotShowingPictureDataList([...temp.splice(60)])
      } else {
        // setPicShowingDataList([...picShowingDataList, ...notShowingPictureDataList])
        setNotShowingPictureDataList(null);
      }
    }
  }



  return (
    <div style={{ width: 1200, margin: '0 auto' }}>
      <CategoryHeader selectItem={selectType} setSelectItem={setSelectType}
      />
      <OrderTypeHeader selectItem={selectOrder} setSelectItem={setSelectOrder}
      />
      {picShowingDataList ? <TimeSalePictureShowingComp picShowingDataList={picShowingDataList} /> : null}

      {dataSize.current > 60 ? <ReactVisibilitySensor onChange={handleLoading}>
        <div style={{ width: 200, height: 200 }}></div>
      </ReactVisibilitySensor> : <div>到底了</div>}
    </div>
  )
};
export default App;

