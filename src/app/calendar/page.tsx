import MonthView from "../_components/UI/calendar";
import PageLayout from "../_components/PageLayout";

const Calendar = () => {
  return (
    <PageLayout>
      <div className="align-center flex max-h-[60%] w-full flex-col overflow-y-scroll p-10">
        <div className="text-3xl font-semibold text-brand-purple-dark">
          Timetable
        </div>
        <MonthView />
      </div>
    </PageLayout>
  );
};

export default Calendar;
