import { history, request } from '@umijs/max';
import { NavLink } from '@umijs/max';
import { Button, Form, Input, Modal, message } from 'antd';
import React, { useState } from 'react';
import styles from './UserInfo.less';
interface Props {
  name?: string;
  nickName?: string;
  email?: string;
}

const formItemLayout = {
  labelCol: {
    span: 9,
  },
  wrapperCol: {
    span: 15,
  },
};

const App: React.FC<Props> = (props) => {
  const { name, email } = props;
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false); //MODAL
  const [params, setParams] = useState();
  const [messageApi, contextHolder] = message.useMessage();
  let firstName, lastName;

  const success = () => {
    messageApi.open({
      type: 'success',
      content: '修正成功です',
      className: 'custom-class',
      style: {
        marginTop: '40vh',
      },
    });
  };
  const newworkError = () => {
    messageApi.open({
      type: 'error',
      content: '登録が必要です',
      className: 'custom-class',
      style: {
        marginTop: '40vh',
      },
    });
  };
  if (name?.includes(',')) {
    firstName = name.split(',')[0];
    lastName = name.split(',')[1];
  } else {
    firstName = name;
  }
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    setParams(values);
    setOpen(true);
  };
  //模态框关闭
  const hideModal = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    setOpen(false);
  };
  const handleUpdateUserInfo = () => {
    //发送request，那边如果email和密码一样，就重置并告知正确，不然返回信息告诉他密码不对，不能修改
    // request("")
    // window.alert('test')
    request('/api/secure/updateUserBasicInfo', { params }).then((data) => {
      setOpen(false);
      if (data.result) {
        if (data.code === 400) {
          //没登录呢
          newworkError();
          localStorage.setItem('backUrl', '/account/userInfo');
          setTimeout(() => {
            history.push('/login');
          }, 2000);
          return;
        } else {
          success();
          form.resetFields();
        }
      } else {
        //没登录呢
        newworkError();
        localStorage.setItem('backUrl', '/account/userInfo');
        setTimeout(() => {
          history.push('/login');
        }, 2000);
      }
    });
  };

  return (
    <>
      {contextHolder}
      <Form
        {...formItemLayout}
        form={form}
        initialValues={{ firstName: firstName, lastName: lastName, email }}
        name="register"
        onFinish={onFinish}
        className={styles.container}
        scrollToFirstError
      >
        <Form.Item>
          <div className={styles.main}>会員基本情報の確認･変更</div>
        </Form.Item>
        <Form.Item>
          <p className={styles.lead}>
            登録内容を変更する場合は、該当項目を修正し「登録内容を確認する」ボタンをクリックしてください。
          </p>
        </Form.Item>
        <Form.Item>
          <div style={{ fontSize: 16, color: '#ccc' }}>
            <div className="chasier_label">メールアドレス</div>
            <div>{email}</div>
          </div>
        </Form.Item>
        <Form.Item
          name="firstName"
          labelAlign="left"
          colon={false}
          label={
            <span
              style={{
                width: 270,
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              {' '}
              <span>お名前 漢字 全角（姓と名） </span>
              <img src="/icon-must.gif" />
            </span>
          }
          rules={[
            {
              required: true,
              message: 'お名前を入力願います。',
              whitespace: true,
            },
          ]}
        >
          <Input placeholder="（例）田中洋子" />
        </Form.Item>
        <Form.Item
          name="lastName"
          labelAlign="left"
          colon={false}
          label={
            <span
              style={{
                width: 270,
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              {' '}
              <span>お名前 カナ 全角（姓と名） </span>
              <img src="/icon-must.gif" />
            </span>
          }
          rules={[
            {
              required: true,
              message: 'カタカナでお願いします。',
              whitespace: true,
            },
          ]}
        >
          <Input placeholder="（例）タナカ　ヨウコ" />
        </Form.Item>
        <Form.Item
          name="newPassword"
          labelAlign="left"
          colon={false}
          label={
            <span
              style={{
                width: 270,
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              {' '}
              <span>新しいパスワード </span>
              <img src="/icon-must.gif" />
            </span>
          }
          rules={[
            {
              required: true,
              message: '新しいパスワードをお願いします。',
            },
          ]}
          hasFeedback
        >
          <Input placeholder="半角英数6～20文字" />
        </Form.Item>
        <Form.Item
          name="confirm"
          labelAlign="left"
          colon={false}
          label={
            <span
              style={{
                width: 270,
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              {' '}
              <span>新しいパスワードを確認する </span>
              <img src="/icon-must.gif" />
            </span>
          }
          dependencies={['newPassword']}
          hasFeedback
          rules={[
            {
              required: true,
              message: '新しいパスワードの再入力をお願いします。',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('newPassword') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('2回パスワードが違いました'));
              },
            }),
          ]}
        >
          <Input placeholder="半角英数6～20文字" />
        </Form.Item>
        <Form.Item>
          <div style={{ width: 810, marginTop: 30 }}>
            <Button type="primary" htmlType="submit" className={styles.btn}>
              ＞ 規則に同意して、確認画面へ進む
            </Button>
          </div>
        </Form.Item>
        <Form.Item>
          <div style={{ width: 810, marginTop: 30 }}>
            <NavLink
              to="/account/dashboard"
              className={styles.btn}
              style={{
                backgroundColor: 'white',
                color: '#4d4d4d',
                border: '1px solid #E3BA84',
              }}
            >
              ＞ マイページトップ
            </NavLink>
          </div>
        </Form.Item>
      </Form>
      <Modal
        centered
        open={open}
        closeIcon={null}
        onOk={handleUpdateUserInfo}
        onCancel={hideModal}
        okText="修正確定です"
        cancelText="修正を放棄します"
      >
        <div
          style={{
            textAlign: 'center',
            fontSize: 16,
            paddingBottom: 15,
            fontWeight: 700,
          }}
        >
          基本的なユーザー情報を修正しますか?
        </div>
      </Modal>
    </>
  );
};

export default App;
