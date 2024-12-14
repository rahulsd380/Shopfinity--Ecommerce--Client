import { toast } from "sonner";

type ConfirmationModalProps = {
  id: string;
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  isLoading:boolean;
};

const ConfirmDelete: React.FC<ConfirmationModalProps> = ({
  id,
  openModal,
  setOpenModal,
  handleDeleteProduct,
  isLoading,
}) => {
  
  return (
    <div className="mx-auto flex w-72 items-center justify-center">
      <div
        onClick={() => setOpenModal(false)}
        className={`fixed z-[100] flex items-center justify-center ${
          openModal ? "opacity-1 visible" : "invisible opacity-0"
        } inset-0 bg-black/20 backdrop-blur-sm duration-100`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`absolute w-[738px] p-8 rounded-3xl bg-white drop-shadow-2xl ${
            openModal
              ? "opacity-1 translate-y-0 duration-300"
              : "translate-y-20 opacity-0 duration-150"
          }`}
        >
          <div className="flex flex-col gap-8">
            <h1 className="text-[#293241] font-Poppins text-[32px] font-semibold leading-[42px]">
              Are you sure you want to remove this product from your menu? This
              action cannot be undone.
            </h1>
            <hr className="border border-[#6e78831f]" />

            <div className="flex items-center justify-end gap-4">
              <button
                onClick={() => setOpenModal(false)}
                type="submit"
                className="px-6 py-[14px] text-white bg-[#8D9095] rounded-xl text-lg leading-6 font-semibold"
              >
                No, Cancel
              </button>
              <button
              onClick={() => {
                handleDeleteProduct(id)
              }}
                type="submit"
                className="px-6 py-[14px] text-white bg-[#E28413] rounded-xl text-lg leading-6 font-semibold"
              >
                {
                  isLoading ?
                  <div className="flex items-center gap-1">
                    <p>Loading</p>
                    <div className="size-6 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-yellow-900 border-white"></div>
                  </div>
                  : "Yes, Delete"
                }
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;
