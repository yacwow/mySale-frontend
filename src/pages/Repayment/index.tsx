import LayoutWithOutLeftNavigate from "@/components/Layout/LayoutWithOutLeftNavigate";
import Repayment from "@/components/Repayment";
import { history, request } from "@umijs/max";
import { useEffect, useState } from "react";
import { message } from 'antd';
const SalesPage: React.FC = () => {
    const [data, setData] = useState();
    const [messageApi, contextHolder] = message.useMessage();
    const [invoiceNum, setInvoiceNum] = useState<string>();
    const failed = () => {
        messageApi.open({
            type: 'warning',
            content: 'その領収書は見つかりませんでした。',
            className: 'custom-class',
            style: {
                marginTop: '30vh',
            },
        });
    };
    useEffect(() => {
        setInvoiceNum(window.location.pathname.split("/")[2]);
        request(`/api/secure/repayment/${window.location.pathname.split("/")[2]}`).then(data => {
            console.log(data)
            if (data.result) {
                if (data.code === 404) {
                    //没有数据，给个提示然后跳转主页
                    failed()
                    setTimeout(() => {
                        history.push('/home')
                    }, 1000);
                } else {
                    //正常
                    setData(data.data.serverSideData)
                }
            } else {
                history.push("/login")
            }
        })
    }, [])
    return (
        <LayoutWithOutLeftNavigate>
            {contextHolder}
            {data && invoiceNum ? <div style={{ width: 875, margin: '0 auto', marginTop: 130 }} >
                <Repayment serverData={data} invoiceNum={invoiceNum} />
            </div> : null}
        </LayoutWithOutLeftNavigate>
    );
};

export default SalesPage;