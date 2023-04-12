import React, { Dispatch, SetStateAction } from 'react';
import { OrderTypeHeaderDataList } from '@/constants';
//@ts-ignore
import $ from 'jquery'
import styles from './OrderTypeHeader.less';
interface Props {
  selectItem: string,
  setSelectItem: Dispatch<SetStateAction<string>>,
}


const App: React.FC<Props> = (props) => {
  const { selectItem, setSelectItem } = props;


  const changeActiveLi1 = (key: string, index: number) => {
    console.log('in2')
    setSelectItem(key);
    let ui = $('.orderTypeHeader').children();
    ui.removeClass(styles.active)
    ui.eq(index).addClass(styles.active);
  }
  

  const buildLi = () => {
    return OrderTypeHeaderDataList.map((item, index) => {
      if (item.url === selectItem) {
        return (<li key={index}
          onClick={() =>{console.log(1); changeActiveLi1(item.url, index)}}
          className={styles.active}>
          {item.name}
        </li>)
      } else {
        return (<li key={index}
          onClick={() =>{console.log(1); changeActiveLi1(item.url, index)}}>
          {item.name}
        </li>)
      }
    })
  }

  return (
    <div className={styles.container} >
      <span>並べ替え:</span>
      <ul className={`${styles.itemRanking} orderTypeHeader`}>
        {buildLi()}
      </ul>
    </div>
  )
};
export default App;