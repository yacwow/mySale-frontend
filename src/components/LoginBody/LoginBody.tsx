import React, { useEffect } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { message } from 'antd';
import styles from './LoginBody.less';
import { history, NavLink, request } from '@umijs/max';
import { Base64 } from 'js-base64';
import { useModel } from '@umijs/max';
interface Props {}
const App: React.FC<Props> = (props) => {
  const [messageApi, contextHolder] = message.useMessage();
  const { isLogin, setNum, setWishListNum, setInvoiceNum, setIsLogin } =
    useModel('isLogin');
  const { setName } = useModel('account');
  console.log(isLogin); //如果已经登录了就跳转到home并提示呗，能操作本页面的都是没登录的时候
  const alreadyLogin = () => {
    messageApi.open({
      type: 'success',
      content: '登録済みです',
      className: 'custom-class',
      style: {
        marginTop: '40vh',
      },
    });
  };
  if (isLogin) {
    alreadyLogin();
    let backUrl = localStorage.getItem('backUrl');
    console.log(backUrl);
    if (backUrl) {
      localStorage.removeItem('backUrl');
      history.push(backUrl);
    } else {
      history.push('/home');
    }
  }
  const [form] = Form.useForm();

  const loginError = () => {
    messageApi.open({
      type: 'error',
      content: 'メールアドレスやパスワードの間違いです。',
      className: 'custom-class',
      style: {
        marginTop: '40vh',
      },
    });
  };
  const loginSuccess = () => {
    messageApi.open({
      type: 'success',
      content: 'ログインできました。',
      className: 'custom-class',
      style: {
        marginTop: '40vh',
      },
    });
  };
  //登录页这边
  const onFinish = (values: any) => {
    // console.log('in')
    let email = values.email.trim();
    let password = values.password.trim();

    let params = { email, password };
    request('/api/login', {
      params,
    }).then(async (data) => {
      console.log(data);
      if (data.result) {
        //成功了
        await setIsLogin(true);
        try {
          //把localstorage里面的productlist和wishlist都上传了
          let productList = localStorage.getItem('productList');
          if (productList) {
            productList = JSON.parse(productList);
            await request('/api/secure/uploadProductListForLogin', {
              params: productList,
            }).then((data) => {
              console.log(data);
            });
          }
          let wishList = localStorage.getItem('wishList');
          if (wishList) {
            wishList = JSON.parse(wishList);
            await request('/api/secure/uploadWishListForLogin', {
              params: wishList,
            }).then((data) => {
              console.log(data);
            });
          }
          //把localstorage里面的productlist和wishlist清空
          localStorage.removeItem('productList');
          localStorage.removeItem('wishList');
          await request(
            '/api/secure/queryNumberOfWishAndProductAndInvoiceNum',
          ).then((data) => {
            if (data.result) {
              setNum(data.data.productNum);
              setWishListNum(data.data.wishNum);
              setInvoiceNum(data.data.invoiceNum);
            }
          });
          let backUrl = localStorage.getItem('backUrl');
          if (backUrl) {
            localStorage.removeItem('backUrl');
            history.push(backUrl);
          } else {
            history.push('/home');
          }
        } catch (e) {
          //localstorage出问题了，提示重新选取
          window.alert('ホームページ異常です,商品をやり直します');
          localStorage.removeItem('productList');
          localStorage.removeItem('orderData');
          history.push('/home');
        }
      } else {
        loginError();
      }
    });
  };

  // const onFinishFailed = (errorInfo: any) => {
  //   console.log('Failed:', errorInfo);
  // };
  const success = () => {
    messageApi.open({
      type: 'success',
      content: '登録できました。',
      className: 'custom-class',
      style: {
        marginTop: '40vh',
      },
    });
  };
  const error = () => {
    messageApi.open({
      type: 'error',
      content: '該当メールアドレスは既に登録済みです。',
      className: 'custom-class',
      style: {
        marginTop: '40vh',
      },
    });
  };

  //注册--验证信息没问题，但是可能email重复
  const onFinishRegister = (values: any) => {
    request('/api/register', {
      params: {
        email: values.email.trim(),
        password: values.password.trim(),
        firstName: values.firstName.trim(),
        lastName: values.lastName.trim(),
      },
    }).then(async (data) => {
      if (data.result) {
        if (data.result) {
          //成功了
          try {
            // loginSuccess()
            setIsLogin(true);
            let backUrl = localStorage.getItem('backUrl');
            console.log(backUrl);
            if (backUrl) {
              history.push(backUrl);
            } else {
              history.push('/home');
            }
            //把localstorage里面的productlist和wishlist都上传了
            let productList = localStorage.getItem('productList');
            if (productList) {
              productList = JSON.parse(productList);
              await request('/api/secure/uploadProductListForLogin', {
                params: productList,
              }).then((data) => {
                console.log(data);
              });
            }
            let wishList = localStorage.getItem('wishList');
            if (wishList) {
              wishList = JSON.parse(wishList);
              await request('/api/secure/uploadWishListForLogin', {
                params: wishList,
              }).then((data) => {
                console.log(data);
              });
            }
            //把localstorage里面的productlist和wishlist清空
            localStorage.removeItem('productList');
            localStorage.removeItem('wishList');
            request(
              '/api/secure/queryNumberOfWishAndProductAndInvoiceNum',
            ).then((data) => {
              if (data.result) {
                setNum(data.data.productNum);
                setWishListNum(data.data.wishNum);
                setInvoiceNum(data.data.invoiceNum);
              }
            });
          } catch (e) {
            //localstorage出问题了，提示重新选取
            window.alert('ホームページ異常です,商品をやり直します');
            localStorage.removeItem('productList');
            localStorage.removeItem('orderData');
            history.push('/home');
          }
        } else {
          loginError();
        }
      } else {
        error();
      }
    });
    console.log('Success:', values);
  };
  //注册失败
  // const onFailedRegister = (errorInfo: any) => {
  //   console.log('Failed:', errorInfo);
  // };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>新規会員登録</h2>
        <h3>会員ログイン</h3>
      </div>
      <div className={styles.login}>
        <div className={styles.left}>
          <p className={styles.title}>会員登録</p>
          <Form
            className={styles.myForm}
            form={form}
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="ログインID"
              name="email"
              rules={[
                {
                  type: 'email',
                  message: 'これは有効なメールアドレスではありません',
                },
                {
                  required: true,
                  message: 'メールのアドレスを入力していただきます。',
                },
              ]}
            >
              <Input placeholder="メールアドレス（必須）" />
            </Form.Item>

            <Form.Item
              label="パスワード"
              name="password"
              rules={[
                { required: true, message: 'パスワードは空にできません。' },
              ]}
            >
              <Input.Password placeholder="パスワード（必須）" />
            </Form.Item>

            <NavLink
              to="/account/passwordRecovery"
              style={{ width: 150, height: 20, padding: 0, margin: '0 auto' }}
            >
              パスワードをお忘れの方
            </NavLink>
            <div className={styles.line}></div>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={styles.formButton}
              >
                ＞ ログイン
              </Button>
            </Form.Item>
          </Form>
          <div className={styles.thirdParty}>
            <div className={styles.thirdPartyTips}>
              <div style={{ fontSize: 16, fontWeight: 600 }}>
                外部サービスでログイン・新規会員登録
              </div>
              <div style={{ fontSize: 12 }}>
                以下のサイトの登録情報を利用してお買い物ができます
              </div>
            </div>
            <Button className={styles.fbBtn}>
              <a href="">Facebookでログイン</a>
            </Button>

            <Button className={styles.gooBtn}>
              <a href="">Googleでログイン</a>
            </Button>
            <Button className={styles.lineBtn}>
              <a href="">Lineでログイン</a>
            </Button>
          </div>
        </div>

        <div className={styles.right}>
          <p className={styles.title}>新規登録（無料）</p>
          <p className={styles.desc}>
            {' '}
            ※新規登録で 1000 ポイントプレゼント、すぐ使える！
          </p>
          <p className={styles.desc}>
            {' '}
            ※メンバー登録をしない場合、ポイントが貯まりません。
          </p>
          <Form
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 11 }}
            className={styles.myForm2}
            labelAlign="left"
            onFinish={onFinishRegister}
          >
            {contextHolder}
            <Form.Item
              label={
                <div className={styles.mustImg}>
                  <span>メールアドレス</span>{' '}
                  <img src="/businessIcon/icon-must.gif" alt="" />
                </div>
              }
              name="email"
              rules={[
                { type: 'email', message: '間違ったフォーマットです。' },
                {
                  required: true,
                  message: '電子メールは空にしてはいけません!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label={
                <div className={styles.mustImg}>
                  <span>パスワード</span>{' '}
                  <img src="/businessIcon/icon-must.gif" alt="" />
                </div>
              }
              name="password"
              rules={[
                { required: true, message: 'パスワードを入力してください!' },
              ]}
            >
              <Input.Password placeholder="パスワード（必須）" />
            </Form.Item>
            <Form.Item
              label={
                <div className={styles.mustImg}>
                  <span>パスワード（確認）</span>{' '}
                  <img src="/businessIcon/icon-must.gif" alt="" />
                </div>
              }
              name="passwordCheck"
              rules={[
                {
                  required: true,
                  message: '新しいパスワードの再入力をお願いします。',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error('2回パスワードが違いました'),
                    );
                  },
                }),
              ]}
            >
              <Input.Password placeholder="パスワード確認（必須）" />
            </Form.Item>

            <Form.Item
              label={
                <div className={styles.mustImg}>
                  <span>お名前</span>{' '}
                  <img src="/businessIcon/icon-must.gif" alt="" />
                </div>
              }
              name="firstName"
              rules={[{ required: true, message: '名前を入力してください!' }]}
            >
              <Input placeholder="お名前（必須）" />
            </Form.Item>
            <Form.Item
              label={
                <div className={styles.mustImg}>
                  <span>フリガナ</span>{' '}
                  <img src="/businessIcon/icon-must.gif" alt="" />
                </div>
              }
              name="lastName"
              rules={[{ required: true, message: 'カタカナでお願いします!' }]}
            >
              <Input placeholder="フリガナ（必須）" />
            </Form.Item>
            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(new Error('受け入れるべき協定')),
                },
              ]}
            >
              <Checkbox className={styles.agreement}>
                同意する
                <a href="/terms-w.html" target="_blank">
                  《ご利用規約》
                </a>
                と
                <a href="/privacy-policy-w.html" target="_blank">
                  《プライバシーポリシーやセキュリティ》
                </a>
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <Button
                className={styles.registerBtn}
                type="primary"
                htmlType="submit"
              >
                規約に同意して、確認画面へ進む
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default App;
