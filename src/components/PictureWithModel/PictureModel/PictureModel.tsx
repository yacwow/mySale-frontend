import NumToString from '@/utils/NumToString';
import React from 'react';
import styles from "./PictureModel.less";
// import {Icon} from 'antd';
// 用这个组件的时候，需要上层组件的position：relative！！！！！！！！！！！
interface Props {
    content: {
        title: string,
        price: number
    },
}
const App: React.FC<Props> = (props) => {
    const { content } = props;
    return (
        <div className={styles.info}>
            <span className={styles.actions}>
                <div className={styles.div} >
                    <div style={{width:'100%',overflow:'hidden',textOverflow:'ellipsis'}}>
                        <p className={styles.title}>{content.title}</p>
                        <p className={styles.price}>{`￥${NumToString(content.price)} 税込`}</p>
                    </div>

                </div>

                {/* <Icon type='eye'/>
        <Icon type='delete'/> */}
            </span>
        </div>

    )
};
export default App;