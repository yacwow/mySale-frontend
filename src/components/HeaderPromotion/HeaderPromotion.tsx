import React from 'react';
import styles from './HeaderPromotion.less';
interface Props {
    src: string,
}
const App: React.FC<Props> = (props) => {
    const { src } = props;
    return (
        <div className={styles.headerPromotion} >
            <a href="/login">
                <img src={src} />
            </a>
        </div>

    )
};
export default App;
