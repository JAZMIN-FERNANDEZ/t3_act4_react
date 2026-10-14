function Tarea({ texto, hecha, onAlternar }) {
  return (
    <li className={hecha ? "tarea hecha" : "tarea"} onClick={onAlternar}>
      <span className="check">{hecha ? "✓" : ""}</span>
      {texto}
    </li>
  );
}

export default Tarea;