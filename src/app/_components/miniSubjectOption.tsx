"use-client";
import { FC, useState } from "react";
import { FaBookOpen } from "react-icons/fa";

interface customiseAssingmentProps {
  assignment: string;
  //   selected: boolean;
}

const MiniSubjectOption: FC<customiseAssingmentProps> = ({ assignment }) => {
  const [selected, setSelected] = useState(true);

  const handleClick = () => {
    setSelected(!selected);
  };
  return (
    <div
      onClick={() => {
        handleClick();
      }}
      className={`text-brand-purple-light flex w-full cursor-pointer flex-row justify-between rounded-md border px-3 py-2 text-xs shadow-2xl ${
        selected
          ? "bg-brand-purple-light hover:border-brand-purple-light hover:text-brand-purple-light text-white hover:bg-gray-100"
          : "border-brand-purple-light"
      }`}
    >
      <div className="flex flex-row items-center justify-center gap-2">
        <p className="font-semibold">{assignment}</p>
      </div>
      <input
        className="border-brand-purple-light border"
        type={"radio"}
        checked={selected} // Bind the checked property to selected state
        onChange={handleClick}
      ></input>
    </div>
  );
};

export default MiniSubjectOption;
