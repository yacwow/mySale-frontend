import UserLayout from '@/components/UserLayout';
import ShoppingHistory from '@/components/User/ShoppingHistory';
import { useModel } from '@umijs/max';
import { useEffect } from 'react';
import { request } from '@umijs/max';

export default function Index() {
  const { current, setData, setOriginData, setItems } = useModel('account');

  useEffect(() => {
    request('/api/secure/getOrderInvoiceHistory').then((data) => {
      console.log(data);
      if (data.result) {
        let serverSideData = data.data.serverSideData;
        let tempData: any = {};
        let unpaidData = serverSideData.filter((item: any) => {
          return item.paidStatus === 'unpaid';
        });
        let paidData = serverSideData.filter((item: any) => {
          return item.paidStatus === 'paid';
        });
        let deliveryData = serverSideData.filter((item: any) => {
          return item.paidStatus === 'delivery';
        });
        let cancelledData = serverSideData.filter((item: any) => {
          return item.paidStatus === 'cancelled';
        });
        tempData.unpaid = unpaidData;
        tempData.paid = paidData;
        tempData.delivery = deliveryData;
        tempData.cancelled = cancelledData;
        console.log(tempData);

        setOriginData(tempData);
        let newData;
        if (current === 'orderHistory') {
          newData = [
            ...tempData.unpaid,
            ...tempData.paid,
            ...tempData.delivery,
            ...tempData.cancelled,
          ];
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
          },
          {
            label: `キャンセル(${cancelled})`,
            key: 'cancelled',
          },
        ];

        setItems(items);
      }
    });
  }, []);
  return (
    <UserLayout>
      <ShoppingHistory />
    </UserLayout>
  );
}
