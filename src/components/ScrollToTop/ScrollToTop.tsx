"use client"

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 p-3 bg-primary-10 text-white rounded-full shadow-lg hover:bg-primary-10/90 transition duration-300 z-20"
        aria-label="Scroll to top"
      >
        ↑
      </button>
  );
};

export default ScrollToTop;
