import React from 'react';
import Slider from "react-slick";
// import { newsBanner } from '@/constants';
//@ts-ignore
import { LazyLoadImage } from "react-lazy-load-image-component";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Banner.css';
import { NavLink } from '@umijs/max';
// 用这个组件的时候，需要在外面包一个div 提供最小宽高,所有提供的图片需要裁减成同样比例

interface Props {
    dots: boolean,
    speed?: number,
    slidesToShow: number,
    newsBanner: { url: string, imgSrc: string }[],
    arrows?: boolean,
    slidesToScroll?: number
}
const App: React.FC<Props> = (props) => {
    const { dots, speed = 3000, newsBanner, slidesToShow, arrows = true, slidesToScroll = 1 } = props;

    const settings = {
        dots: dots,
        arrows: arrows,
        accessibility: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll,
        autoplay: newsBanner.length > 1,
        autoplaySpeed: speed,
    };
    let firstTime = 0;//拿来计时决定是不是click用的
    let lastTime = 0;//拿来计时决定是不是click用的
    let key = false//一开始不是点击事件

    const handelMouseDown = (e) => {
        firstTime = new Date().getTime();
        document.onmouseup = function () {
            lastTime = new Date().getTime();
            if (lastTime - firstTime < 200) {
                key = true;
            }
        }
    }
    const handleClick = (e) => {
        if (!key) {
            e.preventDefault()
            e.stopPropagation()
            return
        }
    }
    const insideContext = () => {
        return newsBanner.map((item, index) => {
            return (<NavLink onMouseDown={handelMouseDown} 
                onClick={handleClick} key={index} to={item.url} style={{ height: '100%' }}>
                <LazyLoadImage loading='lazy' src={item.imgSrc} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} >
                </LazyLoadImage>
            </NavLink>)
        })
    }
    const handleSwipt = (e) => {
        console.log("in246245235")
        // e.stopPropagation()
        // e.preventDefault()
        console.log(e)
    }
    // console.log(insideContext())
    return (
        <Slider onSwipe={(e) => handleSwipt(e)} {...settings} className={'reactSlickButton'}>
            {insideContext()}
        </Slider>
    )
};
export default App;

