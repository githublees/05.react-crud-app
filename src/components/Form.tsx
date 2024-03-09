import React, { ChangeEvent } from "react";
import "../styles/Form.css";
import { FormType } from "../types/type";
import { HiPaperAirplane } from "react-icons/hi2";

const Form: React.FC<FormType> = ({
  handleCreateSubmit,
  handleUpdateSubmit,
  cost,
  title,
  update,
  setCost,
  setTitle,
}) => {
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCost(e.target.valueAsNumber);
  };

  return (
    <form
      className="form-container"
      onSubmit={update ? handleUpdateSubmit : handleCreateSubmit}
    >
      <div className="form-main-container">
        <div className="expenditure-div">
          <h3>지출 항목</h3>
          <input
            type="text"
            name="title"
            value={title}
            placeholder="예) 렌트비"
            onChange={handleTitleChange}
          ></input>
        </div>
        <div className="expenditure-div">
          <h3>비용</h3>
          <input
            type="number"
            name="value"
            value={cost}
            onChange={handleValueChange}
          ></input>
        </div>
      </div>
      {update ? (
        <button type="submit">
          <span>수정</span> <HiPaperAirplane color="white" />
        </button>
      ) : (
        <button type="submit">
          <span>제출</span>
          <HiPaperAirplane color="white" />
        </button>
      )}
    </form>
  );
};

export default Form;
