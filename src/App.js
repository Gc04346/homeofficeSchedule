import {Calender} from "./Calender";
import {Sidebar} from "./components/Sidebar";
import "./styles.css";
import {useEffect, useRef} from "react";

export default function App() {
    const dragindexRef = useRef();

    return (
        <div className="d-flex w-100">
            <Sidebar dragindexRef={dragindexRef}/>
            <Calender dragindexRef={dragindexRef}/>
        </div>
    );
}
