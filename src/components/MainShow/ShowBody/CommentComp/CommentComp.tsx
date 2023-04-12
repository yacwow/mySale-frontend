import React, { useState } from 'react';
import { Pagination } from 'antd';
import styles from './CommentComp.less';
// import Banner from '@/components/Banner';
interface Props {
    reviewContext: {
        commentScore: number,
        comment: { name: string, updatedTime: any, commentDetail: string, imgSrc?: string }[]
    }
}


const App: React.FC<Props> = (props) => {
    const { reviewContext } = props
    const [commentList, setCommentList] = useState(reviewContext.comment.slice(0, 20));
    // let flag=false;
    // let newsBanner=[];
    // [{name:'hello'},{name:'haha'},{name:'xixi',imgSrc:'123'}].map((item)=>{
    //     if(item.imgSrc){
    //         flag=true;
    //         newsBanner.push({url:'reviewPictures',imgSrc:item.imgSrc})
    //         return;
    //     }else{
    //         return null;
    //     }
    // })
    // console.log(newsBanner)
    // //如果有图片才有的一个展示
    // const buildPicture = () => {
    //     return (
    //         <div >
    //             <h2  >商品レビュー <a href="/reviews-img/128232" >もっと見る &gt;</a></h2>
    //             <p >お客様からの写真</p>
    //             <Banner dots={false} speed={8000} slidesToShow={8} arrows={false} newsBanner={newsBanner}/>
    //         </div>)
    // }
    //翻页事件
    const handleChange = (e: number) => {
        setCommentList(reviewContext.comment.slice((e - 1) * 20, 20 * e))
    }
    //评价的主体
    const buildReviewContext = () => {
        return commentList.map((item, index: number) => {
            return <div key={index} className={styles.reviewText}>
                <p style={{ color: '#999' }}>{item.name}<b style={{ color: 'black' }}>{item.updatedTime.slice(0, 10)}</b> </p>
                <p>{item.commentDetail}</p>
                <div><img src="" alt="" /></div>
            </div>
        })
    }
    return (
        <div style={{ marginTop: 15 }} >
            {/* {flag?buildPicture():null} */}
            <div className={styles.reviewHeader}>
                <div>
                    <b>総合評価</b>
                    <span className={`${styles.reviewsShow} ${styles['star' + reviewContext.commentScore]}`}></span>
                </div>
                <div className={styles.cnt}>
                    <b>({reviewContext.comment.length})</b>レビュー
                </div>
            </div>
            {/* <div class="review_text">
                    <p class="text_color">柏**美 <b>2023/03/01</b></p>
                    <p class="review-js">
                        息子の卒業式用に購入しました。149cm38kgでSサイズピッタリでした。お値段からするとかなり良い商品だと思います。買って良かったです。
                    </p>
                    <div class="review_img">
                    </div>
                </div> */}
            {buildReviewContext()}
            <Pagination defaultCurrent={1} total={reviewContext.comment.length} onChange={handleChange} showSizeChanger={false} />
        </div>
    )
};
export default App;