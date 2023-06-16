// import { ActionType } from '@ant-design/pro-components';
import React, { Dispatch, SetStateAction, useState } from 'react';
import styles from './DashBoard.less';
import { NavLink, useModel } from '@umijs/max';
import { Modal, message } from 'antd';
import { history } from '@umijs/max';
interface Props {
  buyTimes?: number;
  userScore: number;
  setTitle: Dispatch<SetStateAction<string>>;
}
const App: React.FC<Props> = (props) => {
  const { userScore, setTitle } = props;
  const { invoiceNum, setWishListNum, setInvoiceNum, setNum, setIsLogin } =
    useModel('isLogin');
  const [messageApi, contextHolder] = message.useMessage();
  const [open, setOpen] = useState(false); //模态框的开关

  //模态框关闭
  const hideModal = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    setOpen(false);
  };

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'ログアウトできました',
      className: 'custom-class',
      style: {
        marginTop: '40vh',
      },
    });
  };
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLogin(false);
    success();
    setNum(0);
    setInvoiceNum(0);
    setWishListNum(0);
    history.push('/home');
  };
  return (
    <>
      <ul className={styles.board}>
        <li>
          <div className={styles.dashTitle}>
            <NavLink
              to="/account/favoriteProduct"
              onClick={() => {
                setTitle('お気に入りアイテム一覧');
              }}
            >
              お気に入りアイテム一覧
            </NavLink>
          </div>
          <div className={styles.dashCont}>
            <p>登録したお気に入りアイテムのご注文、確認や解除ができます。</p>
          </div>
        </li>
        <li>
          <div className={styles.dashTitle} style={{ position: 'relative' }}>
            <NavLink
              to="/account/shoppingHistory"
              onClick={() => {
                setTitle('注文履歴');
              }}
            >
              注文履歴
              <span className={styles.cartNum} style={{ top: 22, left: 105 }}>
                {invoiceNum}
              </span>
            </NavLink>
          </div>
          <div className={styles.dashCont}>
            <p>過去のご注文内容の確認ができます。</p>
          </div>
        </li>

        <li>
          <div className={styles.dashTitle}>
            <NavLink
              to="/account/pointer"
              onClick={() => {
                setTitle('ネットポイント');
              }}
            >
              ネットポイント
              <span style={{ color: '#f00' }}>{userScore}</span>
            </NavLink>
          </div>
          <div className={styles.dashCont}>
            <p>利用可能なネットポイントと、利用状況の確認ができます。</p>
          </div>
        </li>
        <li>
          <div className={styles.dashTitle}>
            <NavLink
              to="/account/userInfo"
              onClick={() => {
                setTitle('会員基本情報の確認･変更');
              }}
            >
              会員基本情報の確認･変更
            </NavLink>
          </div>
          <div className={styles.dashCont}>
            <p>住所やメールアドレスなど会員基本情報の確認や変更ができます。</p>
          </div>
        </li>

        <li>
          <div className={styles.dashTitle}>
            <NavLink to="/account/passwordRecovery">パスワードの変更</NavLink>
          </div>
          <div className={styles.dashCont}>
            <p>パスワードの変更ができます。</p>
          </div>
        </li>
        <li>
          <div className={styles.dashTitle}>
            <NavLink
              to="/account/userAddress"
              onClick={() => {
                setTitle('アドレス帳');
              }}
            >
              アドレス帳
            </NavLink>
          </div>
          <div className={styles.dashCont}>
            <p>商品をお届けする配送先のリストです。</p>
            <p>確認や変更、新しいお届け先の登録ができます。</p>
          </div>
        </li>
        <li>
          <div className={styles.dashTitle}>
            <NavLink
              to=""
              onClick={() => {
                setOpen(true);
              }}
            >
              ログアウト
            </NavLink>
          </div>
        </li>
      </ul>

      {contextHolder}
      <Modal
        centered
        open={open}
        closeIcon={null}
        onOk={handleLogout}
        onCancel={hideModal}
        okText="脱退確定です"
        cancelText="登録を維持します"
      >
        <div
          style={{
            textAlign: 'center',
            fontSize: 16,
            paddingBottom: 15,
            fontWeight: 700,
          }}
        >
          ログアウト確定ですか?
        </div>
      </Modal>
    </>
  );
};
export default App;
