import React from "react";
import List from "./List";
import "../styles/Lists.css";
import { ListsType } from "../types/type";
import { FaTrash } from "react-icons/fa";

const Lists: React.FC<ListsType> = ({
  total,
  expenseList,
  setId,
  setTitle,
  setCost,
  setExpenseList,
  setUpdate,
  setTotal,
  setState,
}) => {
  const handleRemoveAll = (e: React.MouseEvent<HTMLButtonElement>) => {
    setExpenseList([]);
    setTotal(0);
    setState(3);
  };
  return (
    <div>
      {expenseList.map((data) => (
        <List
          key={data.id}
          id={data.id}
          title={data.title}
          cost={data.cost}
          total={total}
          setId={setId}
          setTitle={setTitle}
          setCost={setCost}
          setUpdate={setUpdate}
          expenseList={expenseList}
          setExpenseList={setExpenseList}
          setTotal={setTotal}
          setState={setState}
        />
      ))}
      <button className="removeAllBtn" onClick={handleRemoveAll}>
        <span>목록 지우기</span>
        <FaTrash color="white" />
      </button>
    </div>
  );
};

export default Lists;
