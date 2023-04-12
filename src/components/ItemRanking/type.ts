export interface generalType{
    productDescription:string,
    rank:number,
    discount?:boolean,
    secondOneHalf?:boolean,
    price:number,
    href:string,
    imgSrc:string,
  }
export  interface dataList{
    topGeneral:generalType[],
    outerGeneral:generalType[],
    dressGeneral:generalType[],
    bottomGeneral:generalType[],
    setUp:generalType[],
    generalShoes:generalType[],
    bagGoods:generalType[],
    indoorWearInner:generalType[],
    generalGoods:generalType[],
    swimwearInner:generalType[],
  }