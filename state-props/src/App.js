import "./App.css";
import CustomHeader from "./Header";
import stateandprops from "./images/stateprops.jpg";
import globant from "./images/globant.png";

function App() {
  return (
    <div className="App">
      <CustomHeader
        srcLogo={stateandprops}
        title="State vs Props"
        text="State:State es un objeto que intenta representar el estado actual en el que se encuentre el componente, al ser privado permite crear y administrar sus datos internamente. "
        otherp="Props:Props son un conjunto de características que conforman al componente y no pueden ser modificadas porque solo son de lectura."
        secondaryTitle="Diferencia entre State y Props"
        answer2="Su principal diferencia es que las props son inmutables, quiere decir que el componente solo podrá leer pero NO sobrescribir el dato que reciba. Mientras que el state al ser mutable va a permitir que se ejecuten cambios.
                A su vez, las props pasan parámetros al componente, mientras que en el state las administran dentro de dicho componente."
        myname="Realizado por Melany Johanna Herrera Rivera"
        to="para"
        srcGlobant={globant}
      ></CustomHeader>
    </div>
  );
}

export default App;
