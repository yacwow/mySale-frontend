import UserLayout from '@/components/UserLayout'
import UserGetPointerMethod from '@/components/User/UserGetPointerMethod'
import { useEffect } from 'react';
import { request } from '@umijs/max';
import { useState } from 'react';
export default function Index() {
    // const couponList = [{ discountDetail: 'test', code: 12345, condition: 'greater than 10000', date: '2020-0203' }, { discountDetail: 'test', code: 12345, condition: 'greater than 10000', date: '2020-0203' },
    // { discountDetail: 'test', code: 12345, condition: 'greater than 10000', date: '2020-0203' }, { discountDetail: 'test', code: 12345, condition: 'greater than 10000', date: '2020-0203' },]
    // const pointerList = [{ pointerDetail: 'new', description: '+10000', date: '2020-0203' }, { pointerDetail: 'new', description: '+10000', date: '2020-0203' },
    // { pointerDetail: 'new', description: '+10000', date: '2020-0203' }, { pointerDetail: 'new', description: '+10000', date: '2020-0203' }]
    const[canUsePoint,setCanUsePoint ]=useState<number>();
    const[couponList,setCouponList]=useState();
    const[pointerList,setPointerList]=useState();
    const[deduction,setDeduction]=useState<number>();
    useEffect(() => {
        request("/api/secure/getUserPointHistory").then(data=>{
            console.log(data);
            if(data.result&&data.data){
                setDeduction(data.data.deduction);
                setCanUsePoint(Math.floor(data.data.amount/20))
                let filetedData=data.data.pointerlist.sort((a,b)=>{
                    return b.pointamount-a.pointamount;
                })
                setCouponList(data.data.couponlists);
                setPointerList(filetedData)
            }
        })
    }, [])



    return (
        <UserLayout >
          {pointerList&&couponList?<UserGetPointerMethod deduction={deduction} canUsePoint={canUsePoint} couponList={couponList} pointerList={pointerList} />:null}  
        </UserLayout>
    )
}