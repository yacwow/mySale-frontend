import React from 'react';
import NumToString from '@/utils/NumToString';
//@ts-ignore
import { LazyLoadImage } from "react-lazy-load-image-component";
import { NavLink } from '@umijs/max';
import styles from './FullyParamPicture.less'
interface Props {
    href: string,
    title: string,
    imgSrc: string,
    newProduct?: boolean,
    discount?: boolean,
    secondOneDiscount?: boolean
    price: number,
    comment?: {
        commentRate: number,//不低于3
        commentNum: number,
        commentHref: string
    }

}
const App: React.FC<Props> = (props) => {
    const { title, href, imgSrc, newProduct = false, discount = false, secondOneDiscount = false,
        price,comment } = props;
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
                        {newProduct ? <span className={styles.newSaleLabel}>NEW</span> : null}
                        <span className={styles.title} >
                            {title}</span>

                    </p>
                    <p className={styles.price} style={{ fontWeight: 'bold' }}>
                        ￥{strPrice}税込</p>
                </NavLink>
                {comment? <p className={styles.comment} >
                    <NavLink to={href}
                        title={title}>
                        <span className={`${styles.reviewsShow} ${styles['star' + comment.commentRate]}`} ></span>
                    </NavLink>
                    <NavLink to={comment.commentHref} className={styles.commentNum}>レビュー / <b>{comment.commentNum}</b> 件</NavLink>
                </p>:null}
            </div>


        </li>
    )
};
export default App;