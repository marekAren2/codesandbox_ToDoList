/* export default function TodoList() {
  console.log("test");
  return (
    <div>
      <h1>Lista zadań Hedy Lamarr</h1>
      <img src="https://i.imgur.com/yXOvdOSs.jpg" />
      <img src="https://cdn.pixabay.com/photo/2023/09/11/12/41/camera-8246764_640.jpg" />
      <ul>
        <li> Wynaleźć nową sygnalizację świetlną </li>
        <li> Przećwiczyć scenę do filmu</li>
        <li> Usprawnić technologię rozpraszania widma </li>
      </ul>
    </div>
  );
} */

export default function CustomTodoList() {
  console.log("test2");
  return (
    <div>
      <h1>Lista zadań Hedy Lamarr</h1>

      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="custom component image"
      />
      <img src="https://cdn.pixabay.com/photo/2023/09/11/12/41/camera-8246764_640.jpg" />
      <img src="https://i.imgur.com/Ad2UjEm.png" />

      {/* <img
        src="https://imgur.com/Ad2UjEm"
        alt="drugi_obrazek_IMGUR_skopiowany"
      /> */}
      <img
        src="https://imgur.com/Ad2UjEm.jpg"
        alt="drugi_obrazek_IMGUR_dopisaneJPG"
      />
      <ul>
        <li> Wynaleźć nową sygnalizację świetlną </li>
        <li> Przećwiczyć scenę do filmu</li>
        <li> Usprawnić technologię rozpraszania widma </li>
      </ul>
    </div>
  );
}
const Apps = () => {
  return (
    // <TodoList />
    <CustomTodoList />
  );
};
