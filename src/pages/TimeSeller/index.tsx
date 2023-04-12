
import TimeSaleMainComp from '@/components/TimeSaleMainComp';
import LayoutWithOutLeftNavigate from '@/components/Layout/LayoutWithOutLeftNavigate';
import { request } from '@umijs/max';
import { useEffect, useState } from 'react';
const TimeSeller: React.FC = () => {
  const[dataList,setDataList]=useState()
  useEffect(() => {
    request("/api/timeSeller").then(({ data }) => {
      console.log(data);
      setDataList(data);
    })
  }, [])
  return (
    <LayoutWithOutLeftNavigate >

      <div style={{ width: 1300, margin: '0 auto' }}>
      {dataList?<TimeSaleMainComp dataList={dataList}/>:null}  
      </div>
    </LayoutWithOutLeftNavigate>


  );
};

export default TimeSeller;