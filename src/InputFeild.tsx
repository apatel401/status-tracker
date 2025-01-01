import React from "react";

interface Props {
  taskName: string;
  setTaskName: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const InputFeild: React.FC<Props> = ({ taskName, setTaskName, handleAdd }) => {
  return (
    <form className="input" onSubmit={handleAdd}>
      <input
        value={taskName}
        onChange={(e) => {
          setTaskName(e.target.value);
        }}
        type="text"
        placeholder="Interactive Task Name"
        className="input__box"
      />
      <button className="input_submit" type="submit">
        GO
      </button>
    </form>
  );
};

export default InputFeild;
