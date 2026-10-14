import { useState } from "react";
import Tarea from "./Tarea";

function Encabezado() {
  return <h1>Mi lista de tareas</h1>;
}

function App() {
  const [tareas, setTareas] = useState([
    { id: 1, texto: "Estudiar React", hecha: false },
    { id: 2, texto: "Subir proyecto a GitHub", hecha: false },
  ]);
  const [nueva, setNueva] = useState("");

  const agregar = () => {
    if (nueva.trim() === "") return;
    setTareas([...tareas, { id: Date.now(), texto: nueva, hecha: false }]);
    setNueva("");
  };

  const alternar = (id) => {
    setTareas(tareas.map((t) => (t.id === id ? { ...t, hecha: !t.hecha } : t)));
  };

  return (
    <div>
      <Encabezado />
      <input value={nueva} onChange={(e) => setNueva(e.target.value)} placeholder="Nueva tarea" />
      <button onClick={agregar}>Agregar</button>
      {tareas.length === 0 && <p>No hay tareas</p>}
      <ul>
        {tareas.map((t) => (
          <Tarea key={t.id} texto={t.texto} hecha={t.hecha} onAlternar={() => alternar(t.id)} />
        ))}
      </ul>
    </div>
  );
}

export default App;