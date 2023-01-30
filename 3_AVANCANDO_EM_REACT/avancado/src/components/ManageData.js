import { useState } from 'react'

const ManageData = () => {
    let someData = 10;

    const [number, setNumber] = useState(0);

    return (
        <div>
            <div>
                <p>Valor: {someData}</p>
                <button onclick={() => (someData = 15)}>Mudar variável</button>
            </div>
            <div>
                <p>Valor: {number}</p>
                <button onClick={() => setNumber(number + 5)}>Mudar o state</button>
            </div>
        </div>
    )
}

export default ManageData