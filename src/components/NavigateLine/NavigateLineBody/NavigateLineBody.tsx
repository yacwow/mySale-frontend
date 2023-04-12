import React, { useState } from 'react';
import { NavLink } from 'umi';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { engToJap_first, engToJap_second } from '@/constants/engToJap';
import {
  FireOutlined,
} from '@ant-design/icons';
import { useModel, history } from '@umijs/max';

interface Props {
  navLinkUrl: any,
  mode?: string
}



const App: React.FC<Props> = (props) => {
  const firstLevelKeys = Object.keys(engToJap_first);
  const { navLinkUrl, mode = "horizontal" } = props;
  const { firstLevelCategory, setFirstLevelCategory, secondLevelCategory, setTitle, setSecondLevelCategory } = useModel("generalSale");
  //   console.log(navLinkUrl)
  const [current, setCurrent] = useState('');
  const buildItems = () => {
    const items: MenuProps['items'] = [];
    // eslint-disable-next-line guard-for-in
    for (let key in navLinkUrl) {
      let newKeys = Object.keys(navLinkUrl[key]);
      // console.log(newKeys.length===2);
      if (newKeys[0] === "url") {
        let map: any = new Map();
        map.label = (<NavLink to={"/" + navLinkUrl[key].url} >
          {navLinkUrl[key].name}
          {/* {newKeys.hot?<FireOutlined style={{ fontSize: '16px', color: '#eb2f96' }}/>:null} */}
        </NavLink>);
        // console.log(key);
        map.key = `${key}`;
        // console.log(map);
        items.push(map);
      } else {
        let str = newKeys[0];
        // console.log(str)
        let firstLine = navLinkUrl[key][str];
        let map: any = new Map();
        map.label = (<NavLink to='' onClick={async () => {
          await setFirstLevelCategory(firstLine.url.split("/")[1]);
          history.push("/" + firstLine.url)
          setTitle(engToJap_first[str])
        }}>
          {firstLine.name}
        </NavLink>);
        map.key = str;
        let children = [];
        for (let i = 1; i < newKeys.length; i++) {
          let insideStr = newKeys[i];
          let insideLine = navLinkUrl[key][insideStr];
          let insideMap: any = new Map();
          insideMap.label = (<NavLink to=''
            onClick={async () => {
              await setFirstLevelCategory(insideLine.url.split("/")[1]);
              await setSecondLevelCategory(insideLine.url.split("/")[2])
              history.push("/" + insideLine.url)
            }}

          >
            {insideLine.name}
            {insideLine.hot ? <FireOutlined style={{ fontSize: '16px', color: '#eb2f96' }} /> : null}
          </NavLink>);
          insideMap.key = insideStr;
          // console.log(insideStr);
          children.push(insideMap);
        }
        map.children = children;
        // console.log(map);
        items.push(map);
      }
      // console.log(items);
    }
    return items;
  }
//    // 根节点点击事件
//   const handleHeaderClick = (key: string) => {
//     console.log(key)
//     if (key === 'generalproduct') {
//         setSecondLevelCategory('');
//         setFirstLevelCategory('');
//         setTitle(' レディース')        
//         return;
//     }
//     setSecondLevelCategory('');
//     setFirstLevelCategory(key);
//     setTitle(engToJap_first[key])
// }
  const onClick: MenuProps['onClick'] = async (e) => {
    console.log('click ', e);
    setCurrent(e.key);

    if (e.key === 'bestSeller' || e.key === "timeSeller" || e.key === "dailyNew") {
      return;
    } else {
      if (e.keyPath.length === 1) {
       await setFirstLevelCategory("setUp");
       await setSecondLevelCategory('');
       await setTitle(engToJap_first['setUp'])
      } else {
        if (firstLevelKeys.includes(e.key)) {
          await  setFirstLevelCategory(e.key);
          await  setSecondLevelCategory('');
          await  setTitle(engToJap_first[e.key])
        } else {
          if (e.key !== 'menFashion') {
            await  setFirstLevelCategory(e.keyPath[1]);
            await  setSecondLevelCategory(e.key);
            await setTitle(engToJap_second[e.key])
          } else {
            await  setFirstLevelCategory('girlsLoveGeneral');
            await setSecondLevelCategory(e.key);
            await  setTitle(engToJap_second[e.key])
          }
        }
      }
    }
  };

  return (

    <Menu onClick={onClick}
      // onMouseOver={handleMouseOver}
      selectedKeys={[current]}
      mode={mode}
      items={buildItems()} />

  );

};

export default App;