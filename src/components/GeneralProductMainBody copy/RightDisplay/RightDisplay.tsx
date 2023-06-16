import React, { Dispatch, SetStateAction } from 'react';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import FullyParamPicture from '../FullyParamPicture';
import { Pagination } from 'antd';
import styles from './RightDisplay.less';
//@ts-ignore
import $ from 'jquery';

interface Props {
  title: string;
  size: number; //总个数
  setPage: Dispatch<SetStateAction<number>>;
  setSortType: Dispatch<SetStateAction<string>>;
  setOrder: Dispatch<SetStateAction<string>>;
  dataList: {
    commentNum: number;
    discount: number;
    href: '';
    imgSrc: '';
    price: number;
    newProduct: number;
    secondOneHalf: number;
    productDescription: string;
    idProduct: number;
  }[];
  page: number;
}
const App: React.FC<Props> = (props) => {
  const { title, size, setPage, setSortType, dataList, setOrder, page } = props;

  const handleClick = (e: any) => {
    $('.generalProductRightDisplay li').removeClass(styles.active);

    e.target.classList.add(styles.active);
    setSortType(e.target.getAttribute('value'));
  };
  const handleClickO = (e: any) => {
    $('.generalProductRightDisplay li').removeClass(styles.active);

    e.target.classList.add(styles.active);
    setOrder(e.target.getAttribute('value'));
    // setSortType("newPrice")
  };
  const build = () => {
    return dataList.map((item, index) => {
      return (
        <div key={index} className={styles.list}>
          <FullyParamPicture
            imgSrc={item.imgSrc}
            href={item.href}
            title={item.productDescription}
            newProduct={item.newProduct}
            comment={{
              commentRate: 5,
              commentNum: item.commentNum,
              commentHref: `/main/${item.idProduct}?rel=#reviews`,
            }}
            price={item.price}
            discount={item.discount}
            secondOneDiscount={item.secondOneHalf}
          />
        </div>
      );
    });
  };
  const handleChange = (e: number) => {
    //翻页点击事件
    setPage(e);
  };
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        <span>{title}</span>
        <ul className={`${styles.titleRight} generalProductRightDisplay`}>
          <li
            onClick={(e) => handleClick(e)}
            className={styles.active}
            value={'recommend'}
          >
            並び順
          </li>
          <li onClick={(e) => handleClick(e)} value={'newProduct'}>
            新着順
          </li>
          <li onClick={(e) => handleClickO(e)} value={'asc'}>
            安い順
            <CaretUpOutlined />
          </li>
          <li onClick={(e) => handleClickO(e)} value={'desc'}>
            高い順
            <CaretDownOutlined />
          </li>
        </ul>
      </h3>
      <div className={styles.displayPicture}>{build()}</div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination
          hideOnSinglePage
          total={size}
          pageSize={60}
          current={page}
          onChange={handleChange}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};
export default App;
