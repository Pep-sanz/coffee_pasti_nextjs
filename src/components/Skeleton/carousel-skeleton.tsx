import { Skeleton } from "antd";

const CarouselSkeleton = () => {
  return (
    <div>
      <div className="w-full h-[300px] bg-white !flex justify-center gap-4">
        <Skeleton.Image style={{ width: "400px", height: "200px", marginRight: "16px" }} />
        <div className="w-full">
          <Skeleton.Input style={{ width: "80%", marginBottom: "8px" }} active />
          <Skeleton.Input style={{ width: "100%" }} active />
        </div>
      </div>
    </div>
  );
};

export default CarouselSkeleton;
