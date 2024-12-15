/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useGetAllPaymentsHistoriesQuery } from "@/redux/features/Payment/paymentApi";

export type TPaymentHistory = {
  _id: string;
  address: string;
  altPhoneNumber: string;
  amount: string;
  country: string;
  createdAt: string;
  email: string;
  name: string;
  phoneNumber: string;
  state: string;
  streetAddress: string;
  transactionId: string;
  updatedAt: string;
  userId: string;
  zipCode: string;
  __v: number;
};

const PaymentHistory = () => {
  const {data} = useGetAllPaymentsHistoriesQuery({});
  console.log(data)

  return (
    <div className="mt-5 min-h-screen">
      <h1 className="text-neutral-10 font-Inter text-xl font-semibold">
        Payment History
      </h1>
      <div className="overflow-x-auto">
      <table className="bg-white w-full rounded-3xl shadow border-collapse mt-5">
        <thead className="bg-gray-100">
          <tr className="bg-white border-b">
            <th className="text-[#293241] font-Poppins font-medium p-4 text-left rounded-tl-3xl">
              Transaction ID
            </th>
            <th className="text-[#293241] font-Poppins font-medium p-4 text-left rounded-tl-3xl">
              Amount
            </th>
            {/* <th className="text-[#293241] font-Poppins font-medium p-4 text-left">
              Profile Photo
            </th> */}
            <th className="text-[#293241] font-Poppins font-medium p-4 text-left">
              Name
            </th>
            <th className="text-[#293241] font-Poppins font-medium p-4 text-left">
              Phone
            </th>
            <th className="text-[#293241] font-Poppins font-medium p-4 text-left">
                Address
            </th>
          </tr>
        </thead>

        <tbody>
          {data?.data?.map((history:TPaymentHistory) => (
            <tr key={history._id} className="border-b relative">
              <td className="text-[#6E7883] font-Poppins p-4">{history.transactionId}</td>
              <td className="text-[#6E7883] font-Poppins p-4">${history.amount}</td>
              {/* <td className="text-[#6E7883] font-Poppins p-4">
                <img
                  src={history.profilePhoto}
                  alt={history.name}
                  className="w-10 h-10 rounded-full"
                />
              </td> */}
              <td className="text-[#6E7883] font-Poppins p-4">{history.name}</td>
              <td className="text-[#6E7883] font-Poppins p-4">{history.phoneNumber}</td>
              <td className="text-[#6E7883] font-Poppins p-4">
                {history?.address}
              </td>
             
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      {data?.data?.length === 0 && (
        <p className="text-[#6E7883] font-Poppins text-center w-full mt-4">
          No History Available
        </p>
      )}
    </div>
  );
};

export default PaymentHistory;
