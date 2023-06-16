import React, { useEffect, useState } from 'react';
import PickUpPicture from './PickUpPicture';
import styles from './PickUpItem.less';
import { request } from '@umijs/max';
import { formatTime } from '@/utils/format';

interface pickupDataType {
  href: string;
  expiretime: number;
  intro: string;
  rank: number;
  imgsrc: string;
}
const App: React.FC = () => {
  const [liList, setLiList] = useState<pickupDataType[]>([]);

  useEffect(() => {
    request('/api/pickUp').then(({ data }) => {
      setLiList(data.pickUp);
    });
  }, []);
  const buildLiList = () => {
    return liList.map((item, index) => {
      return (
        <li key={index} className={styles.topLine}>
          <PickUpPicture
            date={formatTime(item.expiretime)}
            imgSrc={item.imgsrc}
            href={item.href}
            intro={item.intro}
          ></PickUpPicture>
        </li>
      );
    });
    // return liList?liList.map((item, index) => {
    //     return (<li key={index}>
    //         <PickUpPicture date={item.date} imgSrc={item.imgSrc} href={item.href} intro={item.intro}></PickUpPicture>
    //     </li>)
    // }):PickUpPlaceHolder.map((item, index) => {
    //     return (<li key={index}>
    //         <PickUpPicture date={item.date} imgSrc={item.imgSrc} href={item.href} intro={item.intro}></PickUpPicture>
    //     </li>

    //     )
    // })
  };
  // const placeHolder = () => {
  //     return PickUpPlaceHolder.map((item, index) => {
  //         return (<li key={index}>
  //             <PickUpPicture date={item.date} imgSrc={item.imgSrc} href={item.href} intro={item.intro}></PickUpPicture>
  //         </li>

  //         )
  //     })
  // }
  return (
    <div className={styles.container}>
      <div>
        <h2>PICK UP</h2>
        <h3>特集</h3>
      </div>
      <ul style={{ margin: '0 auto' }}>{liList ? buildLiList() : null}</ul>
    </div>
  );
};
export default App;
