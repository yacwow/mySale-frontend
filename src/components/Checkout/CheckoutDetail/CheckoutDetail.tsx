import React, { useState, Dispatch, SetStateAction, useEffect, } from 'react';
import styles from './CheckoutDetail.less'
import HeaderOfEachComp from '../HeaderOfEachComp';
import { Modal } from 'antd';
import NumToString from '@/utils/NumToString';
import { NavLink } from '@umijs/max';
import { updateInfoType } from '../Checkout';
import UpdateUserInfo from '@/components/UpdateUserInfo';
//这一步一定要从服务器过来，首先验证的是cart过来的衣服数据以及价格，然后最后进行对照看对不对，
//还要把所有的衣服以及乱七八糟的属性给后端，和前端的数据对照从后端发回来一个总数，如果没问题就进结算
interface Props {
    // setNeedUpdate: Dispatch<SetStateAction<boolean>>;
    setUpdatedInfo: Dispatch<SetStateAction<updateInfoType | undefined>>;
    deliveryMethodId: number;
    setTips: Dispatch<SetStateAction<string >>;
    Total:any,
    Data:any,
    deliveryAmount:number;
    setDeliveryAmount:Dispatch<SetStateAction<number >>;
}
interface totalType {
    countNum: number, usedPoint?: number, total: number, secondHalfDiscount?: number
    discount?: number, timelyDiscount?: number, paymentAmount: number, getPoint: number, deliveryAmount: number
}
interface dataType {
    href: string,
    imgSrc: string,
    size: string,
    timesale?: boolean,//控制icon的
    secondHalf?: boolean
    productDescription: string,
    color: string,
    price: number,
    amount: number,
    productId: number
}


const App: React.FC<Props> = (props) => {
    const { setUpdatedInfo, deliveryMethodId,deliveryAmount, setTips, Total, Data,setDeliveryAmount } = props;
   const firstLevelDelivery=deliveryAmount;//为了固定这一个订单的最便宜运费
    const [open, setOpen] = useState(false);//MODAL
    const [total, setTotal] = useState<totalType>();
    const [data, setData] = useState<dataType[]>([]);
    // const [deliveryFee, setDeliveryFee] = useState(0);
    useEffect(() => {
        let combine = Data.map((item) => {
            return { pid: item.productId, size: item.size, color: item.color, amount: item.amount };
        })
        setUpdatedInfo({ paymentDetail: Total, productInfo: [...combine] })
        setTotal(Total);
        // setDeliveryFee(Total.deliveryAmount)
        setData(Data);
    }, [])
    useEffect(() => {
        if (deliveryMethodId === 1) {
            setDeliveryAmount(firstLevelDelivery)
        } else if (deliveryMethodId === 2) {
            setDeliveryAmount(1598)
        } else if (deliveryMethodId === 3) {
            setDeliveryAmount(1980)
        }
    }, [deliveryMethodId])

    const buildTrList = () => {
        return data.map((item, index: number) => {
            return (<tr key={item.productId + index} style={{ height: 120 }}>
                <td >
                    <a
                        title={item.title}
                        href={item.href}>
                        <img width={59}
                            alt={item.title}
                            src={item.imgSrc} />
                    </a>
                </td>
                <td>
                    <a href={item.href}>
                        <div className={styles.itemData}>
                            <h2 style={{ margin: 0, padding: 0 }}>
                                {item.timesale ? <span className={styles.timesale}>TIMESALE</span> : null}
                                <p className={styles.title}>

                                    {item.productDescription}
                                </p>
                            </h2>
                            <p className={styles.txtGray}>
                                カラー:{item.color}
                            </p>
                            <p className={styles.txtGray}>
                                サイズ:{item.size}
                            </p>
                        </div>
                    </a>
                </td>
                <td className={styles.moveWishList}>
                    <span className={styles.price}>
                        <b>￥{NumToString(item.price)}税込</b></span>
                </td>
                <td className={styles.moveWishList} >
                    <input
                        value={item.amount}
                        disabled={true} className={styles.input}
                        style={{ border: 'none', color: 'black', background: 'none', backgroundColor: '#ddd' }} />
                </td>
                <td className={styles.moveWishList} style={{ width: 125 }}>
                    <span className={styles.cartPrice}><span
                    >￥{NumToString(item.amount * item.price)}<span
                        style={{ fontSize: 13, color: ' #7d7d7d', textDecoration: 'line-through' }}>税込</span></span></span>
                </td>
            </tr>
            )
        })


    }

    const showModal = (e: any) => {
        e.stopPropagation()
        e.preventDefault()
        setOpen(true);
    };

    const hideModal = (e: any) => {
        e.stopPropagation()
        e.preventDefault()
        setOpen(false);
    };

    return (
        <div >
            <HeaderOfEachComp imgSrc='/deliveryChoice.png' title='明細書' surFix={
                <div style={{ cursor: 'pointer' }} onClick={showModal}> 発送日&gt;
                    <Modal
                        open={open}
                        onOk={hideModal}
                        onCancel={hideModal} okText='確認'
                        cancelText="閉じる" >
                        <div style={{
                            textAlign: 'center', fontSize: 16, paddingBottom: 15,
                            fontWeight: 700,
                        }}>発送日</div>
                        <div>*商品配送予定日：通常商品は2～7営業日以内ご発送させていただきます。
                            現時期コロナウイルスの影響により、配送は少し遅延が発生する場合
                            もございます。ご理解の程よろしくお願いします。</div>
                    </Modal></div >} />
            <table className={styles.body}
                id="shopping-cart-table">
                <thead>
                    <tr>
                        <th rowSpan={1}></th>
                        <th rowSpan={1}><span >注文商品</span></th>
                        <th colSpan={1}><span
                        >単価</span></th>
                        <th rowSpan={1}>数量</th>
                        <th colSpan={1} >小計</th>
                    </tr>
                </thead>
                <tbody>
                    {buildTrList()}
                </tbody>
            </table>

            <div className={styles.bottom} style={{ marginBottom: 0 }}>
                <div className={styles.float}>
                    <div className={styles.left}>
                        <div className={styles.discount}>
                            <h3>メッセージ</h3>
                            <input onChange={(e) => {
                                setTips(e.target.value)
                            }} type="text" placeholder="メッセージを枠内にご記入ください。" />
                        </div>
                        <div style={{ padding: '20px 0 10px', fontSize: 12 }}>
                            <NavLink to="/companyIntroduce?9" style={{ color: '#b44b2e', textDecoration: 'underline' }}>※キャンセル/返品/支払い戻しに関する事項</NavLink>
                        </div>
                    </div>

                    {total ? <div className={styles.right}>
                        <div>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>数量合計：</th>
                                        <td>{total.countNum}</td>
                                    </tr>
                                    <tr>
                                        <th>獲得ポイント：</th>
                                        <td>{total.getPoint}</td>
                                    </tr>

                                    <tr className={styles.topLine} >
                                        <th>商品小計：</th>
                                        <td className={styles.discount}>￥{NumToString(total.total)}(税込)</td>
                                    </tr>
                                    {
                                        total.secondHalfDiscount ? <tr>
                                            <th>半額セール割引：</th>
                                            <td className={styles.discount}>-￥{NumToString(total.secondHalfDiscount)}</td>
                                        </tr> : null
                                    }
                                    {
                                        total.timelyDiscount ? <tr>
                                            <th>クーポン割引</th>
                                            <td className={styles.discount}>-￥{NumToString(total.timelyDiscount)}</td>
                                        </tr> : null
                                    }
                                    {
                                        total.discount ? <tr>
                                            <th>セール割引</th>
                                            <td className={styles.discount}>-￥{NumToString(total.discount)}</td>
                                        </tr> : null
                                    }
                                    {
                                        total.usedPoint ? <tr>
                                            <th>ポイント割引：</th>
                                            <td className={styles.discount}>-￥{NumToString(total.usedPoint)}</td>
                                        </tr> : null
                                    }
                                    <tr>
                                        <th>配送送料：</th>

                                        <td>￥{NumToString(deliveryAmount)}</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr style={{ fontWeight: 'bold' }}>
                                        <th>合計額（税込）：</th>
                                        <td style={{ color: '#FE926B' }} id="total_price">
                                            ￥{NumToString(total.paymentAmount - total.deliveryAmount + deliveryAmount)}
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div> : null}


                </div>
                <br />


                {/* <div style={{ width: '80%', margin: '-30px auto 30px', lineHeight: 20 }}></div> */}
            </div>
        </div >
    )
};
export default App;









