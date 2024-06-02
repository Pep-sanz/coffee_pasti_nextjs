import { Skeleton } from "antd";

const ProductDetailSkeleton = () => {
  return (
    <div className="w-full min-h-[80vh] h-full px-6 grid grid-cols-none md:grid-cols-2 gap-6 content-center">
      {/* Placeholder for Image */}
      <Skeleton.Image style={{ width: "100%", height: "500px", borderRadius: "8px" }} />

      {/* Placeholder for Product Details */}
      <div className="pt-6 space-y-4">
        <Skeleton.Input style={{ width: "80%", marginBottom: "8px" }} active />
        <div className="bg-neutral-700 p-4 rounded-sm">
          <Skeleton.Input style={{ width: "50%", marginBottom: "8px" }} active />
          <div className="flex items-center">
            <Skeleton.Input style={{ width: "20%", marginRight: "8px" }} active />
            <span>/</span>
            <Skeleton.Input style={{ width: "20%", marginLeft: "8px" }} active />
          </div>
        </div>
        <ul className="space-y-2">
          {[...Array(3)].map((_, index) => (
            <li key={index}>
              <span className="font-semibold">-</span> : <Skeleton.Input style={{ width: "80%" }} active />
            </li>
          ))}
        </ul>
        <div className="space-x-4 flex items-center">
          <Skeleton.Button style={{ width: "150px", height: "40px" }} active />
          <Skeleton.Button style={{ width: "200px", height: "40px" }} active />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSkeleton;
