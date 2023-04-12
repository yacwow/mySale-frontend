import React from 'react';
//@ts-nocheck
import { LazyLoadImage } from "react-lazy-load-image-component";
import LazyLoad from 'react-lazy-load';
import PictureWithDescription from '@/components/PictureWithDescription';
import styles from './ProductDetail.less'
interface Props {
    productDetailSrc: string[]
}
//图片地址为ajax请求来的，在这里为从上一个组件传入
const App: React.FC<Props> = (props) => {
    const { productDetailSrc } = props;
    // console.log(productDetailSrc)
    const buildPictureList = () => {
        return productDetailSrc.map((item, index: number) => {
            return (<div key={index}
            >
                <LazyLoadImage key={index} threshold={300}
                    className={styles.backImg}
                    //  style={{height:800}}
                    placeholder={
                        <img src='/img/banner1.jpg' style={{
                            display: 'flex',
                            justifyContent: 'center', alignItems: 'center',
                            width: '100%', height: '100%'
                        }}></img>
                    }
                    src={item} />
            </div>)

        })
    }
    return (
        <div className={styles.container}>
            {buildPictureList()}
        </div>
    )
};
export default App;