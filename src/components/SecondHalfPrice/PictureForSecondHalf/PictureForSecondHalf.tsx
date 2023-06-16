import NumToString from '@/utils/NumToString';
import React from 'react';
import styles from './PictureForSecondHalf.less';
//@ts-ignore
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface Props {
  data: {
    imgSrc: string;
    href: string;
    discount: number;
    currentPrice: number;
    originPrice: number;
    stockNum: number;
    description: string;
  };
}

const App: React.FC<Props> = (props) => {
  const { data } = props;

  return (
    <div style={{ position: 'relative' }} className={styles.container}>
      <a href={data.href} style={{ textDecoration: 'none' }}>
        <div style={{ position: 'relative' }}>
          <LazyLoadImage
            className={styles.lazy}
            src={data.imgSrc}
            style={{ position: 'unset', display: 'block', width: '100%' }}
          />
          {data.discount ? (
            <LazyLoadImage
              src="/img/discount.jpg"
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '30%',
              }}
              alt=""
            />
          ) : null}
          <LazyLoadImage
            src="/img/50%discount.webp"
            alt="二つ目は半額です"
            style={{
              width: '30%',
              height: 'auto',
              position: 'absolute',
              zIndex: 2,
              top: 0,
              right: 0,
            }}
          />
        </div>
        <div className={styles.bottom}>
          <div className={styles.first}>{data.description}</div>
          <div className={styles.second}>
            <div>
              <span>¥</span>
              <span style={{ fontSize: 21 }}>
                {NumToString(data.currentPrice)}
              </span>
              <span className="ts_tag"></span>
            </div>

            <span className={styles.discount}>
              {Math.ceil((1 - data.currentPrice / data.originPrice) * 100)}
              <span className="font_default">%</span>OFF
            </span>
          </div>
          <div className={styles.line}>
            <div style={{ width: `${data.stockNum}%` }}></div>
          </div>
          <p style={{ margin: 0, padding: 0 }}>
            <span style={{ fontSize: 12 }}>
              残余：
              <span style={{ fontSize: 16 }}>{data.stockNum}</span>
            </span>
            <span style={{ float: 'right', fontSize: 12 }}>
              限定：
              <span style={{ fontSize: 16 }}>100</span>
            </span>
          </p>
        </div>
      </a>
    </div>
  );
};
export default App;
