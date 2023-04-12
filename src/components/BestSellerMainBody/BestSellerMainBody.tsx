import React, { useEffect, useState } from 'react';
import Banner from '../Banner';
import WeekPromotionProductBanner from './WeekPromotionProductBanner';
import MustBuyComp from './MustBuyComp';
import styles from './BestSellerMainBody.less'
import { request, useModel } from '@umijs/max';

interface Props {
}
const App: React.FC<Props> = (props) => {
//  let {weekPromotionBannerData,mustBuyData}= useModel(`bestseller`);

  const[weekPromotionBannerData,setWeekPromotionBannerData]=useState([]);
  const[mustBuyData,setMustBuyData]=useState([]);
  useEffect(()=>{
    request("/api/bestSellerPage/44").then(({data})=>{
      setWeekPromotionBannerData(data.bestSellerPage.bestSeller.slice(0,20));
      setMustBuyData(data.bestSellerPage)
    })
  },[])
  useEffect(()=>{
    // console.log(weekPromotionBannerData,mustBuyData)
  },[weekPromotionBannerData])
  return (
    <div style={{width:1200,margin:'0 auto'}}>
      <Banner dots={false} slidesToShow={1} arrows={false} newsBanner={[
        {url:'',imgSrc:"/img/bestRanking.webp"},
        {url:'',imgSrc:"/img/bestRanking.webp"}]}/>

        {weekPromotionBannerData?<WeekPromotionProductBanner weekPromotionBannerData={weekPromotionBannerData}/>:null}  

          <MustBuyComp mustBuyData={mustBuyData}/>

    </div>
)
};
export default App;