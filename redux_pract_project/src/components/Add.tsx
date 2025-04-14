import React, { useRef } from "react";
import { addPerson } from "../store/features/personSlice";
import { useAppDispatch } from "../store/store";

const Add: React.FC = () => {
  const name = useRef<string>("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.current.trim()) {
      dispatch(addPerson({ name: name.current }));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border rounded-md p-2 shadow-md m-2"
    >
      <label htmlFor="">Person Name:</label>
      <input
        className="border rounded-md p-2 mx-2"
        onChange={(e) => (name.current = e.target.value)}
      />
      <button
        type="submit"
        className="bg-violet-500 text-white rounded-md px-4 py-2 cursor-pointer hover:bg-violet-600 active:bg-violet-700"
      >
        Add
      </button>
    </form>
  );
};

export default Add;
