import UserLayout from '@/components/UserLayout'
import UserAddress from '@/components/User/UserAddress'
import { history, useModel } from '@umijs/max'
import { useEffect } from 'react';
import { request } from '@umijs/max';
import { useState } from 'react';
export default function Index() {
    const[invoiceList,setInvoiceList]=useState();
    const{setInvoiceAddressInfo}=useModel('invoiceAddress')
    useEffect(()=>{
        request("/api/secure/invoiceAddressList").then(data=>{
            console.log(data)
            if(data.result){
                setInvoiceList(data.data.invoiceAddressList);
                setInvoiceAddressInfo(data.data.invoiceAddressList)
            }
        })
    },[])
    return (
        <UserLayout >
          {invoiceList?<UserAddress invoiceList={invoiceList} />:null} 
        </UserLayout>
    )
}