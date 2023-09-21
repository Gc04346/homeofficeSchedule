import {useEffect, useState} from "react";
import {PeopleCards} from "./PeopleCards";

const Sidebar = ({dragindexRef, dragDateRef, events, setEvents}) => {
    // There should be a list of names here
    // For each name there should be a list of n cards that represents the home offices of that person in that month
    // The cards should be draggable and droppable
    // The cards should be able to be removed
    const [homeOfficesAmount, setHomeOfficesAmount] = useState(8);

    const getColor = () => {
        // random color that is not too bright
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }

    const [people, setPeople] = useState([
        {name:'João V.', color:getColor(), homeOfficesLeft:8},
        {name:'Daniel', color:getColor(), homeOfficesLeft:8},
        {name:'Isaque', color:getColor(), homeOfficesLeft:8},
        {name:'Matheusin', color:getColor(), homeOfficesLeft:8},
        {name:'Vinicius', color:getColor(), homeOfficesLeft:8},
        {name:'Vitão', color:getColor(), homeOfficesLeft:8},
        {name:'Ricardinho', color:getColor(), homeOfficesLeft:8},
    ]);

    const spendHomeOffice = (personName) => {
        let tempPeople = [...people]
        let person = tempPeople.find(person => person.name === personName)
        person.homeOfficesLeft -=1;
        setPeople(tempPeople)
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
                    person => <PeopleCards name={person.name} homeOffices={homeOfficesAmount} color={person.color} spendHomeOffice={spendHomeOffice}
                                           dragindexRef={dragindexRef} dragDateRef={dragDateRef} events={events} setEvents={setEvents}/>
                )
            }

        </div>


    )
}

export {Sidebar}
