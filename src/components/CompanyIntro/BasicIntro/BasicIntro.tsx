import React from 'react';
import styles from './BasicIntro.less'
interface Props {
}
const App: React.FC<Props> = (props) => {
    return (
        <section className={styles.container} >
            <p style={{fontSize:14}}><strong>Zasale</strong><strong>について</strong></p>

            <p>Zasaleはレディースファッションアイテムの専門オンライン通販サイトです。お客様に最高のショッピング体験を提供するため全力を尽くします。
                <br/>Zasale<span>は20代～40代の方に向け、お洋服からシューズ、バッグ、その他にもさまざまな最新トレンドアイテムを提供しています。普段着として使えるのはもちろん、パーティー、旅行などの特別な日に使える洋服もご用意しております。</span>
                    <br/>御客様が喜んでいただきのために、いい商品と完璧なサービスをいつもより心がけております。</p>

                    <p style={{fontSize:14}}><strong>Zasale</strong><strong>会員（無料）について</strong></p>

                    <p>Zasaleではショッピングの際に会員登録（無料）が必要です。</p>

                    <p>もちろん更新料、入会金、会費等の一切は無料です。</p>

                    <ul>
                        <li>ショッピングの前に会員登録をしておくと、ショッピングの度に、お届け先住所の入力などの手間が省けます。</li>
                        <li>PCでご登録いただいた場合でも、スマートフォンから同じメールアドレスとパスワードでショッピングが可能です。</li>
                        <li>会員登録をされる前に、必ず「ご利用規約」「プライバシーポリシー」をお読みになり、ご承諾頂きご登録ください。</li>
                    </ul>

                    <p style={{fontSize:14}}><strong>輸入関税</strong></p>

                    <p>Zasaleから商品を買うと「輸入」になるので、税関を通るときに関税がかかる恐れがあります。</p>

                    <p>関税及びその他の税が発生した場合は、お客様のご負担となります。</p>

                    <p>当店では商品が発送されるまでをサポートしており、税関手続きに対する責任を請け負うことはできません。</p>

                    <p>予めご了承くださいますようお願い申し上げます。</p>

                    <p style={{fontSize:14}}><strong>セキュリティ</strong></p>

                    <p>当サイトは、個人情報を入力する必要なすべての画面にSSL（Secure Socket Layer）という暗号化技術を使用し、個人情報が外部の第三者に通信傍受できないように、万全の体制をとっています。</p>

                    <p>SSLは、各クレジットカード会社が推奨するインターネットにおける暗号化技術です。対応ブラウザでは、リアルタイムに暗号化されているメッセージを確認することができますので、安心して個人情報を送信いただけます。</p>

                    <p><strong>【ファイヤーウォールの設置】</strong></p>

                    <p>当社のウェブサイトのすべてのサーバーは、第三者からの不正アクセスを防ぐ目的でファイヤーウォールを設置しています。ファイヤーウォールは、インターネットを行き来する通信データを監視するもので、不正なデータのやり取りを検知した際は、データの流出を防ぐ防御壁の役割を果たします。</p>

                    <p>当社は、個人情報の保護のため万全のセキュリティ体制を整えておりますが、セキュリティの対策措置によって安全が完全に保証されるものではありません。 『ウィルス感染』による個人情報の流出被害や他の外部サービスから取得した個人情報（メールアドレス・パスワード等）を用いた『なりすましによる不正アクセス』による犯罪被害を防ぐには、企業だけではなくお客様ご自身による対策も必要です。お客様は以下の項目にご留意いただき、安全なインターネット生活をお楽しみください。コンピューターウィルスの感染にご注意ください。コンピューターウイルスは、悪意を持った人が作成した不正なプログラムです。多くのはインターネット通信を介して感染し、他人のパソコンから情報を盗んで、持ち主の意志に反して第三者への攻撃を自動でおこなう動作です。</p>

                    <p>『自分にコンピューターウイルスは関係ないよ』の無関心は危険です。ウィルス感染を防ぐため、下の5項目をご注意ください。</p>

                    <ol>
                        <li>ウィルス駆除ソフトを利用し、常に最新の状態にしてチェックをおこなう</li>
                        <li>Windowsの更新プログラムを都度 実施し、常に最新の状態を維持する</li>
                        <li>Flash Playerも、常に最新の状態で利用する</li>
                        <li>覚えのないメールや、不明なURL・添付ファイルは開かない</li>
                        <li>怪しいホームページは閲覧しない</li>
                    </ol>
                </section>
                )
};
                export default App;