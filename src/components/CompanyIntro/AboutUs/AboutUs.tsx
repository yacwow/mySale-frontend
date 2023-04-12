import React from 'react';
import styles from './AboutUs.less'
interface Props {
}
const App: React.FC<Props> = (props) => {
    return (
        <section className={styles.container}>
            <p style={{color:'#ba8b4e',fontSize:18}}>運営会社情報</p>

            <table border={1} cellSpacing={0} style={{marginRight: 'calc(30%)', width: '70%'}}>
                <tbody>
                    <tr>
                        <td style={{width: '25.2679%'}} valign="middle" width="145">

                            <p style={{textAlign:'center'}}>ドメイン</p>
                        </td>
                        <td style={{width: '74.5535%'}} valign="top" width="422">
                            <a href="https://sweeshop.com/"></a><a href="https://sweeshop.com/">https://www.zasale.com/</a>
                            <br/>
                        </td>
                    </tr>
                    <tr>
                        <td style={{width: '25.2679%'}} valign="middle"width="145">

                            <p style={{textAlign:'center'}}>会社名</p>
                        </td>
                        <td style={{width: '74.5535%'}} valign="top" width="422">麗具科技株式会社
                            <br/>
                        </td>
                    </tr>
                    <tr>
                        <td style={{width: '25.2679%'}} valign="middle" width="145">

                            <p style={{textAlign:'center'}}>住所</p>
                        </td>
                        <td style={{width: '74.5535%'}} valign="top" width="422">(407)台中市西屯區文心町二段66号3棟
                            <br/>
                        </td>
                    </tr>
                    <tr>
                        <td style={{width: '25.2679%'}} valign="middle" width="145">

                            <p style={{textAlign:'center'}}>設立</p>
                        </td>
                        <td style={{width: '74.5535%'}} valign="top" width="422">2018/9/1
                            <br/>
                        </td>
                    </tr>
                    <tr>
                        <td style={{width: '25.2679%'}} valign="middle" width="145">

                            <p style={{textAlign:'center'}}>資本金</p>
                        </td>
                        <td style={{width: '74.5535%'}} valign="top"width="422">115万円
                            <br/>
                        </td>
                    </tr>
                    <tr>
                        <td style={{width: '25.2679%'}} valign="middle" width="145">

                            <p style={{textAlign:'center'}}>事業内容</p>
                        </td>
                        <td style={{width: '74.5535%'}} valign="top" width="422">レディースファッション
                            <br/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
};
export default App;