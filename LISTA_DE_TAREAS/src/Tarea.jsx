function Tarea({ texto, hecha, onAlternar }) {
  return (
    <li
      onClick={onAlternar}
      style={{ textDecoration: hecha ? "line-through" : "none", cursor: "pointer" }}
    >
      {texto}
    </li>
  );
}

export default Tarea;