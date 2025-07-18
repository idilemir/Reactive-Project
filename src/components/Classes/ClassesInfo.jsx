// src/components/Classes/ClassesInfo.jsx
function ClassesInfo({ data }) {
  return (
    <div className="classes-choosen">
      <div className="classes-choosen-info">
        <h3>{data.title}</h3>
        <p>{data.desc}</p>
        <h3>{data.timeTitle}</h3>
        <p>{data.time}</p>
        {data.timeAdd && <p>{data.timeAdd}</p>}
        <p>{data.timeExtra}</p>
      </div>
      <div className="classes-choosen-photo">
        <img src={data.img} alt={data.title} id="classes-chosen-photo" />
      </div>
    </div>
  );
}

export default ClassesInfo;
