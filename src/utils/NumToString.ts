const NumToString = (num: number) => {
    let res = '';
    let count = 0;
    do {

        if (count % 3 === 0) {
            res = ','+res
        }
        count++;
        let num1 = num % 10;
        res = num1+res;
        // eslint-disable-next-line no-param-reassign
        num = Math.floor(num / 10);
        // console.log(num,num1,res,count)
    } while (num > 0);
    return res.substring(0,res.length-1);
}


export default NumToString