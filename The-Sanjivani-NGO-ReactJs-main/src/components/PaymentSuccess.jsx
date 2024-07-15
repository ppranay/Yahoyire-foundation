import React from 'react'
import { useSearchParams } from 'react-router-dom'
import '../css/paymentsuccess.css'


const PaymentSuccess = () => {
const searchQuery= useSearchParams()[0]
// console.log()

const reference_num=searchQuery.get("reference")


  return (

    <>
    
    <div class="container-main">
            <i class="fa-solid icon fa-circle-check"></i>
        <h1 className='head'>Payment Successful</h1>
    </div>
    <div>
      <h3 className='refer'>reference No. :{reference_num }</h3>
      {/* <h1>Order Successfull</h1> */}
    </div>


    </>
  )
}

export default PaymentSuccess
