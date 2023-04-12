import React from 'react';
import styles from './ItemRankingLayout.less';
interface Props {
    itemRankingDataProp:JSX.Element[];
    // leftImage:JSX.Element;
    // rightOneImage:JSX.Element,
    // rightTwoImage:JSX.Element,
    // rightThreeImage:JSX.Element,
    // bottomOneImage:JSX.Element,
    // bottomTwoImage:JSX.Element,
    // bottomThreeImage:JSX.Element,
}
const App: React.FC<Props> = (props) => {
    const{itemRankingDataProp }=props;

  return (
    <div className={styles.container}>
        <div className={styles.left}>
            {itemRankingDataProp[0]}
        </div>
        <div className={styles.right}>
            <div className={styles.top}>
                <div>{itemRankingDataProp[1]}</div>
                <div>{itemRankingDataProp[2]}</div>
                <div>{itemRankingDataProp[3]}</div>
            </div>
            <div className={styles.bottom}>
                <div>{itemRankingDataProp[4]}</div>
                <div>{itemRankingDataProp[5]}</div>
                <div>{itemRankingDataProp[6]}</div>
            </div>
        </div>
    </div>
)
};
export default App;