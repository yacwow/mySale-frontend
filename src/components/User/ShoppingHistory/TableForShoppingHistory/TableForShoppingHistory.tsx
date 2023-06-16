import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Button, message, Modal, Table, Tooltip } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import NumToString from '@/utils/NumToString';
import { NavLink } from '@umijs/max';
import styles from './TableForShoppingHistory.less';
import { formatTimeFromStr } from '@/utils/format';
import './test.css';
import { useModel } from '@umijs/max';
import { request } from '@umijs/max';

const { Column } = Table;
//喜欢里面查出来的都是有货的才发过来
interface DataType {
  key: number;
  productInfo: JSX.Element;
  price: JSX.Element;
  status: JSX.Element;
  action: JSX.Element;
}
//传过来的时候的数据和生成的数据有点区别，到时候在组装

interface Props {
  serverSideData: any;
  setTitle: Dispatch<SetStateAction<string>>;
  setDeleteNum: Dispatch<SetStateAction<number>>;
  deleteNum: number;
}
const englishToJapan = {
  unpaid: '保留中',
  paid: '支払い済み',
  delivery: '配送済み',
  cancelled: 'キャンセル',
};

const App: React.FC<Props> = (props) => {
  const { serverSideData, setTitle, setDeleteNum, deleteNum } = props;
  const { data, setData } = useModel('account');
  console.log(serverSideData);
  const [tableData, setTableData] = useState<DataType[]>(); //展示在table上的具体数据
  const [open, setOpen] = useState(false); //MODAL
  const [textValue, setTextValue] = useState(''); //弹出框数据
  const [messageApi, contextHolder] = message.useMessage();
  const deleteSuccess = () => {
    messageApi.open({
      type: 'success',
      content: '削除成功です',
      className: 'custom-class',
      style: {
        marginTop: '30vh',
      },
    });
  };

  const failed = () => {
    messageApi.open({
      type: 'warning',
      content: 'ネットワーク異常です',
      className: 'custom-class',
      style: {
        marginTop: '30vh',
      },
    });
  };
  let summary: JSX.Element | undefined;
  // console.log(serverSideData)
  let totalAmount = serverSideData.totalPayment;
  let len = serverSideData.productData.length;
  let paidStatus = serverSideData.paidStatus;
  summary = (
    <td className={styles.invoiceNum}>
      <NavLink
        to={`/account/invoiceComp/${serverSideData.invoiceNum}`}
        onClick={() => {
          setTitle('お買物履歴詳細');
        }}
      >
        <b>注文NO.：</b>
        {serverSideData.invoiceNum}
      </NavLink>
      &nbsp;&nbsp;&nbsp;&nbsp;<b>ご注文日付と時間：</b>
      <span>{formatTimeFromStr(serverSideData.invoiceDate)}</span>
    </td>
  );

  //传入数据变了之后渲染变了
  const handleDataChange = () => {
    setTableData(
      serverSideData.productData.map((item: any, index: number) => {
        return {
          key: index,
          productInfo: (
            <div className={styles.container}>
              <a
                href={item.href}
                title={item.description}
                target="_blank"
                rel="noreferrer"
              >
                <img src={item.imgSrc} />
              </a>
              <div className={styles.description}>
                <div>
                  <a href={item.href} target="_blank" rel="noreferrer">
                    {item.description}
                  </a>
                </div>
                <span className={styles.bottom}>
                  <span>カラー:{item.color}</span>

                  <span>サイズ:{item.size} </span>

                  <span>
                    ¥ {NumToString(item.price)} * {item.amount}
                  </span>
                </span>
              </div>
            </div>
          ),
          price: (
            <span className={styles.total}>{`￥${NumToString(
              totalAmount,
            )}`}</span>
          ),
          status: (
            <span className={styles.type}>{englishToJapan[paidStatus]}</span>
          ),
          action: (
            <div className={styles.icon}>
              <div className={styles.flex}>
                <a href="mailto:haochenbc@gmail.com?subject=test&amp;subject=テーマです&amp;body=中身です">
                  <Tooltip placement="topLeft" title={'メールを送ります。'}>
                    <MailOutlined />
                  </Tooltip>
                </a>
                {paidStatus === 'unpaid' ? (
                  <>
                    <NavLink to={`/repayment/${serverSideData.invoiceNum}`}>
                      今すぐ支払う
                    </NavLink>
                    <div
                      className={styles.delete}
                      onClick={async () => {
                        await setDeleteNum(serverSideData.invoiceNum);
                        setOpen(true);
                      }}
                    >
                      キャンセル
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          ),
        };
      }),
    );
  };

  useEffect(() => {
    handleDataChange();
  }, [serverSideData]);
  const handleDeleteInvoice = () => {
    //发送给服务器 deleteNum
    console.log(deleteNum, textValue);
    console.log(data);
    request(`/api/secure/changeInvoiceStatus/${deleteNum}`, {
      params: {
        cancelReason: textValue,
      },
    }).then((serverData) => {
      if (serverData.result) {
        let newData = structuredClone(data).filter((item: any) => {
          return item.invoiceNum !== deleteNum;
        });
        setData(newData);
        deleteSuccess();
      } else {
        failed();
      }
      setOpen(false);
      setTextValue('');
    });
  };

  const column = [
    {
      title: '商品情報',
      dataIndex: 'productInfo',
      key: 'productInfo',
      width: 380,
      align: 'center',
    },
    {
      title: '商品金額',
      dataIndex: 'price',
      key: 'price',
      align: 'center',
      //@ts-ignore
      onCell: (record, index) => {
        if (index > 0) {
          return { rowSpan: 0 };
        } else {
          return { rowSpan: len };
        }
      },
    },
    {
      title: '注文状態',
      dataIndex: 'status',
      key: 'status',
      align: 'center',
      //@ts-ignore
      onCell: (record, index) => {
        if (index > 0) {
          return { rowSpan: 0 };
        } else {
          return { rowSpan: len };
        }
      },
    },
    {
      title: '関連操作',
      dataIndex: 'action',
      key: 'action',
      align: 'center',
      width: 120,
      //@ts-ignore
      onCell: (record, index) => {
        if (index > 0) {
          return { rowSpan: 0 };
        } else {
          return { rowSpan: len };
        }
      },
    },
  ];
  return (
    <div style={{ marginBottom: 20, borderBottom: '2px dotted black' }}>
      {contextHolder}
      <Modal centered open={open} closable={false} footer={null}>
        <div className={styles.modal}>
          <div>
            <h2>ご注文をキャンセルしますか？</h2>
          </div>
          <h3>
            <NavLink to={`/repayment/${deleteNum}`}>
              クレジット決済はできない場合、
              <br />
              <i>
                <span>「コチラ」</span>
              </i>
              をクリックして、その他の決済方法を選択ください。
            </NavLink>
          </h3>
          <div className={styles.reason}>キャンセル理由を入力してください</div>
          <textarea
            className={styles.text}
            value={textValue}
            onChange={(e) => {
              setTextValue(e.target.value);
            }}
          ></textarea>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: 20,
            }}
          >
            <Button
              className={styles.first}
              onClick={() => {
                setOpen(false);
              }}
            >
              いいえ
            </Button>
            <Button
              className={styles.second}
              onClick={() => {
                handleDeleteInvoice();
              }}
            >
              はい
            </Button>
          </div>
        </div>
      </Modal>
      <Table
        dataSource={tableData}
        columns={column}
        style={{ width: 810 }}
        bordered={true}
        sticky
        locale={{ emptyText: '仮無数の根拠です' }}
        pagination={false}
        summary={() => (
          <Table.Summary>
            <Table.Summary.Row>{summary}</Table.Summary.Row>
          </Table.Summary>
        )}
      >
        <Column title="商品情報" dataIndex="productInfo" key="productInfo" />
        <Column title="商品金額" dataIndex="price" key="price" align="center" />
        <Column
          title="注文状態"
          dataIndex="status"
          key="status"
          align="right"
        />
        <Column
          title="関連操作"
          key="action"
          dataIndex="action"
          align="center"
        />
      </Table>
    </div>
  );
};

export default App;
