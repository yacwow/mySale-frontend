import React from 'react';
import styles from './UserAddress.less'
import { NavLink } from '@umijs/max';
import { useModel } from '@umijs/max';
import { history } from '@umijs/max';
interface Props {
    invoiceList: any
}
//无论是修改还是删除 都没做
const App: React.FC<Props> = (props) => {
    const { invoiceList } = props;
    const { setNeedUpdateIndex, setInvoiceId } = useModel('invoiceAddress')
    const buildTr = () => {
        return invoiceList.map((item, index: number) => {
            return (
                <tr key={index}>
                    <td style={{ width: 600 }} >
                        <div className={styles.name}><b>{item.firstName},{item.lastName}</b></div>
                        <div className={styles.smallAddress}>
                            〒{item.postcode}&nbsp; {item.province}&nbsp;{item.city}&nbsp;{item.area};{item.detailAddress}
                        </div>
                        <div className={styles.tel}>{item.mobilePhone}</div>
                    </td>
                    <td className="actions" style={{ width: 150 }}>
                        <NavLink to="" onClick={async () => {
                            await setNeedUpdateIndex(index); await setInvoiceId(item.invoiceId);
                            localStorage.setItem("backUrl", window.location.href);
                            history.push("/updateOrAddAddress")
                        }}>
                            <span className={styles.change}>変更</span>
                        </NavLink>
                        <input type="submit" name="" data-request="onDeleteAddress" data-request-data="id: 147715" value="削除" className={styles.delete} />
                    </td>
                </tr>
            )
        })
    }
    return (
        <div className={styles.container}>
            <div className={styles.title}>アドレス帳</div>

            <div className={styles.btn}>
                <NavLink to="" onClick={async () => {
                    await setNeedUpdateIndex(-1); await setInvoiceId(-1);
                    localStorage.setItem("backUrl", window.location.href);
                    history.push("/updateOrAddAddress")
                }}>
                    <img alt="マイページトップ" src="/btn-add-new-address.jpg" />
                </NavLink>
            </div>

            <div className={styles.address}>一ツ橋（１丁目）; タケヤマ, 270-1089</div>
            <table>
                <tbody>
                    {/* <tr>
                        <td style={{ width: 600 }} >
                            <div className={styles.name}><b>chenhao,カタカナ</b></div>
                            <div className={styles.smallAddress}>〒1000003 東京都 千代田区 一ツ橋（１丁目）; タケヤマ, 270-1089</div>
                            <div className={styles.tel}>081-1354-5526</div>
                        </td>
                        <td className="actions" style={{ width: 150 }}>
                            <NavLink to="https://www.zasale.com/account/order/update-shipping-address/147715" >
                                <span className={styles.change}>変更</span>
                            </NavLink>
                            <input type="submit" name="" data-request="onDeleteAddress" data-request-data="id: 147715" value="削除" className={styles.delete} />
                        </td>
                    </tr> */}
                    {buildTr()}
                </tbody>
            </table>

        </div>
    )
};
export default App;