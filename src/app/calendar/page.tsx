import MonthView from "../_components/UI/calendar";
import PageLayout from "../_components/PageLayout";

const Calendar = () => {
  return (
    <PageLayout>
      <div className="align-center flex w-full overflow-y-scroll p-10">
        <MonthView />
      </div>
    </PageLayout>
  );
};

export default Calendar;
