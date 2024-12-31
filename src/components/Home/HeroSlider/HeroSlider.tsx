"use client";
import React, { useCallback, useEffect, useState } from "react";
import Hero from "../Hero/Hero";
import { ICONS, IMAGES } from "@/assets";
import RippleEffect from "@/components/reusable/RippleEffect/RippleEffect";
import Image from "next/image";

const HeroSlider = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const [isButtonVisible, setButtonVisible] = useState(false);

    const sliders = [
        <Hero key="hero"
            title="Don’t miss our daily amazing deals."
            description="Save up to 60% off on your first order"
            img={IMAGES.heroImg}
            bgColor="#d2f0d4"
            isSubscriptionVisible={true}
        />,
        <Hero key="hero1"
            title="Fresh Vegetables for Healthy Living Every Day"
            description="Experience the goodness of nature with fresh, organic vegetables delivered straight to your home. Taste the difference of quality you can trust."
            img={IMAGES.offerBanner2}
            bgColor="#FEEFEA"
        />,
        <Hero key="hero2"
            title="Fresh, Organic Vegetables Delivered Straight to You"
            description="Get the freshest, organic vegetables delivered straight to your doorstep. We source directly from trusted farms, ensuring quality, taste, and nutrition in every bite. Skip the hassle of shopping and enjoy convenience, health, and sustainability. Choose from a wide variety of seasonal produce to elevate your meals naturally."
            img={IMAGES.offerBanner2}
            bgColor="#ECFFEC"
        />,
    ];

    const prevSlider = () =>
        setCurrentSlider((prev) => (prev === 0 ? sliders.length - 1 : prev - 1));

    const nextSlider = useCallback(
        () =>
            setCurrentSlider((prev) =>
                prev === sliders.length - 1 ? 0 : prev + 1
            ),
        [sliders.length]
    );

    // Automatically change the slider
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlider();
        }, 5000);
        return () => clearInterval(intervalId);
    }, [nextSlider]);

    // Show buttons with a delay on hover
    const handleMouseEnter = () => {
        setTimeout(() => setButtonVisible(true), 300); // 300ms delay
    };

    const handleMouseLeave = () => {
        setButtonVisible(false);
    };

    return (
        <div
            className="w-full relative overflow-hidden group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className={`flex items-center justify-between absolute top-0 bottom-0 z-10 w-full px-5 ${isButtonVisible ? "opacity-100" : "opacity-0"
                    } transition-opacity duration-500`}
            >
                <RippleEffect>
                    <button
                        onClick={prevSlider}
                        className="size-[46px] rounded-full bg-neutral-65 hover:bg-primary-10 transition duration-300 flex items-center justify-center"
                    >
                        <Image src={ICONS.leftArrow} className="size-6" alt="Previous" />
                    </button>
                </RippleEffect>
                <RippleEffect>
                    <button
                        onClick={nextSlider}
                        className="size-[46px] rounded-full bg-neutral-65 hover:bg-primary-10 transition duration-300 flex items-center justify-center"
                    >
                        <Image src={ICONS.rightArrow} className="size-6" alt="Next" />
                    </button>
                </RippleEffect>
            </div>

            {/* Dots */}
            <div className="flex justify-center items-center z-10 absolute bottom-4 w-full gap-1">
                {sliders.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentSlider(idx)}
                        className={`rounded-full duration-500 ${currentSlider === idx ? "w-8 bg-primary-10" : "w-2 bg-primary-10/80"
                            } h-2`}
                    ></button>
                ))}
            </div>

            {/* Carousel container */}
            <div
                className="ease-linear duration-500 flex transform-gpu"
                style={{ transform: `translateX(-${currentSlider * 100}%)` }}
            >
                {sliders.map((Slider, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                        {Slider}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HeroSlider;
