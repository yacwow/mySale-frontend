import WearMatchMainBody from '@/components/WearMatchMainBody';
import LayoutWithOutLeftNavigate from '@/components/Layout/LayoutWithOutLeftNavigate';

const TimeSeller: React.FC = () => {
  return (
    <LayoutWithOutLeftNavigate >
      <div style={{ width: 1300, margin: '0 auto' }}>
        <WearMatchMainBody />
      </div>
    </LayoutWithOutLeftNavigate>


  );
};

export default TimeSeller;