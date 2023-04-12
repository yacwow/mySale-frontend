import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styles from './CheckoutPaymentMethod.less'
import HeaderOfEachComp from '../HeaderOfEachComp';
interface Props {
    setPaymentMethod: Dispatch<SetStateAction<string>>
}
const App: React.FC<Props> = (props) => {
    const { setPaymentMethod } = props

    const [activeNum, setActiveNum] = useState(0)//0为未选择


    return (
        <div>
            <HeaderOfEachComp imgSrc='/paymentMethod.png' title='ご希望のお支払い方法を選択してください' />
            <dd className={styles.delivery}>
                <label 
                    style={{ display: ' block', margin: '20px 0', border: '1px dashed #333', padding: ' 10px', }}>
                    <p >
                        <input type="radio"
                            style={{ display: 'inline-block' }} onChange={()=>{
                                setActiveNum(1); setPaymentMethod('visa')
                           }}
                            checked={activeNum === 1}
                        />
                        <span >クレジット-Visa/Master</span>
                        <img style={{ display: 'inline-block', marginLeft: 5, height: 26 }}
                            src="/visa.webp" />
                    </p>
                </label>
                <label 
                    style={{ display: ' block', margin: '20px 0', border: '1px dashed #333', padding: ' 10px', }} >
                    <p>
                        <input type="radio" checked={activeNum === 2} onChange={()=>{
                             setActiveNum(2); setPaymentMethod('ae')
                        }}
                            style={{ display: 'inline-block' }}
                        />
                        <span >クレジット「AE」</span>
                        <img style={{ display: 'inline-block', marginLeft: 5, height: 26 }}
                            src="/ae.webp" />
                    </p>
                </label>
                <label 
                    style={{ display: ' block', margin: '20px 0', border: '1px dashed #333', padding: ' 10px', }} >
                    <p>
                        <input type="radio" checked={activeNum === 3} onChange={()=>{
                             setActiveNum(3); setPaymentMethod('jcb')
                        }}
                            style={{ display: 'inline-block' }}
                        />
                        <span >クレジットカード「JCB」</span>
                        <img style={{ display: 'inline-block', marginLeft: 5, height: 26 }}
                            src="/jcb.webp" />
                    </p>
                </label>
                <label 
                    style={{ display: ' block', margin: '20px 0', border: '1px dashed #333', padding: ' 10px', }}>
                    <p>
                        <input type="radio" checked={activeNum === 4} onChange={()=>{
                             setActiveNum(4); setPaymentMethod('shop')
                        }}
                            style={{ display: 'inline-block' }} />
                        <span >コンビニ</span>
                        <img style={{ display: 'inline-block', marginLeft: 5, height: 26 }}
                            src="/smallshop.gif" />
                    </p>
                </label>
            </dd >
        </div >
    )
};
export default App;