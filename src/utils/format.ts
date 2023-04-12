export const formatTime = (number: number) => {
  let date = new Date(number);
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDay();
  // console.log(date,day,month,year)
  return `${year}-${month}-${day}`
}


export function shuffleSelf(array, size:number) {
  let index = -1,
    length = array.length,
    lastIndex = length - 1;

  let newSize = size === undefined ? length : size;
  while (++index < newSize) {
    // var rand = baseRandom(index, lastIndex),
    let rand = index + Math.floor(Math.random() * (lastIndex - index + 1))
    let value = array[rand];

    array[rand] = array[index];

    array[index] = value;
  }
  array.length = newSize;
  return array;
  
}    
export function formatTimeFromStr(str:string){
  let arrStr=str.split('T');
  let str1=arrStr[0];
  let tempStr
  if(arrStr.length>1){
    tempStr=arrStr[1].split('.');
   str1= str1+' '+tempStr[0];
  }

  return str1;
}