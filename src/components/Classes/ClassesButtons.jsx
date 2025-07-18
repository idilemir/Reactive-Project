// src/components/Classes/ClassesButtons.jsx
function ClassesButtons({ selected, setSelected }) {
  return (
    <div className="classes-buttons">
      <button
        id="btn-yoga"
        className={selected === "yoga" ? "highlight" : ""}
        onClick={() => setSelected("yoga")}
      >
        Yoga
      </button>
      <button
        id="btn-group"
        className={selected === "group" ? "highlight" : ""}
        onClick={() => setSelected("group")}
      >
        Group
      </button>
      <button
        id="btn-solo"
        className={selected === "solo" ? "highlight" : ""}
        onClick={() => setSelected("solo")}
      >
        Solo
      </button>
      <button
        id="btn-stretching"
        className={selected === "stretching" ? "highlight" : ""}
        onClick={() => setSelected("stretching")}
      >
        Stretching
      </button>
    </div>
  );
}

export default ClassesButtons;
