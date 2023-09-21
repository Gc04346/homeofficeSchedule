import {StyledEvent} from "../Calender.styled";
import Button from "bootstrap/js/src/button";
import {useEffect, useState} from "react";

const PersonCard = ({name, color, index, dragindexRef, dragDateRef, events, setEvents, homeOfficesAmount, setHomeOfficesLeft}) => {
    const [personHomeofficesUsed, setPersonHomeofficesUsed] = useState(0);
    const drag = (index, e) => {
        dragindexRef.current = {index, target: e.target, name: name, color: color};
    };

    const onDragEnd = (date, e) => {
        e.preventDefault();
        console.log(dragDateRef.current.date)
        // if there is a name in dragindexRef.current then create a new event
        // if there is not a name in dragindexRef.current then do nothing
        if(dragindexRef.current.name){
            setEvents((prev) => [
                ...prev,
                {date:dragDateRef.current.date, title: dragindexRef.current.name, color: dragindexRef.current.color}
            ]);
        }

    }

    useEffect(() => {
        if (personHomeofficesUsed)
        setHomeOfficesLeft(homeOfficesAmount - personHomeofficesUsed)
        // console.log({personHomeofficesUsed}, {name})
    }, [personHomeofficesUsed]);

    useEffect(() => {
        console.log(name, events.filter(event => event.title===name).length)
        setPersonHomeofficesUsed(events.filter(event => event.title===name).length)
    }, [events]);


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
            onDragEnd={(e) => {
                onDragEnd(new Date(), e)
            }}
        >
            {name}
        </StyledEvent>
            </div>
            )
}

export {PersonCard}
