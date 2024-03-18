import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ItemType } from "@/types/ItemType";

import Image from "next/image";
import { FC} from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { truncateString } from "@/lib/utils";
import Link from "next/link";

type ItemCardProps = {
  item: ItemType;
};

const ItemCard: FC<ItemCardProps> = ({ item }) => {
  const { title, description, thumbnail, price } = item;

  return (
    <Card className="max-w-80 overflow-hidden">
      <div className="w-full h-[170px] relative">
        <Image
          src={thumbnail}
          alt=""
          fill
          className="object-contain"
          sizes="(max-width: 100%)"
        />
      </div>
      <Separator />
      <CardHeader>
        <CardTitle className="mb-1">{truncateString(title, 20)}</CardTitle>
        <CardDescription>{truncateString(description, 50)}</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-between items-center">
        <p>
          Price : <span className="text-[#285F9D]">{price}$</span>
        </p>{" "}
        <Link href={`/products/${item.id}`}>
          <Button className="rounded-md bg-[#285F9D]" size="default">
            More
          </Button>{" "}
        </Link>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
