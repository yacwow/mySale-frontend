import React, { useEffect, useState } from 'react';
import styles from './Recommend.less'
import PictureWithDescription from '../PictureWithDescription';
//@ts-ignore
// import ajax from '@/services/http';
import { request } from '@umijs/max';
interface recommendDataListType{
    productDescription:string,
    discount:boolean,
    secondOneHalf:boolean,
    href:string,
    imgSrc:string,
    price:number,
    commentNumber:number
}


const App: React.FC = () => {
    const [recommendList, setRecommendList] = useState<recommendDataListType[]>([]);
    useEffect(() => {
        request("/api/getRecommendProduct/60").then(({ data }) => {
            console.log(data.recommend)
            setRecommendList(data.recommend);
        })
    }, [])

    return (
        <div className={styles.container}>
            <div>
                <h2 >RECOMMEND</h2>
                <h3 >おすすめアイテム</h3>
            </div>
            <ul >
                {recommendList ?
                    recommendList.map((item, index) => {
                        return (<li key={index}>
                            <PictureWithDescription imgSrc={item.imgSrc} href={item.href}
                                description={{ comment: item.commentNumber, price: item.price, detail: item.productDescription }}
                                discount={item.discount} secondOneHalf={item.secondOneHalf} ></PictureWithDescription>
                        </li>)
                    }):null}
            </ul>
        </div>
    )
};
export default App;