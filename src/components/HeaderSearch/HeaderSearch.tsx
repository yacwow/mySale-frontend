import React from 'react';
import styles from './HeaderSearch.less';
import { Input, AutoComplete, Button } from 'antd';
import { NavLink, useModel } from '@umijs/max';
import { useState, useRef } from 'react';
import { useEffect } from 'react';
import { request } from '@umijs/max';
import { engToJap_second } from '@/constants/engToJap';
const { Search } = Input;
interface Props {
}
const App: React.FC<Props> = (props) => {
    let timer = useRef<ReturnType<typeof setTimeout>>();
    const { num, invoiceNum } = useModel('isLogin')
    const [value, setValue] = useState('')

    useEffect(() => {
        console.log("in1")

    }, [])
    const [options, setOptions] = useState<{ value: string }[]>([]);

    const onSelect = (data: string) => {
        console.log('onSelect', data);
    };
    const onSearch = (value: string) => {
        setValue(value);
        clearTimeout(timer.current);

        timer.current = setTimeout(() => {
            console.log("我需要模糊查询", value);
            request("/api/fuzzySearchProduct", { params: { value } }).then(data => {
                if (data.result) {
                    let optionData = [];
                    if (data.data.data.length === 0) {
                        optionData = [{
                            value: "該当製品が見つかりませんので,検索範囲を広げてください"
                        }]
                        setOptions(optionData)
                    } else {
                        optionData = data.data.data.map((item, index: number) => {
                            return ({
                                value: item.productdescription,
                                label: (

                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <NavLink to={`/main/${item.idproduct}`}
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            見つかりました
                                            <span style={{ width: 100, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                                {item.productdescription.slice(0, 20)}...
                                            </span>
                                        </NavLink>
                                        <NavLink
                                            to={`/generalSale/${item.firstlevelcategory}/${item.secondlevelcategory}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            カテゴリです: {engToJap_second[item.secondlevelcategory]}
                                        </NavLink>
                                    </div>

                                ),
                            })
                        })

                        setOptions(optionData);
                        console.log(document.getElementsByClassName("popupClassName"))
                    }

                }
            })
        }, 1000);
        // setOptions
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.displayNone}>韓流 ファッション </h1>
            <div className={styles.wrapper}>

                <NavLink to="/">
                    <img src="/img/logo-zasale.png" alt="" />
                </NavLink>

                <div className={styles.search}>

                    <AutoComplete placeholder="キーワードの間にスペースで区切り、より確実な検索結果が得られる。"
                        className={styles.inside}
                        style={{ width: '100%', height: 40 }}
                        options={options}
                        allowClear value={value}
                        size='large'
                        popupClassName={styles.popup}
                        onSearch={onSearch} onSelect={onSelect} />
                    <Button size='large' style={{ background: '#EFE3CF' }}>検索</Button>
                </div>

                <div className={styles.userInfo}>
                    <NavLink to='/account/dashboard'>
                        <div className={styles.user}>
                            <img src="/top_user.jpg" alt="" />
                            <span>{invoiceNum}</span>
                        </div>
                    </NavLink>
                    <NavLink to='/cart'>
                        <div className={styles.user}>
                            <img src="/top_cart.gif" alt="" />
                            <span>{num}</span>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
};
export default App;

