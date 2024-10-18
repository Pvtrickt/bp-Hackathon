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
export default function MonthView() {
  const daysOfWeek = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
  const { getters, state } = useScheduler();
  const { showModal } = useModalContext();

  const [currentDate, setCurrentDate] = useState(new Date());

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
    <div>
      <div className="flex items-center">
        <motion.h2
          key={currentDate.getMonth()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="my-5 text-2xl font-semibold tracking-tighter text-gray-500"
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
          className="grid grid-cols-7 gap-1 sm:gap-2"
        >
          {daysOfWeek.map((day, idx) => (
            <div
              key={idx}
              className="my-8 text-left text-4xl font-medium tracking-tighter"
            >
              {day}
            </div>
          ))}

          {daysInMonth.map((dayObj) => {
            const dayEvents = getters.getEventsForDay(dayObj.day, currentDate); // Get events for this day

            return (
              <motion.div
                className="group flex h-[150px] flex-col rounded border-none hover:z-50"
                key={dayObj.day}
                variants={itemVariants}
              >
                <Card
                  isPressable
                  className="border-default-100 relative flex h-full border p-4 shadow-md"
                  onClick={() => handleAddEvent(dayObj.day)}
                >
                  <div
                    className={clsx(
                      "mb-1 text-3xl font-semibold",
                      dayEvents.length > 0
                        ? "text-primary-600"
                        : "text-muted-foreground",
                    )}
                  >
                    {dayObj.day}
                  </div>
                  <div className="flex w-full flex-grow flex-col gap-2 overflow-hidden">
                    {/* {dayEvents?.length > 0 && (
                      <EventStyled minmized {...dayEvents[0]} />
                    )} */}
                    {dayEvents.length > 1 && (
                      <Chip
                        onClick={(e) => {
                          e.stopPropagation();
                          handleShowMoreEvents(dayEvents);
                        }}
                        variant="flat"
                        className="hover:bg-default-200 absolute right-2 top-2 text-xs transition duration-300"
                      >
                        {dayEvents.length > 1
                          ? `+${dayEvents.length - 1}`
                          : " "}
                      </Chip>
                    )}
                  </div>

                  {/* Hover Text */}
                  {dayEvents.length === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="text-lg font-semibold tracking-tighter text-white">
                        Add Event
                      </span>
                    </div>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
