import React from 'react';
import styles from './DiscountPagePicture.less'
import { NavLink } from '@umijs/max';
//@ts-ignore
import { LazyLoadImage } from "react-lazy-load-image-component";
import NumToString from '@/utils/NumToString';
interface Props {
  pictureData:{
    href: string,
    type: string,
    salesPagePictures: {bigimgsrc?:string,smallimgsrc?:string}[],
    newprice: number,
    discount?:boolean,
    secondHalf?:boolean
    stockNum:number,
  }

}

const App: React.FC<Props> = (props) => {
  const { pictureData} = props;
  return (
    <NavLink to={pictureData.href} className={styles.container}>
      <div className={styles.header}>
        <div >
            <LazyLoadImage  src={pictureData.salesPagePictures[0]?.bigimgsrc} alt="" className={styles.main}/>
            {pictureData.discount&& <LazyLoadImage src="/img/discount.jpg" alt="" className={styles.discount} /> }
            {pictureData.secondHalf&& <LazyLoadImage src="/img/50%discount.webp" alt="" className={styles.secondHalf} />}
        </div>
      </div>
      <div className={styles.mainBody}>
        { pictureData.salesPagePictures.map((item,index:number)=>{
          if(index===0) return null;
          return <LazyLoadImage key={index} src={item.smallimgsrc} className={styles.smallImg}></LazyLoadImage>
        })}
      </div>

      <div className={styles.context}>
        <p className={styles.price}>
          <span>￥{NumToString(pictureData.newprice)}</span>
          <span>税込</span>
          <span className={styles.oldPrice}>
              <span>￥{NumToString(pictureData.newprice+1000)}</span>
              <span>税込</span>
          </span>
        </p>
        <p className={styles.limit}>
          <span>数量限定:100</span>
          <span>残り:{pictureData.stockNum}</span>
        </p>
        <p className={styles.progress}>
          <i style={{ width: `${pictureData.stockNum }%` }}></i>
        </p>
        <div className={styles.btn}>今すぐ購入</div>
      </div>
    </NavLink>
  )
};
export default App;


