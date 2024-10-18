"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { ArrowLeft, ArrowRight } from "lucide-react";
import clsx from "clsx";

import { Event, useScheduler } from "providers/schedular-provider";
import { useModalContext } from "providers/modal-provider";
import AddEventModal from "components/schedule/_modals/add-event-modal";
import ShowMoreEventsModal from "components/schedule/_modals/show-more-events-modal";
import EventStyled from "../event-component/event-styled";
import DailyPopUp from "../DailyPopUp";
export default function MonthView() {
  const daysOfWeek = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
  const { getters, state } = useScheduler();
  const { showModal } = useModalContext();

  const [currentDate, setCurrentDate] = useState(new Date());
  const [dailyModal, setDailyModal] = useState(false);
  const daysInMonth = getters.getDaysInMonth(
    currentDate.getMonth(),
    currentDate.getFullYear(),
  );
  const handlePrevMonth = () => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      1,
    );
    setCurrentDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1,
    );
    setCurrentDate(newDate);
  };

  function handleAddEvent(selectedDay?: number) {
    showModal({
      title: "Add Event",
      body: <AddEventModal />,
      getter: async () => {
        const startDate = new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          selectedDay ?? 1, // Use 1 if selectedDay is undefined or null
          0,
          0,
          0,
          0,
        );
        const endDate = new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          selectedDay ?? 1,
          23,
          59,
          59,
          999,
        );
        return { startDate, endDate };
      },
    });
  }

  function handleShowMoreEvents(dayEvents?: Event[]) {
    showModal({
      title:
        dayEvents &&
        dayEvents?.length &&
        dayEvents[0]?.startDate.toDateString(),
      body: <ShowMoreEventsModal />,
      getter: async () => {
        return { dayEvents };
      },
    });
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  useEffect(() => {
    console.log("Updated state:", state);
  }, [state]);

  return (
    <div className="relative w-full">
      <div className="flex items-center">
        <motion.h2
          key={currentDate.getMonth()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="my-5 text-xl font-semibold tracking-tighter text-gray-500"
        >
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </motion.h2>
        <div className="ml-auto flex gap-3 overflow-visible">
          <Button
            startContent={<ArrowLeft />}
            onClick={handlePrevMonth}
          ></Button>

          <Button
            startContent={<ArrowRight />}
            onClick={handleNextMonth}
          ></Button>
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={currentDate.getMonth()}
          className="relative grid w-full grid-cols-7 sm:gap-2"
        >
          {daysOfWeek.map((day, idx) => (
            <div
              key={idx}
              className="w-full text-left text-xl font-medium uppercase tracking-tighter"
            >
              {day}
            </div>
          ))}

          {daysInMonth.map((dayObj, i) => {
            const dayEvents = getters.getEventsForDay(dayObj.day, currentDate); // Get events for this day

            return (
              <motion.div
                key={i}
                className={clsx(
                  "group flex min-h-[150px] w-full flex-col rounded border-none hover:z-50",
                  dayObj.day == 1 &&
                    currentDate.getMonth() == 0 &&
                    "col-start-3",
                  dayObj.day == 1 &&
                    currentDate.getMonth() == 1 &&
                    "col-start-6",
                  dayObj.day == 1 &&
                    currentDate.getMonth() == 2 &&
                    "col-start-7",
                  dayObj.day == 1 &&
                    currentDate.getMonth() == 3 &&
                    "col-start-3",
                  dayObj.day == 1 &&
                    currentDate.getMonth() == 4 &&
                    "col-start-5",
                  dayObj.day == 1 &&
                    currentDate.getMonth() == 5 &&
                    "col-start-1",
                  dayObj.day == 1 &&
                    currentDate.getMonth() == 6 &&
                    "col-start-3",
                  dayObj.day == 1 &&
                    currentDate.getMonth() == 7 &&
                    "col-start-6",
                  dayObj.day == 1 &&
                    currentDate.getMonth() == 8 &&
                    "col-start-2",
                  dayObj.day == 1 &&
                    currentDate.getMonth() == 9 &&
                    "col-start-4",
                  dayObj.day == 1 &&
                    currentDate.getMonth() == 10 &&
                    "col-start-7",
                  dayObj.day == 1 &&
                    currentDate.getMonth() == 11 &&
                    "col-start-2",
                )}
                variants={itemVariants}
              >
                <Card
                  isPressable
                  className="border-default-100 relative flex h-full flex-grow border p-4"
                  // onClick={() => handleAddEvent(dayObj.day)}
                  onClick={() => {
                    setDailyModal(!dailyModal);
                  }}
                >
                  <div
                    className={clsx(
                      "mb-1 text-xl font-light text-gray-500",
                      dayEvents.length > 0
                        ? "text-primary-600"
                        : "text-muted-foreground",
                    )}
                  >
                    {dayObj.day}
                  </div>
                  <div className="flex w-full flex-grow flex-col gap-1 overflow-hidden">
                    {dayEvents.map((dayObj) => {
                      return (
                        <div
                          className={`w-full truncate rounded px-2 text-xs ${
                            dayObj.color === "sky"
                              ? "bg-sky-200 text-sky-600"
                              : dayObj.color === "amber"
                                ? "bg-amber-200 text-amber-600"
                                : dayObj.color === "lime"
                                  ? "bg-lime-200 text-lime-600"
                                  : "bg-gray-200 text-gray-600"
                          }`}
                          key={dayObj.id}
                        >
                          {dayObj.title}
                        </div>
                      );
                    })}
                  </div>

                  {/* Hover Text */}
                  {/* {dayEvents.length === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="text-lg font-semibold tracking-tighter text-white">
                        Add Event
                      </span>
                    </div>
                  )} */}
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
      {dailyModal && (
        <DailyPopUp
          onClose={() => {
            setDailyModal(!dailyModal);
          }}
        />
      )}
    </div>
  );
}
