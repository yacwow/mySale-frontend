import { NavLink } from '@umijs/max';
import React from 'react';
import styles from './EmptyCart.less'
import RecommendAndTimeSeller from './RecommendAndTimeseller';
interface Props {
}
const App: React.FC<Props> = (props) => {
    return (
        <div style={{width:1100,margin:'0 auto'}}>
            <h4 className={styles.head}>
                <NavLink to="/home" >ホーム</NavLink>
            </h4>

            <div className={styles.empty}>
                <p>現在、ショッピングバッグの中には商品はありません。</p>
                <p><NavLink to="/home" className={styles.grayBtn}><span className={styles.arrow} >お買い物を続ける</span></NavLink></p>
            </div>
            <RecommendAndTimeSeller></RecommendAndTimeSeller>
        </div>

    )
};
export default App;