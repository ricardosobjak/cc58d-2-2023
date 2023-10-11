import { useState } from "react";

// Componente botão personalizado
export default function MeuBotao( { color = 'primary'} ) {
    // Estado
    const [count, setCount] = useState(0);

    function cliqueDoBotao() {
        //alert('Oi cara!');
        setCount(count + 1);
        localStorage.setItem("count", count);
    }

    return (
        <button className={'btn btn-'+color} onClick={cliqueDoBotao}>
            Clicou {count} vezes!
        </button>
    );
}