import { app } from "./app.js";
import Razorpay from "razorpay"


export const instance = new Razorpay({
    key_id: process.env.RAZOR_PAY_APIKEY,
    key_secret: process.env.RAZOR_API_SECRET,
  });

app.listen(process.env.PORT, () =>+-
  console.log(`server is working on ${process.env.PORT}`)
);
