import { useState } from 'react';

const useUser = () => {
    const [firstLevelCategory, setFirstLevelCategory] = useState("")
    const [title, setTitle] = useState('レディース')
    const [secondLevelCategory, setSecondLevelCategory] = useState("")
  return {
    firstLevelCategory,
    secondLevelCategory,
    setFirstLevelCategory,
    setSecondLevelCategory,
    title,
    setTitle
  };
};

export default useUser;
