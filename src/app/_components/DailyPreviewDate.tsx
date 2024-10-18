"use client";

interface DailyPreviewDateProps {
  Day: string;
  Date: number;
  selected?: boolean;
}

const DailyPreviewDate = ({ Day, Date, selected }: DailyPreviewDateProps) => {
  return (
    <div
      className={`w-[50px] cursor-pointer rounded-2xl p-2 text-center text-sm font-light text-white hover:opacity-90 ${selected ? `bg-brand-purple-dark` : `bg-brand-purple-light`}`}
    >
      <p>{Day}</p>
      <p>{Date}</p>
    </div>
  );
};

export default DailyPreviewDate;
