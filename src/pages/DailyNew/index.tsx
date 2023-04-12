import DailyNewComp from '@/components/DailyNewComp';
import LayoutWithOutLeftNavigate from '@/components/Layout/LayoutWithOutLeftNavigate';

const DailyNew: React.FC = () => {
  return (
    <div >
      <LayoutWithOutLeftNavigate>
        <div style={{ width: 1300, margin: '0 auto' }}>
          <DailyNewComp />
        </div>
      </LayoutWithOutLeftNavigate>
    </div>


  );
};

export default DailyNew;