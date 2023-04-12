import {
    Form,
    Input,
    Select,
} from 'antd';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styles from './CheckoutTop.less'
import HeaderOfEachComp from '../HeaderOfEachComp';
import { request } from 'umi';
import { NavLink } from '@umijs/max';
import { checkOutOptions } from '@/constants';


interface Props {
    userInfo: any;
    showPart: number;
    setUserInfo: Dispatch<SetStateAction<boolean>>;
    setUserInfoFromCustomer: Dispatch<SetStateAction<any>>;
    needUpdate:boolean;
}
const formItemLayout = {
    labelCol: {
        span: 24
    },
    wrapperCol: {
        span: 24
    },
};
//根据上面传入的props判断，如果信息全，就自动的填上去展示另一个页面，如果只有一部分，就展示另一个页面，同时把请求过来的部分写进去


const App: React.FC<Props> = (props) => {
    const { userInfo, showPart, setUserInfoFromCustomer,needUpdate } = props
    const [form] = Form.useForm();
    const [postcode, setPostcode] = useState('')//邮编
    const [postStatus, setPostStatus] = useState(true)//判断邮编是否正确
    // const [province, setProvince] = useState()//province
    // const [city, setCity] = useState('')
    // const [address, setAddress] = useState('')
    const [selectedAddress, setSelectedAddress] = useState(0)//控制第几个,用于全部信息都有的时候，几条不同地址的选择
    const [cityStatus, setCityStatus] = useState(true);
    const [cityData, setCityData] = useState([]);
    const [addressStatus, setAddressStatus] = useState(true);
    const [addressData, setAddressData] = useState([]);
    // const onFinish = (values: any) => {
    //     console.log('Received values of form: ', values);
    //     setUserInfoFromCustomer(values);
    // };
    useEffect(()=>{
        // console.log(form.getFieldsValue())
        let filedsValue=form.getFieldsValue();
        setUserInfoFromCustomer({...filedsValue})
    },[needUpdate])
    useEffect(() => {
        console.log(form.getFieldsError());
        form.submit();
        console.log('in')
    }, [cityData])
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
    // //处理select的option点击事件
    // const handleChange = (address: string, e) => {
    //     // console.log(e.target.selectedIndex);
    //     let selectedIndex = e.target.selectedIndex;
    //     let value = e.target.options[selectedIndex].value;
    //     // console.log(first)
    //     if (address === 'province') {
    //         console.log(value)
    //         setProvince(value)
    //         setCity('');
    //         setAddress('');
    //         setAddressStatus(true);
    //         request(`api/getCityList/${value}`).then((data) => {
    //             setCityStatus(false);
    //             console.log(data);
    //             setCityData(data);
    //         })
    //     } else if (address === 'city') {
    //         setCity(value);
    //         request(`api/getAddressList/${value}`).then((data) => {
    //             setAddressStatus(false);
    //             console.log(data);
    //             setAddressData(data);
    //         })
    //     } else if (address === 'address') {
    //         setAddress(value)
    //         //查找postcode
    //         request(`api/getPostCode/${province}/${city}/${value}`).then((data) => {
    //             setPostcode(data[0]);
    //         })
    //     }
    // }
    //里面取值是靠数组的index，复用的时候需要注意序列改变的问题（用来取值发axios
    const handleFieldsChange = (changedFields: any, allFields: any) => {
        if (!changedFields) return;//好像修改代码时候会出问题，加一行吧
        if (changedFields[0].name[0] === 'province') {
            form.setFieldValue("address", '')
            form.setFieldValue("city", '')
            // setCityStatus(true);
            setAddressStatus(true);
            console.log(changedFields)
            request(`api/getCityList/${changedFields[0].value}`).then((data) => {
                // setCityStatus(false);
                // console.log(data);
                setCityData(data);
            })
        } else if (changedFields[0].name[0] === 'city') {
            form.setFieldValue("address", '')
            request(`api/getAddressList/${changedFields[0].value}`).then((data) => {
                setAddressStatus(false);
                // console.log(data);
                setAddressData(data);
            })
        } else if (changedFields[0].name[0] === 'address') {
            // console.log(allFields[8].value,allFields[9],allFields[10])
            request(`api/getPostCode/${allFields[8].value}/${allFields[9].value}/${allFields[10].value}`).then((data) => {
                setPostcode(data[0]);
            })
        }
    }
    const handlePostcodeChange = (e: any) => {
        // console.log(e.target.value)
        setPostcode(e.target.value);
    }

    //具体地址选择
    const handleAddressChoose = (index: number) => {
        setSelectedAddress(index);
        // console.log(index)
    }


    const buildTrListIfHasDetail = () => {

        let trList = userInfo.address.map((item, index: number) => {
            return (<tr key={index}>
                <td className={styles.center} style={{ verticalAlign: 'middle' }}>
                    <input type="radio" defaultChecked={selectedAddress === index} onChange={() => handleAddressChoose(index)} />
                </td>
                <td className={styles.center} style={{ verticalAlign: 'middle', width: '20%' }}>haochenbc@gmail.com</td>
                <td className={styles.center} style={{ verticalAlign: 'middle', width: '10%' }}>辰浩，片假名</td>
                <td className={styles.center} style={{ width: '57%' }}>日本, 东京, Chiyoda Ward, Hitotsubashi (1-chome); Takeyama, 270-1089, 081-1354-5526, 1000003</td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle', width: '10%' }}>
                    <NavLink style={{ color: '#89a9d2', fontWeight: 'bold' }} to="https://www.zasale.com/account/order/update-shipping-address/147715">内容变更</NavLink></td>
            </tr>)
        })
        return <> <table className={styles.table} style={{ marginBottom: 10, border: '1px solid #EFE3D2', width: 820, marginLeft: 55, marginTop: 10 }}>
            <tbody>
                {trList}
            </tbody>
        </table>
            <div><NavLink to="https://www.zasale.com/account/order/update-shipping-address/default" style={{ color: 'red', fontSize: 12, paddingLeft: 55 }}>
                添加新的送货地址</NavLink>
            </div>
        </>
    }
    const buildForm = () => {
        return (<Form
            onFieldsChange={handleFieldsChange}
            {...formItemLayout}
            initialValues={{ country: '日本', firstName: userInfo.name, lastName: userInfo.nickName, email: userInfo.userEmail }}
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
                    name="postcode" >
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
        <div>
            <HeaderOfEachComp imgSrc='emailCheckout.png' title='お届け先' />
            {showPart === 1 ? buildTrListIfHasDetail() : null}
            {showPart === 2 ? buildForm() : null}
            { }
        </div>

    );
};

export default App;

