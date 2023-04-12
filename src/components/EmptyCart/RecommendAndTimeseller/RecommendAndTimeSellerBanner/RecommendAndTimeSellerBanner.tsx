import React from 'react';
import Slider from "react-slick";
// import { newsBanner } from '@/constants';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './RecommendAndTimeSellerBanner.css';
import PictureWithDescription from '@/components/PictureWithDescription';
import NumToString from '@/utils/NumToString';
// 用这个组件的时候，需要在外面包一个div 提供最小宽高,所有提供的图片需要裁减成同样比例

interface Props {
  dots: boolean,
  speed?: number,
  slidesToShow: number,
  newsBanner: any,
  arrows?: boolean,
}
const App: React.FC<Props> = (props) => {
  const { dots, speed = 3000, newsBanner, slidesToShow, arrows = true } = props;
  const settings = {
    dots: dots,
    arrows: arrows,
    accessibility: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: speed,
    // lazyLoad:true,
  };
  const insideContext = () => {
    return newsBanner.map((item:any, index:number) => {
      return (
        <div key={index}  >
          <div >
            < PictureWithDescription
              imgSrc={item.imgSrc} href={item.href}
              discount={item.discount}
              description={{ price:item.price, detail:item.productDescription, comment: item.commentNumber }
              }
            />
          </div>
        </div>

      )
    })
  }
  return (


    <Slider {...settings} className={'reactSlickButton_bestSellerAndNewProduct'} >
      {insideContext()}
    </Slider>

  )
};
export default App;