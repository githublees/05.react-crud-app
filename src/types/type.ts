import React from "react";

export interface expenseType {
  id: number;
  title: string;
  cost: number;
}

export interface FormType {
  handleCreateSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleUpdateSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  cost: number;
  title: string;
  update: boolean;
  setCost: React.Dispatch<React.SetStateAction<number>>;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ListsType {
  total: number;
  expenseList: expenseType[];
  setId: React.Dispatch<React.SetStateAction<number>>;
  setCost: React.Dispatch<React.SetStateAction<number>>;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setExpenseList: React.Dispatch<React.SetStateAction<expenseType[]>>;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  setUpdate: React.Dispatch<React.SetStateAction<boolean>>;
  setState: React.Dispatch<React.SetStateAction<number>>;
}

export interface ListType extends ListsType {
  id: number;
  title: string;
  cost: number;
  //   total: number;
  //   expenseList: expenseType[];
  //   setId: React.Dispatch<React.SetStateAction<number>>;
  //   setCost: React.Dispatch<React.SetStateAction<number>>;
  //   setTitle: React.Dispatch<React.SetStateAction<string>>;
  //   setExpenseList: React.Dispatch<React.SetStateAction<expenseType[]>>;
  //   setTotal: React.Dispatch<React.SetStateAction<number>>;
  //   setUpdate: React.Dispatch<React.SetStateAction<boolean>>;
  //   setState: React.Dispatch<React.SetStateAction<number>>;
}
