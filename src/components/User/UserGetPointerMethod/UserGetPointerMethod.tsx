import { formatTimeFromStr } from '@/utils/format';
import React from 'react';
import styles from './UserGetPointerMethod.less'
interface Props {
    couponList:{coupontype:string,codenumber:number,applyamount:string,expiredate:string,startdate:string}[];
    pointerList:{pointdescription:string,pointamount:string,getdate:string}[];
    canUsePoint:number|undefined;
    deduction:number|undefined;
}

const App: React.FC<Props> = (props) => {
    const {couponList,pointerList,canUsePoint,deduction}=props
    const buildCouponList=()=>{
        return couponList.map((item,index)=>{
            return (<tr key={index}>
                <td>{item.coupontype}</td><td>{item.codenumber}</td><td>{'大于'}{item.applyamount}</td><td>
                    {item.startdate.split("T")[0]}{'-'}{item.expiredate.split("T")[0]}</td>
            </tr>)
        })
    }
    const buildPointerList=()=>{
        return pointerList.map((item,index)=>{
            return (<tr key={index}>
                <td>{item.pointdescription}</td><td>+{item.pointamount}</td><td>{formatTimeFromStr(item.getdate) }</td>
            </tr>)
        })
    }
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h3 >クーポン/ポイント/毎日のサインチェック</h3>
                <h4><label>毎日のサインチェック、10ポイントを獲得します（１ポイント＝１円）：</label>
                </h4>
            </div>
            <div className={styles.panel}>
                <div className={styles.heading}>ご利用可能クーポン</div>
                <table  className={styles.table1 }>
                    <tbody><tr><th>割引内容</th><th>コード</th><th>利用条件</th><th>有効期間</th></tr>
                    {buildCouponList()}
                    </tbody></table>
            </div>
            <div className={styles.panel}>
                <div className={styles.heading}>獲得ポイント</div>
                <ul className="list-group">
                    <li className="list-group-item">ご利用可能ポイント：<span className="red"><b id="sumActivePoints">{deduction}</b></span></li>
                    <li className="list-group-item">有効待ちポイント：<span>{canUsePoint}</span></li>
                </ul>
            </div>
            <div className={styles.panel}>
                <div className={styles.heading}>ポイント履歴</div>
                <table  className={styles.table2 }>
                    <thead>
                        <tr>
                            <th>ポイント種類</th>
                            <th>内容</th>
                            <th>日付</th>
                        </tr>
                    </thead>
                    <tbody>
                        {buildPointerList()}
                    </tbody>
                </table>
            </div>
        </div>
    )
};
export default App;