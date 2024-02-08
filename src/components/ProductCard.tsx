import Image from "next/image";
import { Button } from "./ui/button";

interface ProductCardProps {
  _id: string,
  image: string;
  name: string;
  price: string;
}

const ProductCard = ({ _id, image, name, price }: ProductCardProps) => {
  return (
    <>
      <div className="flex flex-col">
        <Image
        key={_id}
          src={image}
          alt={name}
          width={400}
          height={0}
          className="w-[300px] h-[450px] object-cover rounded-xl"
        />
        <div className="flex justify-around w-full max-sm:w-full">
          <div className="flex flex-col">
            <h3 className="mt-2 text-xl leading-normal text-muted-foreground">
              {name}
            </h3>
            <p className="mt-2 font-semibold font-montserrat text-green-600 text-sm leading-normal">
              {price}
            </p>
          </div>
          <div>
            <Button className="mt-8" variant={"ghost"}> Ver detalhes &rarr;</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
