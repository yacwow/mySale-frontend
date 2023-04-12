import BestSellerMainBody from '@/components/BestSellerMainBody';
import LayoutWithOutLeftNavigate from '@/components/Layout/LayoutWithOutLeftNavigate';

const BestSeller: React.FC = () => {

  return (
    <div >
      <LayoutWithOutLeftNavigate>
        <div style={{ width: 1300, margin: '0 auto' }}>
          <BestSellerMainBody />
        </div>
      </LayoutWithOutLeftNavigate>
    </div>


  );
};

export default BestSeller;
