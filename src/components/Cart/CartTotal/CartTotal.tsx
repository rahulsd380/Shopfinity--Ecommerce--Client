

const CartTotal = () => {
    return (
        <div className="bg-[#FCFCFC]  p-4 rounded-lg border flex flex-col gap-3">
          <h2 className="text-xl font-semibold font-Poppins pb-4 border-b border-neutral-200">Cart Totals</h2>
          <div className="flex justify-between pb-4 border-b border-neutral-200">
            <span className="text-neutral-10 font-medium">Subtotal</span>
            <span className="font-medium">$11.77</span>
          </div>

          <div className="flex justify-between pb-4 border-b border-neutral-200">
            <span className="text-neutral-10 font-medium">Shipping</span>
            <span className="font-medium">$10</span>
          </div>

          <div className="flex justify-between text-xl font-bold border-b border-neutral-200 pb-4">
            <span>Total</span>
            <span>$26.77</span>
          </div>
          <button className="w-full py-3 bg-neutral-800 text-white font-bold rounded-xl">
            Proceed to Checkout
          </button>
        </div>
    );
};

export default CartTotal;