import React from 'react';
import Slider from 'react-slick';
import './WeekPromotionProductBanner.css';
import styles from './WeekPromotionProductBanner.less';
//@ts-ignore
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { NavLink } from '@umijs/max';
interface dataType {
  href: string;
  discount: number;
  price: number;
  imgSrc: string;
}
interface Props {
  weekPromotionBannerData: dataType[];
}
const App: React.FC<Props> = (props) => {
  const { weekPromotionBannerData } = props;
  const settings = {
    accessibility: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: true,
    LazyLoad: true,
  };

  const buildBannerList = () => {
    return weekPromotionBannerData.map((item, index: number) => {
      return (
        <div
          key={index}
          style={{ position: 'relative' }}
          className={styles.wrapper}
        >
          <div className={styles.rankingImg}>
            <LazyLoadImage src="/crowd.png" alt="" />
            <span className={styles.rankingNum}>{index + 1}</span>
          </div>
          <NavLink to={item.href}>
            <div style={{ position: 'relative' }} className={styles.picture}>
              <LazyLoadImage
                className={styles.thumbImg}
                src={item.imgSrc}
                alt=""
              />
              {item.discount ? (
                <LazyLoadImage
                  src="img/discount.jpg"
                  style={{
                    position: 'absolute',
                    bottom: '5px',
                    right: '5px',
                    width: '30%',
                  }}
                />
              ) : null}
            </div>
          </NavLink>

          <div className={styles.item}>
            {item.price}{' '}
            <span style={{ fontSize: 14, color: ' #000' }}>(税込)</span>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <div
        style={{
          textAlign: 'center',
          margin: '40px 0',
          fontSize: 24,
          fontWeight: 600,
        }}
      >
        今週のベストセラーTOP20
      </div>
      <Slider {...settings} className="sliderForWeekPromotion">
        {buildBannerList()}
      </Slider>
    </div>
  );
};
export default App;
