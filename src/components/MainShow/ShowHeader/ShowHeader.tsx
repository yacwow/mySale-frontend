import React, { useEffect, useState } from 'react';
import { Breadcrumb } from 'antd';
import SellDetail from '../SellDetail';
import PictureShowComponent from '../PictureShowComponent';
import { engToJap_first, engToJap_second } from '@/constants/engToJap';
import styles from './ShowHeader.less';
interface Props {
  breadList: {
    first: { href: string; content: string };
    second: { href: string; content: string };
    third: any;
  }; //目前没想好名字，四层分类，第一层是回主页面，第二层是大类，第三层小类，第四层是该产品
  sellerDetailPicture: { color: string; imgSrc: string }[];
  sellDetailData: any;
  secondOneHalf: number;
  discount: number;
  showComponent: { imgSrc: string }[];
  productHref: string;
  timesale: boolean;
  wishList: { isLogin: boolean; userLove: boolean };
}
// const engToJap = {
//     girlsLoveGeneral: `レディース`,
//     girlsTops: `トップス`,
//     girlsOuter: `アウター`,
//     girlsDress: `ワンピース`,
//     girlsBottom: 'ボトムス',
//     girlsSetUp: 'セットアップ',
//     girlsShoes: 'ジュース',
//     girlsGoods: '小物',
//     menFashion: 'メンズファッション',
//     topGeneral: 'トップス',
//     topShirt: 'シャツ・ブラウス',
//     topTShirt: 'Ｔシャツ',
//     topHoodie: 'パーカー・スウェット',
//     topSweater: 'セーター',
//     topNoSleeveTops: 'ノースリーブ・ベスト',
//     dressGeneral: 'ワンピース',
//     casualDress: 'カジュアルワンピース',
//     strapSkirt: 'サロペットスカート',
//     olDress: '通勤ワンピース',
//     shirtDress: 'シャツワンピース',
//     knitDress: 'ニットワンピース',
//     bottomGeneral: 'ボトムス',
//     bottomCausal: 'カジュアルパンツ',
//     bottomSkirt: 'スカート',
//     bottomDenim: 'デニム',
//     bottomShortPants: 'ショートパンツ',
//     bottomAllInOne: 'オールインワン',
//     outerGeneral: 'アウター',
//     outerCardigan: 'カーディガン',
//     outerSuit: 'スーツ',
//     outerJacket: 'ジャケット',
//     outerCoat: 'コート',
//     outerDownCoat: 'ダウンコート',
//     setUp: 'セットアップ',
//     generalShoes: 'シューズ',
//     pumpShoes: 'カーディガン',
//     flatShoes: 'フラットシューズ',
//     sandalShoes: 'サンダル',
//     sneakerShoes: 'スニーカー',
//     bootShoes: 'ブーツ',
//     generalInner: '下着',
//     swimwearInner: '水着・ビキニ',
//     underwearInner: 'ブラジャー＆ショートセット',
//     indoorWearInner: 'ルームウェア・パジャマセット',
//     braInner: 'ブラジャー',
//     shortsInner: 'ショーツ',
//     accInner: 'グッズ',
//     generalGoods: '小物',
//     bagGoods: 'バッグ',
//     accessoryGoods: 'アクセサリー',
//     hatGoods: '帽子',
//     socksGoods: 'ソックス',
//     scarfGoods: 'スカーフ',

// }

const App: React.FC<Props> = (props) => {
  const {
    breadList,
    sellerDetailPicture,
    secondOneHalf,
    discount,
    sellDetailData,
    showComponent,
    productHref,
    timesale,
    wishList,
  } = props;
  console.log(sellerDetailPicture, sellDetailData);
  const [deliveriedSrc, setDeliveriedSrc] = useState<string>('');
  const [magnifierPic, setMagnifierPic] = useState(showComponent[0].imgSrc);
  useEffect(() => {
    setMagnifierPic(showComponent[0].imgSrc);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.bread}>
        <Breadcrumb separator=">">
          <Breadcrumb.Item href="/">ホーム</Breadcrumb.Item>
          <Breadcrumb.Item href={breadList.first.href}>
            {engToJap_first[breadList.first.content]}
          </Breadcrumb.Item>
          {breadList.second.content ? (
            <Breadcrumb.Item href={breadList.second.href}>
              {engToJap_second[breadList.second.content]}
            </Breadcrumb.Item>
          ) : null}
          <Breadcrumb.Item>{breadList.third}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className={styles.productHeader}>
        <div className={styles.leftShow}>
          {magnifierPic ? (
            <PictureShowComponent
              deliveriedSrc={deliveriedSrc}
              magnifierPic={magnifierPic}
              setMagnifierPic={setMagnifierPic}
              showComponent={showComponent}
              secondOneHalf={secondOneHalf}
              discount={discount}
            />
          ) : (
            <div></div>
          )}
        </div>
        <div className={styles.rightShow}>
          <SellDetail
            wishList={wishList}
            sellDetailData={sellDetailData}
            pictureSrc={sellerDetailPicture}
            setDeliveriedSrc={setDeliveriedSrc}
            productHref={productHref}
            discount={discount}
            secondOneHalf={secondOneHalf}
            timesale={timesale}
          />
        </div>
      </div>
    </div>
  );
};
export default App;
