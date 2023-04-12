import React from 'react';
import NavigateLine from '@/components/NavigateLine';
import HeaderSearch from '@/components/HeaderSearch';
import HeaderPromotion from '@/components/HeaderPromotion';
import Footer from '@/components/Footer';
import ScrollTopComp from '@/components/ScrollTopComp';
import { navLinkUrl } from '@/constants';
interface Props {
    children: React.ReactNode;
}
const App: React.FC<Props> = (props) => {
    const {children } = props
    return (
        <div>
            <HeaderPromotion src='/img/header.jpg' />
            <HeaderSearch />
            <NavigateLine navLinkUrl={navLinkUrl} />
            { children}
            <Footer />
            <ScrollTopComp/>
        </div>
    )
};
export default App;