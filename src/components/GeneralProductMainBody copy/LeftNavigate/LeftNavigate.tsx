import React, { Dispatch, SetStateAction } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import styles from './LeftNavigate.less'
import { engToJap_first, engToJap_second } from '@/constants/engToJap';
import { Input } from 'antd';
const { Search } = Input;
type MenuItem = Required<MenuProps>['items'][number];
interface Props {
    navLinkData: any,
    mode?: string,
    productCnt: number,
    setParam: Dispatch<SetStateAction<string>>,
    setFirstLevelCategory: Dispatch<SetStateAction<string>>,
    setSecondLevelCategory: Dispatch<SetStateAction<string>>,
    setTitle: Dispatch<SetStateAction<string>>
}


function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}


const App: React.FC<Props> = (props) => {
    const firstLevelKeys = Object.keys(engToJap_first);
    const { navLinkData, productCnt, setParam, setTitle, setFirstLevelCategory, setSecondLevelCategory } = props
    // console.log(navLinkData)
    const defaultOpenKeys: string[] = [];
    const buildItem = () => {
        const items: MenuProps['items'] = [];
        for (let key in navLinkData) {
            if (navLinkData[key]['url'] !== undefined) {
                // console.log('in', key)
                items.push(getItem(<div className={styles.header} >{navLinkData[key]['name']}</div>, key))
                defaultOpenKeys.push(key)
            } else {
                let insideItems = []
                //这个很奇怪的格式，第一个属性是放在上层的
                let flag = true;
                let firstParam//getItem的第一个属性
                // let 
                // eslint-disable-next-line guard-for-in
                for (let newKey in navLinkData[key]) {
                    if (flag) {
                        // eslint-disable-next-line @typescript-eslint/no-use-before-define
                        firstParam = <div onClick={() => handleHeaderClick(newKey)} className={styles.header}><div >{navLinkData[key][newKey]['name']}</div></div>;
                        flag = !flag
                        continue;
                    }

                    insideItems.push(getItem(<div className={styles.body} >{navLinkData[key][newKey]['name']}</div>, newKey))
                }
                items.push(getItem(firstParam, key, null, insideItems))
                defaultOpenKeys.push(key)
            }
        }
        return items;
    }
    // 根节点点击事件
    const handleHeaderClick = (key: string) => {
        if (key === 'generalproduct') {
            setSecondLevelCategory('');
            setFirstLevelCategory('');
            setTitle(' レディース')
           
            return;
        }
        setSecondLevelCategory('');
        setFirstLevelCategory(key);
        setTitle(engToJap_first[key])
    }
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        if (e.keyPath.length === 1) {
            setFirstLevelCategory("setUp");
            setSecondLevelCategory('');
            setTitle(engToJap_first['setUp'])
        } else {
            if (firstLevelKeys.includes(e.key)) {
                setFirstLevelCategory(e.key);
                setSecondLevelCategory('');
                setTitle(engToJap_first[e.key])
            } else {
                if (e.key !== 'menFashion') {
                    setFirstLevelCategory(e.keyPath[1]);
                    setSecondLevelCategory(e.key);
                    setTitle(engToJap_second[e.key])
                } else {
                    setFirstLevelCategory('girlsLoveGeneral');
                    setSecondLevelCategory(e.key);
                    setTitle(engToJap_second[e.key])
                }
            }
        }
    };
    const handleSearch = (e: string) => {
        console.log(e)
        setParam(e.trim());
    }
    buildItem()
    return (
        <div style={{ paddingLeft: 15 }}>
            <div className={styles.info}>
                <p>対象商品</p>
                <p><b>
                    {productCnt}点</b></p>
            </div>
            <div >
                <Search placeholder="キーワードで探す" onSearch={handleSearch} enterButton
                    style={{ width: 200, height: 50 }} />
            </div>
            <h3 className={styles.title}>ITEMアイテム</h3>
            <Menu className={styles.container}
                onClick={onClick}
                style={{ width: 220 }}
                defaultOpenKeys={['generalProduct']}
                inlineIndent={6}
                mode="inline"
                items={buildItem()}
            />
        </div>

    );
};

export default App;