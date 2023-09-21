import {useEffect, useRef, useState} from "react";
import {SeeMore, StyledEvent} from "../Calender.styled";
import {PersonCard} from "./PersonCard";

const PeopleCards = ({name, homeOffices, color, dragindexRef, dragDateRef, events, setEvents, spendHomeOffice}) => {

    const [homeOfficesLeft, setHomeOfficesLeft] = useState(homeOffices);

    const EventWrapper = ({children}) => {
        if (children.filter((child) => child).length)
            return (
                <>
                    {children}
                </>
            );
    };

    // useEffect(() => console.log({homeOfficesLeft}), [{homeOfficesLeft}]);


    return (
        // For every Homeoffice there should be a card of every person for example if there are Daniel and Vinicius
        // and 8 home offices there should be 16 cards
        // Every card should be on the vertical

        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '50%',
            padding: '5px 5px'
        }}>

            <EventWrapper>
                {
                    // for every homeoffice
                    [...Array(homeOfficesLeft)].map(
                        // for every person
                        //  background: ${({ bgColor }) => bgColor};
                        (homeOffice, index) => <PersonCard name={name} homeOfficesAmount={homeOffices} setHomeOfficesLeft={setHomeOfficesLeft} spendHomeOffice={spendHomeOffice} color={color} dragindexRef={dragindexRef} index={index} dragDateRef={dragDateRef} events={events} setEvents={setEvents}/>
                    )
                }
            </EventWrapper>
        </div>
    )
}

export {PeopleCards}
