import React from 'react';
import SecondHalfPrice from '@/components/SecondHalfPrice';
import LayoutWithOutLeftNavigate from '@/components/Layout/LayoutWithOutLeftNavigate';
const App: React.FC = () => {
  return (
    <LayoutWithOutLeftNavigate>
        <SecondHalfPrice/>
    </LayoutWithOutLeftNavigate>
)
};
export default App;