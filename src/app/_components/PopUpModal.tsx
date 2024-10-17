import { useRouter } from "next/navigation";
interface PopUpModalProp {
  onClose: () => void;
}

const PopUpModal = ({ onClose }: PopUpModalProp) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("../customise");
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-40`}
      onClick={onClose}
    >
      <div
        className="flex flex-col items-center justify-center bg-gray-100 rounded-3xl "
        onClick={(e) => e.stopPropagation()}
        style={{ padding: '2rem 6rem 3rem 2rem'}} 
      >
        <h1>Select Subjects:</h1>
        <div className="flex flex-col bg-gray-100 space-y-6 ">
          <li className="flex flex-row bg-brand-purple-light text-white rounded-xl p-4">
            <div>
            <h1 text-xl font-bold>COMP1511</h1>
            <h2 text-lg>Programming Fundamentals</h2>
            </div>

            <select className="bg-white text-black rounded-lg px-3 py-2 ">
              <option value="term1">Term 1</option>
              <option value="term2">Term 2</option>
              <option value="term3">Term 3</option>
            </select>
          </li>
          <li className="flex flex-col bg-brand-purple-light text-white rounded-xl p-4">
            <h1>COMP1511</h1>
            <h2>Programming Fundamentals</h2>
          </li>
          <li className="flex flex-col bg-brand-purple-light text-white rounded-xl p-4">
            <h1>COMP1511</h1>
            <h2>Programming Fundamentals</h2>
          </li>
          <button className="flex" onClick={handleClick}>
            Generate Timetable
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUpModal;
