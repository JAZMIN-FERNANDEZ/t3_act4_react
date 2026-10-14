# Lista de tareas con React

Mini aplicación hecha con React y Vite para la Act4 "Introducción a React - Fundamentos y Primer Componente".

## Descripción del proyecto

Es una lista de tareas sencilla. Permite escribir una tarea nueva y agregarla a la lista, y al hacer clic sobre una tarea se marca como hecha (se tacha). Si no hay tareas, muestra el mensaje "No hay tareas".

## Componentes

- `Encabezado`: componente funcional simple que muestra el título.
- `Tarea`: componente que recibe props (`texto`, `hecha` y `onAlternar`) y muestra cada tarea.
- `App`: componente principal. Usa `useState` para guardar la lista de tareas y el texto del input, y renderiza la lista con `.map()` usando `key`.

## Tecnologías

React, Vite, JavaScript, ESLint y gh-pages para el despliegue en GitHub Pages.

## Cuestionario

**a) ¿Qué diferencia hay entre props y state en React?**

Las props son datos que un componente recibe de su componente padre y no puede modificar, solo mostrarlos o usarlos. El state son datos propios del componente que pueden cambiar con el tiempo, y cuando cambian React vuelve a renderizar el componente para actualizar la pantalla.

**b) ¿Por qué es importante usar una key al renderizar una lista de elementos?**

Porque la key le permite a React identifica cada elemento de la lista de forma única.  cuando se agrega, elimina o cambia un elemento, React actualiza solo lo necesario y no confunde unos elementos con otros.

**c) Explica con tus propias palabras qué hace la función useState y da un ejemplo de dónde la usaste.**

`useState` sirve para que un componente pueda recordar información y cambiarla. Devuelve la variable con su valor actual y una función para modificarla; cuando se usa esa función, la pantalla se actualiza con el nuevo valor. En mi aplicación la usé en `const [tareas, setTareas] = useState([...])` para guardar la lista de tareas, y en `const [nueva, setNueva] = useState("")` para guardar el texto que se escribe en el input.

**d) Enlace de mi repositorio de GitHub**

https://github.com/JAZMIN-FERNANDEZ/t3_act4_react

**e) Enlace de mi proyecto desplegado en GitHub Pages**
https://jazmin-fernandez.github.io/t3_act4_react/
