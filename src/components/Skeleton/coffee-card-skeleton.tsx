import { Card, Image, Skeleton, Rate } from "antd";

const CoffeeCardSkeleton = () => {
  return (
    <Card className="w-full overflow-hidden">
      <Skeleton.Image style={{ width: "100%", height: 200 }} />
      <Skeleton loading={true} active>
        <Card.Meta title={<Skeleton.Input style={{ width: "80%" }} />} />
        <div className="flex justify-end items-center">
          <Skeleton.Input style={{ width: "50px" }} />
        </div>
        <Rate disabled defaultValue={0} className="!text-sm" />
      </Skeleton>
    </Card>
  );
};

export default CoffeeCardSkeleton;
