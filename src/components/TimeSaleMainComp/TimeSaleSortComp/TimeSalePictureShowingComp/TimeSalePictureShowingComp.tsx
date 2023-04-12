import React from 'react';
import PictureComp from '../PictureComp';
import styles from './TimeSalePictureShowingComp.less'
interface Props {
  picShowingDataList: { href: string, imgSrc: string, marketPrice: number, price: number, stockNum: number, recommend: number,secondOneHalf:boolean, alt?: string }[],
}
const App: React.FC<Props> = (props) => {
  const { picShowingDataList } = props
  // console.log(picShowingDataList)


  const buildPictureComp = () => {
    return picShowingDataList.map((item, index: number) => {    
        return <PictureComp key={index} picShowingData={item} />
    })
  }
  return (
    <div style={{ width: 1200, marginTop: 40 }}>
      <div className={styles.container}>
        {buildPictureComp()}
      </div>
    </div>

  )
};
export default App;