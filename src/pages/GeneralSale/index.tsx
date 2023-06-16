import GeneralProductMainBody from '@/components/GeneralProductMainBody';
import LayoutWithOutLeftNavigate from '@/components/Layout/LayoutWithOutLeftNavigate';
import { engToJap_first, engToJap_second } from '@/constants/engToJap';
import { useModel } from '@umijs/max';
import { useEffect } from 'react';

const GeneralSale: React.FC = () => {
  const { setFirstLevelCategory, setSecondLevelCategory, setTitle } =
    useModel('generalSale');
  useEffect(() => {
    // console.log(firstLevelCategory, secondLevelCategory)
    let pathArr = location.pathname.split('/');
    if (pathArr.length === 3) {
      setFirstLevelCategory(pathArr[2]);
      setTitle(engToJap_first[pathArr[2]]);
    } else if (pathArr.length === 4) {
      console.log('in11111');
      setFirstLevelCategory(pathArr[2]);
      setSecondLevelCategory(pathArr[3]);
      setTitle(engToJap_second[pathArr[3]]);
    }
  }, []);
  return (
    <div>
      <LayoutWithOutLeftNavigate>
        <div style={{ width: 1300, margin: '0 auto', paddingTop: 80 }}>
          <GeneralProductMainBody />
        </div>
      </LayoutWithOutLeftNavigate>
    </div>
  );
};

export default GeneralSale;
