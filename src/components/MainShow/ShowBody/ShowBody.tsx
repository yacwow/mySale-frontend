import React, { useEffect, useState } from 'react';
import styles from './ShowBody.less';
import BodyHeader from './BodyHeader';
import ProductDetail from './ProductDetail';
import ProductSize from './ProductSize';
import CommentComp from './CommentComp';
import ReturnItem from './ReturnItem';
// import { ProductDetailSrc, TableValue, ProductMaterial,ReviewContext } from '@/constants';
interface Props {
  selectNum?: number;
  showBodyPictureData: string[];
  tableValue: string[];
  productMaterial: string;
  reviewContext: { comment: any[]; commentScore: number };
}
const App: React.FC<Props> = (props) => {
  const {
    selectNum = 0,
    showBodyPictureData,
    tableValue,
    productMaterial,
    reviewContext,
  } = props;
  const [selectItem, setSelectItem] = useState(selectNum); //用来控制bodyheader选项是第几个,不传入是0
  // const [productDetailSrc, setProductDetailSrc] = useState(ProductDetailSrc);//传入到ProductDetail的属性
  // const [tableValue, setTableValue] = useState(TableValue);//传入到ProductSize
  // const [productMaterial, setProductMaterial] = useState(ProductMaterial);
  // const [reviewContext,setReviewContext]=useState(ReviewContext)
  useEffect(() => {
    //ajax请求获取图片的src列表 用于ProductDetail，先用模拟数据
    //TableSize,用于productsize模块
    //produceMaterial,用于productsize模块
  }, []);

  return (
    <div className={styles.container}>
      <BodyHeader
        setSelectItem={setSelectItem}
        selectItem={selectItem}
        commentNumber={reviewContext.comment.length}
      ></BodyHeader>
      {selectItem === 0 ? (
        <ProductDetail productDetailSrc={showBodyPictureData} />
      ) : selectItem === 1 ? (
        <ProductSize
          tableValue={tableValue}
          productMaterial={productMaterial}
        />
      ) : selectItem === 2 ? (
        <div>
          <p style={{ marginTop: 15, color: '#777777' }}>
            ※
            店頭及び屋外での撮影画像は、光の当たり具合で色味が違って見える場合があります。
            <br />※
            商品の素材や測り方によって、若干の誤差が発生する場合もございます。1-3cmの誤差はご了承ください。
          </p>
        </div>
      ) : selectItem === 3 ? (
        <ReturnItem />
      ) : (
        <div className={styles.comment}>
          <CommentComp reviewContext={reviewContext} />
        </div>
      )}
    </div>
  );
};
export default App;
