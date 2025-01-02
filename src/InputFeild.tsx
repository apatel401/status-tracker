import React, { useRef } from "react";

interface Props {
  taskName: string;
  setTaskName: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const InputFeild: React.FC<Props> = ({ taskName, setTaskName, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <form className="input" 
    onSubmit={(e) => {
      handleAdd(e);
      inputRef.current?.blur();
    }
    }>
      <input
        value={taskName}
        onChange={(e) => {
          setTaskName(e.target.value);
        }}
        type="text"
        placeholder="Interactive Task Name"
        className="input__box"
        ref={inputRef}
      />
      <button className="input_submit" type="submit">
        GO
      </button>
    </form>
  );
};

export default InputFeild;
