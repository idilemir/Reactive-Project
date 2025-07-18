const PURCHASES = [
    {
        title: "Basic Plan", 
        img: "/purchase1.jpg",
        price: "500 tl",
        oldPrice: "650 tl",
        desc: "Haftada 2 gün kullanım, temel ekipmanlar.",
    },
    {
        title: "Standard Plan",
        img: "/purchase2.jpg",
        price: "750 tl",
        oldPrice: "950 tl",
        desc: "Haftada 4 gün kullanım, tüm ekipman ve grup dersler.",
    },
    {
        title: "Premium Plan",
        img: "/purchase3.jpg",
        price: "1200 tl",
        oldPrice: "1500 tl",
        desc: "Sınırsız kullanım, tüm ders ve aktiviteler.",
    },
    {
        title: "VIP Plan",
        img: "/purchase4.jpg",
        price: "2000 tl",
        oldPrice: "2500 tl",
        desc: "PT desteği + VIP salon ve ekstra hizmetler.",
    },
];

export default function Purchase() {
    return ( 
        <section className="section-blue" id="purchase">
            <h2>Purchase Plans</h2>
            <div className="purchase-boxes">
                {PURCHASES.map((p, i) => (
                    <div className="purchase-box" key={i}>
                        <img src={p.img} alt={p.title} />
                        <div className="box-bottom">
                            <p>{p.title}</p>
                            <span>{p.desc}</span>
                            <p>
                                <del>{p.oldPrice}</del> <b>{p.price}</b>
                            </p>
                        </div>
                    </div>    
                ))}
            </div>
        </section>
    );
}