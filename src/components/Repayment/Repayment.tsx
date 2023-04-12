import React, { useState } from 'react';
import HeaderOfEachComp from '../Checkout/HeaderOfEachComp';
import CheckoutPaymentMethod from '../Checkout/CheckoutPaymentMethod';
import styles from './Repayment.less'
import NumToString from '@/utils/NumToString';
import { Button, message, Modal } from 'antd';
import { history, request } from '@umijs/max';
interface Props {
    serverData: any
    invoiceNum: string
}

const App: React.FC<Props> = (props) => {
    const { serverData, invoiceNum } = props
    const [paymentMethod, setPaymentMethod] = useState('')//付款方式,不能为空，visa，ae，jcb，shop
    const [open, setOpen] = useState(false);//MODAL
    const [messageApi, contextHolder] = message.useMessage();
    const failed = () => {
        messageApi.open({
            type: 'warning',
            content: '支払い方法を空にすることはできません',
            className: 'custom-class',
            style: {
                marginTop: '30vh',
            },
        });
    };
    const netError = () => {
        messageApi.open({
            type: 'error',
            content: 'ネットワーク異常です,後ほどお試しください',
            className: 'custom-class',
            style: {
                marginTop: '30vh',
            },
        });
    };
  //模态框关闭
  const hideModal = (e: any) => {
    e.stopPropagation()
    e.preventDefault()
    setOpen(false);
  };

    const handleSubmit = () => {
        console.log(paymentMethod);
        //发送请求过去，支付目前还不太清楚
        if (paymentMethod === '') {
            failed()
        } else {
            request(`/api/secure/readyToPay/${invoiceNum}/${paymentMethod}`).then(data => {
                console.log(data)
                if (data.result) {
                    history.push("/fakePayment");
                } else {
                    netError()
                }
            })
        }
    }
    return (
        <div style={{ width: 875, margin: '0 auto' }}>
            {contextHolder}
            <HeaderOfEachComp imgSrc='/emailCheckout.png' title='お届け先' />
            <div className={styles.user}>
                <div><span className={styles.first}>氏名：</span><span className={styles.second}>{serverData.firstname}</span></div>
                <div><span className={styles.first}>フリガナ：</span><span className={styles.second}>{serverData.lastname}</span></div>
                <div><span className={styles.first}>お届け先：</span><span className={styles.second}>
                    {`${serverData.country} ${serverData.province} ${serverData.city} ${serverData.area},${serverData.detailaddress}`}</span></div>
                <div><span className={styles.first}>携帯電話：</span><span className={styles.second}>{serverData.mobilephone}</span></div>
            </div>
            <HeaderOfEachComp imgSrc='/deliveryDate.png' title='ご注文情報' />
            <div className={styles.delivery}>
                <div><span className={styles.deliveryFirst}>小計：</span><span className={styles.deliverySecond}>{`￥${NumToString(serverData.priceafterdiscount)} 税込`}</span></div>
                <div><span className={styles.deliveryFirst}>送料：</span><span className={styles.deliverySecond}>{`￥${NumToString(serverData.deliveryfee)} `}</span></div>
                <div><span style={{ fontWeight: 700 }} className={styles.deliveryFirst}>合計金額：</span>
                    <span className={styles.deliverySecond} style={{ fontSize: 20 }}>{`￥${NumToString(serverData.paymentamount)} `}</span>
                    <span style={{ fontSize: 15, fontWeight: 700, marginLeft: 5 }}>税込</span></div>
            </div>
            <CheckoutPaymentMethod setPaymentMethod={setPaymentMethod} />
            <div >
                <p style={{ textAlign: 'center', fontSize: 12, marginTop: 40, color: '#f00' }}>
                    お客様情報ページはSSLによって、暗号化され、安全な通信を提供しています。
                </p>
            </div>
            <div className={styles.checkOut}>
                <div className={styles.button}>
                    <Button htmlType="submit" className={styles.center}
                        onClick={handleSubmit}
                    >
                        <span style={{ color: 'white' }}>ご注文を確定する</span>
                    </Button>
                    <Button className={styles.center} style={{ marginTop: 30, backgroundColor: 'white', border: '1px solid black' }}
                        onClick={() => {
                            setOpen(true)
                        }}
                    >
                        <span style={{ color: 'black' }}>前のページに戻ります</span>
                    </Button>
                </div>
            </div>
            <Modal
                centered
                open={open}
                closeIcon={null}
                onOk={
                    ()=>{history.back()}
                }
                onCancel={hideModal} okText='確定です'
                cancelText="あきらめます" >
                <div style={{
                    textAlign: 'center', fontSize: 16, paddingBottom: 15,
                    fontWeight: 700,
                }}>前のページに戻ります?</div>
            </Modal>


        </div>
    )
};
export default App;