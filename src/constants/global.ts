// import { useEffect } from 'react';
// import { useState } from 'react';
// import { request } from '@umijs/max';

// const useUser = () => {
//   const [expireTime, setExpireTime] = useState<number>();
//   useEffect(() => {
//     request('/api/getExpireTime').then((data) => {
//       if (data.result) {
//         setExpireTime(data.data.expireTime);
//       }
//     });
//   }, []);
//   return {
//     expireTime,
//     setExpireTime,
//   };
// };

// export default useUser;
