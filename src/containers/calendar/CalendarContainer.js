import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./CalendarContainer.css";

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "Fall 2022 Info Session 6-7 PM @ Blockchain Lab",
        start: new Date(2022, 7, 29),
        end: new Date(2022, 7, 29),
    },
    {
        title: "Fall 2022 Info Session 6-7 PM @ Blockchain Lab",
        start: new Date(2022, 7, 30),
        end: new Date(2022, 7, 30),
    },
    {
        title: "Fall 2022 Info Session 6-7 PM @ Blockchain Lab",
        start: new Date(2022, 7, 31),
        end: new Date(2022, 7, 31),
    },
    {
        title: "FreeTail x Texas Blockchain Hackathon",
        start: new Date(2022, 9, 15),
        end: new Date(2022, 9, 17),
    },
    {
        title: "General Meeting 6-7 PM",
        start: new Date(2022, 8, 7),
        end: new Date(2022, 8, 7),
    },
    {
        title: "Web3 101 5:30-6 PM",
        start: new Date(2022, 8, 7),
        end: new Date(2022, 8, 7),
    },
    {
        title: "DeFi 101 6-7 PM",
        start: new Date(2022, 8, 8),
        end: new Date(2022, 8, 8),
    },
    {
        title: "Engineering 101 6-7 PM",
        start: new Date(2022, 8, 6),
        end: new Date(2022, 8, 6),
    },
    {
        title: "General Meeting 6-7 PM",
        start: new Date(2022, 8, 14),
        end: new Date(2022, 8, 14),
    },
    {
        title: "Web3 101 5:30-6 PM",
        start: new Date(2022, 8, 14),
        end: new Date(2022, 8, 14),
    },
    {
        title: "DeFi 101 6-7 PM",
        start: new Date(2022, 8, 12),
        end: new Date(2022, 8, 12),
    },
    {
        title: "Engineering 101 6-7 PM",
        start: new Date(2022, 8, 13),
        end: new Date(2022, 8, 13),
    },
    {
        title: "General Meeting 6-7 PM",
        start: new Date(2022, 8, 21),
        end: new Date(2022, 8, 21),
    },
    {
        title: "Web3 101 5:30-6 PM",
        start: new Date(2022, 8, 21),
        end: new Date(2022, 8, 21),
    },
    {
        title: "DeFi 101 6-7 PM",
        start: new Date(2022, 8, 19),
        end: new Date(2022, 8, 19),
    },
    {
        title: "Engineering 101 6-7 PM",
        start: new Date(2022, 8, 20),
        end: new Date(2022, 8, 20),
    },
    {
        title: "General Meeting 6-7 PM",
        start: new Date(2022, 8, 28),
        end: new Date(2022, 8, 28),
    },
    {
        title: "Web3 101 5:30-6 PM",
        start: new Date(2022, 8, 28),
        end: new Date(2022, 8, 28),
    },
    {
        title: "DeFi 101 6-7 PM",
        start: new Date(2022, 8, 26),
        end: new Date(2022, 8, 26),
    },
    {
        title: "Engineering 101 6-7 PM",
        start: new Date(2022, 8, 27),
        end: new Date(2022, 8, 27),
    },
    {
        title: "General Meeting 6-7 PM",
        start: new Date(2022, 9, 5),
        end: new Date(2022, 9, 5),
    },
    {
        title: "Web3 101 5:30-6 PM",
        start: new Date(2022, 9, 5),
        end: new Date(2022, 9, 5),
    },
    {
        title: "DeFi 101 6-7 PM",
        start: new Date(2022, 9, 3),
        end: new Date(2022, 9, 3),
    },
    {
        title: "Engineering 101 6-7 PM",
        start: new Date(2022, 9, 4),
        end: new Date(2022, 9, 4),
    },
    {
        title: "General Meeting 6-7 PM",
        start: new Date(2022, 9, 12),
        end: new Date(2022, 9, 12),
    },
    {
        title: "Web3 101 5:30-6 PM",
        start: new Date(2022, 9, 12),
        end: new Date(2022, 9, 12),
    },
    {
        title: "DeFi 101 6-7 PM",
        start: new Date(2022, 9, 10),
        end: new Date(2022, 9, 10),
    },
    {
        title: "Engineering 101 6-7 PM",
        start: new Date(2022, 9, 11),
        end: new Date(2022, 9, 11),
    },
    {
        title: "General Meeting 6-7 PM",
        start: new Date(2022, 9, 19),
        end: new Date(2022, 9, 19),
    },
    {
        title: "Web3 101 5:30-6 PM",
        start: new Date(2022, 9, 19),
        end: new Date(2022, 9, 19),
    },
    {
        title: "DeFi 101 6-7 PM",
        start: new Date(2022, 9, 17),
        end: new Date(2022, 9, 17),
    },
    {
        title: "Engineering 101 6-7 PM",
        start: new Date(2022, 9, 18),
        end: new Date(2022, 9, 18),
    },
    {
        title: "General Meeting 6-7 PM",
        start: new Date(2022, 9, 26),
        end: new Date(2022, 9, 26),
    },
    {
        title: "Web3 101 5:30-6 PM",
        start: new Date(2022, 9, 26),
        end: new Date(2022, 9, 26),
    },
    {
        title: "DeFi 101 6-7 PM",
        start: new Date(2022, 9, 24),
        end: new Date(2022, 9, 24),
    },
    {
        title: "Engineering 101 6-7 PM",
        start: new Date(2022, 9, 25),
        end: new Date(2022, 9, 25),
    },
    {
        title: "General Meeting 6-7 PM",
        start: new Date(2022, 10, 2),
        end: new Date(2022, 10, 2),
    },
    {
        title: "Web3 101 5:30-6 PM",
        start: new Date(2022, 10, 2),
        end: new Date(2022, 10, 2),
    },
    {
        title: "DeFi 101 6-7 PM",
        start: new Date(2022, 9, 31),
        end: new Date(2022, 9, 31),
    },
    {
        title: "Engineering 101 6-7 PM",
        start: new Date(2022, 10, 1),
        end: new Date(2022, 10, 1),
    },
    {
        title: "General Meeting 6-7 PM",
        start: new Date(2022, 10, 9),
        end: new Date(2022, 10, 9),
    },
    {
        title: "Web3 101 5:30-6 PM",
        start: new Date(2022, 10, 9),
        end: new Date(2022, 10, 9),
    },
    {
        title: "DeFi 101 6-7 PM",
        start: new Date(2022, 10, 7),
        end: new Date(2022, 10, 7),
    },
    {
        title: "Engineering 101 6-7 PM",
        start: new Date(2022, 10, 8),
        end: new Date(2022, 10, 8),
    },
    {
        title: "General Meeting 6-7 PM",
        start: new Date(2022, 10, 16),
        end: new Date(2022, 10, 16),
    },
    {
        title: "Web3 101 5:30-6 PM",
        start: new Date(2022, 10, 16),
        end: new Date(2022, 10, 16),
    },
    {
        title: "DeFi 101 6-7 PM",
        start: new Date(2022, 10, 14),
        end: new Date(2022, 10, 14),
    },
    {
        title: "Engineering 101 6-7 PM",
        start: new Date(2022, 10, 15),
        end: new Date(2022, 10, 15),
    },
    {
        title: "General Meeting 6-7 PM",
        start: new Date(2022, 10, 30),
        end: new Date(2022, 10, 30),
    },
    {
        title: "Web3 101 5:30-6 PM",
        start: new Date(2022, 10, 30),
        end: new Date(2022, 10, 30),
    },
    {
        title: "DeFi 101 6-7 PM",
        start: new Date(2022, 10, 28),
        end: new Date(2022, 10, 28),
    },
    {
        title: "Engineering 101 6-7 PM",
        start: new Date(2022, 10, 29),
        end: new Date(2022, 10, 29),
    },

];

function CalendarContainer() {

    return (
        <div className="cal-style">
            <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
        </div>
    );
}

export default CalendarContainer;