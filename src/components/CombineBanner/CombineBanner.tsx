import React, { useEffect, useState } from 'react';
import { discountBanner } from '@/constants';
import { NavLink } from '@umijs/max';
//@ts-ignore
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Banner from '@/components/Banner';
import { request } from 'umi';

const App: React.FC = () => {
  const [newsBanner, setNewsBanner] = useState();
  const [secondBanner, setSecondBanner] = useState();
  const [thirdBanner, setThirdBanner] = useState();

  useEffect(() => {
    request('/api/newsBanner').then(({ data }) => {
      // console.log(data.newBanner.firstLine)
      setNewsBanner(data.newBanner.firstLine);

      setSecondBanner(data.newBanner.secondLine[0].imgSrc);
      setThirdBanner(data.newBanner.thirdLine);
    });
  }, []);

  return (
    <div
      style={{
        width: 1489,
        margin: '0 auto',
        marginTop: 20,
      }}
    >
      {newsBanner ? (
        <div
          style={{
            width: 1489,
            height: 600,
            marginBottom: 5,
            overflow: 'hidden',
          }}
        >
          <Banner
            dots={false}
            speed={3000}
            slidesToShow={1}
            newsBanner={newsBanner}
          ></Banner>
        </div>
      ) : null}
      {secondBanner ? (
        <div>
          <NavLink to={''}>
            <LazyLoadImage
              src={secondBanner}
              alt=""
              style={{ width: 1489, height: 372, marginBottom: 5 }}
            />
          </NavLink>
        </div>
      ) : null}
      {thirdBanner ? (
        <div>
          <Banner
            dots={true}
            speed={6000}
            slidesToShow={2}
            newsBanner={thirdBanner}
            arrows={false}
            slidesToScroll={2}
          ></Banner>
        </div>
      ) : null}
    </div>
  );
};

export default App;
