import React from 'react';
// import { Image } from 'antd';
import PictureModel from './PictureModel';
import styles from './PictureWithModel.less';
//@ts-ignore
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { NavLink } from '@umijs/max';

interface Props {
  imgSrc: string;
  content: {
    title: string;
    price: number;
  };
  rank: number;
  discount?: number;
  href: string;
}
const App: React.FC<Props> = (props) => {
  const { imgSrc, content, rank, discount = 0, href } = props;
  return (
    <NavLink className={styles.container} to={href}>
      <div className={styles.wrapper}>
        <LazyLoadImage
          className={styles.backImg}
          src={imgSrc}
          height={600}
        ></LazyLoadImage>
        <PictureModel content={content}></PictureModel>
        {rank > 0 ? (
          rank <= 3 ? (
            <LazyLoadImage
              src={`rankicon/icon-ran${rank}.png`}
              className={styles.rank}
            ></LazyLoadImage>
          ) : (
            <i className={styles.rankSpan}>{rank}</i>
          )
        ) : null}
        {discount ? (
          <LazyLoadImage
            src="img/discount.jpg"
            className={styles.discount}
          ></LazyLoadImage>
        ) : null}
      </div>

      {/* {bottomLine ? <div className={styles.bottomLine}>
        <p>{bottomLine.detail}</p>
        <p>{bottomLine.price}</p>
      </div> : null} */}
    </NavLink>
  );
};
export default App;
