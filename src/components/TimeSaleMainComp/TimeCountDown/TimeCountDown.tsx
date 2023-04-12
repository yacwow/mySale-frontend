import React, { useState, useRef, useEffect } from 'react';
import styles from './TimeCountDown.less'
interface TimeViewProps {
  d: string,//天
  h: string; // 小时
  m: string; // 分钟
  s: string; // 秒
}

interface TCountDownWrapper {
  expire: number; //过期时间
  showDomStruct?: boolean;  //是否显示
};


const App: React.FC<TCountDownWrapper> = (props) => {
  // console.log(props.expire)
  const countDownTimer = useRef<NodeJS.Timeout>(); // 倒计时标记
  const [timeView, setTimeView] = useState<TimeViewProps | null>(null); // 倒计时显示
  const expireTime = useRef(props.expire);
  // 倒计时函数
  const countDown = () => {
    const nowTime = +new Date(); //获取當前时间的时间戳（单位毫秒）
    let times = parseInt(`${(expireTime.current - nowTime) / 1000}`); //把剩余时间毫秒数转化为秒

    //时间判断
    if (times <= 0) {
      clearTimeout(countDownTimer.current);
      // setTimeView({ d: '00', h: '00', m: '00', s: '00' });
      expireTime.current = +new Date() + 3600 * 24 * 1000 * 3;
      times = parseInt(`${(expireTime.current - nowTime) / 1000}`)
      countDownTimer.current = setTimeout(() => {
        countDown();
      }, 1000);
    } else {
      countDownTimer.current = setTimeout(() => {
        countDown();
      }, 1000);
    }
    const d = parseInt(`${(times / 60 / 60) / 24}`); //计算小时数 转化为整数
    const h = parseInt(`${(times / 60 / 60) % 24}`); //计算小时数 转化为整数
    const m = parseInt(`${(times / 60) % 60}`); //计算分钟数 转化为整数
    const s = parseInt(`${times % 60}`); //计算描述 转化为整数
    //设置时间格式
    setTimeView({
      d: d < 10 ? `0${d}` : `${d}`,
      h: h < 10 ? `0${h}` : `${h}`,
      m: m < 10 ? `0${m}` : `${m}`,
      s: s < 10 ? `0${s}` : `${s}`,
    });
  };

  useEffect(() => {
    if (props.expire) {
      countDown();
    } else {
      setTimeView({ d: '00', h: '00', m: '00', s: '00' });
    }
    return () => {
      clearTimeout(countDownTimer.current);
    };
  }, []);


  return (
    <div style={{ width: 400, margin: '0 auto' }}>
      <div className={styles.top}>
        <img src="/endTime.jpg" alt="" />
      </div>
      {props.showDomStruct ?? true ? (
        <div className={styles.time}>
          <div className={styles.inside}>
            <span className={styles.number}>
              {timeView?.d}
            </span>
            <span>D.</span>
            <span className={styles.number}>
              {timeView?.h}
            </span>
            <span>H.</span>
            <span className={styles.number}>
              {timeView?.m}
            </span>
            <span>M.</span>
            <span className={styles.number}>
              {timeView?.s}
            </span>
            <span>S.</span>
          </div>

        </div>
      ) : (
        <></>
      )}
    </div>
  );


};
export default App;