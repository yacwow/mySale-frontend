import React, { useEffect, useState } from 'react';
import { Modal, Space, Table, message } from 'antd';
import NumToString from '@/utils/NumToString';
import styles from './FavoriteProduct.less'
import { request } from '@umijs/max';

const { Column } = Table;
//喜欢里面查出来的都是有货的才发过来
interface DataType {
  key: number;
  img: JSX.Element;
  description: JSX.Element;
  price: JSX.Element;
  stockInfo: string;
  action: JSX.Element;
}
//传过来的时候的数据和生成的数据有点区别，到时候在组装

interface Props {
  serverSideData: any
}

const App: React.FC<Props> = (props) => {

  const { serverSideData } = props;
  // console.log(serverSideData)
  const [data, setData] = useState<DataType[]>([]);
  const [open, setOpen] = useState(false);//模态框的开关
  const [productId, setProductId] = useState<number>();
  const [serverSideData1, setServerSideData1] = useState(serverSideData);
  const [messageApi, contextHolder] = message.useMessage();
  //模态框关闭
  const hideModal = (e: any) => {
    e.stopPropagation()
    e.preventDefault()
    setOpen(false);
  };
  const failed = () => {
    messageApi.open({
      type: 'error',
      content: 'ネットワーク異常です,あとでお試しください',
      className: 'custom-class',
      style: {
        marginTop: '40vh',
      },
    });
  };
  const handleModalDelete = () => {
    request("/api/secure/deleteWishListByProductId", { params: { productId } }).then(data => {
      if (data.result) {
        setServerSideData1(serverSideData1.filter(item => {
          return item.pid !== productId;
        }))
      } else {
        failed()
      }
      setOpen(false);
    })
  }
  const handleDelete = (pid: number) => {//目前只是模拟删除
    //先给serversidedata减少值，然后改变data,同时上传服务器要砍掉哪个
    console.log(pid);
    setProductId(pid);
    setOpen(true);
    // setData(serverSideData1.map((item, index: number) => {
    //   return ({
    //     key: index, img: <img style={{ width: 70, height: 70 }} src={item.imgSrc} />, description: <a style={{ fontSize: 12 }} href={item.href}>{item.description}</a>,
    //     price: <span style={{ color: '#f00', fontWeight: 600 }}>{`¥${NumToString(item.price)}`}</span>, stockInfo: '在庫有り.',
    //     action: <Space size="middle"><a onClick={() => handleDelete(item.pid)}>削除</a> </Space>
    //   })
    // }))
  }

  useEffect(() => {
    setData(serverSideData1.map((item, index: number) => {
      return ({
        key: index, img: <img style={{ width: 70, height: 70 }} src={item.imgSrc} />, description: <a style={{ fontSize: 12 }} href={item.href}>{item.description}</a>,
        price: <span style={{ color: '#f00', fontWeight: 600 }}>{`¥${NumToString(item.price)}`}</span>, stockInfo: '在庫有り.',
        action: <Space size="middle"><a onClick={() => handleDelete(item.pid)}>削除</a> </Space>
      })
    }))
  }, [])
  useEffect(() => {
    console.log("in1")
    setData(serverSideData1.map((item, index: number) => {
      return ({
        key: index, img: <img style={{ width: 70, height: 70 }} src={item.imgSrc} />, description: <a style={{ fontSize: 12 }} href={item.href}>{item.description}</a>,
        price: <span style={{ color: '#f00', fontWeight: 600 }}>{`¥${NumToString(item.price)}`}</span>, stockInfo: '在庫有り.',
        action: <Space size="middle"><a onClick={() => handleDelete(item.pid)}>削除</a> </Space>
      })
    }))
  }, [serverSideData1])

  return (
    <div>
      <div className={styles.mainTitle}>お気に入りアイテム一覧</div>
      {contextHolder}

      <Table locale={{
        emptyText: () =>
          <div className={styles.empty}>
            <div className={styles.top}>
              <div>
                <h3>お気に入りアイテムは登録されていません。</h3>
                <h4>お気に入りアイテムを登録して、いつでも簡単に一覧でチェックできます。</h4>
                {/* <a href="">お気に入りアイテムの登録方法はこちら</a> */}
              </div>
            </div>
            <div className={styles.display}>
              <a href="/" className={styles.btn}>
                ＞ トップページ
              </a>
              <a href="/account?key=dashboard" className={styles.btn}>
                ＞ マイページトップ
              </a>
            </div>
          </div>
      }}
        dataSource={data} style={{ width: 810 }} bordered={true} pagination={{ hideOnSinglePage: true }}>
        <Column title="商品名" dataIndex="img" key="img" />
        <Column title="製品紹介です" dataIndex="description" key="description" />
        <Column title="価格" dataIndex="price" key="price" />
        <Column title="在庫情報" dataIndex="stockInfo" key="stockInfo" />
        <Column
          title="操作"
          key="action"
          dataIndex="action"
        /> </Table>
      {/* {data.length>0?<Table locale={{ emptyText: ()=> <div>{'仮無数の根拠です'}</div>  }}
      dataSource={data} style={{ width: 810 }} bordered={true} pagination={{ hideOnSinglePage: true }}>
        <Column title="商品名" dataIndex="img" key="img" />
        <Column title="製品紹介です" dataIndex="description" key="description" />
        <Column title="価格" dataIndex="price" key="price" />
        <Column title="在庫情報" dataIndex="stockInfo" key="stockInfo" />
        <Column
          title="操作"
          key="action"
          dataIndex="action"
        />
      </Table>:null}  */}

      <Modal
        centered
        open={open}
        closeIcon={null}
        onOk={
          handleModalDelete
        }
        onCancel={hideModal} okText='削除確定です'
        cancelText="削除放棄です" >
        <div style={{
          textAlign: 'center', fontSize: 16, paddingBottom: 15,
          fontWeight: 700,
        }}>該当を削除されることになりますか?</div>
      </Modal>

    </div>
  )

};


export default App;


