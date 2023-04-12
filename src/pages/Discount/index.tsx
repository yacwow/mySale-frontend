import DiscountPageMainBody from '@/components/DiscountPageMainBody';
import LayoutWithOutLeftNavigate from '@/components/Layout/LayoutWithOutLeftNavigate';

const Discount: React.FC = () => {
  return (
    <div >
      <LayoutWithOutLeftNavigate>
        <div style={{ width: 1300, margin: '0 auto' }}>
          <DiscountPageMainBody />
        </div>
      </LayoutWithOutLeftNavigate>
    </div>


  );
};

export default Discount;