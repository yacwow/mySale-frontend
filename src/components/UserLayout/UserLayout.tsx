import { useModel } from '@umijs/max';
import { NavLink } from '@umijs/max';
import React from 'react';
import LayoutWithOutLeftNavigate from '../Layout/LayoutWithOutLeftNavigate';
import LeftList from '../User/LeftList';
import styles from './UserLayout.less';
interface Props {
  children: React.ReactNode;
}
const App: React.FC<Props> = (props) => {
  const { children } = props;
  const { title } = useModel('account');
  return (
    <LayoutWithOutLeftNavigate>
      <div className={styles.container}>
        <div className={styles.navigate}>
          <span>
            <NavLink to="/">ホーム</NavLink>
          </span>
          <span>&gt;</span>
          <span>{title}</span>
        </div>
        <h2>{title}</h2>
        <div className={styles.float}>
          <LeftList></LeftList>
          {children}
        </div>
      </div>
    </LayoutWithOutLeftNavigate>
  );
};
export default App;
