

const CartTotal = () => {
    return (
        <div className="bg-[#FCFCFC]  p-4 rounded-lg border flex flex-col gap-3 font-Inter">
          <h1 className="text-neutral-20 font-semibold pb-4 border-b border-neutral-200">
                Total
                </h1>
          <div className="flex justify-between pb-4 border-b border-neutral-200">
            <span className="text-neutral-10 font-medium">Subtotal:</span>
            <span className="font-medium">$11.77</span>
          </div>

          <div className="flex justify-between pb-4 border-b border-neutral-200">
            <span className="text-neutral-10 font-medium">Shipping:</span>
            <span className="font-medium">$10</span>
          </div>

          <div className="flex justify-between font-bold border-b border-neutral-200 pb-4">
          <h1 className="text-neutral-20 font-semibold">
                Total:
                </h1>
            <span className="text-xl">$26.77</span>
          </div>
          <button className="w-full py-3 bg-primary-10 text-white font-semibold rounded-3xl">
            Proceed to Checkout
          </button>
        </div>
    );
};

export default CartTotal;