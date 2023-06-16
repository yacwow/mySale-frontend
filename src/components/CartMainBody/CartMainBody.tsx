import React, { ChangeEvent, useEffect, useState } from 'react';
import styles from './CartMainBody.less';
import { message, Select } from 'antd';
import $ from 'jquery';
import NumToString from '@/utils/NumToString';
import { history, NavLink, request, useModel } from '@umijs/max';
import EmptyCart from '../EmptyCart';
interface Props {
  limit?: number;
  timelySale: any;
  normalDiscount: any;
  originData: any;
  luckyBag: any;
}

let selectOption = new Array(99).fill(0).map((item, index: number) => {
  return { value: index + 1, label: index + 1 };
});
// console.log(selectOption)
const App: React.FC<Props> = (props) => {
  const {
    limit = 0,
    originData,
    timelySale = [],
    normalDiscount = [],
    luckyBag = {},
  } = props;
  const { setNum, num } = useModel('isLogin'); //cart数目变化
  const [total, setTotal] = useState(0); //总账
  const [point, setPoint] = useState(0); //用户输入了多少积分用掉，有上限，也有下线
  const [timelyCouponId, setTimelyCouponId] = useState(0); //限时活动的coupon 0为没有，1为第一个2为第二个
  const [timelyDiscount, setTimelyDiscount] = useState(0); //限时活动减的额度
  const [discount, setDiscount] = useState(0); //平时满减
  const [data, setData] = useState(originData); //所有展示需要的信息 传入了
  const [secondHalfDiscount, setSecondHalfDiscount] = useState(0); //第二件半价的折扣
  const [totalAfterDiscount, setTotalAfterDiscount] = useState(0); //总折扣后价格
  const [paymentAmount, setPaymentAmount] = useState(0); //最后要付的钱,还不确定有没有其他的折扣
  const [targetDeliveryfee, setTargetDeliveryfee] = useState(9999); //距离不收快递费的值差多少
  const [deliveryFee, setDeliveryFee] = useState(953);
  // const [recommend, setRecommend] = useState(0);//提示离下一个满减还有多远
  const [messageApi, contextHolder] = message.useMessage();
  const deleteSuccess = () => {
    messageApi.open({
      type: 'success',
      content: '本商品の削除に成功しました',
      className: 'custom-class',
      style: {
        marginTop: '30vh',
      },
    });
  };
  const updateSuccess = () => {
    messageApi.open({
      type: 'success',
      content: '数量修正成功です',
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
  //所有页面价格积分的计算，每次换了数量都要算
  const calculate = () => {
    let totalAmount = 0;
    let secondHalfAmount = 0;
    data.map((item: any) => {
      totalAmount += item.price * item.amount;
      if (item.secondOneHalf && item.amount > 1) {
        secondHalfAmount += Math.floor(item.price / 2);
      }
      return null;
    });
    setSecondHalfDiscount(secondHalfAmount);
    setTotal(totalAmount);
    let timelyCouponAmount = 0;
    let j = 0;
    for (; j < timelySale.length; j++) {
      if (timelySale[j].target > totalAmount) {
        break;
      }
    }
    setTimelyCouponId(j);
    if (j === 0) {
      setTimelyDiscount(0);
    }
    if (j > 0) {
      timelyCouponAmount = timelySale[j - 1].amount;
      setTimelyDiscount(timelyCouponAmount);
    }
    let normalDiscountAmount = 0;
    let i = 0;
    for (; i < normalDiscount[0].length; i++) {
      // console.log('in',i)
      if (normalDiscount[0][i] > totalAmount) {
        break;
      }
    }
    // console.log(i)
    if (i > 0) {
      // setRecommend(i - 1);
      normalDiscountAmount = normalDiscount[1][i - 1];
      setDiscount(normalDiscount[1][i - 1]);
    } else {
      setDiscount(0);
    }
    let totalAfterDiscountAmount =
      totalAmount -
      secondHalfAmount -
      normalDiscountAmount -
      timelyCouponAmount;
    setTotalAfterDiscount(totalAfterDiscountAmount);
    setPaymentAmount(totalAfterDiscountAmount + deliveryFee);
  };
  //删除某一项衣服
  const handleDelete = (productId: number, color: string, size: string) => {
    let newData = data.filter((item) => {
      if (
        item.productId === productId &&
        item.color === color &&
        item.size === size
      ) {
        return;
      }
      return item;
    });
    console.log(newData);
    setData(newData);
    setNum(num - 1);
    localStorage.setItem('cartList', JSON.stringify(newData));
    //请求后端删除某个产品
    let params = { productId, color, size };

    request('/api/secure/deleteCartListProduct', { params }).then((data) => {
      if (data.result) {
        deleteSuccess();
      } else {
        failed();
      }
    });
  };
  //修改购买数量
  const handleSelectChange = (
    e: any,
    productId: number,
    color: string,
    size: string,
  ) => {
    let newData = data.filter((item) => {
      if (
        item.productId === productId &&
        item.color === color &&
        item.size === size
      ) {
        item.amount = e;
      }
      return item;
    });
    localStorage.setItem('cartList', JSON.stringify(newData));
    setData(newData);
    //请求后端修改某个产品数量
    let params = { productId, color, size, amount: e };

    request('/api/secure/updateCartListProduct', { params }).then((data) => {
      if (data.result) {
        updateSuccess();
      } else {
        failed();
      }
    });
  };

  const handleCoupon = (val: number, limit: number, e: any) => {
    //到时候添个message提示
    if (val <= 0) {
      e.value = null;
      return;
    }
    if (limit < val) {
      e.value = null;
      return;
    }
    setPoint(val);
  };
  const storeCalcDate = () => {
    if (total === 0) return;
    let countNum = 0;
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      countNum += element.amount;
    }
    const orderData = {
      countNum: countNum,
      getPoint: Math.floor(total / 20),
      total: total,
      secondHalfDiscount: secondHalfDiscount,
      discount: discount,
      timelyDiscount: timelyDiscount,
      paymentAmount: paymentAmount,
      usedPoint: point,
      deliveryAmount: deliveryFee,
    };
    //这个一定要加密！！！
    localStorage.setItem('orderData', JSON.stringify(orderData));
    //有时候localstorage没保存
    setTimeout(() => {
      history.push('/checkout');
    }, 20);
    // request('/api/secure/updatePaymentAmountFromUserSide', {
    //   params: orderData,
    // }).then((data) => {
    //   console.log(data);
    //   if (data.result) {
    //     //成功存入
    //   } else {
    //     //
    //   }
    // });
    // console.log(JSON.stringify(orderData));
  };
  //衣服展示
  const buildTr = () => {
    return data.map((item: any, index: number) => {
      return (
        <tr key={item.productId + index}>
          <td>
            <div className={styles.cartItem}>
              <a href={item.href} style={{ display: 'flex' }}>
                <div className={styles.item}>
                  <img src={item.imgSrc} alt="" />
                </div>
                <div className={styles.itemData}>
                  {item.timesale ? (
                    <span className={styles.timesale}>TIMESALE</span>
                  ) : null}
                  <p className={styles.title}>{item.title}</p>
                  <p className={styles.txtGray}>カラー:{item.color}</p>
                  <p className={styles.txtGray}>サイズ:{item.size}</p>
                </div>
              </a>
            </div>
          </td>
          <td>
            <span className={styles.price}>￥{item.price}</span>
          </td>
          <td>
            {item.productId !== 8888888 ? (
              <div className={styles.itemAmount}>
                <Select
                  //@ts-ignore
                  defaultValue={{ value: item.amount, label: item.amount }}
                  style={{ width: 120 }}
                  onChange={(e) =>
                    handleSelectChange(e, item.productId, item.color, item.size)
                  }
                  options={selectOption}
                />
                <input
                  type="button"
                  className={styles.cartNumBtnDel}
                  value="× 削除"
                  onClick={() =>
                    handleDelete(item.productId, item.color, item.size)
                  }
                  style={{ color: '#101010', backgroundColor: '#E3BA84' }}
                />
              </div>
            ) : (
              <div style={{ textAlign: 'center' }}>1</div>
            )}
          </td>
          <td>
            <span className={styles.unitPrice}>
              ￥{item.price * item.amount}
            </span>
          </td>
          <td style={{ fontSize: 12 }}>
            {Math.floor((item.price * item.amount) / 20)}
          </td>
        </tr>
      );
    });
  };
  let trList;
  trList = buildTr();
  //timediscount输入框旁边的适用
  const timeSaleInput = () => {
    let value = document.getElementById('couponInputValue')?.value;
    if (value !== undefined) {
      value = value.trim();
    }
    for (let i = 0; i < timelySale.length; i++) {
      console.log(timelySale[i].couponNum == value);
      if (timelySale[i].couponNum == value && total > timelySale[i].target) {
        console.log('in2222');
        setTimelyCouponId(i + 1);
        setTimelyDiscount(timelySale[i].amount);
        return;
      }
    }
  };
  useEffect(() => {
    console.log('in4');
    calculate();
  }, []);
  //total的改变导致可能送的福袋不同，data的改变 我这个setnum有点问题，初始值是程序启动的时候传过来的，所以会先显示一个数字然后等这里渲染了在显示+3
  useEffect(() => {
    console.log('in3');
    if (9999 - totalAfterDiscount > 0) {
      setDeliveryFee(953);
    } else {
      setDeliveryFee(0);
    }
    setTargetDeliveryfee(9999 - totalAfterDiscount);
    let temp = data.filter((item) => {
      return item.productId !== 8888888;
    });
    let totalNum = 0;
    for (let i = 0; i < temp.length; i++) {
      totalNum += temp[i].amount;
    }
    if (totalAfterDiscount >= 10000) {
      temp.push(luckyBag);
      totalNum += 1;
      if (totalAfterDiscount >= 20000) {
        temp.push(luckyBag);
        totalNum += 1;
      }
      if (totalAfterDiscount >= 30000) {
        temp.push(luckyBag);
        totalNum += 1;
      }
    }
    setNum(totalNum);
    // setData(temp);
    localStorage.setItem('cartList', JSON.stringify(temp));
  }, [totalAfterDiscount]);
  useEffect(() => {
    console.log('in2');
    setTotalAfterDiscount(
      total - point - discount - secondHalfDiscount - timelyDiscount,
    );
    setPaymentAmount(
      total -
        point -
        discount -
        secondHalfDiscount -
        timelyDiscount +
        deliveryFee,
    );
  }, [point, timelyCouponId, discount, secondHalfDiscount]);

  useEffect(() => {
    trList = buildTr();
    console.log('in1');
    calculate();
  }, [data]);
  console.log(data);
  return (
    <>
      {data.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className={styles.container}>
          {contextHolder}
          <div className={styles.header}>
            <span>
              <a href="/">ホーム</a>
            </span>
            <span>&gt;</span>
            <span>ショッピングカート</span>
          </div>
          <div className={styles.body}>
            <table>
              <thead>
                <tr>
                  <th colSpan={1} className={styles.goods} rowSpan={1}>
                    商品名
                  </th>
                  <th colSpan={1} className={styles.price} rowSpan={1}>
                    単価（税込）
                  </th>
                  <th colSpan={1} className={styles.qty} rowSpan={1}>
                    数量
                  </th>
                  <th colSpan={1} className={styles.subtotal} rowSpan={1}>
                    小計（税込）
                  </th>
                  <th
                    colSpan={1}
                    className={styles.center}
                    rowSpan={1}
                    style={{ width: '10%' }}
                  >
                    ポイント獲得
                  </th>
                </tr>
              </thead>
              <tbody>{data.length >= 1 ? trList : null}</tbody>
            </table>
          </div>
          <div className={styles.bottom}>
            <div className={styles.cartCollaterals}>
              <div className={styles.colSm6}>
                <h3 style={{ borderBottom: 'none' }}>
                  <span style={{ fontWeight: 'normal' }}>
                    獲得ポイント：
                    <b className={styles.price}>{Math.floor(total / 20)}</b>
                  </span>
                </h3>
                <h2 style={{ fontSize: 14, marginBottom: 10 }}>値引き方式：</h2>
                <div
                  style={{ border: '1px solid #eaeaea' }}
                  className={styles.discountCoupon}
                >
                  <div
                    style={{ borderBottom: '1px solid #eaeaea', padding: 15 }}
                  >
                    <p style={{ marginBottom: 10 }}>
                      クーポンをご利用の方はクーポンコードを下にご入力ください
                    </p>
                    {timelySale
                      ? timelySale.map((item: any, index: number) => {
                          if (index + 1 === timelyCouponId) {
                            return (
                              <p key={index}>
                                <em style={{ paddingRight: 10 }}>
                                  {item.couponNum} (-￥
                                  {NumToString(item.amount)})
                                </em>

                                <a
                                  onClick={() => {
                                    setTimelyCouponId(0);
                                    setTimelyDiscount(0);
                                  }}
                                  style={{
                                    textDecoration: 'underline',
                                    color: '#ff0000',
                                  }}
                                >
                                  削除
                                </a>
                              </p>
                            );
                          }
                          return null;
                        })
                      : null}
                    {!timelyCouponId ? (
                      <>
                        <input
                          type="text"
                          className={styles.inputText}
                          placeholder="クーポンコードを入力してくだい"
                          id="couponInputValue"
                        />{' '}
                        <button
                          className={styles.couponBtn}
                          type="button"
                          onClick={timeSaleInput}
                        >
                          <span>適用</span>
                        </button>
                      </>
                    ) : null}
                  </div>

                  <div style={{ padding: 15 }}>
                    <p
                      className={styles.formCaption}
                      style={{ marginBottom: 10 }}
                    >
                      利用可能ポイント:{limit}
                      <br />
                      ご利用ポイント最大限定:
                      {Math.max(limit, Math.floor(total / 20))}（ご注文金額5%）
                    </p>
                    {point === 0 ? null : (
                      <p>
                        <em style={{ paddingRight: 10 }}>
                          今回利用ポイント{point}，残りのポイント
                          {limit - point}
                        </em>
                        <a
                          onClick={() => setPoint(0)}
                          style={{
                            textDecoration: 'underline',
                            color: '#ff0000',
                          }}
                        >
                          削除
                        </a>
                      </p>
                    )}
                    {point ? null : (
                      <>
                        {' '}
                        <input
                          type="number"
                          min="1"
                          max={limit}
                          name="rewardpoints"
                          id="coupon_code"
                          className={styles.inputText}
                          placeholder="ポイント数を入力してください"
                        />
                        <button
                          className={styles.couponBtn}
                          type="submit"
                          onClick={() => {
                            handleCoupon(
                              +$('#coupon_code')[0].value,
                              $('#coupon_code')[0].getAttribute('max'),
                              $('#coupon_code')[0],
                            );
                          }}
                        >
                          <span>適用</span>
                        </button>
                      </>
                    )}
                  </div>
                </div>

                <div style={{ marginTop: 10 }}>
                  <div className={styles.couponList}>
                    {timelySale
                      ? timelySale.map((item: any, index: number) => {
                          return (
                            <label
                              key={index}
                              className={`${styles.couponLabel} ${
                                total > item.target ? styles.active : ''
                              }`}
                              onClick={() => {
                                if (total > item.target) {
                                  setTimelyCouponId(index + 1);
                                  setTimelyDiscount(item.amount);
                                }
                              }}
                            >
                              <div style={{ fontSize: 24 }}>
                                ￥
                                <span style={{ fontSize: 36 }}>
                                  {NumToString(item.amount)}
                                </span>
                              </div>
                              <div>
                                <p
                                  style={{
                                    fontSize: 12,
                                    padding: 0,
                                    textAlign: 'left',
                                    transform: 'scale(0.9)',
                                  }}
                                >
                                  ≥￥{NumToString(item.target)}
                                  のご注文で利用可能
                                  <br />
                                  クーポンコード：{item.couponNum}
                                  <br />
                                  {item.date}
                                </p>
                              </div>
                              <button
                                style={{ display: 'none' }}
                                className={styles.couponBtn}
                                type="submit"
                              ></button>
                              <input
                                type="radio"
                                disabled={item.target > total}
                                className={`${styles.dappDept} ${
                                  timelyCouponId === index + 1
                                    ? styles.dappDeptActive
                                    : ''
                                }`}
                              />
                            </label>
                          );
                        })
                      : null}
                  </div>
                </div>
              </div>
              <div className={styles.totals}>
                <div className={styles.inner}>
                  <table
                    className={styles.table}
                    id="shopping-cart-totals-table"
                  >
                    <tbody>
                      <tr>
                        <td colSpan={1} className={styles.aLeft}>
                          {' '}
                          小計{' '}
                        </td>
                        <td className={styles.aRight}>
                          <span className={styles.price}>
                            ￥{NumToString(total)}{' '}
                            <span style={{ color: '#716e6d' }}>税込</span>
                          </span>
                        </td>
                      </tr>
                      {point ? (
                        <tr>
                          <td>ポイント割引</td>
                          <td className={styles.aRight}>
                            <span className={styles.price}>
                              -￥{NumToString(point)}
                            </span>
                          </td>
                        </tr>
                      ) : null}
                      {timelyCouponId > 0 ? (
                        <tr>
                          <td>クーポン割引</td>
                          <td className={styles.aRight}>
                            <span className={styles.price}>
                              -￥
                              {NumToString(
                                timelySale[timelyCouponId - 1].amount,
                              )}
                            </span>
                          </td>
                        </tr>
                      ) : null}
                      {discount ? (
                        <tr>
                          <td>セール割引</td>
                          <td className={styles.aRight}>
                            <span className={styles.price}>
                              -￥{NumToString(discount)}
                            </span>
                          </td>
                        </tr>
                      ) : null}
                      {secondHalfDiscount ? (
                        <tr>
                          <td>半額セール割引</td>
                          <td className={styles.aRight}>
                            <span className={styles.price}>
                              -￥{NumToString(secondHalfDiscount)}
                            </span>
                          </td>
                        </tr>
                      ) : null}

                      {point ||
                      timelyCouponId ||
                      discount ||
                      secondHalfDiscount ? (
                        <tr>
                          <td>割引適用後の金額</td>
                          <td className={styles.aRight}>
                            <span className={styles.price}>
                              ￥{NumToString(totalAfterDiscount)}
                            </span>
                            <span style={{ color: '#716e6d' }}>税込</span>
                          </td>
                        </tr>
                      ) : null}
                      {deliveryFee ? (
                        <tr>
                          <td>送料</td>
                          <td className={styles.aRight}>
                            <span className={styles.price}>
                              ￥{NumToString(deliveryFee)}
                            </span>
                          </td>
                        </tr>
                      ) : null}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan={1} className={styles.aLeft}>
                          <strong>商品合計</strong>
                        </td>
                        <td className={styles.aRight}>
                          <strong>
                            <span className={styles.price}>
                              ￥{NumToString(paymentAmount)}
                              <span style={{ color: '#716e6d' }}>税込</span>
                            </span>
                          </strong>
                        </td>
                      </tr>
                    </tfoot>
                  </table>

                  <div
                    className={styles.cartDiscount}
                    style={{
                      background: '#EEEEEE',
                      clear: 'both',
                      padding: 10,
                      overflow: 'hidden',
                      marginTop: 10,
                    }}
                  >
                    <div
                      style={{
                        marginBottom: 8,
                        borderBottom: '1px solid #aaa',
                      }}
                    >
                      {targetDeliveryfee > 0 ? (
                        <p className={styles.cartNote}>
                          ※あと
                          <b style={{ color: '#E3BA84' }}>
                            【{targetDeliveryfee}】
                          </b>
                          円で<span style={{ color: '#d92b04' }}>送料無料</span>
                        </p>
                      ) : (
                        <p className={styles.cartNote}>※送料無料です。</p>
                      )}
                    </div>
                    <div>
                      {totalAfterDiscount < 10000 ? (
                        <p className={styles.cartNote}>
                          あと
                          <b style={{ color: '#E3BA84' }}>
                            【{10000 - totalAfterDiscount}】
                          </b>
                          円の購入で福袋
                          <b
                            style={{
                              color: '#d92b04',
                              fontWeight: ' bold',
                              fontSize: 20,
                            }}
                          >
                            1点
                          </b>
                          を無料送呈！
                        </p>
                      ) : null}
                      {totalAfterDiscount < 20000 ? (
                        <p className={styles.cartNote}>
                          あと
                          <b style={{ color: '#E3BA84' }}>
                            【{20000 - totalAfterDiscount}】
                          </b>
                          円の購入で福袋
                          <b
                            style={{
                              color: '#d92b04',
                              fontWeight: ' bold',
                              fontSize: 20,
                            }}
                          >
                            2点
                          </b>
                          を無料送呈！
                        </p>
                      ) : null}
                      {totalAfterDiscount < 30000 ? (
                        <p className={styles.cartNote}>
                          あと
                          <b style={{ color: '#E3BA84' }}>
                            【{30000 - totalAfterDiscount}】
                          </b>
                          円の購入で福袋
                          <b
                            style={{
                              color: '#d92b04',
                              fontWeight: 'bold',
                              fontSize: 20,
                            }}
                          >
                            3点
                          </b>
                          を無料送呈！
                        </p>
                      ) : null}

                      {/* {
                                        recommend < normalDiscount[0].length - 1 ? <p className={styles.cartNote}>※あと<b style={{ color: '#E3BA84' }}>【{normalDiscount[0][recommend + 1] - total}】</b>円で、<b
                                            style={{ color: '#d92b04', fontWeight: 'bold', fontSize: 20 }}>{normalDiscount[1][recommend + 1]}</b>OFF！
                                        </p> : null
                                    } */}
                    </div>
                    <a
                      href="/"
                      style={{
                        display: 'inline-block',
                        margin: '10px 0',
                        float: 'right',
                        textDecoration: 'underline',
                      }}
                    >
                      買い物を続ける&gt;&gt;
                    </a>
                  </div>
                  <div className={styles.cartBoxBtn}>
                    <div
                      className={styles.indexLoginBtn}
                      onClick={storeCalcDate}
                      title="ご購入手続きへ"
                      style={{ borderRadius: 5 }}
                    >
                      レジへ進む
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default App;
