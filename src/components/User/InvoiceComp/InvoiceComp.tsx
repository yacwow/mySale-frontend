import NumToString from '@/utils/NumToString';
import { Table } from 'antd';
import Column from 'antd/es/table/Column';
import { MailOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react';

import styles from './InvoiceComp.less'
import { NavLink } from '@umijs/max';
import InsideComp from './InsideComp';
import { request } from '@umijs/max';
import { formatTimeFromStr } from '@/utils/format';
import { history } from '@umijs/max';
interface Props {
}
interface DataType {
    key: number;
    productImg: JSX.Element;
    productName: JSX.Element;
    productProperty: JSX.Element;
    price: JSX.Element;
    number: JSX.Element;
    total: JSX.Element;
}
// //这个和orderhistory的一个table的数据是一模一样的，model不会用，等下再看吧,不行就ajax请求
// const willpassdata = {
//     invoiceNum: '142131414212312312', paidStatus: 'unpaid', productData: [
//         { href: '', description: 'testtestttttttttttttttttttttttt', color: 'test', size: 's', price: 1234, amount: 3, imgSrc: '/img/recommendPicture1.jpg' },
//         { href: '', description: 'testtestttttttttttttttttttttttt', color: 'test', size: 's', price: 1234, amount: 3, imgSrc: '/img/recommendPicture1.jpg' }
//     ]
// }
// //用户信息和invoice信息理论上到这里都该知道了，也可以在请求一次
// const invoiceMessage = {
//     invoiceNum: '67892705162982',
//     invoiceTime: '2023-03-16 09:37:31',
//     paymentMethod: 'クレジット-Visa/Master',
//     deliveryFeeDesc: '経済性速達便(9999円以上送料無料！)',
//     originPrice: 43089,
//     timelyDiscount: 5000,
//     secondHalf: 1221,
//     discount: 4000,
//     pointDiscount: 1000,
//     priceAfterDiscount: 31868,
//     deliveryFee: 0,
//     totalAmount: 31868,
// }
// const userInfo = {
//     fullName: 'chenhaoカタカナ',
//     email: 'haochenbc@gmail.com',
//     phone: '081-1354-5526',
//     postcode: '1000003',
//     country: '日本',
//     province: '東京都',
//     city: '千代田区',
//     detailAddress: '一ツ橋（１丁目）; タケヤマ, 270-1089'
// }
const App: React.FC<Props> = (props) => {

    const [data, setData] = useState<DataType[]>();//展示在table上的具体数据
    const [serverSideData, setServerSideData] = useState<{ willpassdata: any, userInfo: any, invoiceMessage: any }>();
    useEffect(() => {
        let path = window.location.pathname
        let patharr = path.split('/')
        console.log(patharr)
        let targetpath;
        if (patharr.length >= 4) {
            targetpath = patharr[3];
        }
        request(`/api/secure/getOneDetailInvoice/${targetpath}`).then(data => {
            if (data.result) {
                console.log(data)
                setServerSideData(data.data);
            }
        })

    }, [])
    useEffect(() => {
        console.log(serverSideData)
        if (serverSideData) {
            setData(serverSideData.willpassdata.productData.map((item, index: number) => {
                return ({
                    key: index,
                    productImg: <a className={styles.img} href={item.href} title={item.description} target="_blank" rel="noreferrer">
                        <img src={item.imgSrc} />
                    </a>,
                    productName: <div className={styles.productName}>
                        <a href={item.href} target="_blank" rel="noreferrer">{item.description}</a>
                    </div>,
                    productProperty: <span className={styles.productProperty}>
                        <span>カラー:&nbsp;&nbsp;ホワイト    </span>
                        <span>サイズ:&nbsp;&nbsp;{item.size} </span>
                    </span>,
                    price: <span>¥{NumToString(item.price)}</span>,
                    number: <span>{item.amount}</span>,
                    total: <span>¥ {NumToString(item.price * item.amount)}</span>,
                })
            }))
        }

    }, [serverSideData])
    return (

        <>
            {serverSideData ? <div className={styles.container} style={{ width: 810, fontSize: 12 }}>
                <div className={styles.title}>
                    ご注文詳細：
                </div>
                <div className={styles.twoLine}>
                    <div >
                        <span>ご注文番号</span> <span>{serverSideData.invoiceMessage.invoiceNum}</span>
                    </div>
                    <div >
                        <span>注文時間</span> <span>{formatTimeFromStr(serverSideData.invoiceMessage.invoiceTime)}</span>
                    </div>
                </div>
                <div className={styles.twoLine}>
                    <div >
                        <span>決済方法</span> <span><p style={{ textOverflow: 'ellipsis' }}>{serverSideData.invoiceMessage.paymentMethod}</p> </span>
                    </div>
                    <div >
                        <span>配送方法</span> <span>{serverSideData.invoiceMessage.deliveryFeeDesc}</span>
                    </div>
                </div>
                <div className={styles.twoLine}>
                    <div >
                        <span>ポイント獲得</span> <span><p style={{ textOverflow: 'ellipsis' }}>{Math.floor(serverSideData.invoiceMessage.originPrice / 20)}</p> </span>
                    </div>
                    <div >
                        <span>商品金額</span> <span>￥{NumToString(serverSideData.invoiceMessage.originPrice)}</span>
                    </div>
                </div>
                <div className={styles.threeLine}>
                    <div >
                        <span>クーポン割引</span> <span>-￥{NumToString(serverSideData.invoiceMessage.timelyDiscount)}</span>
                    </div>
                    <div >
                        <span>半額セール割引</span> <span>-￥{NumToString(serverSideData.invoiceMessage.secondHalf)}</span>
                    </div>
                    <div >
                        <span>セール割引</span> <span>-￥{NumToString(serverSideData.invoiceMessage.discount)}</span>
                    </div>
                </div>
                <div className={styles.threeLine}>
                    <div >
                        <span>ポイント割引</span> <span>-￥{NumToString(serverSideData.invoiceMessage.pointDiscount)}</span>
                    </div>
                    <div >
                        <span>割引適用後の金額</span> <span>￥{NumToString(serverSideData.invoiceMessage.priceAfterDiscount)}</span>
                    </div>
                    <div >
                        <span>送料</span> <span>￥{NumToString(serverSideData.invoiceMessage.deliveryFee)}</span>
                    </div>
                </div>
                <div className={styles.threeLine}>
                    <div >
                        <span>合計金額</span> <span>￥{NumToString(serverSideData.invoiceMessage.totalAmount)}</span>
                    </div>
                </div>

                <div className={styles.title}>
                    連絡先：
                </div>
                <div className={styles.threeLine}>
                    <div >
                        <span>注文者</span> <span>{serverSideData.userInfo.fullName}</span>
                    </div>
                    <div >
                        <span>メールアドレス</span> <span>{serverSideData.userInfo.email}</span>
                    </div>
                </div>
                <div className={styles.threeLine}>
                    <div >
                        <span>電話番号</span> <span>{serverSideData.userInfo.phone}</span>
                    </div>
                    <div >
                        <span>郵便番号</span> <span>{serverSideData.userInfo.postcode}</span>
                    </div>
                </div>
                <div className={styles.threeLine}>
                    <div >
                        <span>国</span> <span>{serverSideData.userInfo.country}</span>
                    </div>
                    <div >
                        <span>都道府県</span> <span>{serverSideData.userInfo.province}</span>
                    </div>
                </div>
                <div className={styles.threeLine}>
                    <div >
                        <span>都市</span> <span>{serverSideData.userInfo.city}</span>
                    </div>
                    <div >
                        <span>住所</span> <span>{serverSideData.userInfo.detailAddress}</span>
                    </div>
                </div>


                <Table dataSource={data} style={{ width: 810, marginTop: 25 }} bordered={true}
                    sticky locale={{ emptyText: '仮無数の根拠です', }} pagination={{ hideOnSinglePage: true }}
                >
                    <Column title="商品画像" dataIndex="productImg" key="productImg" width={105} />
                    <Column title="商品名" dataIndex="productName" key="productName" align='center' width={320} />
                    <Column title="属性" dataIndex="productProperty" key="productProperty" align='center' width={140} />
                    <Column title="単価" dataIndex="price" key="price" align='center' />
                    <Column title="数量" dataIndex="number" key="number" align='center' />
                    <Column title="小計" dataIndex="total" key="total" align='center' />
                </Table>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 30, margin: 10 }}> <a href="mailto:haochenbc@gmail.com?subject=test&amp;subject=テーマです&amp;body=中身です" style={{ color: '#333' }}><MailOutlined /></a> </span>
                    <div style={{ display: 'flex', margin: 10, alignContent: 'center', justifyItems: 'center' }}>

                        {serverSideData.willpassdata.paidStatus === 'unpaid' ? <>
                            <div >
                                <button style={{ height: 40,cursor:'pointer' }} onClick={()=>{
                                    history.back();
                                }} type='button'>キャンセル</button>
                            </div>
                            <div className={styles.repay}>
                                <NavLink  to={`/repayment/${serverSideData.willpassdata.invoiceNum}`} >今すぐ支払う</NavLink>
                            </div></> : <></>}


                    </div>
                </div>

            </div> : <InsideComp />}
        </>




    )
};
export default App;