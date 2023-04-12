import React, { Dispatch, SetStateAction } from 'react';
import { NavLink } from '@umijs/max';
import styles from './LeftList.less'
interface Props {
    name: string;
    setComp:Dispatch<SetStateAction<string>>;
    setTitle:Dispatch<SetStateAction<string>>
}
const App: React.FC<Props> = (props) => {
    const { name,setComp,setTitle} = props;
    return (
        <div>     
            <div className={styles.sideMenu}>
                <div className={styles.userName}><span>{name}カタカナ</span>様</div>
                <ul>
                    <li ><NavLink to="/account?key=dashboard"   onClick={()=>{setComp('dashboard');setTitle('マイページトップ')}} >マイページトップ</NavLink></li>
                    <li ><NavLink to='/account?key=favoriateProduct'   onClick={()=>{setComp('favoriateProduct');setTitle('お気に入りアイテム一覧')}} >お気に入りアイテム一覧</NavLink></li>
                    <li ><NavLink to='/account?key=shoppingHistory'   onClick={()=>{setComp('shoppingHistory');setTitle('注文履歴')}} >注文履歴</NavLink></li>
                    <li ><NavLink to='/account?key=pointer'  onClick={()=>{setComp('pointer');setTitle('リクエスト履歴')}} >リクエスト履歴</NavLink></li>
                    <li ><NavLink to='/account?key=userInfo'  onClick={()=>{setComp('userInfo');setTitle('会員基本情報の確認･変更')}} >会員基本情報の確認･変更</NavLink></li>
                    <li ><NavLink to="/account/passwordRecovery" >パスワードの変更</NavLink></li>
                    <li ><NavLink to='/account?key=userAddress'  onClick={()=>{setComp('userAddress');setTitle('アドレス帳')}} >アドレス帳</NavLink></li>
                    <li ><NavLink to="/account?key=userGetPointerMethod"  onClick={()=>{setComp('userGetPointerMethod');setTitle('クーポン/ポイント/毎日のサインチェック')}} >クーポン/ポイント/毎日のサインチェック</NavLink></li>
                </ul>
            </div>
        </div>
    )
};
export default App;