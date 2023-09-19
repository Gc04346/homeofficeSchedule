import {StyledEvent} from "../Calender.styled";
import Button from "bootstrap/js/src/button";

const PersonCard = ({name, color, drag, index}) => {

    return (
        <div style={{
            padding: '5px 5px',
        }}>
        <StyledEvent
            onDragStart={(e) => drag(index, e)}
            draggable
            className="StyledEvent"
            id={`${color} ${name}`}
            key={name}
            bgColor={color}
        >
            {name}
        </StyledEvent>
            </div>
            )
}

export {PersonCard}