import {useState} from "react";
import {PeopleCards} from "./PeopleCards";

const Sidebar = ({dragindexRef, dragDateRef, events, setEvents}) => {
    // There should be a list of names here
    // For each name there should be a list of n cards that represents the home offices of that person in that month
    // The cards should be draggable and droppable
    // The cards should be able to be removed

    const [people, setPeople] = useState([
        'João V.',
        'Daniel',
        'Isaque',
        'Matheusin',
        'Vinicius',
        'Vitão',
        'Ricardinho',
    ]);

    const [homeOffices, setHomeOffices] = useState(8);


    const getColor = () => {
        // random color that is not too bright
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }


    return (

        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '50%',
            maxWidth: '20%',
        }}>
            Pessoas
            {
                // Every card should be on the vertical
                // For each person

                people.map(
                    person => <PeopleCards name={person} homeOffices={homeOffices} color={getColor()}
                                           dragindexRef={dragindexRef} dragDateRef={dragDateRef} events={events} setEvents={setEvents}/>
                )
            }

        </div>


    )
}

export {Sidebar}
