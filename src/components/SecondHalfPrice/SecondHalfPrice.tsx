import React from 'react';
import styles from './SecondHalfPrice.less'
import TimeCount from './TimeCount/index';
import { useEffect, useState } from 'react';
import { request } from '@umijs/max';
import ReactVisibilitySensor from 'react-visibility-sensor';
import PictureForSecondHalf from './PictureForSecondHalf/index';
interface Props {
}
const App: React.FC<Props> = (props) => {
    const [pictureData, setPictureData] = useState([]);
    const [page, setPage] = useState(1);//到了加载这个位置就加一页，触发effect加载新的数据
    const [maxPage, setMaxPage] = useState(1);
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        if(page===1){
            request(`/api/getSecondHalfPageData/${page}`).then(data => {
                if (data.result) {
                    setMaxPage(Math.ceil(data.data.number / 60));

                    console.log(data)
                    setPictureData(data.data.secondHalfPageData);
                }
            })
        }else{
            request(`/api/getSecondHalfPageData/${page}`).then(data => {
                if (data.result) {
                    let newData=[...pictureData,...data.data.secondHalfPageData]
                    setPictureData(newData);
                }
            })
        }




        if (page === maxPage) {//证明是最后一页了,ajax请求失败
            setVisible(false)
        }
    }, [page])
    const buildShowingPicture = () => {
        return pictureData.map((item, index: number) => {
            return <div key={index} className={styles.picture}>
                <PictureForSecondHalf data={item} />
            </div>
        })
    }
    return (
        <div style={{ margin: '0 auto', width: 1200 ,marginBottom:30,marginTop:60}}>
            <TimeCount expire={1} />
            <div className={styles.container} style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', width: 1200 }}>
                {pictureData ? buildShowingPicture() : null}
            </div>


            <ReactVisibilitySensor onChange={(isVisible: boolean) => {
                console.log('changed' + isVisible)
                if (isVisible && page < maxPage) {
                    setPage(page + 1)
                }
            }} >
                {visible ? <div>
                    <img style={{ width: '50%' }} src='/loading.gif' />
                    <img style={{ width: '50%' }} src='/loading.gif' />
                    <h3 style={{
                        padding: 0, margin: 0, fontSize: 24,
                        textAlign: 'center'
                    }}>
                        ロード中です...
                    </h3></div> : <h3 style={{
                        padding: 0, margin: 0, fontSize: 24,
                        textAlign: 'center'
                    }}>
                    すべてロードされています
                </h3>}

            </ReactVisibilitySensor>
        </div>
    )
};
export default App;