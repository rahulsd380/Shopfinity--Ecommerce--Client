import { ICONS } from "@/assets";
import Image from "next/image";
import Link from "next/link";

type TPaymentSuccessProps ={
  openPaymentSuccessModal: boolean;
  setOpenPaymentSuccessModal: (open: boolean) => void;
}

const PaymentSuccess:React.FC<TPaymentSuccessProps> = ({
  openPaymentSuccessModal,
  setOpenPaymentSuccessModal,
}) => {
  return (
    <div className="mx-auto flex w-72 items-center justify-center">
      <div
        onClick={() => setOpenPaymentSuccessModal(false)}
        className={`fixed z-[100] flex items-center justify-center ${
          openPaymentSuccessModal ? "opacity-1 visible" : "invisible opacity-0"
        } inset-0 bg-black/20 backdrop-blur-sm duration-100`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`absolute w-[600px] max-h-[550px] overflow-y-auto p-5 rounded-3xl bg-white drop-shadow-2xl ${
            openPaymentSuccessModal
              ? "opacity-1 translate-y-0 duration-300"
              : "translate-y-20 opacity-0 duration-150"
          }`}
        >
          <div className="flex flex-col items-center justify-center gap-8">
            <Image
              src={ICONS.paymentSuccess}
              alt="payment-success"
              className="size-[300px]"
            />
            <div className="text-center">
              <h1 className="text-primary-10 font-Poppins text-2xl font-semibold">
                Payment Successful!!
              </h1>

              <p className=" text-gray-600 mt-1">
                Your payment of <span className="font-bold">${10}</span> was
                processed successfully.
              </p>

              <p className="text-gray-500">
                Thank you for your purchase! Your order will be processed
                shortly.
              </p>
            </div>

            <div className="flex items-center gap-3 justify-center">
              <button
                onClick={() => setOpenPaymentSuccessModal(false)}
                className="border border-primary-10 px-4 py-2 text-primary-10 rounded-lg hover:bg-primary-10 hover:text-white transition duration-300 w-fit"
              >
                Close
              </button>
              <Link
                href={"/products"}
                className="bg-primary-10 px-4 py-2 text-white rounded-lg hover:bg-primary-10/90 transition duration-300 w-fit"
              >
                Continue Shoping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
