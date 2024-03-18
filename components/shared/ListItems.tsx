import { ItemType } from "@/types/ItemType";
import ItemCard from "./ItemCard";

type ListItemsProps = {
  items: ItemType[];
};

const ListItems: React.FC<ListItemsProps> = ({ items }) => { 
  return (
    <div>
      <p className="my-4">Total results count: {items.length}</p>
      <div className="grid lg:grid-cols-4  sm:grid-cols-2 gap-5">
        {items.map((item: ItemType) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ListItems;
