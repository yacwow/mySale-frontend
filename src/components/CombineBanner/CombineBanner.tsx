import React, { useEffect, useState } from 'react';
import { discountBanner } from '@/constants';
import { NavLink } from '@umijs/max';
//@ts-ignore
import { LazyLoadImage } from "react-lazy-load-image-component";
import Banner from '@/components/Banner';
import { request } from 'umi';

const App: React.FC = () => {
  const [newsBanner, setNewsBanner] = useState();
  const [secondBanner, setSecondBanner] = useState();
  const [thirdBanner, setThirdBanner] = useState();
  const [data, setData] = useState();
  useEffect(() => {
    request('/api/newsBanner').then(({ data }) => {
      // console.log(data.newBanner.firstLine)
      setNewsBanner(data.newBanner.firstLine)
      setData(data.newBanner);
      console.log(data.newBanner.thirdLine);
      console.log(data.newBanner.secondLine[0])
      setSecondBanner(data.newBanner.secondLine[0].imgSrc)
      setThirdBanner(data.newBanner.thirdLine)
    })
  }, [])
  useEffect(() => {
    console.log(data)
    // console.log(data.thirdLine,data.secondLine)
  }, [data])


  return (
    <div style={{ width: 1489,margin:'0 auto', marginTop: 20 }}>
      {newsBanner ? <div style={{ width: 1489,height:600,marginBottom:20 }}>
        <Banner dots={false} speed={3000} slidesToShow={1}
          newsBanner={newsBanner}
        ></Banner>
      </div> : null}
      {secondBanner ? <div >
        <NavLink to={''}>
          <LazyLoadImage src={secondBanner} alt="" style={{ width: 1489,height:372, marginBottom:20}} />
        </NavLink>
      </div> : null}
      {
        thirdBanner ? <div >
          <Banner dots={true} speed={6000} slidesToShow={2}
            newsBanner={thirdBanner} arrows={false} slidesToScroll={2}
          ></Banner>
        </div> : null
      }

    </div>
  )
};

export default App;