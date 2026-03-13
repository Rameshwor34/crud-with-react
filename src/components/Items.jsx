import SingleItem from "./SingleItem";
import "./Items.css";

const Items = ({ items, editCompleted, removeItem }) => {
    return (
      <div className="items-container">
        {items.map((item) => (
          <SingleItem
            key={item.id}
            item={item}
            editCompleted={editCompleted} // ✅ pass it here
            removeItem={removeItem}
          />
        ))}
      </div>
    );
  };
  
  export default Items;
  