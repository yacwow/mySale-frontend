import React from 'react';
import NumToString from '@/utils/NumToString';
//@ts-ignore
import { LazyLoadImage } from "react-lazy-load-image-component";
import { NavLink } from '@umijs/max';
import styles from './FullyParamPictureWithoutComment.less'
interface Props {
    href: string,
    title: string,
    imgSrc: string,
    discount?: boolean,
    secondOneDiscount?: boolean
    price: number,
    originPrice:number,
}
const App: React.FC<Props> = (props) => {
    const { title, href, imgSrc,  discount = true, secondOneDiscount = false,originPrice,
        price} = props;
    let strPrice = NumToString(price);

    return (
        <li className={styles.cateItem}>
            <NavLink to={href}
                title={title}>
                <div className={styles.cateItemImage} >
                    <div className={styles.img}>
                        <LazyLoadImage className={styles.lazy}
                            src={imgSrc}
                            alt={title}
                            style={{ position: 'unset', display: 'block', width: '100%' }} />
                        {discount ? <LazyLoadImage src="/img/discount.jpg"
                            style={{ position: 'absolute', bottom: 0, right: 0, width: '30%' }} alt="" /> : null}
                        {secondOneDiscount ? <LazyLoadImage src="/img/50%discount.webp"
                            alt="二つ目は半額です"
                            style={{ width: '30%', height: 'auto', position: 'absolute', zIndex: 2, top: 0, right: 0 }} /> : null}

                    </div>
                </div>
            </NavLink>
            <div className={styles.cateItemData} >
                <NavLink to={href}
                    title={title} >
                    <p className={styles.omit}  >
                        <span className={styles.title} >
                            {title}</span>

                    </p>
                    <p className={styles.price} style={{ fontWeight: 'bold' }}>
                        ￥{strPrice}税込</p>
                </NavLink>
                <p className={styles.originPrice} >
                    <span >￥{NumToString(originPrice)}円</span>
                    <span >（￥{NumToString(originPrice-price)}円↓）</span>
                </p>
            </div>


        </li>
    )
};
export default App;