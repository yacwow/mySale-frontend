import React from 'react';
import styles from './PictureWithDescription.less';
//@ts-ignore
import { LazyLoadImage } from 'react-lazy-load-image-component';
import NumToString from '@/utils/NumToString';

interface Description {
  price: number;
  detail: string;
  comment?: number;
}
interface Props {
  description?: Description;
  discount?: number;
  imgSrc: string;
  href: string;
  secondOneHalf?: number;
}
const App: React.FC<Props> = (props) => {
  const { description, discount = 0, imgSrc, href, secondOneHalf = 0 } = props;
  return (
    <a
      className={styles.container}
      href={href}
      // style={{border:'10px solid black'}}
    >
      <div className={styles.wrapper}>
        <LazyLoadImage
          className={styles.backImg}
          style={{ minHeight: 200, minWidth: 200 }}
          src={imgSrc}
          // delayTime={3000}
          threshold={300}
          placeholder={
            <img
              src="/loading2.gif"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',
              }}
            ></img>
          }
        />
        {discount ? (
          <LazyLoadImage
            src="/img/discount.jpg"
            className={styles.discount}
          ></LazyLoadImage>
        ) : null}
        {secondOneHalf ? (
          <LazyLoadImage
            src="/img/50%discount.webp"
            className={styles.secondOneHalf}
          ></LazyLoadImage>
        ) : null}
      </div>
      {description ? (
        <div className={styles.bottomLine}>
          <p className={styles.description}>{description.detail}</p>
          <div className={styles.bottom}>
            <div className={styles.price}>
              {`￥${NumToString(description.price)}`}{' '}
              <span style={{ fontSize: 16 }}> 税込</span>{' '}
            </div>
            {description.comment ? (
              <span className={styles.comment}>
                {'レビュー (' + description.comment + ')'}
              </span>
            ) : null}
          </div>
        </div>
      ) : null}
    </a>
  );
};
export default App;
