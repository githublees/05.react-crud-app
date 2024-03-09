import React from "react";
import "../styles/List.css";
import { ListType } from "../types/type";
import { BsFillPencilFill } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";

const List: React.FC<ListType> = ({
  id,
  title,
  cost,
  total,
  expenseList,
  setId,
  setTitle,
  setCost,
  setUpdate,
  setExpenseList,
  setTotal,
  setState,
}) => {
  const handleRemove = () => {
    let newList = expenseList.filter((data) => data.id !== id);
    setExpenseList(newList);
    setTotal(total - cost);
    setState(3);
  };
  const handleClick = () => {
    setId(id);
    setTitle(title);
    setCost(cost);
    setUpdate(true);
  };
  return (
    <div className="list-container">
      <div className="items-container">
        <div className="items-name">
          <span>{title}</span>
        </div>
        <div className="items-cost">
          <span>{cost}</span>
        </div>
        <div className="items-controller">
          <button onClick={handleClick}>
            <BsFillPencilFill color="green" font-size="1.3rem" />
          </button>{" "}
          <button onClick={handleRemove}>
            <FaTrash color="darkred" font-size="1.3rem" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default List;
