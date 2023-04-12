import { Button, Form, Input, Select, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { history, useModel } from 'umi';
import { request } from 'umi';
import { checkOutOptions } from '@/constants';
import styles from './UpdateUserInfoInitialValue.less'

interface Props {
    initialValues: any;
}

const App: React.FC<Props> = (props) => {

    const { initialValues } = props;
    const { invoiceId } = useModel('invoiceAddress');
    const [form] = Form.useForm();
    const [postcode, setPostcode] = useState()//邮编
    const [postStatus, setPostStatus] = useState(true)//判断邮编是否正确
    const [cityStatus, setCityStatus] = useState(true);
    const [cityData, setCityData] = useState([]);
    const [areaStatus, setAreaStatus] = useState(true);
    const [areaData, setAreaData] = useState([]);
    const [open, setOpen] = useState(false);//模态框的开关
    const [openUpdate, setOpenUpdate] = useState(false);//模态框的开关
    const [params, setParams] = useState();
    useEffect(() => {
        setPostcode(initialValues.postcode);
        // if (initialValues.city) setCityStatus(false);
        // if (initialValues.area) setAreaStatus(false);
        request(`api/getCityList/${initialValues.province}`).then((data) => {
            setCityStatus(false);
            // console.log(data);
            setCityData(data);
        })
        request(`api/getAddressList/${initialValues.city}`).then((data) => {
            setAreaStatus(false);
            // console.log(data);
            setAreaData(data);
        })
    }, [])
    //模态框关闭
    const hideModal = (e: any) => {
        e.stopPropagation()
        e.preventDefault()
        setOpen(false);
    };
    const handlePostcodeChange = (e: any) => {
        setPostcode(e.target.value);
    }
    //根据postcode来修改地址
    const handleBlur = (e: any) => {
        request(`/api/getAddress/${e.target.value.trim()}`).then((serverSideData) => {
            if (serverSideData.result === false) { setPostStatus(false); return; }
            const { data } = serverSideData;
            form.setFieldValue("province", data.province)
            form.setFieldValue("area", data.area)
            form.setFieldValue("city", data.city)
            // console.log(data.newCityList)
            setCityData(data.newCityList);
            setAreaData(data.newAreaList)
            setCityStatus(false);
            setAreaStatus(false);
            setPostStatus(true)

        })
    }
    //里面取值是靠数组的index，复用的时候需要注意序列改变的问题（用来取值发axios
    const handleFieldsChange = (changedFields: any, allFields: any) => {
        if (!changedFields) return;//好像修改代码时候会出问题，加一行吧
        if (changedFields[0].name[0] === 'province') {
            form.setFieldValue("area", '')
            form.setFieldValue("city", '')
            setCityStatus(false);
            setAreaStatus(true);
            console.log(changedFields)
            request(`api/getCityList/${changedFields[0].value}`).then((data) => {
                // setCityStatus(false);
                // console.log(data);
                setCityData(data);
            })
        } else if (changedFields[0].name[0] === 'city') {
            form.setFieldValue("area", '')
            request(`api/getAddressList/${changedFields[0].value}`).then((data) => {
                setAreaStatus(false);
                // console.log(data);
                setAreaData(data);
            })
        } else if (changedFields[0].name[0] === 'area') {
            // console.log(allFields[8].value,allFields[9],allFields[10])
            request(`api/getPostCode/${allFields[8].value}/${allFields[9].value}/${allFields[10].value}`).then((data) => {
                setPostcode(data[0]);
            })
        }
    }
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
        let params = { ...values };
        params.postcode = postcode;
        params.invoiceId = invoiceId//有这个鬼东西就是更新，没有就是添加，这其实是地址的id
        setParams(params);
        setOpenUpdate(true);

    };
    const handleUpdate = () => {
        //后台给个需要update/add
        request("/api/secure/needUpdateOrAdd",
            { params: params }).then(data => {
                if (data.result) {

                } else {
                    //message告知有错误，等下重新修改
                }
                let href=localStorage.getItem("backUrl")
                if(href){
                    history.push(href);
                }else{
                    history.push("/checkout");
                }
                
            })
        setOpenUpdate(false)
    }


    return (
        (<><Form
            // {...formItemLayout}
            initialValues={
                initialValues
            }
            onFieldsChange={handleFieldsChange}
            size='middle'
            // , firstName: userInfo.name, lastName: userInfo.nickName, email: userInfo.userEmail 
            form={form} colon={false}
            name="register"
            onFinish={onFinish}
            style={{ width: 820, marginLeft: 55 }}
            // layout="vertical"
            scrollToFirstError
        >
            <div>
                <Form.Item
                    style={{ width: 810 }}
                    name="firstName"
                    label={<span style={{ width: 250, display: 'flex', justifyContent: 'space-between' }}> <span>氏名（漢字） </span><img src="/icon-must.gif" /></span>}
                    // tooltip="(例）田中洋子"
                    rules={[{ required: true, message: '名前を空欄にしてはいけません!', whitespace: true }]}
                >
                    <Input placeholder='氏名' />
                </Form.Item>
                <Form.Item style={{ width: 810, marginLeft: 270, height: 15 }}>
                    <div style={{ color: '#c9302c', fontWeight: 300 }}>（例）田中洋子</div>
                </Form.Item>
            </div>

            <div>
                <Form.Item
                    style={{ width: 810 }}
                    name="lastName"
                    label={<span style={{ width: 250, display: 'flex', justifyContent: 'space-between' }}> <span>シメイ（カタカナ） </span><img src="/icon-must.gif" /></span>}
                    // tooltip="(例）田中洋子"
                    rules={[{ required: true, message: '姓を空にしてはいけません!', whitespace: true }]}
                >
                    <Input placeholder='シメイ' />
                </Form.Item>
                <Form.Item style={{ width: 810, marginLeft: 270, height: 15 }}>
                    <div style={{ color: '#c9302c', fontWeight: 300 }}>（例）タナカ　ヨウコ</div>
                </Form.Item>
            </div>
            <Form.Item style={{ width: 810 }}
                name="email"
                label={<span style={{ width: 250, display: 'flex', justifyContent: 'space-between' }}> <span>Eメールアドレス </span><img src="/icon-must.gif" /></span>}
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
            <div >
                <Form.Item style={{ width: 810 }}
                    name="mobilePhone"
                    label={<span style={{ width: 250, display: 'flex', justifyContent: 'space-between' }}> <span>携帯電話お宅 </span><img src="/icon-must.gif" /></span>}
                    rules={[{
                        required: true,
                        validator: (rule, val) => {
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
                <Form.Item style={{ width: 810, marginLeft: 270, height: 15 }}>
                    <div style={{ color: '#c9302c', fontWeight: 300 }}>（例）090-1234-5678 半角</div>
                </Form.Item>
            </div>


            <div >
                <Form.Item style={{ width: 810 }}
                    name="phone"
                    label={<span style={{ width: 261, display: 'flex', justifyContent: 'space-between' }}> <span>固定電話 </span></span>}
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
                <Form.Item style={{ width: 810, marginLeft: 270, height: 15 }}>
                    <div style={{ color: '#c9302c', fontWeight: 300 }}>（例）086-123-4567 半角</div>
                </Form.Item>
            </div>
            <div >
                <Form.Item style={{ width: 810 }}
                    name="postcode"
                    label={<span style={{ width: 261, display: 'flex', justifyContent: 'space-between' }}> <span>郵便番号 </span></span>}
                >
                    <><Input onBlur={handleBlur} value={postcode} onChange={handlePostcodeChange} />
                        {!postStatus ? <div style={{ position: 'absolute', zIndex: 1000, color: '#c9302c' }}>有効な郵便番号ではありません</div> : null}</>

                </Form.Item>
                <Form.Item style={{ width: 810, marginLeft: 270 }}
                    name="postcode" >
                    <div>
                        <a
                            style={{ background: '#c9302c', color: '#fff', fontWeight: 300, }}
                            target="_blank"
                            href="http://www.post.japanpost.jp/zipcode/" rel="noreferrer">郵便番号が分からない方はこちら
                        </a>
                        {/* <div style={{ fontSize: 12 }}>郵便番号が正しくありませんので,再入力してください。</div> */}
                    </div>
                </Form.Item>
            </div>

            <Form.Item style={{ width: 810 }}
                name="country"
                label={<span style={{ width: 261, display: 'flex', justifyContent: 'space-between' }}> <span>国 </span><img src="/icon-must.gif" /></span>}
            // rules={[{ required: true }]}
            >
                <Input disabled={true} value={'日本'} />
            </Form.Item>
            <Form.Item style={{ width: 810 }} rules={[{ required: true, message: '都道府県をお願いします。', whitespace: true }]}
                name="province"
                label={<span style={{ width: 250, display: 'flex', justifyContent: 'space-between' }}> <span>都道府県 </span><img src="/icon-must.gif" /></span>}
            >
                <Select>
                    {checkOutOptions.map((item, index: number) => {
                        return <Select.Option key={index} value={item.label}>{item.label}</Select.Option>
                    })}
                </Select>
            </Form.Item>

            <Form.Item style={{ width: 810 }}
                name="city" rules={[{ required: true, message: '市をお願いします。', whitespace: true }]}
                label={<span style={{ width: 250, display: 'flex', justifyContent: 'space-between' }}> <span>市 </span><img src="/icon-must.gif" /></span>}
            >
                <Select disabled={cityStatus}>
                    {cityData?.map((item, index: number) => {
                        return <Select.Option key={index} value={item}>{item}</Select.Option>
                    })}
                </Select>
            </Form.Item>
            <Form.Item style={{ width: 810 }}
                label={<span style={{ width: 250, display: 'flex', justifyContent: 'space-between' }}> <span>町 </span><img src="/icon-must.gif" /></span>}
                name="area" rules={[{ required: true, message: '町をお願いします。', whitespace: true }]}
            >
                {<Select disabled={areaStatus}>
                    {areaData?.map((item, index: number) => {
                        return <Select.Option key={index} value={item}>{item}</Select.Option>
                    })}
                </Select>}
            </Form.Item>

            <Form.Item style={{ width: 810 }}
                name="detailAddress"
                label={<span style={{ width: 250, display: 'flex', justifyContent: 'space-between' }}> <span>番地•マンション名 </span><img src="/icon-must.gif" /></span>}
                // <span>（例）6－01小林マンション201</span>
                rules={[{ required: true, message: '具体的な住所は空にしてはいけません!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item >
                <div style={{ width: 810, marginTop: 30 }}>
                    <Button type="primary" htmlType="submit" className={styles.btn}>
                        ＞ 内容変更を確認する
                    </Button>
                </div>
            </Form.Item>
            <Form.Item >
                <div style={{ width: 810, marginTop: 30 }}>
                    <Button onClick={() => { setOpen(true) }} className={styles.btn} style={{
                        backgroundColor: 'white', color: '#4d4d4d',
                        border: '1px solid #E3BA84',
                    }}>
                        ＞ 修正を放棄します
                    </Button>
                </div>
            </Form.Item>

        </Form >
            <Modal
                centered
                open={open}
                closeIcon={null}
                onOk={() => {
                    history.back();
                }}
                onCancel={hideModal} okText='修正放棄確定です'
                cancelText="修正を続けます" >
                <div style={{
                    textAlign: 'center', fontSize: 16, paddingBottom: 15,
                    fontWeight: 700,
                }}>今回の改正を断念することは確実でしょうか?</div>
            </Modal>
            <Modal
                centered
                open={openUpdate}
                closeIcon={null}
                onOk={
                    handleUpdate
                }
                onCancel={hideModal} okText='修正確定です'
                cancelText="あきらめます" >
                <div style={{
                    textAlign: 'center', fontSize: 16, paddingBottom: 15,
                    fontWeight: 700,
                }}>今回の改正を断念することは確実でしょうか?</div>
            </Modal>
        </>)
    )
};
export default App;