import React from 'react';
import LoginBody from '@/components/LoginBody';
import Layout from '@/components/Layout';

interface Props {
}
const App: React.FC<Props> = (props) => {
  return (
    <div>
      <Layout >
        {<LoginBody />}
      </Layout>

    </div>
)
};
export default App;