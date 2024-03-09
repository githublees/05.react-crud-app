import React from "react";
import "../styles/Alarm.css";

interface AlarmProps {
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
}

const Alarm: React.FC<AlarmProps> = ({ state, setState }) => {
  switch (state) {
    case 1:
      return (
        <div className="alarm-box" style={{ backgroundColor: "green" }}>
          <span>아이템이 생성되었습니다.</span>
        </div>
      );
    case 2:
      return (
        <div className="alarm-box" style={{ backgroundColor: "green" }}>
          <span>아이템이 수정되었습니다.</span>
        </div>
      );
    case 3:
      return (
        <div className="alarm-box" style={{ backgroundColor: "red" }}>
          <span>아이템이 삭제되었습니다.</span>
        </div>
      );
    default:
      return <div></div>;
  }
};

export default Alarm;
