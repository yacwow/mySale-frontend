import React, { Dispatch, SetStateAction } from 'react';

import styles from './RecommendAndTimeSellerHeader.less';
interface Props {
    selectItem:string,
    setSelectItem:Dispatch<SetStateAction<string>>,
    dataList:any,
}


const App: React.FC<Props> = (props) => {
    const{selectItem,setSelectItem,dataList}=props;


    let liList:JSX.Element[] = [];
    const changeActiveLi = (e:any) => {
        // console.log(e.target, e.target.getAttribute('value'));
        setSelectItem(e.target.getAttribute('value'));
        let ui=document.querySelector('.bestSellerAndNewProduct')?.children;
        //@ts-ignore
        for(let li of ui){
            li.removeAttribute('class')
        }
        // console.log(ui);
        e.target.setAttribute('class', styles.active);
    }

    const buildLi = () => {
        let keys = Object.keys(dataList);
        // eslint-disable-next-line guard-for-in
        for (let key of keys) {
            // console.log(key,selectItem)
//@ts-ignore
            let map = dataList[key];
            // map:{url:"TShirt", name:"トップス" },
            let li;
            if(key===selectItem){
                li = <li key={key} 
                onClick={changeActiveLi} value={map.url}
                className={styles.active}
                >
                {map.name}
            </li>
            }else{
                li= <li key={key} 
                onClick={changeActiveLi} value={map.url}
                // className={styles.active}
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
            <ul className={`${styles.itemRanking} bestSellerAndNewProduct`}>
                {buildLi()}
            </ul>
        </div>
    )
};
export default App;