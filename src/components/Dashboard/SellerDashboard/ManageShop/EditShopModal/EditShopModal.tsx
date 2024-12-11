import { ICONS } from "@/assets";
import Image from "next/image";
import EditShopForm from "./EditShopForm";

type ConfirmationModalProps = {
  id: string;
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
};

const EditShopModal: React.FC<ConfirmationModalProps> = ({
  // id,
  openModal,
  setOpenModal,
}) => {
  //   const [deleteProduct, {isLoading}] = useDeleteProductMutation();
  const handleDeleteProduct = async () => {
    // try {
    //   const result = await deleteProduct(id).unwrap();
    //   toast.success(result.message);
    //   setOpenModal(false);
    // } catch (error) {
    //   toast.error("Error deleting product");
    // }
  };

  const isLoading = false;

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
          className={`absolute w-full max-w-[738px] max-h-[600px] overflow-y-auto p-5 rounded-3xl bg-white drop-shadow-2xl ${
            openModal
              ? "opacity-1 translate-y-0 duration-300"
              : "translate-y-20 opacity-0 duration-150"
          }`}
        >
          <div className="flex flex-col gap-8">
            {/* Heading with cross button */}
            <div className="flex items-center justify-between border-b border-[#6e78831f] pb-4">
              <h1 className="text-neutral-10 text-[28px] font-semibold font-Sora mt-4">
                Update Shop Details
              </h1>
              <button
                onClick={() => setOpenModal(false)}
                className="size-9 rounded-full bg-neutral-65 hover:bg-neutral-45 transition duration-300 flex items-center justify-center"
              >
                <Image src={ICONS.cross} className="size-5" alt="Previous" />
              </button>
            </div>

            <EditShopForm />

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
                  handleDeleteProduct();
                }}
                type="submit"
                className="px-6 py-[14px] text-white bg-primary-10 rounded-xl text-lg leading-6 font-semibold"
              >
                {isLoading ? (
                  <div className="flex items-center gap-1">
                    <p>Loading</p>
                    <div className="size-6 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-yellow-900 border-white"></div>
                  </div>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditShopModal;
