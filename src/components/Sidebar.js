import {useEffect, useState} from "react";
import {PeopleCards} from "./PeopleCards";

const Sidebar = ({dragindexRef, dragDateRef, events, setEvents}) => {
    // There should be a list of names here
    // For each name there should be a list of n cards that represents the home offices of that person in that month
    // The cards should be draggable and droppable
    // The cards should be able to be removed
    const [homeOfficesAmount, setHomeOfficesAmount] = useState(8);

    const getColor = () => {
        // Define the maximum color value (hexadecimal FFFFFF, white)
        const maxColorValue = 0xFFFFFF;

        let randomColor;

        do {
            // Generate a random color that is not white
            randomColor = `#${Math.floor(Math.random() * maxColorValue).toString(16)}`;
        } while (randomColor === "#FFFFFF"); // Repeat until a non-white color is generated

        return randomColor;
    };

    const [people, setPeople] = useState([
        {name: 'João V.', color: getColor(), homeOfficesLeft: 8},
        {name: 'Daniel', color: getColor(), homeOfficesLeft: 8},
        {name: 'Isaque', color: getColor(), homeOfficesLeft: 8},
        {name: 'Matheusin', color: getColor(), homeOfficesLeft: 8},
        {name: 'Vinicius', color: getColor(), homeOfficesLeft: 8},
        {name: 'Vitão', color: getColor(), homeOfficesLeft: 8},
        {name: 'Ricardinho', color: getColor(), homeOfficesLeft: 8},
    ]);

    useEffect(() => {
        let tempPeople = [...people];
        tempPeople.forEach(person => person.homeOfficesLeft = homeOfficesAmount)
        setPeople(tempPeople)
        setEvents([])
    }, [homeOfficesAmount]);

    const spendHomeOffice = (personName) => {
        let tempPeople = [...people]
        let person = tempPeople.find(person => person.name === personName)
        person.homeOfficesLeft -= 1;
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
            <div style={{
                display: 'flex',
            flexDirection: 'column',
                marginRight: '5px',
                marginLeft: '5px',
            }}>
            <label htmlFor="hoamnt">Qtd de HO nesse mês:</label>
            <input type="number" max={8} min={0} id="hoamnt" defaultValue={homeOfficesAmount}
                   onChange={e => setHomeOfficesAmount(e.target.value ? parseInt(e.target.value) : 0)}/>
                <hr style={{
                    marginTop: '5px',
                    marginBottom: '5px',
                }}/>
            <span>Home Offices a distribuir:</span>
                </div>
            {
                // Every card should be on the vertical
                // For each person

                people.map(
                    person => <PeopleCards name={person.name} homeOffices={homeOfficesAmount} color={person.color}
                                           spendHomeOffice={spendHomeOffice}
                                           dragindexRef={dragindexRef} dragDateRef={dragDateRef} events={events}
                                           setEvents={setEvents}/>
                )
            }

        </div>


    )
}

export {Sidebar}
