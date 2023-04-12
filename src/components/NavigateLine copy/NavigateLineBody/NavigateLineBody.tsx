import React, { useState } from 'react';
import { NavLink } from 'umi';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import {
  FireOutlined,
} from '@ant-design/icons';

interface Props {
  navLinkUrl:any,
  mode?:string
}



const App: React.FC<Props> = (props) => {
  const{navLinkUrl,mode="horizontal"}=props;
//   console.log(navLinkUrl)
  const [current, setCurrent] = useState('');
  const buildItems=()=>{
    const items: MenuProps['items'] = [];
    // eslint-disable-next-line guard-for-in
    for (let key in navLinkUrl) {
      let newKeys = Object.keys(navLinkUrl[key]);
      // console.log(newKeys.length===2);
      if (newKeys[0] === "url") {
        let map:any = new Map();
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
        let firstLine = navLinkUrl[key][str];
        let map:any = new Map();
        map.label = (<NavLink to={"/" + firstLine.url} >
          {firstLine.name}
        </NavLink>);
        map.key = str;
        let children = [];
        for (let i = 1; i < newKeys.length; i++) {
          let insideStr = newKeys[i];
          let insideLine = navLinkUrl[key][insideStr];
          let insideMap:any = new Map();
          insideMap.label = (<NavLink to={"/" + insideLine.url}>
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
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
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