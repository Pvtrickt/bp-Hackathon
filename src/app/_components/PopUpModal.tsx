import { useRouter } from "next/navigation";
interface PopUpModalProp {
  onClose: () => void;
}

const PopUpModal = ({ onClose }: PopUpModalProp) => {
  const router = useRouter();
  const handleClick = (page: string) => {
    if (page === "customise") {
      router.push("../customise");
    } else {
      router.push("../calendar");
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-40`}
      onClick={onClose}
    >
      <div
        className="flex w-auto flex-col justify-center rounded-3xl bg-gray-100 p-12"
        onClick={(e) => e.stopPropagation()}
        // style={{ padding: "2rem 6rem 3rem 2rem" }}
      >
        <h1 className="text-bg-indigo-900 mb-8 text-2xl font-semibold text-brand-purple-dark">
          Selected Subject(s):
        </h1>
        <div className="flex w-full flex-col space-y-6">
          <li className="flex flex-row items-center justify-between gap-60 rounded-3xl bg-brand-purple-light p-4 text-white shadow-xl">
            <div>
              <h1 className="text-2xl">COMP1511</h1>
              <h2 text-lg>Programming Fundamentals</h2>
            </div>

            <select className="w-22 h-10 rounded-full bg-white px-3 py-2 text-sm text-brand-purple-light">
              <option value="term1">Term 1</option>
              <option value="term2">Term 2</option>
              <option value="term3">Term 3</option>
            </select>
          </li>
          <li className="flex flex-row items-center justify-between gap-60 rounded-3xl bg-brand-purple-light p-4 text-white shadow-xl">
            <div>
              <h1 className="text-2xl">MATH1131</h1>
              <h2 text-lg>Maths 1A</h2>
            </div>

            <select className="w-22 h-10 rounded-full bg-white px-3 py-2 text-sm text-brand-purple-light">
              <option value="term1">Term 1</option>
              <option value="term2">Term 2</option>
              <option value="term3">Term 3</option>
            </select>
          </li>
          <li className="flex flex-row items-center justify-between gap-60 rounded-3xl bg-brand-purple-light p-4 text-white shadow-xl">
            <div>
              <h1 className="text-2xl">MATH1231</h1>
              <h2 text-lg>Maths 1B</h2>
            </div>

            <select className="w-22 h-10 rounded-full bg-white px-3 py-2 text-sm text-brand-purple-light">
              <option value="term1">Term 1</option>
              <option value="term2">Term 2</option>
              <option value="term3">Term 3</option>
            </select>
          </li>
        </div>
        <div className="flex flex-row justify-between">
          <button
            className="hover:bg-yellow-600m mt-8 flex w-60 flex-row justify-center gap-4 rounded-full bg-yellow-500 px-6 py-2 text-white shadow-xl"
            onClick={() => handleClick("customise")}
          >
            <img src="edit2.png" className="h-5 w-5" />
            <span>Edit assessments</span>
          </button>
          <button
            className="hover:bg-yellow-600m mt-8 flex w-60 flex-row justify-center gap-4 rounded-full bg-yellow-500 px-6 py-2 text-white shadow-xl"
            onClick={() => handleClick("calendar")}
          >
            <img src="calendaricon.png" className="h-5 w-5" />
            <span>Get Schedule</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUpModal;
