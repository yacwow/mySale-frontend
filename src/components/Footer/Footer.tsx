import React from 'react';
import FooterBottom from './FooterBottom';
//@ts-ignore
import { LazyLoadImage } from "react-lazy-load-image-component";
interface Props {
  logo?:boolean
}
const App: React.FC<Props> = (props) => {
  const{logo=true}=props
  return (
    <div style={{margin:'0 auto',marginTop:150}}>
      <div style={{display:'flex',justifyContent:'center'}}>
        <LazyLoadImage style={{ width:250,marginBottom:80 }} src="/img/logo-zasale.png" alt="" />
      </div>
      <FooterBottom logo={logo}/>
    </div>
  )
};
export default App;