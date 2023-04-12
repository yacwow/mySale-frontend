import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Button, message } from 'antd';
import styles from './SellDetail.less'
import NumToString from '@/utils/NumToString';
//@ts-ignore
import $ from 'jquery'
import { Base64 } from 'js-base64';
import { request, useModel } from '@umijs/max';
//还要通知左边的图片，已经换了图片了，需要src  handleColorSelectPicture
interface Props {
    sellDetailData: { title: string, bestSellHref: string, oldPrice: number, price: number, newPrice: number, productId: number, comment: number, commentScore: number, sizeList: string[] };
    pictureSrc: { imgSrc: string, color: string }[],
    productHref: string,
    discount: boolean,
    secondOneHalf: boolean,
    timesale: boolean,
    setDeliveriedSrc: Dispatch<SetStateAction<string>>,
    wishList: { isLogin: boolean, userLove: boolean }
}

const App: React.FC<Props> = (props) => {
    const { isLogin } = useModel("isLogin")
    const { sellDetailData, pictureSrc, setDeliveriedSrc, timesale, secondOneHalf, productHref, wishList } = props;
    
    const { num, setNum, wishListNum, setWishListNum } = useModel('isLogin')
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
            type: 'success',
            content: '本商品をカートに追加することに成功しました',
            className: 'custom-class',
            style: {
                marginTop: '30vh',
            },
        });
    };
    const failed = () => {
        messageApi.open({
            type: 'warning',
            content: 'ネットワーク異常です',
            className: 'custom-class',
            style: {
                marginTop: '30vh',
            },
        });
    };
    //简单一点处理五星的问题
    let starStyle = "star" + sellDetailData.commentScore;
    const [colorSelectPicture, setColorSelectPicture] = useState(pictureSrc[0].color);//颜色选择，后续会有变动，和左边联动
    const [sizeSelectOption, setSizeSelectOption] = useState(sellDetailData.sizeList[0]);//大小选择
    // const[color,setColor]=useState('');
    const [wishlist, setWishlist] = useState<string>('/heart1.png');
    const [buyAmount, setBuyAmount] = useState(1);
    useEffect(() => {
        if (wishList.isLogin) {
            if (wishList.userLove) {
                setWishlist("/heart.png")
            } else {
                setWishlist('/heart1.png')
            }
        } else {
            let wishListStr = localStorage.getItem("wishList");
            if (wishListStr) {
                let newWishListStr = JSON.parse(wishListStr);
                if (Array.isArray(newWishListStr) && newWishListStr.includes(sellDetailData.productId)) {
                    setWishlist('/heart.png')
                }
            }
        }
    }, [])
    useEffect(() => {
        console.log(sizeSelectOption, colorSelectPicture)
    }, [colorSelectPicture, sizeSelectOption])
    //添加到购物车事件,把货物checkout的信息存入到localstorage中，弄一个modal显示已经收藏成功,把购买数字弄回1
    const handleAddToCart = () => {
        if (!isLogin) {
            let productList = localStorage.getItem("productList");
            if (productList) {
                let newProduct = JSON.parse(productList);
                let flag = true;
                console.log(sellDetailData)
                for (let i = 0; i < newProduct.length; i++) {
                    if (newProduct[i].productId === sellDetailData.productId && newProduct[i].size === sizeSelectOption && newProduct[i].color === colorSelectPicture) {
                        newProduct[i].amount += buyAmount;
                        flag = false
                    }
                }
                if (flag) {
                    newProduct.push({
                        productId: sellDetailData.productId,
                        color: colorSelectPicture,
                        size: sizeSelectOption,
                        amount: buyAmount,
                        imgSrc: pictureSrc[0].imgSrc,
                        timesale: timesale,
                        href: productHref,
                        secondHalf: secondOneHalf,
                        title: sellDetailData.title,
                        price: sellDetailData.newPrice,
                    });
                }
                localStorage.setItem("productList", JSON.stringify(newProduct));
            } else {
                let arr = [];
                arr.push({
                    productId: sellDetailData.productId,
                    color: colorSelectPicture,
                    size: sizeSelectOption,
                    amount: buyAmount,
                    imgSrc: pictureSrc[0].imgSrc,
                    timesale: timesale,
                    href: productHref,
                    secondHalf: secondOneHalf,
                    title: sellDetailData.title,
                    price: sellDetailData.newPrice,
                });
                localStorage.setItem("productList", JSON.stringify(arr));
            }
            setNum(num + buyAmount)
            setBuyAmount(1);
            success();//告知已经成功
        } else {
            //把productid，productsize color amount上传过去
            //除非token过期，不然不存在失败可能性，不设失败结果
            request("/api/secure/uploadProductListAfterLogin", {
                params: {
                    productId: sellDetailData.productId,
                    color: colorSelectPicture,
                    size: sizeSelectOption,
                    amount: buyAmount,
                }
            }).then(data => {
                if (data.result) {
                    setNum(num + buyAmount)
                    success();//告知已经成功
                    setBuyAmount(1);
                } else {
                    failed()
                }
            })
        }

    }
    //添加到wish列表
    const handleAddToWishlist = () => {
        //先验证是不是登录，如果登录了就改成红心/黑心并且上传给后端
        //购物车和wishlist都放localstorage，等要点击进入的时候验证token/登录
        if (!isLogin) {
            let wishListStr = localStorage.getItem("wishList");
            if (wishListStr) {
                let newWishListStr = JSON.parse(wishListStr);
                if (Array.isArray(newWishListStr)) {
                    if (newWishListStr.includes(sellDetailData.productId)) {
                        setWishListNum(wishList - 1);
                        newWishListStr = newWishListStr.filter((item) => {
                            return item !== sellDetailData.productId
                        })
                    } else {
                        setWishListNum(wishList + 1)
                        newWishListStr.push(sellDetailData.productId)
                    }
                    localStorage.setItem('wishList', JSON.stringify(newWishListStr))
                } else {
                    let newStr = [];
                    newStr.push(sellDetailData.productId)
                    setWishListNum(1)
                    localStorage.setItem('wishList', JSON.stringify(newStr))
                }
            } else {
                let newStr = [];
                newStr.push(sellDetailData.productId)
                localStorage.setItem('wishList', JSON.stringify(newStr))
                setWishListNum(1);
            }
        } else {
            if (wishlist === '/heart1.png') {
                //sellDetailData.productId 添加
                setWishListNum(wishListNum + 1);
                request(`/api/secure/updateWishListAfterLogin`, { params: { productId: sellDetailData.productId, delete: false } }).then(data => {
                    if (data.result) {

                    }
                })
            } else {//删除
                setWishListNum(wishListNum - 1);
                request(`/api/secure/updateWishListAfterLogin`, { params: { productId: sellDetailData.productId, delete: true } }).then(data => {
                    if (data.result) {

                    }
                })
            }
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        wishlist === '/heart1.png' ? setWishlist('/heart.png') : setWishlist('/heart1.png');

    }
    //颜色点击事件,还要加一个css样式
    const handleColorSelectPicture = (color: string, index: number) => {
        setColorSelectPicture(color)
        setDeliveriedSrc(pictureSrc[index].imgSrc);
        $('.pictureColorSelect img').css('border', '2px solid #d9d9d9')
        $('.pictureColorSelect img').eq(index).css('border', '2px solid #E3BA84')
    }
    //颜色选择组件
    const buildColorSelectPicture = () => {
        return pictureSrc.map((item, index: number) => {
            return (<label className={styles.radioInline} key={index}>
                <input type="radio"
                    onClick={() => { handleColorSelectPicture(item.color, index) }}
                    checked={colorSelectPicture === item.color ? true : false}
                    className={styles.skuColor} value={item.color}
                    readOnly />
                <span>
                    <img
                        src={item.imgSrc}
                        // alt={item.color.alt} title={item.color.alt}
                        width="62" height="72"
                        style={colorSelectPicture === item.color ? { border: '2px solid yellow' } : {}} />
                </span>

            </label>)
        })
    }

    //大小选择点击事件，加一个css样式
    const handleSizeSelectOption = (item: string, index: number) => {
        // console.log('in',$('.sizeSelect b').eq(index),index)
        setSizeSelectOption(item);
        $('.sizeSelect b').css('background', 'white');
        $('.sizeSelect b').eq(index).css('background', '#E3BA84')
    }
    //大小选择组件
    const buildSizeSelect = () => {
        console.log(sellDetailData)
        return sellDetailData.sizeList.map((item, index: number) => {
            return (
                <label className={styles.radioInline} key={index}>
                    <input type="radio"
                        readOnly onClick={() => handleSizeSelectOption(item, index)}
                        checked={sizeSelectOption === item ? true : false} className={styles.skuSize}
                    />
                    <span> <b className={styles.text} style={sizeSelectOption === item ? { background: '#E3BA84' } : {}}>{item}</b> </span>
                </label>
            )
        })
    }
    return (
        <div className={styles.container}>
            {contextHolder}
            <h2 className={styles.title}>{sellDetailData.title}</h2>
            <a href={sellDetailData.bestSellHref} className={styles.bestSellHref}
                style={{ marginTop: '10px', marginBottom: '6px', display: 'inline-block' }}>
                <span style={{ color: 'orange' }}>数量限定タイムセール開催中、こちらでチェック</span>
            </a>
            <p className={styles.oldPrice}><del>参考価格：<span>￥{NumToString(sellDetailData.oldPrice)} 税込</span></del></p>
            <p className={styles.price}>販売価格：<del>￥{NumToString(sellDetailData.price)} 税込</del></p>
            <p className={styles.restrict} style={{ color: '#B52929' }}>
                販売価格：
                <span className={styles.variatePrice} style={{ color: ' #B52929' }}>￥{NumToString(sellDetailData.newPrice)}</span> <b>税込</b>
            </p>
            <p style={{ paddingBottom: 30 }}>
                <span style={{ height: 25, float: 'left', color: 'black', fontSize: 10 }}>
                    ポイント
                    :5倍{Math.floor(sellDetailData.newPrice / 20)} </span>
                <img src="/norton.png"
                    style={{ height: 25, width: 'auto', margin: 0, float: 'right' }} />
            </p>
            <div className={styles.productId} >
                <h2>商品番号：<span>{sellDetailData.productId}</span></h2>
                <div className={styles.availability} >
                    <span>在庫有り</span>
                </div>
                <span className={`${styles.reviewsShow}  ${styles[starStyle]}`}></span>
                {/* 要点击到另一个界面 */}
                <a className={styles.reviewContext} >レビュー / <b>{sellDetailData.comment}</b> 件</a>
            </div>
            <div className={styles.optionElement} >
                <div className={`${styles.changeBox} pictureColorSelect`} >
                    <h2> カラー : <span className={styles.changeText} >{colorSelectPicture}</span></h2>
                    <div className={styles.options} >
                        {/* <label className={styles.radioInline} >
                            <input type="radio" data-option-id="292086" name="ProductOption[292086]"
                                className={styles.skuColor} value="969999" data-price_variate="+"
                                data-variate_value="0.00" data-gtm-form-interact-field-id="0" />
                            <span>
                                <img data-src={input.color.dataSrc}
                                    src={input.color.dataSrc}
                                    alt={input.color.alt} title={input.color.alt} width="62" height="72" />
                            </span>
                        </label> */}
                        {buildColorSelectPicture()}
                    </div>
                </div>
                <div className={styles.changeBox} >
                    <h2> サイズ : <span className={styles.changeText}></span></h2>
                    <div className={`${styles.sizeOptions} sizeSelect`} >
                        {/* (
                        <label className={styles.radioInline} key={index}>
                            <input type="radio" data-option-id="292087" name="ProductOption[292087]"
                                readOnly
                                onClick={() => handleSizeSelectOption(item, index)}
                                checked={sizeSelectOption === item ? true : false} className={styles.skuSize} value="970002" data-price_variate="+"
                                data-variate_value="0.00" />
                            <span> <b className={styles.text} >{item}</b> </span>
                        </label>
                        ) */}
                        {buildSizeSelect()}
                    </div>
                </div>

                <div className={styles.changeNum} >

                    <h2> 個数: <input type="text" className={styles.changeNumIpt} onChange={(e) => {
                        setBuyAmount(+e.target.value)
                    }} value={buyAmount} name="qty" /></h2>

                </div>
                <div className={styles.addToCart} >
                    <Button className={styles.Btn1} onClick={handleAddToCart}>
                        カートに入れる
                    </Button>
                    {/* <button className={styles.Btn} id="onAddToCart"
                        data-request-update="'common/shopping-cart':'.min_cart'"
                        data-request-success="afterAddCart(this,data)"
                        data-request-loading="#loading-sweeshop">
                        カートに入れる
                    </button> */}

                </div>
                <div id="btn-wish">
                    <Button className={styles.Btn2} onClick={handleAddToWishlist} >
                        <img
                            src={wishlist}
                            style={{ width: 25, display: 'inline-block', marginTop: 9, marginRight: 5 }} />
                        お気に入りに追加する<span style={{ paddingLeft: 10 }} >{wishListNum}</span>
                    </Button>
                    {/* <button className={styles.variatePrice} class="btn-add-favorite bd_none piwik_collect"
                        matomo-product-id="127029" data-request="onAddToWishlist"
                        data-request-data="key: 127029"
                        data-request-redirect="https://www.zasale.com/setup-p-127029.html">
                        <img src="https://www.zasale.com/themes/sweeshop-v1/assets/img/heart1.png"
                            style={{ width: 25, display: 'inline-block', marginTop: 9, marginRight: 5 }} />
                        <span>お気に入りに追加する</span>
                        <span className={styles.wishNum} >13</span>
                    </button> */}
                </div>
            </div>

        </div>
    )
};
export default App;