import React from 'react';
import styles from './Pointer.less'
interface Props {
    canUsePoint: number,
    usedPoint: number,
    updateTime: string, vipLevel: number, unCheckedPoint: number
}
const App: React.FC<Props> = (props) => {
    const { canUsePoint, usedPoint, updateTime, vipLevel, unCheckedPoint } = props;
    return (
        <div className={styles.container}>
            <div className={styles.title}>お買物履歴詳細</div>
            <div >
                <p>ネットポイントは、 のお買物で１ポイント＝１円としてご利用いただけます。</p>
                <div className={styles.main} >
                    <h3>マイポイント</h3>


                    利用可能ポイント：{canUsePoint}  
                    {/* <a style={{ color: '#000', paddingLeft: 10 }} href="">ポイント利用のご案内</a> */}
                    <br />
                    保留中ポイント：+{unCheckedPoint}<br />
                    VIPレベル: <span style={{ marginLeft: 10, color: '#f40' }}>{vipLevel}</span>
                    <table width="100%" >
                        <thead>
                            <tr>
                                <th style={{ width: '38%', borderRight: '1px solid #eaeaea' }}>ポイント獲得</th>
                                <th style={{ borderRight: '1px solid #eaeaea' }}>利用可能ポイント</th>
                                <th style={{ borderRight: '1px solid #eaeaea' }}>ポイント利用</th>
                                <th>更新日期</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ borderRight: '1px solid #eaeaea' }}>
                                    新規会員プレゼント
                                </td>
                                <td style={{ borderRight: '1px solid #eaeaea' }}>
                                    {canUsePoint}-利用可
                                </td>
                                <td style={{ borderRight: '1px solid #eaeaea' }}>
                                    {usedPoint}
                                </td>
                                <td>
                                    {updateTime}
                                </td>
                            </tr>
                        </tbody>
                        <tfoot></tfoot>
                    </table>
                </div>
            </div>
        </div>
    )
};
export default App;