import React, { Dispatch, SetStateAction } from 'react';
import styles from './DeliveryMethod.less'
import HeaderOfEachComp from '../HeaderOfEachComp';
import NumToString from '@/utils/NumToString';
interface Props {
    setDeliveryMethodId:Dispatch<SetStateAction<number>>
    deliveryMethodId:number;
    showedNormalDeliveryAmount:number;
}
const App: React.FC<Props> = (props) => {
    const{setDeliveryMethodId,deliveryMethodId,showedNormalDeliveryAmount}=props;

    return (
        <div>
            <HeaderOfEachComp imgSrc='/deliveryChoice.png' title='配送方法の選択' />
            <dd className={styles.delivery}>
                <ul className={styles.firstUl}>
                    <li>配送方法</li>
                    <li>配送期間</li>
                    <li>送料</li>
                </ul>
                <ul id="shippingmethodItem_1" className={styles.select}>
                    <li>
                        <label >
                            <input type="radio" id="shipping_method_1" style={{ marginLeft: 0 }}
                                checked={deliveryMethodId === 1} onChange={() => { setDeliveryMethodId(1); }} required={true} />
                            <span className="ct-u-size15 ct-fw-600">経済性速達便(9999円以上送料無料！)</span>
                        </label>
                    </li>
                    <li >
                        5 - 7 営業日
                    </li>
                    <li>
                        ￥{NumToString(showedNormalDeliveryAmount)}
                    </li>
                </ul>
                <ul id="shippingmethodItem_2" className={styles.select}>
                    <li>
                        <label >
                            <input type="radio" id="shipping_method_2" style={{ marginLeft: 0 }}
                                checked={deliveryMethodId === 2}
                                onChange={() => { setDeliveryMethodId(2) }}
                                required={true} />
                            <span className="ct-u-size15 ct-fw-600">EMS国際郵便配送</span>
                        </label>
                    </li>
                    <li >
                        4 - 6 営業日
                    </li>
                    <li>
                        ￥1,598
                    </li>
                </ul>
                <ul id="shippingmethodItem_3" className={styles.select}>
                    <li>
                        <label >
                            <input type="radio" id="shipping_method_3" style={{ marginLeft: 0 }}
                                checked={deliveryMethodId === 3}
                                onChange={()=>{setDeliveryMethodId(3)}}
                                required={true} />
                            <span className="ct-u-size15 ct-fw-600">I・express</span>
                        </label>
                    </li>
                    <li >
                        2 - 4 営業日
                    </li>
                    <li>
                        ￥1,980
                    </li>
                </ul>
            </dd>
        </div>
    )
};
export default App;