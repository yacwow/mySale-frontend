import CompanyIntro from '@/components/CompanyIntro';
import LayoutWithOutLeftNavigate from '@/components/Layout/LayoutWithOutLeftNavigate';

const CompanyIntroduce: React.FC = () => {
  return (
    <div >
      <LayoutWithOutLeftNavigate>
        <div style={{ width: 1300, margin: '0 auto' }}>
          <CompanyIntro />
        </div>
      </LayoutWithOutLeftNavigate>
    </div>


  );
};

export default CompanyIntroduce;