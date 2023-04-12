import React, { Dispatch, SetStateAction } from 'react';
import { CategoryHeaderDateList } from '@/constants';
//@ts-ignore
import $ from 'jquery'
import styles from './CategoryHeader.less';
interface Props {
    selectItem: string,
    setSelectItem: Dispatch<SetStateAction<string>>,
}


const App: React.FC<Props> = (props) => {
    const { selectItem, setSelectItem } = props;

    const changeActiveLi = (key: string, index: number) => {
        console.log('in')
        setSelectItem(key);
        let ui = $('.categoryHeader').children();
        ui.removeClass(styles.active)
        ui.eq(index ).addClass(styles.active);
    }

    const buildLi = () => {
        return CategoryHeaderDateList.map((item, index) => {
            if (item.url === selectItem) {
                return (<li key={index}
                    onClick={() => changeActiveLi(item.url, index)}
                    className={styles.active}>
                    {item.name}
                </li>)
            } else {
                return (<li key={index}
                    onClick={() => changeActiveLi(item.url, index)}>
                   {item.name}
                </li>)
            }
        })
    }
    return (
        <div className={styles.container} >
            <ul className={`${styles.itemRanking} categoryHeader`}>
                {buildLi()}
            </ul>
        </div>
    )
};
export default App;