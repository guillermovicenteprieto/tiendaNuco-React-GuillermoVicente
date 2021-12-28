import {useState} from "react";

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const addItem = () => setCount(count + 1);
  const removeItem = () => setCount(count - 1);
  const resetItem = () => setCount(initialValue);
  return { count, addItem, removeItem, resetItem };
}
