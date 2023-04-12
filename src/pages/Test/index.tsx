import React, { useEffect, useState } from 'react';
const VisibilitySensor = require('react-visibility-sensor');
// console.log(VisibilitySensor.default)
// import { newsBanner, discountBanner } from '@/constants';
import PictureWithModel from '@/components/PictureWithModel';
// // import PictureModel from '@/components/Picture/PictureModel';
import ItemRanking from '@/components/ItemRanking';
// import ItemRankingLayout from '@/components/ItemRankingLayout'
import BestSellerAndNewProduct from '@/components/BestSellerAndNewProduct'
import PickUpItem from '@/components/PickUpItem/PickUpItem';
import ImageMagnifier from '@/components/MainShow/PictureShowComponent/ImageMagnifier';
import ShowBody from '@/components/MainShow/ShowBody';
import TimeSaleMainComp from '@/components/TimeSaleMainComp';
import ReactVisibilitySensor from 'react-visibility-sensor';
import GeneralProductMainBody from '@/components/GeneralProductMainBody';
import Checkout from '@/components/Checkout';
// import {
//   HomeOutlined,
//   LoadingOutlined,
//   SettingFilled,
//   SmileOutlined,
//   SyncOutlined,
//   ShoppingCartOutlined
// } from '@ant-design/icons';
// import { Space } from 'antd';
// import Banner from '@/components/Banner';
import CombineBanner from '@/components/CombineBanner';
import PictureWithDescription from '@/components/PictureWithDescription';
import LazyComponent from './LazyComponent';
import PictureWithModel1 from './PictureWithModel';
import Image from "./bird.jpg";
import Footer from '@/components/Footer';
import Recommend from '@/components/Recommend';
import MainShow from '@/components/MainShow';
import SellDetail from '@/components/MainShow/SellDetail';
import PictureShowComponent from '@/components/MainShow/PictureShowComponent';
import ShowHeader from '@/components/MainShow/ShowHeader';
import LeftSidePromotionLine from '@/components/MainShow/LeftSidePromotionLine';
import TimeSaleSortComp from '@/components/TimeSaleMainComp/TimeSaleSortComp';
import ScrollTopComp from '@/components/ScrollTopComp';
import LeftNavigate from '@/components/GeneralProductMainBody/LeftNavigate';
import FullyParamPicture from '@/components/GeneralProductMainBody/FullyParamPicture';
import FullyParamPictureWithoutComment from '@/components/DailyNewComp/FullyParamPictureWithoutComment';
import RightDisPlay from '@/components/DailyNewComp/RightDisPlay';
import WearMatchMainBody from '@/components/WearMatchMainBody';
import CompanyIntro from '@/components/CompanyIntro';
import AboutUs from '@/components/CompanyIntro/AboutUs';
import Service from '@/components/CompanyIntro/Service';
import TradeMethod from '@/components/CompanyIntro/TradeMethod';
import Privacy from '@/components/CompanyIntro/Privacy';
import InteProperty from '@/components/CompanyIntro/InteProperty';
import Safe from '@/components/CompanyIntro/Safe';
import PaymentMethod from '@/components/CompanyIntro/PaymentMethod';
import DeliveryFee from '@/components/CompanyIntro/DeliveryFee';
import Refund from '@/components/CompanyIntro/Refund';
import PaymentFailure from '@/components/CompanyIntro/PaymentFailure';
import DiscountPagePicture from '@/components/DiscountPageMainBody/DiscountPagePicture';
import DiscountPageMainBody from '@/components/DiscountPageMainBody';
import HeaderOfEachComp from '@/components/Checkout/HeaderOfEachComp';
import CheckoutTop from '@/components/Checkout/CheckoutTop';
import DeliveryMethod from '@/components/Checkout/DeliveryMethod';
import PaymentMethod1 from '@/components/Checkout/CheckoutPaymentMethod';
import CheckoutDetail from '@/components/Checkout/CheckoutDetail';
import CheckoutPaymentMethod from '@/components/Checkout/CheckoutPaymentMethod';
import User from '@/components/User';
import SendEmail from '@/components/SendEmail';
import InvoiceComp from '@/components/User/InvoiceComp';
import UpdateUserInfo from '@/components/UpdateUserInfo';
import ReactImageMagnify from 'react-image-magnify';
import EmptyCart from '@/components/EmptyCart';
import './test.css'
import { request, useModel } from '@umijs/max';
import UserAddress from '@/components/User/UserAddress';
import PictureForSecondHalf from '@/components/SecondHalfPrice/PictureForSecondHalf';
import SecondHalfPrice from '@/components/SecondHalfPrice';
import UpdateUserInfoInitialValue from '@/components/UpdateUserInfo/UpdateUserInfoInitialValue';
import TestAuto from './TestAuto';

const App: React.FC = () => {
  //@ts-ignore
  let newday = Date.parse(new Date()) + 100000;
  console.log(newday + 1000000)
  const [visible, setVisible] = useState(false);

  return (

    // <Space>
    //   <HomeOutlined />
    //   <SettingFilled />
    //   <SmileOutlined />
    //   <SyncOutlined spin />
    //   <SmileOutlined rotate={180} />
    //   <LoadingOutlined />
    //   <ShoppingCartOutlined></ShoppingCartOutlined>

    // </Space>

    <div id="test" style={{ border: '1px solid red', height: 10000 }}>

      {/* <UpdateUserInfoInitialValue initialValues={{postcode:1000002}}></UpdateUserInfoInitialValue>
       */}
       <TestAuto></TestAuto>
      {/* <UpdateUserInfo></UpdateUserInfo> */}
      {/* <select>
      {<option style={{display: 'none'}}></option>}
        <option value={'1'}>2</option>
        <option value={'1'}>2</option>
        <option value={'1'}>2</option>
      </select> */}
      {/* <HeaderOfEachComp imgSrc='deliveryChoice.png' title='明細書'
      surFix={<a href='1'>明細書</a>}></HeaderOfEachComp> */}
      {/* <DiscountTimeCountDown expire={newday} ></DiscountTimeCountDown> */}
      {/* <DiscountPagePicture pictureData={{
        productId: 123,
        type: 'general',//衣服的二级分类  加上productid就是href，或者后台拼接出href传递过来
        bigImg: '/img/recommendPicture1.jpg',
        smallImg: ['img/recommendPicture2.jpg', 'img/recommendPicture3.jpg', 'img/recommendPicture5.webp'],
        currentPrice: 3456,
        originPrice: 5678,
        available: 10,
        discount: true,
        secondHalf: true,
      }} /> */}
      {/* <ScrollTopComp /> */}
      {/* <FullyParamPictureWithoutComment 
      imgSrc='//imgs.zasale.com/uploads/public/640/6dc/722/6406dc72203c8040160574.jpg?x-oss-process=image%2Fresize%2Cw_344%2Ch_420%2Ctype_4%2Fquality%2Cq_60%2Fformat%2Cwebp'
        href="/setup-p-128155.html"
        title="【再入荷预定】レディース ビジネス オフィス 通勤 リクルート お宮参り 入学式 卒業式 ママスーツ  パンツスーツ  洗える  ノーカラージャケット ワイドパンツ 3点セット"
        discount={true}
        price={12345}
        originPrice={234567}/> */}
      {/* <LeftNavigate></LeftNavigate> */}
      {/* <GeneralProductMainBody></GeneralProductMainBody> */}
      {/* <FullyParamPicture
        imgSrc='//imgs.zasale.com/uploads/public/640/6dc/722/6406dc72203c8040160574.jpg?x-oss-process=image%2Fresize%2Cw_344%2Ch_420%2Ctype_4%2Fquality%2Cq_60%2Fformat%2Cwebp'
        href="/setup-p-128155.html"
        title="【再入荷预定】レディース ビジネス オフィス 通勤 リクルート お宮参り 入学式 卒業式 ママスーツ  パンツスーツ  洗える  ノーカラージャケット ワイドパンツ 3点セット"
        newProduct={true}
        comment={{
          commentRate: 4,
          commentNum: 15,
          commentHref: "/setup-p-128155.html?rel=#reviews"
        }}
        price={12345}
      /> */}
      {/* <div onClick={() => {
        let anchorElement = document.getElementById('test');
        console.log(anchorElement)
        console.log(document.getElementById('activity1'))
        if (anchorElement) { anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' }) }
      }} >123</div> */}
      {/* <div style={{height:2000}}>1111</div>
    {visible?<div style={{height:2000,border:'1px solid yellow'}}>222</div>:null}<div></div>
    <ReactVisibilitySensor  onChange={(isVisible:boolean)=>{
      console.log('changed'+isVisible)
      if(isVisible){
        setVisible(true);
      }
    }}>
      <div style={{border:'10px solid red',height:100,width:100}}>22222</div>
    </ReactVisibilitySensor> */}

      {/* <div >   <MainShow/></div> */}
      {/* <LeftSidePromotionLine/> */}
      {/* <ShowBody/> */}
      {/* <ShowHeader/> */}
      {/* <ImageMagnifier minImg={'/img/banner1.jpg'} maxImg={'/img/banner1.jpg'} /> */}
      {/* <PictureShowComponent pictureSrc={[{src:'/img/recommendPicture1.jpg'},{src:'/img/recommendPicture1.jpg'}
  ,{src:'/img/recommendPicture2.jpg'}
  ,{src:'/img/recommendPicture3.jpg'}
  ,{src:'/img/recommendPicture2.jpg'}]}></PictureShowComponent> */}
      {/* <BestSellerAndNewProduct/>
    <Recommend></Recommend> */}
      {/* <img src="data:image/webp;UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA" alt="" /> */}
      {/* <PictureWithDescription imgSrc='./img/recommendPicture1.jpg' href='' description={{price:"100",detail:"haha",comment:1}}></PictureWithDescription>
    <PictureWithDescription imgSrc='./img/recommendPicture1.jpg' href='' description={{price:"100",detail:"haha",comment:1}}></PictureWithDescription>
    <PictureWithDescription imgSrc='./img/recommendPicture1.jpg' href='' description={{price:"100",detail:"haha",comment:1}}></PictureWithDescription>
    <PictureWithDescription imgSrc='./img/recommendPicture1.jpg' href='' description={{price:"100",detail:"haha",comment:1}}></PictureWithDescription>
    <PictureWithDescription imgSrc='./img/recommendPicture1.jpg' href='' description={{price:"100",detail:"haha",comment:1}}></PictureWithDescription>
    <PictureWithDescription imgSrc='./img/recommendPicture1.jpg' href='' description={{price:"100",detail:"haha",comment:1}}></PictureWithDescription>
    <PictureWithDescription imgSrc='./img/recommendPicture1.jpg' href='' description={{price:"100",detail:"haha",comment:1}}></PictureWithDescription>  
    <PictureWithDescription imgSrc='./img/recommendPicture1.jpg' href='' description={{price:"100",detail:"haha",comment:1}}></PictureWithDescription>
    <PictureWithDescription imgSrc='./img/recommendPicture1.jpg' href='' description={{price:"100",detail:"haha",comment:1}}></PictureWithDescription>
    <PictureWithDescription imgSrc='./img/recommendPicture1.jpg' href='' description={{price:"100",detail:"haha",comment:1}}></PictureWithDescription>

     <PictureWithDescription imgSrc='./img/recommendPicture1.jpg' href='' description={{price:"100",detail:"haha",comment:1}}></PictureWithDescription>
     <PictureWithDescription imgSrc='./img/recommendPicture1.jpg' href='' description={{price:"100",detail:"haha",comment:1}}></PictureWithDescription> */}
    </div >


    // <div >
    //   <ul style={{width:'630px',display:'flex',flexWrap:'wrap',listStyle:'none'}}>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/1"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/2"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/3"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/4"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/5"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/6"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/1"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/2"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/3"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/4"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/5"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/6"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/1"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/2"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/3"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/4"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/5"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/6"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/1"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/2"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/3"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/4"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/5"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/6"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/1"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/2"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/3"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/4"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/5"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/6"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/1"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/2"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/3"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/4"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/5"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/6"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/1"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/2"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/3"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/4"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/5"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/6"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/1"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/2"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/3"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/4"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/5"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/6"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/1"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/2"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/3"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/4"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/5"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/6"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/1"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/2"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/3"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/4"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/5"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/6"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/1"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/2"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/3"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/4"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/5"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/6"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/1"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/2"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/3"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/4"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/5"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/6"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/1"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/2"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/3"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/4"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/5"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/6"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/1"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/2"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/3"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/4"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/5"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/6"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/1"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/2"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/3"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/1"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/2"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/3"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/1"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/2"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/3"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/1"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/2"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/3"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/1"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/2"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/3"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/1"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/2"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/3"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/1"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/2"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/3"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/1"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/2"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/3"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/1"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/2"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/3"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/1"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/2"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/3"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/1"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/2"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image/3"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>
    //     <li style={{width:'300px'}}>    <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={"/api/image"}/></li>

    //   </ul>

    //   <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={Image}/>
    //   <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={Image}/>
    //   <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={Image}/>
    //   <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={Image}/>
    //   <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={Image}/>
    //   <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={Image}/>
    //   <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={Image}/>
    //   <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={Image}/>
    //   <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={Image}/>
    //   <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={Image}/>
    //   <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={Image}/>
    //   <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={Image}/>
    //   <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={Image}/>
    //   <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={Image}/>
    //   <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={Image}/>
    //   <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={Image}/>
    //   <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={Image}/>
    //   <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={Image}/>
    //   <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={Image}/>
    //   <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={Image}/>
    //   <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={Image}/>
    //   <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={Image}/>
    //   <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={Image}/>
    //   <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={Image}/>
    //   <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={Image}/>
    //   <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={Image}/>
    //   <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={Image}/>
    //   <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={Image}/>
    //   <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={Image}/>
    //   <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={Image}/>
    //   <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={Image}/>
    //   <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={Image}/>
    //   <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={Image}/>
    //   <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={Image}/>
    //   <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={Image}/>
    //   <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={Image}/>
    //   <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={Image}/>
    //   <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={Image}/>
    //   <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={Image}/>
    //   <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={Image}/>
    //   <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={Image}/>
    //   <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={Image}/>
    //   <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={Image}/>
    //   <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={Image}/>
    //   <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={Image}/>
    //   <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={Image}/>
    //   <PictureWithModel1 content='hello' rank={4} discount={true} href="/generalProduct" imgSrc={Image}/>

    //     {/* <CombineBanner></CombineBanner> */}
    //   {/* <ItemRankingLayout leftImage={<img src='img/itemranking1.jpg' ></img>}
    //   rightOneImage={<img src='img/itemranking1.jpg' ></img>}
    //   rightThreeImage={<img src='img/itemranking1.jpg' ></img>}
    //   rightTwoImage={<img src='img/itemranking1.jpg' ></img>}
    //   bottomOneImage={<img src='img/itemranking1.jpg' ></img>}
    //   bottomThreeImage={<img src='img/itemranking1.jpg' ></img>}
    //   bottomTwoImage={<img src='img/itemranking1.jpg' ></img>}></ItemRankingLayout> */}
    //   {/* <ItemRanking picture={<PictureWithModel content='hello' rank={4} discount={true} href="/generalProduct" imgSrc='img/itemranking1.jpg'/>}></ItemRanking> */}

    //   {/* <BestSellerAndNewProduct />
    //   <LazyComponent/> */}
    //   {/* <PictureWithModel content='hello' rank={4} discount={true} href="/generalProduct" imgSrc='img/itemranking1.jpg'/>
    //   <Picture content='hello' rank={1} src='img/itemranking1.jpg'/>
    //   <PictureWithDescription href='/generalProduct' imgSrc='img/itemranking1.jpg' discount={true}  description={{price:"100",detail:"haohaohaohaohaohaohaohaohaohaohaohaohaohaohaohaohaohaohaohaohaohaohaohao",comment:100}}></PictureWithDescription>
    //  */}

    // </div>

    // <PictureModel/>
  )
};

export default App;