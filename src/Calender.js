import {useRef, useState} from "react";
import {
    SevenColGrid,
    Wrapper,
    HeadDays,
    DateControls,
    StyledEvent,
    SeeMore,
    PortalWrapper
} from "./Calender.styled";
import {DAYS, MOCKAPPS} from "./conts";
import {
    datesAreOnSameDay,
    getDarkColor,
    getDaysInMonth,
    getMonthYear,
    getSortedDays,
    nextMonth,
    prevMonth,
    range,
    sortDays
} from "./utils";
import {Sidebar} from "./components/Sidebar";

export const Calender = ({dragindexRef, dragDateRef, events, setEvents}) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [showPortal, setShowPortal] = useState(false);
    const [portalData, setPortalData] = useState({});

    const addEvent = (date, event) => {
        if (!event.target.classList.contains("StyledEvent")) {
            const text = window.prompt("name");
            if (text) {
                date.setHours(0);
                date.setSeconds(0);
                date.setMilliseconds(0);
                setEvents((prev) => [
                    ...prev,
                    {date, title: text, color: getDarkColor()}
                ]);
            }
        }
    };

    const drag = (index, e) => {
        dragindexRef.current = {index, target: e.target};
    };

    const onDragEnter = (date, e) => {
        e.preventDefault();
        dragDateRef.current = {date, target: e.target.id};
    };

    const drop = (ev) => {
        ev.preventDefault();
        // then create it
        setEvents((prev) =>
            prev.map((ev, index) => {
                if (index === dragindexRef.current.index) {
                    ev.date = dragDateRef.current.date;
                }
                return ev;
            })
        );
    };

    const handleOnClickEvent = (event) => {
        setShowPortal(true);
        setPortalData(event);
    };

    const handlePotalClose = () => setShowPortal(false);

    const handleDelete = () => {
        setEvents((prevEvents) =>
            prevEvents.filter((ev) => ev.date !== portalData.date)
        );
        handlePotalClose();
    };

    return (

        <Wrapper>
            <DateControls>
                {getMonthYear(currentDate)}
            </DateControls>
            <SevenColGrid>
                {DAYS.map((day) => (
                    <HeadDays className="nonDRAG">{day}</HeadDays>
                ))}
            </SevenColGrid>

            <SevenColGrid
                fullheight={true}
                is28Days={getDaysInMonth(currentDate) === 28}
            >
                {getSortedDays(currentDate).map((day) => (
                    <div
                        id={`${currentDate.getFullYear()}/${currentDate.getMonth()}/${day}`}
                        onDragEnter={(e) =>
                            onDragEnter(
                                new Date(
                                    currentDate.getFullYear(),
                                    currentDate.getMonth(),
                                    day
                                ),
                                e
                            )
                        }
                        onDragOver={(e) => {
                            e.preventDefault();
                        }}
                        onDragEnd={(e) => drop(e)}
                        onClick={(e) =>
                            e.preventDefault()
                        }
                    >
            <span
                className={`nonDRAG ${
                    datesAreOnSameDay(
                        new Date(),
                        new Date(
                            currentDate.getFullYear(),
                            currentDate.getMonth(),
                            day
                        )
                    )
                        ? "active"
                        : ""
                }`}
            >
              {day}
            </span>
                        <EventWrapper>
                            {events.map(
                                (ev, index) =>
                                    datesAreOnSameDay(
                                        ev.date,
                                        new Date(
                                            currentDate.getFullYear(),
                                            currentDate.getMonth(),
                                            day
                                        )
                                    ) && (
                                        <StyledEvent
                                            onDragStart={(e) => drag(index, e)}
                                            onClick={() => handleOnClickEvent(ev)}
                                            draggable
                                            className="StyledEvent"
                                            id={`${ev.color} ${ev.title}`}
                                            key={ev.title}
                                            bgColor={ev.color}
                                        >
                                            {ev.title}
                                        </StyledEvent>
                                    )
                            )}
                        </EventWrapper>
                    </div>
                ))}
            </SevenColGrid>
            {showPortal && (
                <Portal
                    {...portalData}
                    handleDelete={handleDelete}
                    handlePotalClose={handlePotalClose}
                />
            )}
        </Wrapper>
    )
        ;
};

const EventWrapper = ({children}) => {
    if (children.filter((child) => child).length)
        return (
            <>
                {children}
            </>
        );
};

const Portal = ({title, date, handleDelete, handlePotalClose}) => {
    return (
        <PortalWrapper>
            <h2>{title}</h2>
            <p>{date.toDateString()}</p>
            <ion-icon onClick={handleDelete} name="trash-outline">Remover Home Office</ion-icon>
            <ion-icon onClick={handlePotalClose} name="close-outline">x</ion-icon>
        </PortalWrapper>
    );
};
