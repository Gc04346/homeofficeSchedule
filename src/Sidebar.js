import {useState} from "react";

const Sidebar = () => {
    const [people, setPeople] = useState([
        'João V.',
        'Daniel',
        'Isaque',
        'Matheusin',
        'Vinicius',
        'Vitão',
        'Ricardinho',
    ]);
    return (
        <div style={{
            width: '20%'
        }}>
            Pessoas
            {
                people.map(
                    person => <span>{person}</span>
                )
            }
        </div>
    )
}

export {Sidebar}
