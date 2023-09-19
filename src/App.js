import {Calender} from "./Calender";
import {Sidebar} from "./Sidebar";
import "./styles.css";

export default function App() {
    return (
        <div className="d-flex w-100">
            <Sidebar/>
            <Calender/>
        </div>
    );
}
