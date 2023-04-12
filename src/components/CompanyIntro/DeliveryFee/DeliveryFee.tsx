import React from 'react';
import styles from './DeliveryFee.less'

const App: React.FC = () => {
    return (
        <section className={styles.container}>
            <p>当ショップには、全ての商品は国際郵便の配送となります。ご了承くださいませ。</p>

            <p>海外仕入れの関係で、お支払い頂いた後のご注文は直ちに配送手配が行われるため、
                <br/>すでに準備中のご注文につきまして、お客様の都合によりキャンセルの場合、一部の手数料（仕入先からの取り寄せ料金）を引いてから返金する場合がございます。<span>ご了承ください。</span></p>

            <p>国際郵便のため、土日祝日を除いて、出荷前の準備期間は約３～10日間がかかり、配送期間は約５～１０日前後ぐらいかかります。ご理解頂けますようお願いいたします。</p>

            <p>また、追跡番号を通して、商品の配送状況や配送業者の連絡先をご確することができます。もしくは、お問合わせメールや電話にて弊社までご確認くださいませ。</p>

            <p>ご注文いただいた商品が多数ある場合に商品を分けて配送する場合がございますが、その際は弊社がその分の送料を負担いたしますのでご安心ください。</p>
            <article data-clipboard-cangjie="[&quot;root&quot;,{&quot;copyFrom&quot;:1007547796},[&quot;p&quot;,{&quot;ind&quot;:{&quot;leftChars&quot;:0},&quot;numPr&quot;:{&quot;id&quot;:&quot;0&quot;,&quot;level&quot;:0},&quot;rPr&quot;:{&quot;fonts&quot;:{&quot;ascii&quot;:&quot;宋体&quot;,&quot;cs&quot;:&quot;宋体&quot;,&quot;eastAsia&quot;:&quot;宋体&quot;,&quot;hAnsi&quot;:&quot;宋体&quot;,&quot;hint&quot;:&quot;default&quot;},&quot;sz&quot;:12,&quot;szUnit&quot;:&quot;pt&quot;}},[&quot;span&quot;,{&quot;data-type&quot;:&quot;text&quot;},[&quot;span&quot;,{&quot;fonts&quot;:{&quot;ascii&quot;:&quot;宋体&quot;,&quot;cs&quot;:&quot;宋体&quot;,&quot;eastAsia&quot;:&quot;宋体&quot;,&quot;hAnsi&quot;:&quot;宋体&quot;,&quot;hint&quot;:&quot;default&quot;},&quot;sz&quot;:12,&quot;szUnit&quot;:&quot;pt&quot;,&quot;data-type&quot;:&quot;leaf&quot;},&quot;配送遅延のお知らせ&quot;]]],[&quot;p&quot;,{&quot;ind&quot;:{&quot;leftChars&quot;:0},&quot;numPr&quot;:{&quot;id&quot;:&quot;0&quot;,&quot;level&quot;:0},&quot;rPr&quot;:{&quot;fonts&quot;:{&quot;ascii&quot;:&quot;宋体&quot;,&quot;cs&quot;:&quot;宋体&quot;,&quot;eastAsia&quot;:&quot;宋体&quot;,&quot;hAnsi&quot;:&quot;宋体&quot;,&quot;hint&quot;:&quot;default&quot;},&quot;sz&quot;:12,&quot;szUnit&quot;:&quot;pt&quot;}},[&quot;span&quot;,{&quot;data-type&quot;:&quot;text&quot;},[&quot;span&quot;,{&quot;fonts&quot;:{&quot;ascii&quot;:&quot;宋体&quot;,&quot;cs&quot;:&quot;宋体&quot;,&quot;eastAsia&quot;:&quot;宋体&quot;,&quot;hAnsi&quot;:&quot;宋体&quot;,&quot;hint&quot;:&quot;default&quot;},&quot;sz&quot;:12,&quot;szUnit&quot;:&quot;pt&quot;,&quot;data-type&quot;:&quot;leaf&quot;},&quot;お客様へ、 この度、当サイトの利用につきまして、ご不便をかけたことをお詫びいたします。新型コロナウイルスによる肺炎が広がっている問題で、アジア各地の仕入れ先が休業が続けており、商品の発送が遅延する見込みとなってしまいました。お客さまにはご迷惑をお掛けいたしますが、何卒ご了承いただきますようお願い申し上げます。&quot;]]]]">

                <p>配送遅延のお知らせ</p>

                <p><span>お客様へ、&nbsp;この度、当サイトの利用につきまして、ご不便をかけたことをお詫びいたします。新型コロナウイルスによる肺炎が広がっている問題で、アジア各地の仕入れ先が休業が続けており、商品の発送が遅延する見込みとなってしまいました。お客さまにはご迷惑をお掛けいたしますが、何卒ご了承いただきますようお願い申し上げます。</span></p>
            </article>

            <table border={1} cellSpacing="0">
                <tbody>
                    <tr>
                        <td valign="middle" width="240">

                            <p style={{textAlign:'center'}}><strong>配送方法</strong></p>
                        </td>
                        <td valign="middle" width="245">

                            <p style={{textAlign:'center'}}><strong>配送期間</strong></p>
                        </td>
                        <td valign="middle" width="206">

                            <p style={{textAlign:'center'}}><strong>送料</strong></p>
                        </td>
                    </tr>
                    <tr>
                        <td valign="middle" width="240">

                            <p style={{textAlign:'center'}}>経済性速達便（9999円以上送料無料）</p>
                        </td>
                        <td valign="middle" width="245">

                            <p style={{textAlign:'center'}}>5〜10日営業日</p>
                        </td>
                        <td valign="middle" width="206">

                            <p style={{textAlign:'center'}}>￥953</p>
                        </td>
                    </tr>
                    <tr>
                        <td valign="middle" width="240">

                            <p style={{textAlign:'center'}}>EMS国際郵便配送</p>
                        </td>
                        <td valign="middle" width="245">

                            <p style={{textAlign:'center'}}>4〜6日営業日</p>
                        </td>
                        <td valign="middle" width="206">

                            <p style={{textAlign:'center'}}>￥1,598</p>
                        </td>
                    </tr>
                    <tr>
                        <td valign="middle" width="240">

                            <p style={{textAlign:'center'}}>Express配送</p>
                        </td>
                        <td valign="middle" width="245">

                            <p style={{textAlign:'center'}}>2〜5日営業日</p>
                        </td>
                        <td valign="middle" width="206">

                            <p style={{textAlign:'center'}}>￥1,980</p>
                        </td>
                    </tr>
                </tbody>
            </table>

            <p>
                <br/>
            </p>

            <p>※返品する前、必ずカスタマーサポートにご連絡ください。事前に連絡いただいていない場合、返品を受付できません。予めご了承ください。</p>
        </section>
    )
};
export default App;