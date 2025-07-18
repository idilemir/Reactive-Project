import React, { useState } from "react";

const CLASSES = [
  {
    id: 1,
    button: "Yoga",
    title: "Why are you Yoga?",
    desc: "Yoga ile kendinizi keşfedin...",
    timeTitle: "Yoga Schedule",
    time: "Saturday-Sunday: 8:00am - 10:00am",
    timeAdd: "Monday-Tueasday: 10:00am -12:00pm",
    timeExtra: "Wednesday-Friday: 3:00pm - 6:00pm",
    img: "./yoga.jpg",
  },
  {
    id: 2, 
    button: "Group",
    title: "Group Classes",
    desc: "Beraber egzersiz yapmanın keyfi başka...",
    timeTitle: "Group Classes Schedule",
    time: "Saturday-Sunday: 10:00am - 12:00pm",
    timeAdd: "Monday-Tuesday: 1:oopm - 3:00pm",
    timeExtra: "Wednesday-Friday: 5:00pm - 7:00pm",
    img: "./group.jpg"
  },
  {
    id: 3,
    button: "Solo",
    title: "Solo Training",
    desc: "Kişisel antrenmanlar ile hızlı sonuç...",
    timeTitle: "Solo Schedule",
    time: "Saturday-Sunday: 2:00pm - 4:00pm",
    timeAdd: "Monday-Tuesday: 4:00pm - 6:00pm",
    timeExtra: "Wednesday-Friday: 7:00pm - 9:00pm",
    img: "/solo.jpg"
  },
  {
    id: 4,
    button: "Stretch",
    title: "Stretching",
    desc: "Esnekliğinizi artırmak için...",
    timeTitle: "Stretching Schedule",
    time: "Saturday-Sunday: 4:00pm - 6:00pm",
    timeAdd: "Monday-Tuesday: 6:00pm - 8:00pm",
    timeExtra: "Wednesday-Friday: 8:00pm - 10:00pm",
    img: "/stret.webp"
  },
];

export default function Classes() {
  const [active, setActive] = useState(CLASSES[0]);

  return (
    <section className="section-white classes" id="classes">
      <h2>Our Classes</h2>
      <div className="classes-buttons">
        {CLASSES.map(cls => (
          <button
            key={cls.id}
            className={active.id === cls.is ? "highlight" : ""}
            onClick={() => setActive(cls)}
            >
              {cls.button}
            </button>
        ))}
      </div>
      <div className="classes-choosen">
        <div className="classes-choosen-info">
          <h3>{active.title}</h3>
          <p>{active.desc}</p>
          <div id="info-time-title">{active.timeTitle}</div>
          <div id="info-time">{active.time}</div>
          <div id="info-time-add">{active.timeAdd}</div>
          <div id="info-time-extra">{active.timeExtra}</div>
        </div>
        <div className="classes-chooosen-img">
          <img src={active.img} alt={active.button} />
        </div>
      </div>
    </section>
  );
}