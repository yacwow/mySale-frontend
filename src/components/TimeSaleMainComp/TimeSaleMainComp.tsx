import { useModel } from '@umijs/max';
import React from 'react';
import TimeCountDown from './TimeCountDown';
import TimeSaleSortComp from './TimeSaleSortComp';
interface Props {
  dataList: any;
}
const App: React.FC<Props> = (props) => {
  const { dataList } = props;
  const { expireTime } = useModel('global');
  return (
    <div style={{ width: 1200, margin: '0 auto' }}>
      <div style={{ height: 680, marginTop: 80 }}>
        <img src="/timesale.webp" alt="" />
        {expireTime && (
          <TimeCountDown showDomStruct={true} expire={expireTime} />
        )}
      </div>

      <TimeSaleSortComp dataList={dataList} />
    </div>
  );
};
export default App;
