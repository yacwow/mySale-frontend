import React, { useState, useEffect } from 'react';
import BestSellerAndNewProductHeader from '@/components/BestSellerAndNewProduct/BestSellerAndNewProductHeader';
//@ts-ignore
import { LazyLoadImage } from "react-lazy-load-image-component";
import { MustBuy } from '@/constants';
// import { MustBuyProductList } from '@/constants';
import styles from './MustBuyComp.less'
interface dataType{
    href:string,
    discount:boolean,
    price:number,
    imgSrc:string,
    productDescription:string,
    newProduct:boolean,
    secondOneHalf:boolean,
}
interface Props {
    mustBuyData:dataType[]
}

const App: React.FC<Props> = (props) => {
    const{mustBuyData}=props;
    // console.log(mustBuyData)
    const [selectItem, setSelectItem] = useState('bestSeller')
    //@ts-ignore
    const ProductObject = {};
    for (let key in mustBuyData) {
        if (key !== null) {
            //@ts-ignore
            ProductObject[key] = mustBuyData[key]?.map((item, index: number) => {
                return (
                    <li key={index} className={styles.block}>
                        <a href={item.href}>
                            <div className={styles.top} >
                                <LazyLoadImage src={item.imgSrc} alt={item.productDescription} className={styles.origin} />
                                {item.discount ? <LazyLoadImage src="/img/discount.jpg" className={styles.discount} /> : null}
                                {item.secondOneHalf ? <LazyLoadImage src="/img/50%discount.webp" className={styles.secondOneHalf} /> : null}
                            </div>
                        </a>
                        <div className={styles.item}>
                            <p style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                {item.newProduct ? <span className={styles.newSale}>NEW</span> : null} {item.productDescription}</p>
                            <p className={styles.price} style={{ color: '#444' }}><span>￥{item.price}</span>(税込)
                            </p>
                        </div>
                    </li>)
            })
        }

    }
    useEffect(() => {
    }, [selectItem])
    return (
        <div style={{ marginTop: 80 }}>
            <div style={{textAlign: 'center',fontSize: 24,fontWeight: 600,margin: '40px 0'}}>今シーズンMUST BUY大集合</div>
            <BestSellerAndNewProductHeader selectItem={selectItem} setSelectItem={setSelectItem} dataList={MustBuy} />
            <div className={styles.product}>{ProductObject[selectItem]}</div>
        </div>
    )
};
export default App;

