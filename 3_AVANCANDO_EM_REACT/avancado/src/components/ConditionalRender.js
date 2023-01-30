import { useState } from "react";



const ConditionalRender = () => {

    const [x] = useState(false);

    const [name, setName] = useState("aoPedro")

    return (
        <div>
            <h2>Isso será exibido?</h2>
            {x && <p>Se x for true, sim!</p>}
            {!x && <p>Agora x é falso</p>}

            <h2>If ternário</h2>
            {name === "João" ? (
                <div>
                    <p>O nome é João</p>
                </div>
            ) : (
                <div>
                    <p>Nome não encontrado!</p>
                </div>
            )}
            <button onClick={() => setName("João")}>Clica aqui!</button>
        </div>
    )
}

export default ConditionalRender