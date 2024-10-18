"use client";

// SchedulerContext.tsx
import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
} from "react";
import { z } from "zod";

// Define event and state types
export interface Event {
  id: string;
  title: string;
  description?: string;
  startDate: Date;
  endDate: Date;
  variant?: Variant;
  color?: string;
}

interface SchedulerState {
  events: Event[];
}

// Define actions for reducer
type Action =
  | { type: "ADD_EVENT"; payload: Event }
  | { type: "REMOVE_EVENT"; payload: { id: string } }
  | { type: "UPDATE_EVENT"; payload: Event };

// Define handlers interface
interface Handlers {
  handleEventStyling: (
    event: Event,
    dayEvents: Event[],
  ) => {
    height: string;
    left: string;
    maxWidth: string;
    minWidth: string;
    top: string;
    zIndex: number;
  };
}

// Define getters interface
interface Getters {
  getDaysInMonth: (
    month: number,
    year: number,
  ) => { day: number; events: Event[] }[];
  getEventsForDay: (day: number, currentDate: Date) => Event[];
  getDaysInWeek: (week: number, year: number) => Date[];
  getWeekNumber: (date: Date) => number;
  getDayName: (day: number) => string;
}

// Define the context value interface
interface SchedulerContextType {
  state: SchedulerState;
  dispatch: Dispatch<Action>;
  getters: Getters;
  handlers: Handlers;
}

// Define the variant options
export const variants = [
  "success",
  "primary",
  "default",
  "warning",
  "danger",
] as const;

export type Variant = (typeof variants)[number];

// Define Zod schema for form validation
export const eventSchema = z.object({
  title: z.string().nonempty("Event name is required"),
  description: z.string().optional(),
  startDate: z.date(),
  endDate: z.date(),
  variant: z.enum(["primary", "danger", "success", "warning", "default"]),
  color: z.string().nonempty("Color selection is required"),
});

export type EventFormData = z.infer<typeof eventSchema>;

// Initial state
const initialState: SchedulerState = {
  events: [
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "COMP1511 - Assignment 1A",
      description: "",
      startDate: new Date("2024-03-17T11:00:00"),
      endDate: new Date("2024-04-14T12:30:00"),
      variant: "success",
      color: "sky",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "DEADLINE: COMP1511 - Assignment 1A",
      description: "",
      startDate: new Date("2024-04-14T11:00:00"),
      endDate: new Date("2024-04-14T12:30:00"),
      variant: "success",
      color: "sky",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "COMP1511 - Assignment 2A",
      description: "",
      startDate: new Date("2024-04-14T11:00:00"),
      endDate: new Date("2024-05-05T12:30:00"),
      variant: "success",
      color: "sky",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "DEADLINE: COMP1511 - Assignment 2A",
      description: "",
      startDate: new Date("2024-05-05T11:00:00"),
      endDate: new Date("2024-05-05T12:30:00"),
      variant: "success",
      color: "sky",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "COMP1511 - Week 1 Lab",
      description: "",
      startDate: new Date("2024-02-29T11:00:00"),
      endDate: new Date("2024-03-03T12:30:00"),
      variant: "success",
      color: "sky",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "DEADLINE: COMP1511 - Week 1 Lab",
      description: "",
      startDate: new Date("2024-03-03T11:00:00"),
      endDate: new Date("2024-03-03T12:30:00"),
      variant: "success",
      color: "sky",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "COMP1511 - Week 2 Lab",
      description: "",
      startDate: new Date("2024-03-08T11:00:00"),
      endDate: new Date("2024-03-10T12:30:00"),
      variant: "success",
      color: "sky",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "DEADLINE: COMP1511 - Week 2 Lab",
      description: "",
      startDate: new Date("2024-03-10T11:00:00"),
      endDate: new Date("2024-03-10T12:30:00"),
      variant: "success",
      color: "sky",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "COMP1511 - Week 3 Lab",
      description: "",
      startDate: new Date("2024-03-14T11:00:00"),
      endDate: new Date("2024-03-17T12:30:00"),
      variant: "success",
      color: "sky",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "DEADLINE: COMP1511 - Week 3 Lab",
      description: "",
      startDate: new Date("2024-03-17T11:00:00"),
      endDate: new Date("2024-03-17T12:30:00"),
      variant: "success",
      color: "sky",
    },

    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "COMP1511 - Week 4 Lab",
      description: "",
      startDate: new Date("2024-03-21T11:00:00"),
      endDate: new Date("2024-03-24T12:30:00"),
      variant: "success",
      color: "sky",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "DEADLINE: COMP1511 - Week 4 Lab",
      description: "",
      startDate: new Date("2024-03-24T11:00:00"),
      endDate: new Date("2024-03-24T12:30:00"),
      variant: "success",
      color: "sky",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "COMP1511 - Week 5 Lab",
      description: "",
      startDate: new Date("2024-03-28T11:00:00"),
      endDate: new Date("2024-03-31T12:30:00"),
      variant: "success",
      color: "sky",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "DEADLINE: COMP1511 - Week 5 Lab",
      description: "",
      startDate: new Date("2024-03-31T11:00:00"),
      endDate: new Date("2024-03-31T12:30:00"),
      variant: "success",
      color: "sky",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "COMP1511 - Week 7 Lab",
      description: "",
      startDate: new Date("2024-04-11T11:00:00"),
      endDate: new Date("2024-04-14T12:30:00"),
      variant: "success",
      color: "sky",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "DEADLINE: COMP1511 - Week 7 Lab",
      description: "",
      startDate: new Date("2024-04-14T11:00:00"),
      endDate: new Date("2024-04-14T12:30:00"),
      variant: "success",
      color: "sky",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "COMP1511 - Week 8 Lab",
      description: "",
      startDate: new Date("2024-04-18T11:00:00"),
      endDate: new Date("2024-04-21T12:30:00"),
      variant: "success",
      color: "sky",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "DEADLINE: COMP1511 - Week 8 Lab",
      description: "",
      startDate: new Date("2024-04-21T11:00:00"),
      endDate: new Date("2024-04-21T12:30:00"),
      variant: "success",
      color: "sky",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "COMP1511 - Week 9 Lab",
      description: "",
      startDate: new Date("2024-04-25T11:00:00"),
      endDate: new Date("2024-04-28T12:30:00"),
      variant: "success",
      color: "sky",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "DEADLINE: COMP1511 - Week 9 Lab",
      description: "",
      startDate: new Date("2024-04-28T11:00:00"),
      endDate: new Date("2024-04-28T12:30:00"),
      variant: "success",
      color: "sky",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "COMP1511 - Week 10 Lab",
      description: "",
      startDate: new Date("2024-05-02T11:00:00"),
      endDate: new Date("2024-05-05T12:30:00"),
      variant: "success",
      color: "sky",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "DEADLINE: COMP1511 - Week 10 Lab",
      description: "",
      startDate: new Date("2024-05-05T11:00:00"),
      endDate: new Date("2024-05-05T12:30:00"),
      variant: "success",
      color: "sky",
    },
    //MATH1131
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "MATH1131 - Week 1 Lab",
      description: "",
      startDate: new Date("2024-02-24T11:00:00"),
      endDate: new Date("2024-02-27T12:30:00"),
      variant: "success",
      color: "amber",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "DEADLINE: MATH1131 - Week 1 Lab",
      description: "",
      startDate: new Date("2024-02-27T11:00:00"),
      endDate: new Date("2024-02-027T12:30:00"),
      variant: "success",
      color: "amber",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "MATH1131 - Week 2 Lab",
      description: "",
      startDate: new Date("2024-03-02T11:00:00"),
      endDate: new Date("2024-03-05T12:30:00"),
      variant: "success",
      color: "amber",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "DEADLINE: MATH1131 - Week 2 Lab",
      description: "",
      startDate: new Date("2024-03-05T11:00:00"),
      endDate: new Date("2024-03-05T12:30:00"),
      variant: "success",
      color: "amber",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "MATH1131 - Week 3 Lab",
      description: "",
      startDate: new Date("2024-03-09T11:00:00"),
      endDate: new Date("2024-03-12T12:30:00"),
      variant: "success",
      color: "amber",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "DEADLINE: MATH1131 - Week 3 Lab",
      description: "",
      startDate: new Date("2024-03-12T11:00:00"),
      endDate: new Date("2024-03-12T12:30:00"),
      variant: "success",
      color: "amber",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "MATH1131 - Week 4 Lab",
      description: "",
      startDate: new Date("2024-03-16T11:00:00"),
      endDate: new Date("2024-03-19T12:30:00"),
      variant: "success",
      color: "amber",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "DEADLINE: MATH1131 - Week 4 Lab",
      description: "",
      startDate: new Date("2024-03-19T11:00:00"),
      endDate: new Date("2024-03-19T12:30:00"),
      variant: "success",
      color: "amber",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "MATH1131 - Week 5 Lab",
      description: "",
      startDate: new Date("2024-03-23T11:00:00"),
      endDate: new Date("2024-03-26T12:30:00"),
      variant: "success",
      color: "amber",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "DEADLINE: MATH1131 - Week 5 Lab",
      description: "",
      startDate: new Date("2024-03-26T11:00:00"),
      endDate: new Date("2024-03-26T12:30:00"),
      variant: "success",
      color: "amber",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "MATH1131 - Week 7 Lab",
      description: "",
      startDate: new Date("2024-04-06T11:00:00"),
      endDate: new Date("2024-04-09T12:30:00"),
      variant: "success",
      color: "amber",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "DEADLINE: MATH1131 - Week 7 Lab",
      description: "",
      startDate: new Date("2024-04-09T11:00:00"),
      endDate: new Date("2024-04-09T12:30:00"),
      variant: "success",
      color: "amber",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "MATH1131 - Week 8 Lab",
      description: "",
      startDate: new Date("2024-04-13T11:00:00"),
      endDate: new Date("2024-04-16T12:30:00"),
      variant: "success",
      color: "amber",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "DEADLINE: MATH1131 - Week 8 Lab",
      description: "",
      startDate: new Date("2024-04-16T11:00:00"),
      endDate: new Date("2024-04-16T12:30:00"),
      variant: "success",
      color: "amber",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "MATH1131 - Week 9 Lab",
      description: "",
      startDate: new Date("2024-04-20T11:00:00"),
      endDate: new Date("2024-04-23T12:30:00"),
      variant: "success",
      color: "amber",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "DEADLINE: MATH1131 - Week 9 Lab",
      description: "",
      startDate: new Date("2024-04-23T11:00:00"),
      endDate: new Date("2024-04-23T12:30:00"),
      variant: "success",
      color: "amber",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "MATH1131 - Week 10 Lab",
      description: "",
      startDate: new Date("2024-04-27T11:00:00"),
      endDate: new Date("2024-04-30T12:30:00"),
      variant: "success",
      color: "amber",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "DEADLINE: MATH1131 - Week 10 Lab",
      description: "",
      startDate: new Date("2024-04-30T11:00:00"),
      endDate: new Date("2024-04-30T12:30:00"),
      variant: "success",
      color: "amber",
    },
    //MATH1231
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "MATH1231 - Week 1 Lab",
      description: "",
      startDate: new Date("2024-02-25T11:00:00"),
      endDate: new Date("2024-02-28T12:30:00"),
      variant: "success",
      color: "lime",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "DEADLINE: MATH1231 - Week 1 Lab",
      description: "",
      startDate: new Date("2024-02-28T11:00:00"),
      endDate: new Date("2024-02-28T12:30:00"),
      variant: "success",
      color: "lime",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "MATH1231 - Week 2 Lab",
      description: "",
      startDate: new Date("2024-03-03T11:00:00"),
      endDate: new Date("2024-03-06T12:30:00"),
      variant: "success",
      color: "lime",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "DEADLINE: MATH1231 - Week 2 Lab",
      description: "",
      startDate: new Date("2024-03-06T11:00:00"),
      endDate: new Date("2024-03-06T12:30:00"),
      variant: "success",
      color: "lime",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "MATH1231 - Week 3 Lab",
      description: "",
      startDate: new Date("2024-03-10T11:00:00"),
      endDate: new Date("2024-03-13T12:30:00"),
      variant: "success",
      color: "lime",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "DEADLINE: MATH1231 - Week 3 Lab",
      description: "",
      startDate: new Date("2024-03-13T11:00:00"),
      endDate: new Date("2024-03-13T12:30:00"),
      variant: "success",
      color: "lime",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "MATH1231 - Week 4 Lab",
      description: "",
      startDate: new Date("2024-03-17T11:00:00"),
      endDate: new Date("2024-03-20T12:30:00"),
      variant: "success",
      color: "lime",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "DEADLINE: MATH1231 - Week 4 Lab",
      description: "",
      startDate: new Date("2024-03-20T11:00:00"),
      endDate: new Date("2024-03-20T12:30:00"),
      variant: "success",
      color: "lime",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "MATH1231 - Week 5 Lab",
      description: "",
      startDate: new Date("2024-03-24T11:00:00"),
      endDate: new Date("2024-03-27T12:30:00"),
      variant: "success",
      color: "lime",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "DEADLINE: MATH1231 - Week 5 Lab",
      description: "",
      startDate: new Date("2024-03-27T11:00:00"),
      endDate: new Date("2024-03-27T12:30:00"),
      variant: "success",
      color: "lime",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "MATH1231 - Week 7 Lab",
      description: "",
      startDate: new Date("2024-04-07T11:00:00"),
      endDate: new Date("2024-04-10T12:30:00"),
      variant: "success",
      color: "lime",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "DEADLINE: MATH1231 - Week 7 Lab",
      description: "",
      startDate: new Date("2024-04-10T11:00:00"),
      endDate: new Date("2024-04-10T12:30:00"),
      variant: "success",
      color: "lime",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "MATH1231 - Week 8 Lab",
      description: "",
      startDate: new Date("2024-04-14T11:00:00"),
      endDate: new Date("2024-04-17T12:30:00"),
      variant: "success",
      color: "lime",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "DEADLINE: MATH1231 - Week 8 Lab",
      description: "",
      startDate: new Date("2024-04-17T11:00:00"),
      endDate: new Date("2024-04-17T12:30:00"),
      variant: "success",
      color: "lime",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "MATH1231 - Week 9 Lab",
      description: "",
      startDate: new Date("2024-04-21T11:00:00"),
      endDate: new Date("2024-04-24T12:30:00"),
      variant: "success",
      color: "lime",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "DEADLINE: MATH1231 - Week 9 Lab",
      description: "",
      startDate: new Date("2024-04-24T11:00:00"),
      endDate: new Date("2024-04-24T12:30:00"),
      variant: "success",
      color: "lime",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "MATH1231 - Week 10 Lab",
      description: "",
      startDate: new Date("2024-04-28T11:00:00"),
      endDate: new Date("2024-05-01T12:30:00"),
      variant: "success",
      color: "lime",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "DEADLINE: MATH1231 - Week 10 Lab",
      description: "",
      startDate: new Date("2024-05-01T11:00:00"),
      endDate: new Date("2024-05-01T12:30:00"),
      variant: "success",
      color: "lime",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "family trip",
      description: "",
      startDate: new Date("2024-02-03T11:00:00"),
      endDate: new Date("2024-02-015T12:30:00"),
      variant: "success",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "work",
      description: "",
      startDate: new Date("2024-03-15T11:00:00"),
      endDate: new Date("2024-03-15T12:30:00"),
      variant: "success",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "work",
      description: "",
      startDate: new Date("2024-03-16T11:00:00"),
      endDate: new Date("2024-03-16T12:30:00"),
      variant: "success",
    },
    {
      id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
      title: "Day Trip with da boys",
      description: "",
      startDate: new Date("2024-04-20T11:00:00"),
      endDate: new Date("2024-04-20T12:30:00"),
      variant: "success",
    },
  ],
  // events: [],
};

// Reducer function
const schedulerReducer = (
  state: SchedulerState,
  action: Action
): SchedulerState => {
  switch (action.type) {
    case "ADD_EVENT":
      return { ...state, events: [...state.events, action.payload] };

    case "REMOVE_EVENT":
      return {
        ...state,
        events: state.events.filter((event) => event.id !== action.payload.id),
      };
    case "UPDATE_EVENT":
      return {
        ...state,
        events: state.events.map((event) =>
          event.id === action.payload.id ? action.payload : event
        ),
      };
    default:
      return state;
  }
};

// Create the context with the correct type
const SchedulerContext = createContext<SchedulerContextType | undefined>(
  undefined
);

// Provider component
export const SchedulerProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(schedulerReducer, initialState);

  // global getters
  const getDaysInMonth = (month: number, year: number) => {
    return Array.from(
      { length: new Date(year, month + 1, 0).getDate() },
      (_, index) => ({
        day: index + 1,
        events: [],
      })
    );
  };

  const getDaysInWeek = (week: number, year: number) => {
    const weekStart = new Date(year, 0, 1 + (week - 1) * 7);
    const days = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(weekStart);
      day.setDate(day.getDate() + i);
      days.push(day);
    }
    return days;
  };

  const getWeekNumber = (date: Date) => {
    const d = new Date(
      Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
    );
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    const weekNo = Math.ceil(
      ((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7
    );
    return weekNo;
  };

  // Helper function to filter events for a specific day
  const getEventsForDay = (day: number, currentDate: Date) => {
    return state?.events.filter((event) => {
      const eventStart = new Date(event.startDate);
      const eventEnd = new Date(event.endDate);

      // Create new Date objects to avoid mutating `currentDate`
      const startOfDay = new Date(currentDate);
      startOfDay.setDate(day);
      startOfDay.setHours(0, 0, 0, 0);

      const endOfDay = new Date(currentDate);
      endOfDay.setDate(day + 1);
      endOfDay.setHours(0, 0, 0, 0);

      // Check if the event starts or spans across the given day
      const isSameDay =
        eventStart.getDate() === day &&
        eventStart.getMonth() === currentDate.getMonth() &&
        eventStart.getFullYear() === currentDate.getFullYear();

      const isSpanningDay = eventStart < endOfDay && eventEnd >= startOfDay;

      return isSameDay || isSpanningDay;
    });
  };

  const getDayName = (day: number) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  };

  const getters: Getters = {
    getDaysInMonth,
    getEventsForDay,
    getDaysInWeek,
    getWeekNumber,
    getDayName: function (day: number): string {
      throw new Error("Function not implemented.");
    }
  };

  // handlers
  function handleEventStyling(event: Event, dayEvents: Event[]) {
    const eventsOnHour = dayEvents.filter((e) => {
      return (
        e.startDate < event.endDate && e.endDate > event.startDate // Any overlap
      );
    });

    const numEventsOnHour = eventsOnHour.length || 1;
    const indexOnHour = eventsOnHour.indexOf(event);

    let eventHeight = 0;
    let maxHeight = 0;
    let eventTop = 0;

    if (event.startDate instanceof Date && event.endDate instanceof Date) {
      const diffInMs = event.endDate.getTime() - event.startDate.getTime();

      // Calculate the event height based on duration (64px per hour)
      eventHeight = (diffInMs / (1000 * 60 * 60)) * 64;

      // Get the event start hour as a fraction (e.g., 13.5 for 13:30)
      const eventStartHour =
        event.startDate.getHours() + event.startDate.getMinutes() / 60;

      // Define the day-end hour (24.0 for midnight)
      const dayEndHour = 24;

      // Calculate maxHeight based on the difference between the day-end hour and the event's start hour
      maxHeight = Math.max(0, (dayEndHour - eventStartHour) * 64);

      // Limit the event height to the calculated maxHeight (so it doesn’t overflow beyond the day)
      eventHeight = Math.min(eventHeight, maxHeight);

      // Calculate the top position based on the event's start time (64px per hour)
      eventTop = eventStartHour * 64;
    } else {
      console.error("Invalid event or missing start/end dates.");
    }

    return {
      height: `${eventHeight < 10 ? 20 : eventHeight > maxHeight ? maxHeight : eventHeight}px`,
      top: `${eventTop}px`,
      zIndex: indexOnHour + 1,
      left: `${(indexOnHour * 100) / numEventsOnHour}%`,
      maxWidth: `${100 / numEventsOnHour}%`,
      minWidth: `${100 / numEventsOnHour}%`,
    };
  }

  const handlers: Handlers = {
    handleEventStyling,
  };
  return (
    <SchedulerContext.Provider value={{ state, dispatch, getters, handlers }}>
      {children}
    </SchedulerContext.Provider>
  );
};

// Custom hook to use the scheduler context
export const useScheduler = () => {
  const context = useContext(SchedulerContext);
  if (!context) {
    throw new Error("useScheduler must be used within a SchedulerProvider");
  }
  return context;
};