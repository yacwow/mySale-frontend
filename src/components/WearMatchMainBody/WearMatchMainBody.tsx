import React from 'react';
//@ts-ignore
import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from './WearMatchMainBody.less'
interface Props {
}

let wearMatchData = [
    {
        comeBanner: {
            href: '',
            imgSrc: '/img/wearMatch1.jpg',
        },
        coordinateProject: {
            pictureInfo: [
                {
                    pid: 12345,
                    type: 'セットアップ',
                    imgSrc: '/img/recommendPicture1.jpg',
                    href: '',
                    price: 3334
                },
                {
                    pid: 12346,
                    type: 'アウター',
                    imgSrc: '/img/recommendPicture2.jpg',
                    href: '',
                    price: 3334
                }
            ],
            totalPrice: 5555,
        }
    },
    {
        comeBanner: {
            href: '',
            imgSrc: '/img/wearMatch1.jpg',
        },
        coordinateProject: {
            pictureInfo: [
                {
                    pid: 12345,
                    type: 'セットアップ',
                    imgSrc: '/img/recommendPicture1.jpg',
                    href: '',
                    price: 3334
                },
                {
                    pid: 12346,
                    type: 'アウター',
                    imgSrc: '/img/recommendPicture2.jpg',
                    href: '',
                    price: 3334
                }
            ],
            totalPrice: 5555,
        }
    },
    {
        comeBanner: {
            href: '',
            imgSrc: '/img/wearMatch1.jpg',
        },
        coordinateProject: {
            pictureInfo: [
                {
                    pid: 12345,
                    type: 'セットアップ',
                    imgSrc: '/img/recommendPicture1.jpg',
                    href: '',
                    price: 3334
                },
                {
                    pid: 12346,
                    type: 'アウター',
                    imgSrc: '/img/recommendPicture2.jpg',
                    href: '',
                    price: 3334
                }
            ],
            totalPrice: 5555,
        }
    },
    {
        comeBanner: {
            href: '',
            imgSrc: '/img/wearMatch1.jpg',
        },
        coordinateProject: {
            pictureInfo: [
                {
                    pid: 12345,
                    type: 'セットアップ',
                    imgSrc: '/img/recommendPicture1.jpg',
                    href: '',
                    price: 3334
                },
                {
                    pid: 12346,
                    type: 'アウター',
                    imgSrc: '/img/recommendPicture2.jpg',
                    href: '',
                    price: 3334
                }
            ],
            totalPrice: 5555,
        }
    },
    {
        comeBanner: {
            href: '',
            imgSrc: '/img/wearMatch1.jpg',
        },
        coordinateProject: {
            pictureInfo: [
                {
                    pid: 12345,
                    type: 'セットアップ',
                    imgSrc: '/img/recommendPicture1.jpg',
                    href: '',
                    price: 3334
                },
                {
                    pid: 12346,
                    type: 'アウター',
                    imgSrc: '/img/recommendPicture2.jpg',
                    href: '',
                    price: 3334
                }
            ],
            totalPrice: 5555,
        }
    },

]
const App: React.FC<Props> = (props) => {
    //@ts-ignore
    const handleClick = (items) => {
        //@ts-ignore
        let searchItem = items.map((item) => {
            return item.pid;
        })
        console.log(searchItem)//然后跳转到结账页面，带着参数过去
    }
    const buildMainBody = () => {
        return wearMatchData.map((item, index: number) => {
            return (<div key={index} style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                <div className={styles.comeBanner}>
                    <a href={item.comeBanner.href}>
                        <LazyLoadImage src={item.comeBanner.imgSrc} alt="" />
                    </a>
                </div>
                <div className={styles.coordinate}>
                    <div className={styles.title}>
                        <h3>COORDINATE ITEM</h3>
                    </div>
                    <div className={styles.display}>
                        {item.coordinateProject.pictureInfo.map((item, index: number) => {
                            return <div key={index} className={styles.onePic}>
                                <a href={item.href}>
                                    <LazyLoadImage src={item.imgSrc} alt="" />
                                    <div className={styles.bottom}>
                                        <span>{item.type}</span><span>￥{item.price}</span>
                                    </div>
                                </a>
                            </div>
                        })}
                        <div className={styles.cdBn} >
                            <p className={styles.title} >
                                2点とも<br />カートに入ると
                            </p>
                            <p className={styles.discount}>￥558円OFF</p>
                            <div className={styles.purchase}   >
                                <div className={styles.line} ></div>
                                <p className={styles.price} >￥6,417</p>
                                <p className={styles.tag}></p>
                                <div className={styles.purchaseBtn} onClick={() => handleClick(item.coordinateProject.pictureInfo)} data-ids="123479,126796" data-bonus_type="percent" data-collocation_id="7" data-collocation_items_id="28" data-discount="8">
                                    <span>今すぐ購入</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            )
        })
    }
    return (
        <div >
            <a href="/time-sale-c-58.html">
                <img style={{ display: 'block', margin: '0 auto' }} src="/timesale.webp" />
            </a>
            <div className="conditions_div">
                <p style={{ fontSize: 28, textAlign: 'center' }}>
                    春の“IT ITEM”名品リスト</p>
                <div className="condition_p" style={{ textAlign: 'center' }}>
                    <p >心弾む春の新作コーディネートをご紹介します。</p>
                </div>
            </div>

            {buildMainBody()}

        </div>
    )
};
export default App;

