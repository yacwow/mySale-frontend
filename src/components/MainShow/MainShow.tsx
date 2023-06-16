import React, { useEffect, useState } from 'react';
import ShowHeader from './ShowHeader';
import MainShowBanner from './MainShowBanner';
import ShowBody from './ShowBody';
import LeftSidePromotionLine from './LeftSidePromotionLine';
import { request, useModel } from '@umijs/max';
import { history } from 'umi';
import styles from './MainShow.less';

const App: React.FC = () => {
  //下面几个都是给showheader准备的
  const [breadList, setBreadList] = useState<any>();
  const [sellerDetailPicture, setSellerDetailPicture] = useState<any>(); //右侧展示用数据
  const [showComponent, setShowComponent] = useState<any>(); //左侧展示用的数据
  const [sellDetailData, setSellDetailData] = useState<any>(); //右侧其他数据
  const [showBodyPictureData, setShowBodyPictureData] = useState<any>(); //下面展示图片的数据
  const [tableValue, setTableValue] = useState([]); //尺寸表大小
  const [productMaterial, setProductDetailSrc] = useState(''); //产品描述类
  const [reviewContext, setReviewContext] = useState({}); //评论区数据
  const [leftSidePromotionLineList, setLeftSidePromotionLineList] = useState(); //左边一起买的那个东西的数据
  const [secondOneHalf, setSecondOneHalf] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [bannerData, setBannerData] = useState([]);
  const [productHref, setProductHref] = useState(''); //这几个简单类型基本都是给showheader用于保存到localstorage
  const [wishList, setWishList] = useState(); //判断那个小红心用的 登录的时候的
  const [timesale, setTimesale] = useState();
  const { userEmail } = useModel('isLogin');
  useEffect(() => {
    let productId = window.location.pathname.trim().split('/');
    console.log(window.location.href);
    setProductHref(window.location.href);
    let params = productId[productId.length - 1];
    // console.log(params)
    request(`/api/salesPageProduct/${params}`, { params: { userEmail } }).then(
      (data) => {
        if (data.result) {
          const { salesPageProduct } = data.data;
          setTimesale(salesPageProduct.timesale);
          setWishList(salesPageProduct.wishList);
          if (salesPageProduct === undefined) {
            history.push('/bestseller');
            return;
          } else {
            let firstLevelCategory = salesPageProduct.firstlevelcategory;
            let secondLevelCategory = salesPageProduct.secondlevelcategory;
            let productDescription = salesPageProduct.productdescription;
            let bread = {
              first: {
                href: `/generalsale?firstLevel=${firstLevelCategory}`,
                content: firstLevelCategory,
              },
              second: {
                href: `/generalsale?firstLevel=${firstLevelCategory}&secondLevel=${secondLevelCategory}`,
                content: secondLevelCategory,
              },
              third: productDescription,
            };
            setBreadList(bread);
            let salesPagePictures = salesPageProduct.salesPagePictures as any[];
            let headerPictures = {} as any;
            for (let i = 0; i < salesPagePictures.length; i++) {
              headerPictures[salesPagePictures[i].color] =
                salesPagePictures[i].bigimgsrc;
            }
            let sellerDetailPictures = [];
            // eslint-disable-next-line guard-for-in
            for (const key in headerPictures) {
              sellerDetailPictures.push({
                color: key,
                imgSrc: headerPictures[key],
              });
            }
            setSellerDetailPicture(sellerDetailPictures);
            // console.log(salesPageProduct)
            let sortedPictureData = salesPageProduct.salesPagePictures.sort(
              (a, b) => {
                return b.first - a.first;
              },
            );
            let showCompPic = sortedPictureData.map((item) => {
              return { imgSrc: item.bigimgsrc };
            });
            let showBodyPictureData = sortedPictureData.map((item) => {
              return item.bigimgsrc;
            });
            // console.log(showCompPic)
            // console.log(showBodyPictureData)
            setShowComponent(showCompPic);
            setShowBodyPictureData(showBodyPictureData);
            let productDetailSize = salesPageProduct.productDetailSize;
            let arr = productDetailSize.split('&');
            let sizeList = [];
            for (let i = 1; i < arr.length; i++) {
              let res = arr[i].split('-');
              // console.log(res)
              sizeList.push(res[0]);
            }
            setTableValue(arr);
            setProductDetailSrc(salesPageProduct.productdetaildescription);
            let sellDetailData = {} as any;
            sellDetailData.title = salesPageProduct.productdescription;
            sellDetailData.bestSellHref = '/timeSeller';
            sellDetailData.oldPrice = salesPageProduct.marketprice;
            sellDetailData.price = salesPageProduct.originprice;
            sellDetailData.newPrice = salesPageProduct.newprice;
            sellDetailData.productId = salesPageProduct.productId;
            sellDetailData.comment = salesPageProduct.salesPageComments.length;
            sellDetailData.commentScore = Math.floor(Math.random() * 2 + 4);
            sellDetailData.sizeList = sizeList;
            // console.log(sellDetailData)
            setSellDetailData(sellDetailData);
            setSecondOneHalf(salesPageProduct.secondonehalf);
            setDiscount(salesPageProduct.discount);
            let review = {};
            review.comment = salesPageProduct.salesPageComments;
            review.commentScore = salesPageProduct.commentScore || 5;
            setReviewContext(review);
            setLeftSidePromotionLineList(salesPageProduct.salesPageBuyMatches);
          }
        } else {
          //跳转到某个固定页面，该产品未找到，请选择其他产品
        }
      },
    );
    request('/api/salesPageProduct/bestSeller').then(({ data }) => {
      console.log(data);
      // setBannerData(shuffleSelf(data,14));
      setBannerData(data.newsBanner);
    });
  }, []);
  return (
    <div>
      {breadList ? (
        <ShowHeader
          breadList={breadList}
          productHref={productHref}
          wishList={wishList}
          showComponent={showComponent}
          secondOneHalf={secondOneHalf}
          discount={discount}
          timesale={timesale}
          sellerDetailPicture={sellerDetailPicture}
          sellDetailData={sellDetailData}
        />
      ) : null}
      <div className={styles.main}>
        {showBodyPictureData ? (
          <ShowBody
            showBodyPictureData={showBodyPictureData}
            tableValue={tableValue}
            productMaterial={productMaterial}
            reviewContext={reviewContext}
          />
        ) : null}
        {leftSidePromotionLineList ? (
          <LeftSidePromotionLine
            leftSidePromotionLineList={leftSidePromotionLineList}
          />
        ) : null}
      </div>
      {bannerData ? <MainShowBanner newsBanner={bannerData} /> : null}
    </div>
  );
};
export default App;

//firstlevelcategory,secondlevelcategory,description以及href最后一个是product的，前面2个自己拼接
/**
 * PictureShowComponent 需要所有颜色的该衣服图片地址,不超过五张吧，超过了又要重新设置样式了
 * 产品的三个价格都要，产品编号和rate以及评论所有信息，产品的尺寸以及每个尺寸的照片，产品wishlist的人数
 * 图片尺寸等信息 bestseller? secondonehalf?
 *
 *
 *
 * 最下面是bestseller+rank排序（针对该页面的大类进行搜索）都是14个
 * 左边那一列是recommend的排序（同样）
 */
