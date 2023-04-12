import React from 'react';
import NumToString from '@/utils/NumToString';
import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from './PictureComp.less'
interface Props {
    picShowingData: { href: string, imgSrc: string, marketPrice: number, price: number, stockNum: number, recommend: number,secondOneHalf:boolean, alt?: string },
}
const App: React.FC<Props> = (props) => {
    const { picShowingData } = props;
    // console.log(picShowingData)
    if(picShowingData.stockNum<=2){
        picShowingData.stockNum=Math.floor(Math.random()*30)+10  
    }
    //看上去像是左右拉的那个库存数量的颜色占比
    const width=`${picShowingData.stockNum / 100*144}px`;
    const spanLeft=`${picShowingData.stockNum / 100*144-33}px`;
    return (
        <li style={{ position: 'relative', listStyle: 'none' }} className={styles.container}>
            <a href={picShowingData.href}>
                <div className={styles.img} style={{ position: 'relative' }}>
                    <LazyLoadImage className={styles.img}
                        src={picShowingData.imgSrc}
                        alt={picShowingData.alt ? picShowingData.alt : ''}
                    />
                    {picShowingData.secondOneHalf ? <LazyLoadImage src='/img/50%discount.webp' style={{position:'absolute',top:0,right:0}}></LazyLoadImage> : null}
                </div>
                <div className={styles.oldPriceWrapper}>
                    <span className={styles.oldPrice}>
                        ￥{NumToString(picShowingData.marketPrice)} 税込</span>
                    <span
                        style={{ backgroundColor: '#926326', padding: '2px 4px 2px 4px', color: '#fff', fontSize: 12 }}>
                        {Math.floor(((picShowingData.price / picShowingData.marketPrice) - 1) * 100)}%</span>

                </div>
                <span className={styles.price}>￥{NumToString(picShowingData.price)} 税込</span>
                <div className={styles.limit}>
                    <strong>数量限定:100</strong>
                    <p style={{position:"relative"}}>
                        <i className={styles.widthdata} style={{ width:width  }}></i>
                        <span style={{left: spanLeft }}>{picShowingData.stockNum}</span>
                    </p>
                </div>
            </a>
            <a href={picShowingData.href} className={styles.button} type="button" >今すぐ購入</a>
        </li>
    )
};
export default App;



// href  imgSrc picAlt, originPrice,currentPrice,(discountRate),currentstock,recommend
