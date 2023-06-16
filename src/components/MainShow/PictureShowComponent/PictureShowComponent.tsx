import React, { useEffect, useState } from 'react';
//@ts-ignore
import ReactImageMagnify from 'react-image-magnify';
import styles from './PictureShowComponent.less';
//@ts-ignore
import $ from 'jquery';

interface Props {
  showComponent: { imgSrc: string }[];
  secondOneHalf?: number;
  discount?: number;
  deliveriedSrc: string;
  setMagnifierPic: any;
  magnifierPic: any;
}
const App: React.FC<Props> = (props) => {
  const {
    showComponent,
    discount = 0,
    secondOneHalf = 0,
    deliveriedSrc,
    magnifierPic,
    setMagnifierPic,
  } = props;
  // console.log(magnifierPic)
  console.log(showComponent[0].imgSrc);
  // const [magnifierPic, setMagnifierPic] = useState(showComponent[0].imgSrc);
  useEffect(() => {
    // console.log(showComponent[0].imgSrc)
    setMagnifierPic(showComponent[0].imgSrc);
  }, []);
  useEffect(() => {
    setMagnifierPic(deliveriedSrc);
  }, [deliveriedSrc]);

  const handleClick = (index: number) => {
    let pictureList = $('.mainShow_pictureShowComponent ul li');
    // console.log(         $('.mainShow_pictureShowComponent ul li'),index)
    // console.log(         $('.mainShow_pictureShowComponent ul li')[2])
    // console.log(pictureList[0])
    for (let i = 0; i < pictureList.length; i++) {
      pictureList[i].removeAttribute('class');
    }
    setMagnifierPic(showComponent[index].imgSrc);
    pictureList[index].setAttribute('class', `${styles.active}`);
  };
  //左边那一列照片
  const buildPictureList = () => {
    return showComponent.map((item, index: number) => {
      if (index >= 5) return null;
      return (
        <li
          key={index}
          className={index === 0 ? `${styles.active}` : 'notActive'}
          onClick={() => {
            handleClick(index);
          }}
        >
          <img src={item.imgSrc} alt="" />
        </li>
      );
    });
  };
  // const
  return (
    <>
      {magnifierPic ? (
        <div className={`${styles.container} mainShow_pictureShowComponent`}>
          <div className={styles.left}>
            <ul>{buildPictureList()}</ul>
          </div>
          <div className={styles.right} style={{ position: 'relative' }}>
            <ReactImageMagnify
              {...{
                style: { width: 500, height: 500 },
                // imageStyle: {width:500,height:500 },
                enlargedImageContainerStyle: {
                  zIndex: 10000000,
                  marginLeft: 30,
                },
                // enlargedImageStyle:{height:600},
                lensStyle: {},
                smallImage: {
                  alt: '画像読み込みエラーです',
                  width: 500,
                  height: 500,
                  src: magnifierPic,
                },
                largeImage: {
                  src: magnifierPic,
                  width: 1200,
                  height: 1200,
                },
              }}
            />
            {discount ? (
              <img
                src="/img/discount.jpg"
                style={{ position: 'absolute', bottom: 0, right: 0 }}
              ></img>
            ) : null}
            {secondOneHalf ? (
              <img
                src="/img/50%discount.webp"
                style={{ position: 'absolute', top: 0, right: 0 }}
              ></img>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
};
export default App;
