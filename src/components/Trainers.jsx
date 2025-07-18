const TRAINERS = [
    { name: "Ali", img: "/trainer1.jpg", info: "PT ve Vücut Geliştirme Uzmanı" },
    { name: "Ayşe", img: "/trainer2.jpg", info: "Yoga ve Pilates Eğitmeni" },
    { name: "Mehmet", img: "/trainer3.jpg", info: "Fonksiyonel Antrenör" },
];

export default function Trainers() {
    return (
        <section className="section-white" id="trainers">
            <h2>Our Trainers</h2>
            <div className="trainers-boxes">
                {TRAINERS.map((t, i) => (
                  <div className="trainer-box" key={i}>
                    <img src={t.img} alt={t.name} /> 
                    <div className="trainers-layer">
                        <span>{t.name}</span>
                        <p>{t.info}</p>
                    </div>
                    <div className="top-bar" />
                    <div className="bottom-bar" />
                    <div className="left-bar" />
                    <div className="right-bar" />
                    </div>
                ))}
            </div>
        </section>
    );
}