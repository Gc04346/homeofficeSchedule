import {Calender} from "./Calender";
import {Sidebar} from "./components/Sidebar";
import "./styles.css";
import { useRef, useState} from "react";

export default function App() {
    const dragindexRef = useRef();
    const dragDateRef = useRef();

    const getInitialEvents = () => {
        let lsevents = localStorage.getItem('ho-events');
        if (lsevents) {
            let parsedEvents = JSON.parse(lsevents);
            parsedEvents.forEach(ev => ev.date = new Date(ev.date));
            return parsedEvents;
        }
        return [];
    }

    const [events, setEvents] = useState(getInitialEvents);

    return (
        <div style={{
            display: "flex",
            maxHeight: "100vh"
        }}>
            <Sidebar dragindexRef={dragindexRef} dragDateRef={dragDateRef} events={events} setEvents={setEvents}/>
            <Calender dragindexRef={dragindexRef} dragDateRef={dragDateRef} events={events} setEvents={setEvents}/>
        </div>
    );
}
