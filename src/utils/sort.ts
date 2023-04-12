import { TimeSaleTOtalDataListInterface } from "@/components/TimeSaleMainComp/TimeSaleSortComp/TimeSaleSortComp";
const sort=(dataList:TimeSaleTOtalDataListInterface,category:string,sortType:string)=>{
    // console.log('insort')
    // console.log(dataList,category,sortType)
    let totalData=[];
    if(category==='ALL'){
        // eslint-disable-next-line guard-for-in
        for(let key in dataList){
            // console.log(key)
            totalData.push(...dataList[key]);
        }
    }else{
        totalData=dataList[category] ;
    }
    // console.log(totalData)
    if(sortType==='recommend'){
        totalData.sort((a1,a2)=>{
            return a2.recommend-a1.recommend
        })
    }
    if(sortType==='priceUp'){
        totalData.sort((a1,a2)=>{
            return a1.price-a2.price
        })
    }
    if(sortType==='priceDown'){
        totalData.sort((a1,a2)=>{
            return a2.price-a1.price
        })
    }
    if(sortType==='stockNumUp'){
        totalData.sort((a1,a2)=>{
            return a1.stockNum-a2.stockNum
        })
    }
    if(sortType==='stockNumDown'){
        totalData.sort((a1,a2)=>{
            return a2.stockNum-a1.stockNum
        })
    }
    // console.log(totalData)
    return totalData;

}
export default sort;