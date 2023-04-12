//@ts-nocheck
import React from 'react';
import LayoutWithLeftNavigate from './LayoutWithLeftNavigate';
import LayoutWithOutLeftNavigate from './LayoutWithOutLeftNavigate';
interface Props {
    children: React.ReactNode[] | React.ReactNode;
    vertical?: boolean
}
const App: React.FC<Props> = (props) => {
    const { children, vertical = false } = props
    return (
        
        <>
            {vertical ? <LayoutWithLeftNavigate>{children}</LayoutWithLeftNavigate> :
                <LayoutWithOutLeftNavigate>{children}</LayoutWithOutLeftNavigate>}
        </>
    )
};
export default App;