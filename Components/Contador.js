const Contador = () => {

    const [contador, setContador] = React.useState(0);

    const Aumentar = () =>setContador(contador + 1);
    const Disminuir = () =>setContador(contador - 1);


    return (
        <div>
            <h1 className={contador < 0? "menor": "mayor"}>contador : {contador}</h1>
            <hr/>

            <button onClick={Aumentar}>Aumetar</button>
            <button onClick={Disminuir}>Disminuir</button>
        </div>
    )
}