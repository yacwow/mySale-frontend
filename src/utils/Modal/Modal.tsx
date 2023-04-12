import React, { useState } from 'react';
import { Modal } from 'antd';
interface Props{
    information:string[];
}
const App: React.FC <Props>= (props) => {
    const {information}=props;
    const [open, setOpen] = useState(false);

    const showModal = (e: any) => {
        e.stopPropagation()
        e.preventDefault()
        setOpen(true);
    };

    const hideModal = (e: any) => {
        e.stopPropagation()
        e.preventDefault()
        setOpen(false);
    };
    return (
        <Modal
            open={open}
            onOk={hideModal}
            onCancel={hideModal} okText='確認'
            cancelText="閉じる" >
            <div style={{
                textAlign: 'center', fontSize: 16, paddingBottom: 15,
                fontWeight: 700,
            }}>発送日</div>
            <div>*商品配送予定日：通常商品は2～7営業日以内ご発送させていただきます。
                現時期コロナウイルスの影響により、配送は少し遅延が発生する場合
                もございます。ご理解の程よろしくお願いします。</div>
        </Modal>
    );
};

export default App;