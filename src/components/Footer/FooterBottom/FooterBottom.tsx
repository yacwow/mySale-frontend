import React from 'react';
//@ts-ignore
import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from './FooterBottom.less';
interface Props {
    logo?: boolean,
}
const App: React.FC<Props> = (props) => {
    const { logo = true } = props;
    //发送请求，目前不知道要去哪里
    const handleClick = () => {
        //@ts-ignore
        let str = document.querySelectorAll('#bottomQuery')[0].value;
        console.log(str);

    }
    return (
        <>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.left}>
                        <p>
                            <input id="bottomQuery" type="text" />
                            <button type="button" onClick={handleClick}>検索</button>
                        </p>
                        <ul >
                            <li>
                                <a href=""><img src="/businessIcon/fb.jpg" alt="" /></a>
                            </li>
                            <li>
                                <a href=""><img src="/businessIcon/instagram.jpg" alt="" /></a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.aboutUs}> <div>
                            <dt>会社情報</dt>
                            <dd><a href={'/companyIntroduce?0'} >Zasaleについて</a></dd>
                            <dd><a href={'/companyIntroduce?1'} >運営会社情報</a></dd>
                            <dd><a href={'/companyIntroduce?2'} >ご利用規約</a></dd>
                            <dd><a href={'/companyIntroduce?3'} >特定商取引法表記</a></dd>
                            <dd><a href={'/companyIntroduce?4'} >プライバシーポリシー</a></dd>
                            <dd><a href={'/companyIntroduce?5'} >知的財産</a></dd>
                            <dd><a href={'/companyIntroduce?6'} >セキュリティ</a></dd>
                        </div>
                        </div>
                        <div className={styles.userInstr}>
                            <div>
                                <dt>ご利用ガイド</dt>
                                <dd><a href={'/companyIntroduce?7'} >お支払い方法</a></dd>
                                <dd><a href={'/companyIntroduce?8'} >配送送料について</a></dd>
                                <dd><a href={'/companyIntroduce?9'} >欠品・交換・返品ポリシー</a></dd>
                                <dd><a href={'/companyIntroduce?10'} >決済エラーの理由と解決方法</a></dd>
                            </div>
                        </div>
                        {logo ? <div className={styles.query}>
                            <dl>
                                <dt>お問い合わせ</dt>
                                <p  >
                                    <LazyLoadImage
                                        src="/businessIcon/bottomPicture.png"
                                        alt="" />
                                </p>
                            </dl>
                        </div> : null}

                    </div>
                </div>


            </div>
            <div className={styles.bottom}>
                <p>Copyright © 2023 ZASALE. All rights reserved.</p>
            </div>
        </>
    )
};
export default App;