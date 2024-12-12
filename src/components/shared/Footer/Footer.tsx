import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-footer-bg mt-[100px] text-sm font-sans px-6 lg:px-16 py-10">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-0">
        <div>
          <h1 className="text-neutral-15 font-Sora text-xl font-semibold">
            Join our newsletter for £10 offs
          </h1>
          <p className="text-neutral-60 font-Inter text-sm font-medium mt-3 max-w-[300px]">
            Register now to get latest updates on promotions & coupons.Don’t
            worry, we not spam!
          </p>
        </div>
        {/* Email Input and Subscribe Button */}
        <div className="w-full max-w-[550px]">
          <div className="flex items-center w-full max-w-[550px]">
            <div className="relative flex-grow">
              <Image
                src={ICONS.send}
                alt="send-icon"
                className="size-5 absolute left-3 top-5 bottom-0"
              />
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full p-4 pl-12 rounded-l focus:outline-none focus:ring-primary-10 transition duration-300 focus:ring-2 border border-white"
              />
            </div>
            <button className="bg-primary-10 hover:bg-primary-10/70 transition duration-300 border border-primary-10 text-white font-medium p-4 rounded-r">
              Subscribe
            </button>
          </div>
          <p className="text-neutral-60 font-Inter text-[13px] font-medium mt-2">
            By subscribing you agree to our{" "}
            <span className="text-primary-10 font-medium">
              Terms & Conditions and Privacy & Cookies Policy.
            </span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12 xl:gap-0 border-b border-t border-neutral-50/40 py-12 my-10">
        {/* Help Section */}
        <div className="w-fit">
          <h1 className="text-neutral-15 font-Sora text-xl font-semibold">
            Do You Need Help ?
          </h1>
          <p className="text-neutral-60 font-Inter text-sm font-medium mt-5 max-w-[270px]">
            Autoseligen syr. Nek diarask fröbomba. Nör antipol kynoda nynat.
            Pressa fåmoska.
          </p>

          {/* Phone */}
          <div className="flex items-center gap-3 mt-7">
            <Image src={ICONS.phone2} alt="phone icon" className="size-12" />
            <div>
              <p className="text-neutral-60 font-Inter text-sm font-medium">
                Monday-Friday: 08am-9pm
              </p>
              <h1 className="text-neutral-15 font-Sora text-xl font-semibold mt-1">
                +880 1608249337
              </h1>
            </div>
          </div>
          {/* Email */}
          <div className="flex items-center gap-3 mt-7">
            <Image src={ICONS.email2} alt="phone icon" className="size-9" />
            <div>
              <p className="text-neutral-60 font-Inter text-sm font-medium">
                Need help with your order?
              </p>
              <h1 className="text-neutral-15 font-Sora text-xl font-semibold mt-1">
                rahulsd380@gmail.com
              </h1>
            </div>
          </div>
        </div>

        {/* Make Money Section */}
        <div className="w-fit">
          <h3 className="text-neutral-15 font-Sora text-xl font-semibold mb-5">
            Make Money with Us
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>Sell on Shopfinity</li>
            <li>Sell Your Services on Shopfinity</li>
            <li>Sell on Shopfinity Business</li>
            <li>Sell Your Apps on Shopfinity</li>
            <li>Become an Affiliate</li>
            <li>Advertise Your Products</li>
            <li>Sell-Publish with Us</li>
            <li>Become an Blowwe Vendor</li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="w-fit">
          <h3 className="text-neutral-15 font-Sora text-xl font-semibold mb-5">
            Let Us Help You
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>Accessibility Statement</li>
            <li>Your Orders</li>
            <li>Returns & Replacements</li>
            <li>Shipping Rates & Policies</li>
            <li>Refund and Returns Policy</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Cookie Settings</li>
            <li>Help Center</li>
          </ul>
        </div>

        {/* About Section */}
        <div className="w-fit">
          <h3 className="text-neutral-15 font-Sora text-xl font-semibold mb-5">
            Get to Know Us
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>Careers for Shopfinity</li>
            <li>About Shopfinity</li>
            <li>Investor Relations</li>
            <li>Shopfinity Devices</li>
            <li>Customer Reviews</li>
            <li>Social Responsibility</li>
            <li>Store Locations</li>
          </ul>
        </div>
        {/* App Download and Social Links */}
        <div className="w-fit">
          <h3 className="text-neutral-15 font-Sora text-xl font-semibold mb-5">
            Download our app
          </h3>
          <div className="flex items-center space-x-4 mb-4">
            <a href="#" className="flex items-center space-x-2">
              <Image
                src={IMAGES.playStore}
                alt="Google Play"
                className="w-full h-10"
              />
              <span className="text-gray-600 text-xs">
                Download App Get -10% Discount
              </span>
            </a>
          </div>
          <div className="flex items-center space-x-4 mb-6">
            <a href="#" className="flex items-center space-x-2">
              <Image
                src={IMAGES.appStore}
                alt="App Store"
                className="w-full h-10"
              />
              <span className="text-gray-600 text-xs">
                Download App Get -20% Discount
              </span>
            </a>
          </div>
          <div>
            <h4 className="text-sm font-bold mb-2">
              Follow us on social media:
            </h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-primary-10 h-9 w-9 rounded-full flex justify-center items-center"
              >
                <Image src={ICONS.fb} alt="fb" />
              </a>
              <a
                href="#"
                className="bg-primary-10 h-9 w-9 rounded-full flex justify-center items-center"
              >
                <Image src={ICONS.linkedin} alt="fb" />
              </a>
              <a
                href="#"
                className="bg-primary-10 h-9 w-9 rounded-full flex justify-center items-center"
              >
                <Image src={ICONS.instagram} alt="fb" />
              </a>
              <a
                href="#"
                className="bg-primary-10 h-9 w-9 rounded-full flex justify-center items-center"
              >
                <Image src={ICONS.twitter} alt="fb" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 sm:flex justify-between">
        <div>
          <div className=" font-normal text-base pb-4">
            Copyright 2024 © Shopfinity WooCommerce WordPress Theme. All right
            reserved.
          </div>
          <div>
            <Image src={IMAGES.paymentOptions} alt="" className="h-9 w-60" />
          </div>
        </div>
        <div className="md:flex gap-4">
          <p className=" hover:underline font-semibold text-sm ">
            Terms and Conditions
          </p>
          <p className=" hover:underline font-semibold text-sm">
            Privacy Policy
          </p>
          <p className=" hover:underline font-semibold text-sm">
            Order Tracking
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
