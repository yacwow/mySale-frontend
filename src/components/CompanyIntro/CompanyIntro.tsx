/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import styles from './CompanyIntro.less'
import BasicIntro from './BasicIntro';
import AboutUs from './AboutUs';
import DeliveryFee from './DeliveryFee';
import InteProperty from './InteProperty';
import PaymentFailure from './PaymentFailure';
import PaymentMethod from './PaymentMethod';
import Privacy from './Privacy';
import Refund from './Refund';
import Safe from './Safe';
import Service from './Service';
import TradeMethod from './TradeMethod';
//@ts-ignore
import $ from 'jquery'

const DataList = [
    // eslint-disable-next-line react/jsx-key
    <BasicIntro />,
    <AboutUs />,
    <Service />,
    <TradeMethod />,
    <Privacy />,
    <InteProperty />,
    <Safe />,
    <PaymentMethod />,
    <DeliveryFee />,
    <Refund />,
    <PaymentFailure />
]



const App: React.FC = () => {
    const [selectItem, setSelectItem] = useState(0);

    const handleClick = (e: number) => {
        setSelectItem(e - 1);
        $('#recently-viewed-items li').removeClass(styles.active);
        $('#recently-viewed-items li').eq(e - 1).addClass(styles.active)
    }
    const buildBody=()=>{
        return DataList
    }
    useEffect(() => {
        let query = parseInt(window.location.search.slice(1));
        console.log(query)
        setSelectItem(query)
        $('#recently-viewed-items li').removeClass(styles.active);
        $('#recently-viewed-items li').eq(query).addClass(styles.active)
    }, [])
    return (
        <div className={styles.container}>
            <div style={{ marginRight: 30 }}>
                <div className={styles.title}>当ショップについて</div>
                <div className={styles.block}>
                    <ol id="recently-viewed-items">
                        <li className={`${styles.item} ${styles.active}`} onClick={() => handleClick(1)}>
                            <span>Zasaleについて</span>
                        </li>
                        <li className={styles.item} onClick={() => handleClick(2)}>
                            <span>運営会社情報</span>
                        </li>
                        <li className={styles.item} onClick={() => handleClick(3)}>
                            <span>ご利用規約</span>
                        </li>
                        <li className={styles.item} onClick={() => handleClick(4)}>
                            <span>特定商取引法表記</span>
                        </li>
                        <li className={styles.item} onClick={() => handleClick(5)}>
                            <span>プライバシーポリシー</span>
                        </li>
                        <li className={styles.item} onClick={() => handleClick(6)}>
                            <span>知的財産</span>
                        </li>
                        <li className={styles.item} onClick={() => handleClick(7)}>
                            <span>セキュリティ</span>
                        </li>
                        <li className={styles.item} onClick={() => handleClick(8)}>
                            <span>お支払い方法</span>
                        </li>
                        <li className={styles.item} onClick={() => handleClick(9)}>
                            <span>配送送料について</span>
                        </li>
                        <li className={styles.item} onClick={() => handleClick(10)}>
                            <span>欠品・交換・返品ポリシー</span>
                        </li>
                        <li className={styles.item} onClick={() => handleClick(11)}>
                            <span>決済エラーの理由と解決方法</span>
                        </li>
                    </ol>
                </div>
            </div>
            {selectItem >= 0 ? buildBody()[selectItem] : null}
        </div>
    )
};
export default App;


