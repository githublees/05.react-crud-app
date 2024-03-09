import { useEffect, useState } from "react";
import "./App.css";
import Alarm from "./components/Alarm";
import Lists from "./components/Lists";
import Form from "./components/Form";
import { expenseType } from "./types/type";

function App() {
  // const [value, setValue] = useState(0);
  const [state, setState] = useState(0);
  const [total, setTotal] = useState(0);
  const [cost, setCost] = useState(0);
  const [title, setTitle] = useState("");
  const [id, setId] = useState(0);
  const [update, setUpdate] = useState(false);
  const [expenseList, setExpenseList] = useState<expenseType[]>([]);

  useEffect(() => {
    // list.map((data) => (
    //   setTotal((prev) => prev + data.cost);
    // );
    setTimeout(() => {
      setState(0);
    }, 2000);
  }, [state]);
  // const [alarm, setAlarm] = useState("");

  const handleCreateSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let newExpense: expenseType = {
      id: Date.now(),
      title: title,
      cost: cost,
    };
    setExpenseList((prev: expenseType[]) => [...prev, newExpense]);
    setCost(0);
    setTitle("");
    setTotal((prev) => prev + cost);
    setState(1);
  };

  const handleUpdateSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let prevCost = 0;

    let updateExpense: expenseType[] = expenseList.map((data) => {
      if (data.id === id) {
        prevCost = data.cost;
        data.title = title;
        data.cost = cost;
      }
      return data;
    });
    setTotal(total - prevCost + cost);
    setExpenseList(updateExpense);
    setUpdate(false);
    setCost(0);
    setTitle("");
    setState(2);
  };

  return (
    <div className="App">
      <div className="main-container">
        <Alarm state={state} setState={setState} />
        <h1>예산 계산기</h1>
        <div className="main-components">
          <Form
            handleCreateSubmit={handleCreateSubmit}
            handleUpdateSubmit={handleUpdateSubmit}
            cost={cost}
            title={title}
            update={update}
            setCost={setCost}
            setTitle={setTitle}
            setUpdate={setUpdate}
          />
          <Lists
            total={total}
            expenseList={expenseList}
            setId={setId}
            setTitle={setTitle}
            setCost={setCost}
            setExpenseList={setExpenseList}
            setTotal={setTotal}
            setUpdate={setUpdate}
            setState={setState}
          />
        </div>
        <h2>총 지출: {total}</h2>
      </div>
    </div>
  );
}

export default App;
