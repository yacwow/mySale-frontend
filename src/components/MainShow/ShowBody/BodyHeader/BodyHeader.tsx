import React from 'react';

import { BodyHeaderList } from '@/constants';
import styles from './BodyHeader.less';
interface Props {
  commentNumber?: number;
  setSelectItem: any;
  selectItem: any;
}
// console.log(styles)

const App: React.FC<Props> = (props) => {
  const { commentNumber = 0, setSelectItem, selectItem } = props;
  const handleClick = (index: number) => {
    setSelectItem(index);
  };
  const buildHeader = () => {
    return BodyHeaderList.map((item, index: number) => {
      return (
        <li
          key={index}
          className={index === selectItem ? `${styles.active}` : ''}
          onClick={() => {
            handleClick(index);
          }}
        >
          {item}
          {index === 4 ? `/${commentNumber}件` : ''}
        </li>
      );
    });
  };
  return (
    <div className={styles.container}>
      <ul>{buildHeader()}</ul>
    </div>
  );
};
export default App;
