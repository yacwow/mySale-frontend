import { AutoComplete } from 'antd';
import React, { useState } from 'react';

const mockVal = (str: number, repeat = 1) => ({
  value: str.repeat(repeat),
});

const App: React.FC = () => {
  const [value, setValue] = useState<number>();
  const [anotherOptions, setAnotherOptions] = useState<{ value: number }[]>([]);

  const getPanelValue = (searchText: number) =>
    !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];

  const onSelect = (data: number) => {
    console.log('onSelect', data);
  };

  const onChange = (data: number) => {
    setValue(data);
  };

  return (
    <>
      <AutoComplete
        value={value}
        defaultValue={123}
        options={anotherOptions}
        style={{ width: 200 }}
        onSelect={onSelect}
        onSearch={(text) => setAnotherOptions(getPanelValue(text))}
        onChange={onChange}
        placeholder="control mode"
      />
    </>
  );
};

export default App;