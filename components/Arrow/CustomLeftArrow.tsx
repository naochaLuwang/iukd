import { TiChevronLeft } from "react-icons/ti";

const CustomLeftArrow = ({ onClick, ...rest }: any) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  return (
    <div
      onClick={() => onClick()}
      className="absolute items-center justify-center w-10 h-10 bg-white border rounded-full bg-opacity-20 lg:flex lg:left-12 left-4 lg:w-14 lg:h-14 "
    >
      <TiChevronLeft className="w-8 h-8 text-white cursor-pointer" />
    </div>
  );
};

export default CustomLeftArrow;
