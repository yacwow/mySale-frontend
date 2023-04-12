import React, { Dispatch, SetStateAction } from 'react';
import { itemRankingList } from '@/constants'
import styles from './ItemRankingHeader.less';
import { dataList } from '../type';
import { useModel } from '@umijs/max';
interface Props {
    selectItem: string,
    setSelectItem: Dispatch<SetStateAction<keyof(dataList)>>,
    myTimer: any ;
}


const App: React.FC<Props> = (props) => {
    const { selectItem, setSelectItem ,myTimer} = props;
    const { firstLevelCategory, setFirstLevelCategory, secondLevelCategory, setSecondLevelCategory } = useModel("generalSale");
    let liList: JSX.Element[] = [];
    const changeActiveLi = (e: any) => {
        console.log(e.target, e.target.getAttribute('value'));
        let url= e.target.getAttribute('value');
        if(myTimer.current){
            console.log("inclear timer")
            clearInterval(myTimer.current);
        }
        setSelectItem(url);
        let ui = document.querySelector('.itemRanking')?.children;
        //@ts-ignore
        for (let li of ui) {
            li.removeAttribute('class')
        }
        // console.log(ui);
        e.target.setAttribute('class', styles.active);

        //改变general搜索的选项,先判断是不是二级路由

        if(url==='bagGoods'){
            //是2级路由
            setFirstLevelCategory("generalGoods")
            setSecondLevelCategory("bagGoods")
        }else if(url==='indoorWearInner'){
            setFirstLevelCategory("generalInner")
            setSecondLevelCategory("indoorWearInner")
        }else if(url==='swimwearInner'){
            setFirstLevelCategory("generalInner")
            setSecondLevelCategory("swimwearInner")
        }else{
            setFirstLevelCategory(url);
        }

    }

    const buildLi = () => {
        let keys = Object.keys(itemRankingList);
        // eslint-disable-next-line guard-for-in
        for (let key of keys) {
            // console.log(key,itemRankingList[key])
            //@ts-ignore
            let map = itemRankingList[key];
            // map:{url:"TShirt", name:"トップス" },
            let li;
            if (key === selectItem) {
                li = <li key={key}
                    onClick={changeActiveLi} value={key}
                    className={styles.active}
                >
                    {map.name}
                </li>
            } else {
                li = <li key={key}
                    onClick={changeActiveLi} value={key}
                >
                    {map.name}
                </li>
            }


            liList.push(li);
        }
        return liList
    }
    return (
        <div className={styles.container} >
            <div>
                <h2 >ITEM RANKING</h2>
                <h3 >アイテム別ランキング</h3>
            </div>
            <ul className={`${styles.itemRanking} itemRanking`}>
                {buildLi()}
            </ul>
        </div>
    )
};
export default App;