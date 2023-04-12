import React from 'react';

import { BodyHeaderList } from '@/constants';
import $ from 'jquery'
import styles from './BodyHeader.less';
interface Props {
    commentNumber?:number,
    setSelectItem:any
}
// console.log(styles)

const App: React.FC<Props> = (props) => {
    const{commentNumber=0,setSelectItem}=props
    const handleClick=(index:number)=>{
        // console.log('in1',index)
        $('.selectItemForBodyHeader li').removeClass(`${styles.active}`)
        $('.selectItemForBodyHeader li').eq(index).addClass(`${styles.active}`)
        setSelectItem(index)
    }
    const buildHeader = () => {
        return BodyHeaderList.map((item, index: number) => {
            return (<li key={index} className={index === 0 ? `${styles.active}` : ''}
            
            onClick={()=>{
                handleClick(index)
            }}>
                {item}{index===4?`/${commentNumber}件`:''}
            </li>)
        })
    }
    return (
        <div className={styles.container}>
            <ul className='selectItemForBodyHeader'>{buildHeader()}</ul>
        </div>
    )
};
export default App;