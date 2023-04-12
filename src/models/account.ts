import { useState } from 'react';

const useUser = () => {
    const [title, setTitle] = useState('マイページトップ');
    const[name,setName]=useState('');
  return {
    title,
    setTitle,
    name,
    setName
  };
};

export default useUser;
