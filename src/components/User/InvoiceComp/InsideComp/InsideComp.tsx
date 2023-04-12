import { history, NavLink } from '@umijs/max';
import React from 'react';
import styles from './InsideComp.less'
interface Props {
}
const App: React.FC<Props> = (props) => {

    return (<div className={styles.empty}>
        <p>お探しの領収書がありません。</p>
        <p><NavLink to='/account/dashboard'  className={styles.grayBtn}><span className={styles.arrow}>アカウントのトップページに戻ります</span></NavLink></p>
    </div>);

};
export default App;