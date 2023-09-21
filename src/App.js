import {Calender} from "./Calender";
import {Sidebar} from "./components/Sidebar";
import "./styles.css";
import { useRef, useState} from "react";

export default function App() {
    const dragindexRef = useRef();
    const dragDateRef = useRef();
    const [events, setEvents] = useState([]);

    return (
        <div className="d-flex w-100">
            <Sidebar dragindexRef={dragindexRef} dragDateRef={dragDateRef} events={events} setEvents={setEvents}/>
            <Calender dragindexRef={dragindexRef} dragDateRef={dragDateRef} events={events} setEvents={setEvents}/>
        </div>
    );
}
