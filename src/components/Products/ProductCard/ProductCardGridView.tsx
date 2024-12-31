/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";
import { ICONS } from "@/assets";
import ConfirmDelete from "@/components/Dashboard/SellerDashboard/OrderHistory/ConfirmDelete/ConfirmDelete";
import { TUser } from "@/components/shared/Navbar/Navbar";
import { useCurrentUser } from "@/redux/features/Auth/authSlice";
import { useAddToCartMutation } from "@/redux/features/cart/cartApi";
import { useDeleteProductMutation } from "@/redux/features/Product/productApi";
import { useAppSelector } from "@/redux/hooks";
import { TProduct } from "@/types/product.types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

type TProductCardGridViewProps = {
  isMenuActive?: boolean;
  isCartIconVisible?: boolean;
  product: TProduct;
};

const ProductCardGridView: React.FC<TProductCardGridViewProps> = ({
  product,
  isMenuActive = false,
  isCartIconVisible = true
}) => {
  const user = useAppSelector(useCurrentUser) as TUser | null;
  const [deleteProduct, { isLoading }] = useDeleteProductMutation();
  const [addToCart] = useAddToCartMutation();
  const [productId, setProductId] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (rowId: string) => {
    setActiveDropdown((prev) => (prev === rowId ? null : rowId));
  };

  // For seller
  const handleDeleteProduct = async (id: string) => {
    // toast.promise(deleteProduct(id), {
    //   loading: "Deleting product...",
    //   success: "Product deleted successfully.",
    //   error: "Something went wrong.",
    // });

    try {
      const response = await deleteProduct(id).unwrap();
      console.log(response);
      if (response?.message) {
        toast.success("Product deleted successfully.");
        setOpenModal(false);
        setActiveDropdown(null);
      }
    } catch (error) {
      toast.error("Failed to delete product. Please try again.");
      console.error("Error deleting product:", error);
    }
  };

  const [wishlist, setWishlist] = useState<any[]>([]);
  const wishlistData = {
    _id: product?._id,
    name: product?.name,
    image: product?.images[0],
    price: product?.price,
    brand: product?.brand,
    ratings: product?.ratings,
  };

  const handleAddToWishlist = () => {
    // Check if the product is already in the wishlist
    const isProductInWishlist = wishlist.some(
      (item) => item._id === wishlistData._id
    );

    if (isProductInWishlist) {
      toast.error("This product is already in your wishlist!");
    } else {
      // Add the new product to the wishlist
      const updatedWishlist = [...wishlist, wishlistData];
      setWishlist(updatedWishlist); // Update the state immediately

      // Save the updated wishlist back to localStorage
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

      toast.success("Product added to wishlist!");
    }
  };

  const id = user?._id;
  const productIdCart = product?._id;

  const handleAddToCart = async () => {
    if (!user) {
      toast.error("Please log in to add products to your cart.");
      return;
    }
    try {
      const cartData = {
        userId: id,
        sellerId: product?.vendorId,
        quantity: 1,
      };

      const response = await addToCart({
        cartData,
        productId: productIdCart,
      }).unwrap();

      if (response?.message) {
        toast.success("Product added to cart successfully.");
      }
    } catch (error) {
      toast.error("Failed to add product to cart. Please try again.");
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <div className=" bg-neutral-55/20 border border-neutral-45 rounded-lg relative">
      {
        isCartIconVisible &&
        <button
        onClick={handleAddToCart}
        className="bg-neutral-55/20 border border-neutral-45 p-1 flex items-center justify-center rounded-md hover:bg-neutral-45/30 transition duration-300 absolute top-2 right-2"
      >
        <Image src={ICONS.cart} alt="star-icon" className="size-5" />
      </button>
      }

      {isMenuActive && (
        <button
          onClick={() => handleDropdownToggle(product?._id)}
          className="p-2 hover:bg-gray-100 rounded-md absolute top-2 right-2 z-50"
        >
          <Image src={ICONS.threeDots} alt="three-dots" className="size-6" />
        </button>
      )}

      {activeDropdown === product?._id && (
        <div className="absolute right-0 mt-12 w-[180px] bg-white border rounded-2xl shadow-lg z-10 p-2">
          <Link
            href={`/dashboard/seller/edit-product/${product?._id}`}
            onClick={() => console.log(`Editing row ${product?._id}`)}
            className="block text-left w-full p-[10px] text-sm text-[#424B54] hover:bg-gray-100"
          >
            Edit
          </Link>
          <button
            onClick={() => {
              setOpenModal(true);
              setProductId(product?._id);
            }}
            className="block text-left w-full p-[10px] text-sm text-[#DE3C4B] hover:bg-red-100 mt-1"
          >
            Delete
          </button>
        </div>
      )}

      {/* <div className="p-3 w-full h-[230px] relative">
        <Image
          src={product?.images?.length > 0 ? product?.images?.[0] : IMAGES.product}
          alt="product-img"
          className="w-full h-[230px] "
        />
      </div> */}

      <div className="p-3">
        <img
          src={product?.images?.length > 0 ? product?.images?.[0] : ICONS.image}
          alt="product-img"
          className="w-full h-[230px] "
        />
      </div>
      <hr className="border border-neutral-45" />
      <div className="p-5">
        {/* Price and heart icon */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex flex-col gap-2">
            {/* Name */}
          <Link
          href={`/products/${product?._id}`}
          className="text-neutral-15 font-Inter text-lg font-semibold hover:underline"
        >
          {product?.name}
        </Link>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <Image src={ICONS.star} alt="star-icon" className="size-4" />
              <Image src={ICONS.star} alt="star-icon" className="size-4" />
              <Image src={ICONS.star} alt="star-icon" className="size-4" />
              <Image src={ICONS.star} alt="star-icon" className="size-4" />
              <Image src={ICONS.star} alt="star-icon" className="size-4" />
              <p className="text-secondary-10">
                {product?.ratings ? product?.ratings : 0}
              </p>
            </div>
          </div>

          <button
            onClick={handleAddToWishlist}
            className="border border-neutral-45 p-2 flex items-center justify-center rounded-md hover:bg-neutral-45/30 transition duration-300"
          >
            <Image src={ICONS.heart} alt="star-icon" className="size-5" />
          </button>
        </div>

        
        {/* Price */}
        <div className="flex items-center gap-2">
              <h1 className="text-neutral-15 font-Inter text-lg font-semibold">
                ${product?.price}
              </h1>
              <h2 className="text-neutral-40 font-Inter line-through">
                ${product?.price + 99}
              </h2>
            </div>
      </div>

      <ConfirmDelete
        setOpenModal={setOpenModal}
        openModal={openModal}
        id={productId}
        handleDeleteProduct={handleDeleteProduct}
        isLoading={isLoading}
      />
    </div>
  );
};

export default ProductCardGridView;
