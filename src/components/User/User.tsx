import React, { useEffect, useState } from 'react';
import { NavLink } from '@umijs/max';
// import { history } from 'umi';
import styles from './User.less'
import LeftList from './LeftList';
import DashBoard from './DashBoard';
import FavoriateProduct from './FavoriteProduct';
import ShoppingHistory from './ShoppingHistory';
import Pointer from './Pointer';
import UserInfo from './UserInfo';
import UserAddress from './UserAddress';
import UserGetPointerMethod from './UserGetPointerMethod';
import InvoiceComp from './InvoiceComp';

//在这里就可以把所有的用户信息请求回来，除了具体多少购买记录，其实也可以弄回来，毕竟买的多的才影响服务器效率
const couponList = [{ discountDetail: 'test', code: 12345, condition: 'greater than 10000', date: '2020-0203' }, { discountDetail: 'test', code: 12345, condition: 'greater than 10000', date: '2020-0203' },
{ discountDetail: 'test', code: 12345, condition: 'greater than 10000', date: '2020-0203' }, { discountDetail: 'test', code: 12345, condition: 'greater than 10000', date: '2020-0203' },]
const pointerList = [{ pointerDetail: 'new', description: '+10000', date: '2020-0203' }, { pointerDetail: 'new', description: '+10000', date: '2020-0203' },
{ pointerDetail: 'new', description: '+10000', date: '2020-0203' }, { pointerDetail: 'new', description: '+10000', date: '2020-0203' }]
const App: React.FC = () => {
    const [title, setTitle] = useState('マイページトップ');
    const [comp, setComp] = useState('dashboard')
    // const pathToName = {
    //     dashboard: 'マイページトップ',
    //     favoriateProduct: 'お気に入りアイテム一覧',
    //     shoppingHistory: ' 注文履歴',
    //     pointer: 'リクエスト履歴',
    //     userInfo: '会員基本情報の確認･変更',
    //     userAddress: 'アドレス帳',
    //     userGetPointerMethod: ' クーポン/ポイント/毎日のサインチェック'
    // }
    useEffect(() => {
        console.log('in22222')
        let path
        try {
            path = window.location.search.split('&')[0].split('=')[1];
        } catch (e) {
        } finally {
            if(path===undefined){
                setComp('dashboard')
            }else{
                setComp(path);
            }
        }



    }, [])

    return (

        <div className={styles.container}>
            <div className={styles.navigate}>
                <span><NavLink to="/">ホーム</NavLink></span>
                <span>&gt;</span>
                <span>{title}</span>
            </div>
            <h2>{title}</h2>
            <div className={styles.float}>
                <LeftList name='haochen' setComp={setComp} setTitle={setTitle}></LeftList>
                {comp === 'dashboard' ? <DashBoard userScore={1000} setComp={setComp} setTitle={setTitle} /> : null}
                {comp === 'favoriteProduct' ? <FavoriateProduct /> : null}
                {comp === 'shoppingHistory' ? <ShoppingHistory setComp={setComp} setTitle={setTitle} /> : null}
                {comp === 'pointer' ? <Pointer canUsePoint={1000} usedPoint={1000} updateTime="2023-02-26 10:07:57" vipLevel={10} unCheckedPoint={1234} /> : null}
                {comp === 'userInfo' ? <UserInfo nickName='haha' name='hehe' email="haochen" /> : null}
                {comp === 'userAddress' ? <UserAddress /> : null}
                {comp === 'userGetPointerMethod' ? <UserGetPointerMethod couponList={couponList} pointerList={pointerList} canUsePoint={1000} /> : null}
                {comp === 'InvoiceComp' ? <InvoiceComp/> : null}
            
            
            </div>

        </div>

    )
};
export default App;