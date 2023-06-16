import React from 'react';
import { NavLink, useModel } from '@umijs/max';
import styles from './LeftList.less';

const App: React.FC = () => {
  const { setTitle } = useModel('account');
  const { userName } = useModel('isLogin');

  return (
    <div>
      <div className={styles.sideMenu}>
        {userName ? (
          <div className={styles.userName}>
            <span>{userName}カタカナ</span>様
          </div>
        ) : (
          <div className={styles.userName}>
            <span>{userName}カタカナ</span>様
          </div>
        )}
        <ul>
          <li
            className={
              window.location.pathname === '/account/dashboard'
                ? styles.active
                : ''
            }
          >
            <NavLink
              to="/account/dashboard"
              onClick={() => {
                setTitle('マイページトップ');
              }}
            >
              マイページトップ
            </NavLink>
          </li>
          <li
            className={
              window.location.pathname === '/account/favoriteProduct'
                ? styles.active
                : ''
            }
          >
            <NavLink
              to="/account/favoriteProduct"
              onClick={() => {
                setTitle('お気に入りアイテム一覧');
              }}
            >
              お気に入りアイテム一覧
            </NavLink>
          </li>
          <li
            className={
              window.location.pathname === '/account/shoppingHistory'
                ? styles.active
                : ''
            }
          >
            <NavLink
              to="/account/shoppingHistory"
              onClick={() => {
                setTitle('注文履歴');
              }}
            >
              注文履歴
            </NavLink>
          </li>
          <li
            className={
              window.location.pathname === '/account/pointer'
                ? styles.active
                : ''
            }
          >
            <NavLink
              to="/account/pointer"
              onClick={() => {
                setTitle('リクエスト履歴');
              }}
            >
              リクエスト履歴
            </NavLink>
          </li>
          <li
            className={
              window.location.pathname === '/account/userInfo'
                ? styles.active
                : ''
            }
          >
            <NavLink
              to="/account/userInfo"
              onClick={() => {
                setTitle('会員基本情報の確認･変更');
              }}
            >
              会員基本情報の確認･変更
            </NavLink>
          </li>
          <li
            className={
              window.location.pathname === '/account/passwordRecovery'
                ? styles.active
                : ''
            }
          >
            <NavLink to="/account/passwordRecovery">パスワードの変更</NavLink>
          </li>
          <li
            className={
              window.location.pathname === '/account/userAddress'
                ? styles.active
                : ''
            }
          >
            <NavLink
              to="/account/userAddress"
              onClick={() => {
                setTitle('アドレス帳');
              }}
            >
              アドレス帳
            </NavLink>
          </li>
          <li
            className={
              window.location.pathname === '/account/userGetPointerMethod'
                ? styles.active
                : ''
            }
          >
            <NavLink
              to="/account/userGetPointerMethod"
              onClick={() => {
                setTitle('クーポン/ポイント/毎日のサインチェック');
              }}
            >
              クーポン/ポイント/毎日のサインチェック
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default App;
