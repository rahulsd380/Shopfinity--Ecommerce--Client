/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import StatusCard from "@/components/Admin/StatusCard/StatusCard";
import { useGetAllCategoriesQuery } from "@/redux/features/Category/categoryApi";
import { useGetAllProductsQuery } from "@/redux/features/Product/productApi";
import { useGetAllUsersForAdminQuery } from "@/redux/features/User/userApi";
import { AiOutlineProduct } from "react-icons/ai";
import { FaClipboardUser, FaUsers } from "react-icons/fa6";
import { Bar, Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
} from "chart.js";
import { useGetAllPaymentsHistoriesQuery } from "@/redux/features/Payment/paymentApi";
import { MdOutlinePayment } from "react-icons/md";
import { useGetAllShopsQuery } from "@/redux/features/Seller/sellerApi";
import { RiMoneyPoundCircleLine } from "react-icons/ri";
import { LuTableOfContents } from "react-icons/lu";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title
);

const AdminDashboard = () => {
    const { data: categories } = useGetAllCategoriesQuery({});
    const { data: users } = useGetAllUsersForAdminQuery({});
    const { data: paymentHistories } = useGetAllPaymentsHistoriesQuery({});
    const { data: sellers } = useGetAllShopsQuery({});
    const { data: products } = useGetAllProductsQuery({ page: 1, limit: 100 });

    const totalSellAmount = paymentHistories?.data?.reduce((acc: any, data: any) => {
        return acc + Number(data.amount);
    }, 0);



    const statusCardData = [
        {
            title: "Total Products",
            value: products?.data?.products?.length,
            icon: <AiOutlineProduct className="text-4xl text-primary-10" />,
        },
        {
            title: "Total Categories",
            value: categories?.data?.categories?.length,
            icon: <LuTableOfContents className="text-4xl text-primary-10" />,
        },
        {
            title: "Users",
            value: users?.data?.length,
            icon: <FaUsers className="text-4xl text-primary-10" />,
        },
        {
            title: "Sellers",
            value: sellers?.data?.length,
            icon: <FaClipboardUser className="text-4xl text-primary-10" />,
        },
        {
            title: "Total Payments",
            value: paymentHistories?.data?.length,
            icon: <MdOutlinePayment className="text-4xl text-primary-10" />,
        },
        {
            title: "Revenue",
            value: `$${totalSellAmount}`,
            icon: <RiMoneyPoundCircleLine className="text-4xl text-primary-10" />,
        },
    ];

    // Bar Chart Data for Products and Categories
    const barChartData = {
        labels: ["Products", "Categories"],
        datasets: [
            {
                label: "Count",
                data: [products?.data?.products?.length || 0, categories?.data?.categories?.length || 0],
                backgroundColor: ["#20B486", "#4ADE80"],
                borderWidth: 1,
            },
        ],
    };

    // Pie Chart Data for Users
    const pieChartData = {
        labels: ["Users", "Admins"],
        datasets: [
            {
                data: [users?.data?.length || 0, 5],
                backgroundColor: ["#20B486", "#E11D48"],
                hoverOffset: 4,
            },
        ],
    };

    return (
        <div className="p-6">
            {/* Status Cards */}
            <div className="grid grid-cols-3 gap-6">
                {statusCardData.map((card) => (
                    <StatusCard key={card.title} {...card} />
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-2 gap-6 mt-10">
                {/* Bar Chart */}
                <div className="p-6 bg-white shadow-lg rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Products vs Categories</h3>
                    <Bar data={barChartData} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
                </div>

                {/* Pie Chart */}
                <div className="p-6 bg-white shadow-lg rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">User Distribution</h3>
                    <Pie data={pieChartData} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
