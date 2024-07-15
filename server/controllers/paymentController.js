import Razorpay from "razorpay";
import { instance } from "../server.js";
import crypto from "crypto"

export const checkout = async (req, res) => {
  const options = {
    amount: Number(req.body.amount*100),
    currency: "INR",
  };

  const order = await instance.orders.create(options);

  // console.log(order);
  res.status(200).json({
    success: true,
    order
  });
};


export const paymentverification  = async (req, res) => {
  const{razorpay_order_id , razorpay_payment_id, razorpay_signature }=
  req.body


const body= razorpay_order_id+ "|"+razorpay_payment_id;


const expectedSignature=crypto
  .createHmac("sha256", process.env.RAZOR_API_SECRET)
  .update(body.toString())
  .digest("hex");

  const isAuthentic= expectedSignature=== razorpay_signature;

  if(isAuthentic){
    res.redirect(`http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`);
  }
  else{
    
    res.status(400).json({
      success: false,
      // order
    });
  }

};
