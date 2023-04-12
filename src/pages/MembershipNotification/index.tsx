import React from 'react';
import LayoutWithOutLeftNavigate from '@/components/Layout/LayoutWithOutLeftNavigate';
interface Props {
}
const App: React.FC<Props> = (props) => {
    return (
        <div>
            <LayoutWithOutLeftNavigate>
                <div style={{width:1000,margin:'0 auto',marginTop:80}}>
                    <span><a href="/" style={{marginLeft:20, textDecoration: 'none', color: 'black' }}>ホーム</a> </span>
                    <span>&gt;</span>
                    <span style={{ fontWeight: 'bold' }}>お知らせ</span>
                    <div style={{marginTop:15}}>
                        <img src="/membership.jpg" alt=""  />
                    </div>
                </div>
            </LayoutWithOutLeftNavigate>
        </div>
    )
};
export default App;