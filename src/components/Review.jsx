const REVIEWS = [
    {
    img: "/client1.jpg",
    name: "Zeynep Yılmaz",
    comment: "Çok iyi bir salon, ekipmanlar yeni ve ortam motive edici.",
    },
    {
    img: "/client2.jpg",
    name: "Okan Demir",
    comment: "Hocalar gerçekten ilgili ve profesyonel.",
    },
];

export default function Review() {
  return (
    <section className="section-white" id="review">
      <h2>Client Reviews</h2>
      <div className="review-boxes">
        {REVIEWS.map((r, i) => (
          <div className="review-box" key={i}>
            <div className="review-top">
              <div className="review-img">
                <img src={r.img} alt={r.name} />
              </div>
              <div className="review-top-info">
                <p>{r.name}</p>
              </div>
            </div>
            <div className="review-bottom">
              <p>{r.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}