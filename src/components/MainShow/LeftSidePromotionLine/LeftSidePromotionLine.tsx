import React from 'react';
// import {LeftSidePromotionLineList} from '@/constants/index'
//@ts-ignore
import { LazyLoadImage } from 'react-lazy-load-image-component';
interface Props {
  leftSidePromotionLineList: {
    discount: number;
    href: string;
    imgSrc: string;
    marketPrice: string;
    price: string;
    secondOneHalf: number;
  }[];
}
// console.log(LeftSidePromotionLineList[0].imgSrc)
//这里的LeftSidePromotionLineList 最后是发送ajax或者从上一层发送ajax传递过来
const App: React.FC<Props> = (props) => {
  const { leftSidePromotionLineList } = props;
  const buildPromotionLine = () => {
    return leftSidePromotionLineList.map((item, index: number) => {
      return (
        <div style={{ marginBottom: 6, position: 'relative' }} key={index}>
          <a
            href={item.href}
            style={{ display: 'block', textDecoration: 'none' }}
          >
            <div style={{ position: 'relative' }}>
              <LazyLoadImage
                src={item.imgSrc}
                alt=""
                style={{
                  maxWidth: '100%',
                  minHeight: 200,
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              {item.secondOneHalf ? (
                <LazyLoadImage
                  src="/img/50%discount.webp"
                  alt=""
                  style={{
                    width: '20%',
                    height: 'auto',
                    position: 'absolute',
                    zIndex: 10,
                    top: 0,
                    right: 0,
                    display: 'block',
                  }}
                />
              ) : null}
              {item.discount ? (
                <LazyLoadImage
                  src="/img/discount.jpg"
                  alt=""
                  style={{
                    width: '20%',
                    height: 'auto',
                    position: 'absolute',
                    zIndex: 10,
                    bottom: 0,
                    right: 0,
                    display: 'block',
                  }}
                />
              ) : null}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <p
                style={{
                  padding: 0,
                  margin: 0,
                  fontSize: 16,
                  lineHeight: '22px',
                }}
              >
                ￥{item.price}
                <span style={{ fontSize: 12 }}>税込</span>
              </p>
              <del style={{ fontSize: 12, lineHeight: '22px' }}>
                ￥{item.marketPrice} 税込
              </del>
            </div>
          </a>
        </div>
      );
    });
  };
  return (
    <div style={{ width: 214 }}>
      <h2
        style={{
          textAlign: 'center',
          fontSize: 18,
          fontWeight: 700,
          height: 30,
          lineHeight: '30px',
          padding: '2px',
          margin: '10px 0 40px',
        }}
      >
        よく一緒に購入されている商品
      </h2>
      {buildPromotionLine()}
    </div>
  );
};
export default App;
