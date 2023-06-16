// import { useModel } from '@umijs/max';
import styles from './index.less';
import React, { useEffect } from 'react';
import HeaderPromotion from '@/components/HeaderPromotion';
import HeaderSearch from '@/components/HeaderSearch';
import NavigateLine from '@/components/NavigateLine';
import CombineBanner from '@/components/CombineBanner';
import { navLinkUrl } from '@/constants';
import ItemRanking from '@/components/ItemRanking';
import BestSellerAndNewProduct from '@/components/BestSellerAndNewProduct';
import Recommend from '@/components/Recommend';
import PickUpItem from '@/components/PickUpItem';
import Footer from '@/components/Footer';
import ScrollTopComp from '@/components/ScrollTopComp';
// window.addEventListener('test',()=>{
//   console.log('in')
// })
// // console.log(window.test)
const HomePage: React.FC = () => {
  // const { name } = useModel('global');
  useEffect(() => {
    // window.scrollTo(100,4000);
  }, []);
  return (
    <div className={styles.container}>
      <HeaderPromotion src="/img/header.jpg" />
      <HeaderSearch />
      <NavigateLine navLinkUrl={navLinkUrl} />
      <CombineBanner />
      <ItemRanking />
      <BestSellerAndNewProduct />
      <Recommend />
      <PickUpItem />
      <Footer />
      <ScrollTopComp />
    </div>
  );
};

export default HomePage;
