import React from 'react';
import Slider from "react-slick";
import  './MainShowBanner.css';
//@ts-ignore
import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from './MainShowBanner.less'

interface Props{
    newsBanner:[];
}

const App: React.FC<Props> = (props) => {
    const { newsBanner } = props;

    const settings = {
        arrows: true,
        accessibility: true,
        infinite: true,
        speed: 5000,
        slidesToShow: 7,
        slidesToScroll: 7,
        autoplay: true,
        autoplaySpeed: 8000,
    };
    const insideContext = () => {
        return newsBanner.map((item:any, index:number) => {
            return (<a key={index} href={item.href} 
            >
                <div className={styles.itemImage} >
                    <div style={{ position: 'relative'}}>
                        <LazyLoadImage 
                            src={item.imgSrc}
                            alt={item.productDescription} />
                    </div>
                </div>
                <span className={styles.itemName}>{item.productDescription}</span>
                <span className={styles.itemPrice}>￥{item.price}</span>
            </a >)
        })
    }
    return (
        <div className={styles.container}>
            <h3>こちらの商品を見る方は下記の商品も見ている。</h3>
            <div className={styles.slider}>
                <Slider {...settings} className={'reactSlickButton1'}
                // style={{border:'1px solid black'}}
                >
                    {insideContext()}
                </Slider>
            </div>

        </div>



    )
};
export default App;