import React from 'react';
import { MenuProps, Menu } from 'antd';
import TableForShoppingHistory from './TableForShoppingHistory';
import { useModel } from '@umijs/max';
//进入这个组件的时候，都会先展示第一个，所以第一个全部请求了，其他的请求个订单号就行了，统计一下数量

const App: React.FC = () => {
  const {
    setTitle,
    current,
    setCurrent,
    data,
    setData,
    originData,
    items,
    deleteNum,
    setDeleteNum,
  } = useModel('account');

  const buildTable = () => {
    //@ts-ignore
    return data.map((item, index: number) => {
      return (
        <TableForShoppingHistory
          deleteNum={deleteNum}
          setDeleteNum={setDeleteNum}
          key={index}
          serverSideData={item}
          setTitle={setTitle}
        />
      );
    });
  };

  const onClick: MenuProps['onClick'] = (e) => {
    if (e.key !== 'orderHistory') {
      setData(originData[e.key]);
    } else {
      setData([
        ...originData.unpaid,
        ...originData.paid,
        ...originData.delivery,
        ...originData.cancelled,
      ]);
    }
    setCurrent(e.key);
  };

  return (
    <div>
      {items ? (
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
          style={{ height: 60 }}
        />
      ) : null}
      {data.length ? (
        buildTable()
      ) : (
        <div style={{ marginBottom: 20, width: 810 }}></div>
      )}
    </div>
  );
};

export default App;

//请求数据,因为历史包括所有，就一起请求回来
// const data = {
//   unpaid: [{
//     invoiceNum: '142131414212312312', paidStatus: 'unpaid', invoiceDate: '20214557154', totalPayment: 23333, productData: [
//       { href: '', description: 'testtestttttttttttttttttttttttt', color: 'test', size: 's', price: 1234, amount: 3, imgSrc: '/img/recommendPicture1.jpg' },
//       { href: '', description: 'testtestttttttttttttttttttttttt', color: 'test', size: 's', price: 1234, amount: 3, imgSrc: '/img/recommendPicture1.jpg' }
//     ]
//   }, {
//     invoiceNum: '242131414212312312', paidStatus: 'unpaid', invoiceDate: '20214557154', totalPayment: 23333, productData: [
//       { href: '', description: 'testtestttttttttttttttttttttttt', color: 'test', size: 's', price: 1234, amount: 3, imgSrc: '/img/recommendPicture1.jpg' },
//       { href: '', description: 'testtestttttttttttttttttttttttt', color: 'test', size: 's', price: 1234, amount: 3, imgSrc: '/img/recommendPicture1.jpg' }
//     ]
//   }],
//   paid: [{
//     invoiceNum: '342131414212312312', paidStatus: 'paid', invoiceDate: '20214557154', totalPayment: 23333, productData: [
//       { href: '', description: 'testtestttttttttttttttttttttttt', color: 'test', size: 's', price: 1234, amount: 3, imgSrc: '/img/recommendPicture1.jpg' },
//       { href: '', description: 'testtestttttttttttttttttttttttt', color: 'test', size: 's', price: 1234, amount: 3, imgSrc: '/img/recommendPicture1.jpg' }
//     ]
//   }, {
//     invoiceNum: '742131414212312312', paidStatus: 'paid', invoiceDate: '20214557154', totalPayment: 23333, productData: [
//       { href: '', description: 'testtestttttttttttttttttttttttt', color: 'test', size: 's', price: 1234, amount: 3, imgSrc: '/img/recommendPicture1.jpg' },
//       { href: '', description: 'testtestttttttttttttttttttttttt', color: 'test', size: 's', price: 1234, amount: 3, imgSrc: '/img/recommendPicture1.jpg' }
//     ]
//   }],
//   delivery: [{
//     invoiceNum: '442131414212312312', paidStatus: 'delivery', invoiceDate: '20214557154', totalPayment: 23333, productData: [
//       { href: '', description: 'testtestttttttttttttttttttttttt', color: 'test', size: 's', price: 1234, amount: 3, imgSrc: '/img/recommendPicture1.jpg' },
//       { href: '', description: 'testtestttttttttttttttttttttttt', color: 'test', size: 's', price: 1234, amount: 3, imgSrc: '/img/recommendPicture1.jpg' }
//     ]
//   }, {
//     invoiceNum: '642131414212312312', paidStatus: 'delivery', invoiceDate: '20214557154', totalPayment: 23333, productData: [
//       { href: '', description: 'testtestttttttttttttttttttttttt', color: 'test', size: 's', price: 1234, amount: 3, imgSrc: '/img/recommendPicture1.jpg' },
//       { href: '', description: 'testtestttttttttttttttttttttttt', color: 'test', size: 's', price: 1234, amount: 3, imgSrc: '/img/recommendPicture1.jpg' }
//     ]
//   }],
//   cancelled: [{
//     invoiceNum: '542131414212312312', paidStatus: 'cancelled', invoiceDate: '20214557154', totalPayment: 23333, productData: [
//       { href: '', description: 'testtestttttttttttttttttttttttt', color: 'test', size: 's', price: 1234, amount: 3, imgSrc: '/img/recommendPicture1.jpg' }
//     ]
//   }]
// }
