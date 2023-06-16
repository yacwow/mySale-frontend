import React from 'react';
import styles from './ProductSize.less';
interface Props {
  tableValue: string[];
  productMaterial: string;
}
const App: React.FC<Props> = (props) => {
  const { tableValue, productMaterial } = props;
  //尺寸表
  const buildProductSizeTable = () => {
    const thdata = tableValue[0].split('-');
    const thList = thdata.map((item, index) => {
      return (
        <th key={index} style={{ width: 100 }}>
          {item}
        </th>
      );
    });
    let tbodyList = [];
    for (let i = 1; i < tableValue.length; i++) {
      let tdList = tableValue[i].split('-').map((item, index) => {
        return <td key={index}>{item}</td>;
      });
      let tr = (
        <tr key={i} className={i % 2 === 0 ? styles.coloredBG : styles.whiteBG}>
          {tdList}
        </tr>
      );
      tbodyList.push(tr);
    }

    // const thList = tableValue.map((item, index: number) => {
    //     return <th key={index} style={{ width: 100 }}>
    //         {item.JapName}
    //     </th>
    // })
    // let tbodyList = [];
    // for (let j = 0; j < tableValue[0].values.length; j++) {
    //     let tdList = [];
    //     for (let i = 0; i < tableValue.length; i++) {
    //         let td = <td key={i}>{tableValue[i].values[j]}</td>
    //         tdList.push(td);
    //     }
    //     // console.log(tdList)
    //     let tr = <tr key={j} className={j % 2 === 0 ? styles.coloredBG : styles.whiteBG}>{tdList}</tr>;
    //     tbodyList.push(tr)
    // }
    // console.log(tbodyList)

    return (
      <table>
        <thead>
          <tr>{thList}</tr>
        </thead>
        <tbody>{tbodyList}</tbody>
      </table>
    );
  };
  //材料表
  const buildProductMaterialTable = () => {
    return productMaterial.split(',').map((item, index: number) => {
      let arr = item.split(':');
      return (
        <div
          key={index}
          className={index % 2 === 0 ? styles.coloredBG : styles.whiteBG}
        >
          <span className={styles.left}>{arr[0]}</span>
          <span className={styles.right}>{arr[1]}</span>
        </div>
      );
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>{buildProductSizeTable()}</div>

      <div className={styles.material}>{buildProductMaterialTable()}</div>
    </div>
  );
};
export default App;
