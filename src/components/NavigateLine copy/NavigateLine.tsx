import React from 'react';
import styles from './NavigateLine.less'
import NavigateLineBody from './NavigateLineBody';
interface Props {
  navLinkUrl:any
}


const App: React.FC<Props> = (props) => {
  const {navLinkUrl}=props;
  return (
    <div className={styles.container}>
      <NavigateLineBody navLinkUrl={navLinkUrl} />
    </div>
  );

};

export default App;