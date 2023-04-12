import GeneralProductMainBody from '@/components/GeneralProductMainBody';
import LayoutWithOutLeftNavigate from '@/components/Layout/LayoutWithOutLeftNavigate';
import { useEffect } from 'react';

const GeneralSale: React.FC = () => {
  useEffect(() => {
    console.log("infjaiewjgia")
    // console.log(firstLevelCategory, secondLevelCategory)

    // request(`/api/generalSale?firstLevelCategory=${firstLevelCategory === '' ? 'girlsLoveGeneral' : firstLevelCategory}`).then((data) => {
    //   setTotalSize(data.data.total)
    //   setDataList(data.data.product);
    // })

  }, [])
  return (
    <div >
      <LayoutWithOutLeftNavigate>
        <div style={{ width: 1300, margin: '0 auto', paddingTop: 80 }}>
          <GeneralProductMainBody />
        </div>
      </LayoutWithOutLeftNavigate>
    </div>


  );
};

export default GeneralSale;