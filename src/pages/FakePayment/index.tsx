import { history } from '@umijs/max';
import React from 'react';
interface Props {
}
const App: React.FC<Props> = (props) => {
    const handlePay=()=>{
        history.push('/home')
    }
    const handleNotPay=()=>{
        history.push('/home')
    }
    return (
        <div>
            <h1>这是模拟支付页面，确定支付为支付之后（发票改为已付）跳转回主页，放弃支付也是最终跳转首页</h1>


            <button type="button" onClick={handlePay}>确定支付</button>
            <button type="button" onClick={handleNotPay}>确定支付</button>




        </div>
    )
};
export default App;