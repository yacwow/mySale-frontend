import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { MenuProps, Menu } from 'antd';
import TableForShoppingHistory from './TableForShoppingHistory';
import { request } from '@umijs/max';
//进入这个组件的时候，都会先展示第一个，所以第一个全部请求了，其他的请求个订单号就行了，统计一下数量
interface Props {
  setTitle: Dispatch<SetStateAction<string>>
}

const App: React.FC<Props> = (props) => {
  const { setTitle } = props;
  const [current, setCurrent] = useState('orderHistory');//只有请求回来的四种string
  const [data, setData] = useState<any>([]);//展示用的已经排序好了的数据
  const [originData, setOriginData] = useState<any>();
  const [items, setItems] = useState<MenuProps['items']>()
  const[deleteNum,setDeleteNum]=useState(0);

  useEffect(() => {
    request("/api/secure/getOrderInvoiceHistory").then(data => {
      console.log(data);
      if (data.result) {
        let serverSideData = data.data.serverSideData;
        let tempData = {};
        let unpaidData = serverSideData.filter(item => {
          return item.paidStatus === 'unpaid';
        })
        let paidData = serverSideData.filter(item => {
          return item.paidStatus === 'paid';
        })
        let deliveryData = serverSideData.filter(item => {
          return item.paidStatus === 'delivery';
        })
        let cancelledData = serverSideData.filter(item => {
          return item.paidStatus === 'cancelled';
        })
        tempData.unpaid = unpaidData;
        tempData.paid = paidData;
        tempData.delivery = deliveryData;
        tempData.cancelled = cancelledData;
        console.log(tempData)


        setOriginData(tempData);
        let newData
        if (current === 'orderHistory') {
          newData = [...tempData.unpaid, ...tempData.paid, ...tempData.delivery, ...tempData.cancelled];
        } else {
          //@ts-ignore
          newData = tempData[current];
        }
        setData(newData);
        let unpaid = tempData.unpaid.length;
        let paid = tempData.paid.length;
        let delivery = tempData.delivery.length;
        let cancelled = tempData.cancelled.length;
        let items = [
          {
            label: `注文履歴(${unpaid + paid + delivery + cancelled})`,
            key: 'orderHistory',
          },
          {
            label: `未入金(${unpaid})`,
            key: 'unpaid',
          },
          {
            label: `支払い済み(${paid})`,
            key: 'paid',
          },
          {
            label: `配送済み(${delivery})`,
            key: 'delivery',
          }, {
            label: `キャンセル(${cancelled})`,
            key: 'cancelled',
          },
        ];

        setItems(items)
      }

    })
    //请求数据,因为历史包括所有，就一起请求回来
    const data = {
      unpaid: [{
        invoiceNum: '142131414212312312', paidStatus: 'unpaid', invoiceDate: '20214557154', totalPayment: 23333, productData: [
          { href: '', description: 'testtestttttttttttttttttttttttt', color: 'test', size: 's', price: 1234, amount: 3, imgSrc: '/img/recommendPicture1.jpg' },
          { href: '', description: 'testtestttttttttttttttttttttttt', color: 'test', size: 's', price: 1234, amount: 3, imgSrc: '/img/recommendPicture1.jpg' }
        ]
      }, {
        invoiceNum: '242131414212312312', paidStatus: 'unpaid', invoiceDate: '20214557154', totalPayment: 23333, productData: [
          { href: '', description: 'testtestttttttttttttttttttttttt', color: 'test', size: 's', price: 1234, amount: 3, imgSrc: '/img/recommendPicture1.jpg' },
          { href: '', description: 'testtestttttttttttttttttttttttt', color: 'test', size: 's', price: 1234, amount: 3, imgSrc: '/img/recommendPicture1.jpg' }
        ]
      }],
      paid: [{
        invoiceNum: '342131414212312312', paidStatus: 'paid', invoiceDate: '20214557154', totalPayment: 23333, productData: [
          { href: '', description: 'testtestttttttttttttttttttttttt', color: 'test', size: 's', price: 1234, amount: 3, imgSrc: '/img/recommendPicture1.jpg' },
          { href: '', description: 'testtestttttttttttttttttttttttt', color: 'test', size: 's', price: 1234, amount: 3, imgSrc: '/img/recommendPicture1.jpg' }
        ]
      }, {
        invoiceNum: '742131414212312312', paidStatus: 'paid', invoiceDate: '20214557154', totalPayment: 23333, productData: [
          { href: '', description: 'testtestttttttttttttttttttttttt', color: 'test', size: 's', price: 1234, amount: 3, imgSrc: '/img/recommendPicture1.jpg' },
          { href: '', description: 'testtestttttttttttttttttttttttt', color: 'test', size: 's', price: 1234, amount: 3, imgSrc: '/img/recommendPicture1.jpg' }
        ]
      }],
      delivery: [{
        invoiceNum: '442131414212312312', paidStatus: 'delivery', invoiceDate: '20214557154', totalPayment: 23333, productData: [
          { href: '', description: 'testtestttttttttttttttttttttttt', color: 'test', size: 's', price: 1234, amount: 3, imgSrc: '/img/recommendPicture1.jpg' },
          { href: '', description: 'testtestttttttttttttttttttttttt', color: 'test', size: 's', price: 1234, amount: 3, imgSrc: '/img/recommendPicture1.jpg' }
        ]
      }, {
        invoiceNum: '642131414212312312', paidStatus: 'delivery', invoiceDate: '20214557154', totalPayment: 23333, productData: [
          { href: '', description: 'testtestttttttttttttttttttttttt', color: 'test', size: 's', price: 1234, amount: 3, imgSrc: '/img/recommendPicture1.jpg' },
          { href: '', description: 'testtestttttttttttttttttttttttt', color: 'test', size: 's', price: 1234, amount: 3, imgSrc: '/img/recommendPicture1.jpg' }
        ]
      }],
      cancelled: [{
        invoiceNum: '542131414212312312', paidStatus: 'cancelled', invoiceDate: '20214557154', totalPayment: 23333, productData: [
          { href: '', description: 'testtestttttttttttttttttttttttt', color: 'test', size: 's', price: 1234, amount: 3, imgSrc: '/img/recommendPicture1.jpg' }
        ]
      }]
    }

  }, [])
  useEffect(()=>{
//提交服务器，删掉该invoice
  },[deleteNum])
  const buildTable = () => {
    //@ts-ignore
    return data.map((item, index: number) => {
      return <TableForShoppingHistory setDeleteNum={setDeleteNum} 
       key={index} serverSideData={item} setTitle={setTitle} />
    })
  }

  const onClick: MenuProps['onClick'] = (e) => {
    if (e.key !== 'orderHistory') {
      setData(originData[e.key])
    } else {
      setData([...originData.unpaid, ...originData.paid, ...originData.delivery, ...originData.cancelled])
    }
    setCurrent(e.key);
  };

  return <div>{items ? <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}
    style={{ height: 60 }} /> : null}
    {data.length ? buildTable() : null}
  </div>;
};

export default App;
















