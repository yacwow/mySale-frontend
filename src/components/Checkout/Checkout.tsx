import { Button, Form, Input, Select,message } from 'antd';
import React, { useEffect, useState } from 'react';
import styles from './Checkout.less'
// import HeaderOfEachComp from '../HeaderOfEachComp';
import HeaderOfEachComp from './HeaderOfEachComp';
import { history, request } from 'umi';
// import { NavLink } from '@umijs/max';
import DeliveryMethod from './DeliveryMethod';
import CheckoutPaymentMethod from './CheckoutPaymentMethod';
import CheckoutDetail from './CheckoutDetail';
import { checkOutOptions } from '@/constants';
import { useModel } from '@umijs/max';
export interface updateInfoType {
    productInfo: { pid: number, size: string, color: string, amount: number }[], paymentDetail: any
};
interface Props {
    userInfo: any;
}
const formItemLayout = {
    labelCol: {
        span: 24
    },
    wrapperCol: {
        span: 24
    },
};

//这里需要把数据给后端看对不对，如果对了，就直接跳转到支付页面去了。告知支付页面要付多少钱。不对就通知客户网页异常，八小时后下单，到时候我查看这里错误的异常log

const App: React.FC<Props> = (props) => {
    const { userInfo } = props;//用户具体信息
    console.log(userInfo);
    const { setNeedUpdateIndex, setInvoiceId, setBackUrl } = useModel('invoiceAddress')
    const{invoiceNum,setInvoiceNum,setNum}=useModel("isLogin")
    const [form] = Form.useForm();
    const [paymentMethod, setPaymentMethod] = useState('')//付款方式,不能为空，visa，ae，jcb，shop
    const [deliveryMethodId, setDeliveryMethodId] = useState(1);//分别对应不同方式快递，不能为空，1,2,3分别为ems，iexpress，normal
    const [updatedInfo, setUpdatedInfo] = useState<updateInfoType | undefined>()//支付后台所需的其他信息 pid，size，color，amount,totalPmt
    // const [needUpdate, setNeedUpdate] = useState(false)//通知下面，可以提交了
    const [postcode, setPostcode] = useState('')//邮编
    const [postStatus, setPostStatus] = useState(true)//判断邮编是否正确
    const [selectedAddress, setSelectedAddress] = useState(0)//控制第几个,用于全部信息都有的时候，几条不同地址的选择
    const [cityStatus, setCityStatus] = useState(true);
    const [cityData, setCityData] = useState([]);
    const [addressStatus, setAddressStatus] = useState(true);
    const [addressData, setAddressData] = useState([]);
    // const [userInfo, setUserInfo] = useState<any>()//用来给checkouttop组件个人信息自动填写的
    const [showPart, setShowPart] = useState(-1)//用来给checkouttop判断具体展示那个组件
    const [tableUserInfo, setTableUserInfo] = useState<any>()//用来保存用户信息，到时候我们直接用来传递，不用验证
    const [tips, setTips] = useState('');//以下这四个都是给checkout detail用的
    const [checkoutTotal, setCheckoutTotal] = useState();
    const [checkoutData, setCheckoutTotalData] = useState();
    const [deliveryAmount, setDeliveryAmount] = useState(0);
    const [showedNormalDeliveryAmount, setShowedNormalDeliveryAmount] = useState(0);
    const[disabled,setDisabled]=useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const failed = () => {
        messageApi.open({
          type: 'error',
          content: 'ネットワーク異常です,あとでお試しください',
          className: 'custom-class',
          style: {
            marginTop: '40vh',
          },
        });
      };
    // const handleRequest = (params: { orderData: boolean, cartListData: boolean }) => {
    //     request("/api/secure/getCheckOutProductData", { params }).then(data => {
    //         if (data.result) {
    //             localStorage.setItem("orderData", JSON.stringify(data.data.orderData));
    //             localStorage.setItem("cartList", JSON.stringify(data.data.cartListData));
    //             setCheckoutTotalData(data.data.cartListData)
    //             setCheckoutTotal(data.data.orderData)
    //             setShowedNormalDeliveryAmount(data.data.orderData.deliveryAmount);
    //             setDeliveryAmount(data.data.orderData.deliveryAmount)
    //         } else {
    //             history.push('/cart')
    //         }
    //     })

    // }
    useEffect(() => {
        if (userInfo.fullAddress) {
            setShowPart(1)//数据全的
            setTableUserInfo({ userInfo: userInfo.email, firstName: userInfo.firstName, lastName: userInfo.lastName, ...userInfo.address[0] })
        } else {
            setShowPart(2)//数据不全
        }
        try {
            let orderDataJson = localStorage.getItem("orderData")
            let cartListDataJson = localStorage.getItem("cartList")
            if (orderDataJson&&cartListDataJson) {
                let orderData = JSON.parse(orderDataJson);
                setCheckoutTotal(orderData)
                setShowedNormalDeliveryAmount(orderData.deliveryAmount);
                setDeliveryAmount(orderData.deliveryAmount)
                let cartListData = JSON.parse(cartListDataJson);
                setCheckoutTotalData(cartListData)
            }else{
                history.push('/cart')
            }

        } catch (e) {
            //localstorage出问题了，提示重新选取
            localStorage.removeItem("productList");
            localStorage.removeItem("orderData");

            //请求并setstate 和上面一样，可以提取
            history.push('/cart')
            // handleRequest({ orderData: true, cartListData: true });
        }
    }, [])

    //如果是表格，就进入这里，先valid
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
        if (paymentMethod === '') { window.alert('お支払い方法の選択をお願いします。'); return }
        //由于postcode被我们自己做过了，所以数据需要自己获取
        let newUpdateInfo = { ...values };
        newUpdateInfo.postcode = postcode;
        newUpdateInfo.tips = tips;
        let params = { userInfo: { ...newUpdateInfo }, updatedInfo: { ...updatedInfo }, deliveryMethodId, paymentMethod, needUpdateAddress: true };
        console.log(params)
        //先设置提交的button为disabled
        setDisabled(true);
        request("/api/secure/createInvoice", {
            // param
            method: "POST",
            params: {
                ...params
            }
        }).then(data => {
            console.log(data)
            //这边把cart和orderdata和productlistdata都去掉
            //跳转到支付页面，支付成功与否关系的是invoice的paid与否，跟这里无关了
            if(data.result){
                localStorage.removeItem("productList");
                localStorage.removeItem("orderData");
                localStorage.removeItem("cartList")
                //用户的那个invoicenumber的state要加一，cart的number要归零
                setInvoiceNum(invoiceNum+1);
                setNum(0)
                // //跳转到主页/timeseller
                // history.push("/timeseller")
            }
        }).catch(e=>{
            //提交按钮又可以用了，然后提示网络异常，重新提交
            setDisabled(false);
            failed()
      })
    };
    //如果是table我们只需要选择第几个，那就没必要valid用户信息
    const submitInfoWithoutValid = () => {
        if (paymentMethod === '') { window.alert('お支払い方法の選択をお願いします。'); return }
        let values = tableUserInfo;
        values.tips = tips;
        console.log(values)
            //先设置提交的button为disabled
            setDisabled(true);
        request("/api/secure/createInvoice", {
            // param
            method: "POST",
            params: {
                userInfo: values,
                updatedInfo, deliveryMethodId, paymentMethod,
                needUpdateAddress: false
            }
        }).then(data => {
            console.log(data)
            //这边把cart和orderdata和productlistdata都去掉
            //跳转到支付页面，支付成功与否关系的是invoice的paid与否，跟这里无关了
            if(data.result){
                localStorage.removeItem("productList");
                localStorage.removeItem("orderData");
                localStorage.removeItem("cartList")
                //用户的那个invoicenumber的state要加一，cart的number要归零
                setInvoiceNum(invoiceNum+1);
                setNum(0)
                // //跳转到主页/timeseller
                //  history.push("/timeseller")
            }
        }).catch(e=>{
              //提交按钮又可以用了，然后提示网络异常，重新提交
              setDisabled(false);
              failed()
        })
        console.log(values, updatedInfo, deliveryMethodId, paymentMethod);
    }
    //邮编input事件
    const handleBlur = (e: any) => {
        request(`/api/getAddress/${e.target.value.trim()}`).then((serverSideData) => {
            if (serverSideData.result === false) { setPostStatus(false); return; }
            const { data } = serverSideData;
            // console.log(data,serverSideData);
            // setProvince(data.province);
            form.setFieldValue("province", data.province)
            form.setFieldValue("address", data.area)
            form.setFieldValue("city", data.city)
            // setAddress(data.area);
            // setCity(data.city);
            setCityData(data.newCityList);
            setAddressData(data.newAreaList)
            setCityStatus(false);
            setAddressStatus(false);
            setPostStatus(true)
        })
    }



    //用于处理请求地址
    const handleFieldsChange = (changedFields: any, allFields: any) => {
        if (!changedFields) return;//好像修改代码时候会出问题，加一行吧
        if (changedFields[0]?.name[0] === 'province') {
            form.setFieldValue("address", '')
            form.setFieldValue("city", '')
            setCityStatus(false);
            setAddressStatus(true);
            console.log(changedFields)
            request(`api/getCityList/${changedFields[0].value}`).then((data) => {
                // setCityStatus(false);
                // console.log(data);
                setCityData(data);
            })
        } else if (changedFields[0]?.name[0] === 'city') {
            form.setFieldValue("address", '')
            request(`api/getAddressList/${changedFields[0].value}`).then((data) => {
                setAddressStatus(false);
                // console.log(data);
                setAddressData(data);
            })
        } else if (changedFields[0]?.name[0] === 'address') {
            // console.log(allFields[8].value,allFields[9],allFields[10])
            request(`api/getPostCode/${allFields[8].value}/${allFields[9].value}/${allFields[10].value}`).then((data) => {

                setPostcode(data[0]);
            })
        }
    }
    const handlePostcodeChange = (e: any) => {
        setPostcode(e.target.value);
    }

    //具体地址选择
    const handleAddressChoose = (index: number, item: any) => {
        setSelectedAddress(index);
        console.log(item)
        setTableUserInfo({ userInfo: userInfo.email, firstName: userInfo.firstName, lastName: userInfo.lastName, ...item })
    }

    const buildTrListIfHasDetail = () => {

        let trList = userInfo.address.map((item: any, index: number) => {
            return (<tr key={index} className={styles.choose}>
                <td style={{ verticalAlign: 'middle' }}>
                    <input type="radio" checked={selectedAddress === index} onChange={async () => {
                        handleAddressChoose(index, item);
                        await setNeedUpdateIndex(index); await setInvoiceId(item.invoiceId); setBackUrl('/checkout')
                    }} />
                </td>
                <td className={styles.center} style={{ verticalAlign: 'middle', width: '20%' }}>{item.email}</td>
                <td className={styles.center} style={{ verticalAlign: 'middle', width: '10%' }}>{`${item.firstName} ${item.lastName}`}</td>
                <td className={styles.center} style={{ width: '57%' }}>{`${item.country},${item.province},${item.city},${item.area},${item.detailAddress},${item.mobilePhone},${item.postcode}`}</td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle', width: '10%' }}>
                    <Button onClick={async () => {
                        await setNeedUpdateIndex(index); await setInvoiceId(item.invoiceId); setBackUrl('/checkout');
                        history.push("/updateOrAddAddress")
                    }} style={{ color: '#89a9d2', fontWeight: 'bold' }}>内容変更</Button></td>
            </tr>)
        })
        return <> <table className={styles.table} style={{ marginBottom: 10, border: '1px solid #EFE3D2', width: 820, marginLeft: 55, marginTop: 10 }}>
            <tbody>
                {trList}
            </tbody>
        </table>
            <div style={{ cursor: 'pointer', textDecoration: 'underline', color: '#f40' }} ><div onClick={async () => { await setNeedUpdateIndex(-1); await setInvoiceId(-1); setBackUrl('/checkout'); history.push("/updateOrAddAddress") }} style={{ color: 'red', fontSize: 12, paddingLeft: 55 }}>
                新しい送付先を追加する</div>
            </div>
        </>
    }
    const buildForm = () => {
        return (<Form
            onFinish={onFinish}
            onFieldsChange={handleFieldsChange}
            {...formItemLayout}
            initialValues={{ country: '日本', firstName: userInfo.tableValue.firstName, lastName: userInfo.tableValue.lastName, email: userInfo.tableValue.email }}
            size='small'
            form={form}
            name="register"
            // onFinish={onFinish}
            style={{ width: 820, marginLeft: 55 }}
            layout="vertical"
            scrollToFirstError
        >
            <Form.Item
                style={{ width: 400 }}
                name="firstName"
                label={<div> <span >氏名（漢字）</span> <span style={{ color: '#c9302c' }}>（例）田中洋子</span> </div>}
                // tooltip="(例）田中洋子"
                rules={[{ required: true, message: '名前を空欄にしてはいけません!', whitespace: true }]}
            >
                <Input placeholder='氏名' />
            </Form.Item>
            <Form.Item style={{ width: 400 }}
                name="lastName"
                label={<div> <span >シメイ（カタカナ）</span> <span style={{ color: '#c9302c' }}>（例）タナカ　ヨウコ</span> </div>}
                rules={[{ required: true, message: '姓を空にしてはいけません!', whitespace: true }]}
            >
                <Input placeholder='シメイ' />
            </Form.Item>

            <Form.Item style={{ width: 400 }}
                name="email"
                label="Eメールアドレス"
                rules={[
                    {
                        type: 'email',
                        message: '有効なメールアドレスではありません!',
                    },
                    {
                        required: true,
                        message: 'メールボックスは空にできません!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Form.Item style={{ width: 400 }}
                    name="mobilePhone"
                    label={<><span style={{ fontWeight: 'normal', marginRight: 5 }}>携帯電話お宅</span><span style={{ color: '#c9302c', fontWeight: 'normal' }}> 携帯番号を正しく入力してください（連絡用）</span></>}
                    rules={[{
                        required: true,
                        validator: (rule, val,) => {
                            const mobileReg = /^(0([1-9]{1}-?[1-9]\d{3}|[1-9]{2}-?\d{3}|[1-9]{2}\d{1}-?\d{2}|[1-9]{2}\d{2}-?\d{1})-?\d{4}|0[789]0-?\d{4}-?\d{4}|050-?\d{4}-?\d{4})$/;
                            switch (true) {
                                case !Boolean(val):
                                    return Promise.reject('携帯電話の番号を空にすることはできません。');
                                case !mobileReg.test(val.trim()):
                                    return Promise.reject('携帯電話番号のフォーマットが間違っています。');
                                default:
                                    return Promise.resolve();
                            }
                        },
                    }]} >
                    <Input />
                </Form.Item>
                <Form.Item style={{ width: 400, paddingTop: 30 }}>
                    <div style={{ color: '#c9302c', fontWeight: 300 }}>（例）090-1234-5678 半角</div>
                </Form.Item>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Form.Item style={{ width: 400 }}
                    name="phone"
                    label="固定電話"
                    rules={[{
                        validator: (rule, val) => {
                            const mobileReg = /^(0([1-9]{1}-?[1-9]\d{3}|[1-9]{2}-?\d{3}|[1-9]{2}\d{1}-?\d{2}|[1-9]{2}\d{2}-?\d{1})-?\d{4}|0[789]0-?\d{4}-?\d{4}|050-?\d{4}-?\d{4})$/;
                            switch (true) {
                                case !Boolean(val):
                                    return Promise.resolve();
                                case !Boolean(val.trim()):
                                    return Promise.resolve();
                                case !mobileReg.test(val.trim()):
                                    return Promise.reject('固定電話番号のフォーマットが間違っています。');
                                default:
                                    return Promise.resolve();
                            }
                        },
                    }]} >
                    <Input />
                </Form.Item>
                <Form.Item style={{ width: 400, paddingTop: 30 }}>
                    <div style={{ color: '#c9302c', fontWeight: 300 }}>（例）086-123-4567 半角</div>
                </Form.Item>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Form.Item style={{ width: 400 }}
                    name="postcode"
                    label={<><span style={{ fontWeight: 'normal' }}>郵便番号</span>
                    </>} >
                    <><Input onBlur={handleBlur} value={postcode} onChange={handlePostcodeChange} />
                        {!postStatus ? <div style={{ position: 'absolute', zIndex: 1000, color: '#c9302c' }}>有効な郵便番号ではありません</div> : null}</>

                </Form.Item>
                <Form.Item style={{ width: 400, paddingTop: 30 }}
                    name="tips" >
                    <div><span style={{ color: '#f40' }}>郵便番号入力すると、住所が自動的に表示される</span><a
                        style={{ background: '#c9302c', color: '#fff', fontWeight: 300, }}
                        target="_blank"
                        href="http://www.post.japanpost.jp/zipcode/" rel="noreferrer">郵便番号検索
                    </a></div>
                </Form.Item>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Form.Item style={{ width: 400 }}
                    name="country"
                    label="国"
                >
                    <Input disabled={true} value={'日本'} />
                </Form.Item>
                <Form.Item style={{ width: 400 }}
                    name="province"
                    label="都道府県"
                    rules={[{ required: true, message: '具体的な住所は空にしてはいけません!' }]}
                >
                    <Select >
                        {checkOutOptions.map((item, index: number) => {
                            return <Select.Option key={index} value={item.label}>{item.label}</Select.Option>
                        })}
                    </Select>
                    {/* <div  >
                        <select style={{
                            margin: 0, padding: '3px 7px', width: '100%', height: '100%',
                            backgroundColor: '#fff', borderColor: '#d9d9d9', borderRadius: '5px', transition: 'all 0.2s', listStyle: 'none',
                            boxShadow: 'none'
                        }}
                            id='province' value={province} onChange={(e) => handleChange('province', e)} >
                            {<option style={{ display: 'none' }}></option>}
                            {checkOutOptions.map((item, index: number) => {
                                return <option key={index} value={item.label}>{item.label}</option>
                            })}
                        </select>
                    </div> */}
                </Form.Item>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Form.Item style={{ width: 400 }}
                    name="city"
                    label="市" rules={[{ required: true, message: '具体的な住所は空にしてはいけません!' }]}
                >
                    <Select disabled={cityStatus}>
                        {cityData?.map((item, index: number) => {
                            return <Select.Option key={index} value={item}>{item}</Select.Option>
                        })}
                    </Select>
                    {/* <div  >
                        <select style={{
                            margin: 0, padding: '3px 7px', width: '100%', height: '100%',
                            backgroundColor: '#fff', borderColor: '#d9d9d9', borderRadius: '5px', transition: 'all 0.2s', listStyle: 'none',
                            boxShadow: 'none'
                        }}
                            id='city' value={city} disabled={cityStatus} onChange={(e) => handleChange('city', e)} >
                            {<option style={{ display: 'none' }}></option>}
                            {cityData.length > 0 ? cityData.map((item, index: number) => {
                                return <option key={index} value={item}>{item}</option>
                            }) : null}
                        </select>
                    </div> */}
                </Form.Item>
                <Form.Item style={{ width: 400 }}
                    name="address"
                    label="町" rules={[{ required: true, message: '具体的な住所は空にしてはいけません!' }]}
                >
                    {<Select disabled={addressStatus}>
                        {addressData?.map((item, index: number) => {
                            return <Select.Option key={index} value={item}>{item}</Select.Option>
                        })}
                    </Select>}
                    {/* <div  >
                        <select style={{
                            margin: 0, padding: '3px 7px', width: '100%', height: '100%',
                            backgroundColor: '#fff', borderColor: '#d9d9d9', borderRadius: '5px', transition: 'all 0.2s', listStyle: 'none',
                            boxShadow: 'none'
                        }}
                            id='address' disabled={addressStatus} value={address} onChange={(e) => handleChange('address', e)} >
                            {<option style={{ display: 'none' }}></option>}
                            {addressData.length > 0 ? addressData.map((item, index: number) => {
                                return <option key={index} value={item}>{item}</option>
                            }) : null}
                        </select>
                    </div> */}
                </Form.Item>
            </div>
            <Form.Item style={{ width: 400 }}
                name="detailAddress"
                label="番地•マンション名•部屋番号"
                // <span>（例）6－01小林マンション201</span>
                rules={[{ required: true, message: '具体的な住所は空にしてはいけません!' }]}
            >
                <Input />
            </Form.Item>

        </Form >)
    }

    return (
        <div >
            {contextHolder}
            <HeaderOfEachComp imgSrc='/emailCheckout.png' title='お届け先' />
            {showPart === 1 ? buildTrListIfHasDetail() : null}
            {showPart === 2 ? buildForm() : null}
            {showPart === -1 ? null : <>
                < DeliveryMethod setDeliveryMethodId={setDeliveryMethodId} deliveryMethodId={deliveryMethodId}
                    showedNormalDeliveryAmount={showedNormalDeliveryAmount} />
                <CheckoutPaymentMethod setPaymentMethod={setPaymentMethod} />
                {
                    checkoutTotal !== undefined && checkoutData !== undefined && deliveryAmount !== undefined ?
                        <CheckoutDetail Total={checkoutTotal} Data={checkoutData} deliveryAmount={deliveryAmount}
                            setTips={setTips} setDeliveryAmount={setDeliveryAmount} setUpdatedInfo={setUpdatedInfo} deliveryMethodId={deliveryMethodId} /> : null
                }
                <div className={styles.checkOut}>
                    <div className={styles.button}>
                        <Button htmlType="submit" className={styles.center} disabled={disabled}
                            onClick={() => {
                                if (showPart === 2) {
                                    form.submit();
                                } else if (showPart === 1) {
                                    submitInfoWithoutValid()
                                }
                            }}
                            title="ご注文を確定する">
                            <span style={{ color: 'white' }}>ご注文を確定する</span>
                        </Button>

                        <div style={{ color: '#ccc', textAlign: 'start' }}>
                            ご注意：注文後の内容変更は承りませんので、ご注意くださいませ</div>
                    </div>

                    <br />
                </div> </>}

        </div>

    );
};

export default App;

