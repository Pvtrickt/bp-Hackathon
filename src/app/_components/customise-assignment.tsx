"use-client";
import { FC, useState } from "react";
import { FaBookOpen } from "react-icons/fa";

interface customiseAssingmentProps {
  assignment: string;
  //   selected: boolean;
}

const CustomiseAssignment: FC<customiseAssingmentProps> = ({ assignment }) => {
  const [selected, setSelected] = useState(true);

  const handleClick = () => {
    setSelected(!selected);
  };
  return (
    <div
      onClick={() => {
        handleClick();
      }}
      className={`text-brand-purple-light flex w-full cursor-pointer flex-row justify-between rounded-full border px-5 py-6 shadow-2xl ${
        selected
          ? "bg-brand-purple-light hover:border-brand-purple-light hover:text-brand-purple-light text-white hover:bg-gray-100"
          : "border-brand-purple-light"
      }`}
    >
      <div className="flex flex-row items-center justify-center gap-4">
        <FaBookOpen />
        <p className="text-sm font-semibold">{assignment}</p>
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

export default CustomiseAssignment;
