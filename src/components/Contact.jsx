export default function Contact() {
  return (
    <section className="section-blue" id="contact">
      <h2>Contact</h2>
      <div className="contact-container">
        <div className="contact-div">
          <div className="contact-top">
            <span>Telefon: 0555 555 5555</span>
            <span>Email: info@sportcenter.com</span>
          </div>
          <form className="contact-bottom">
            <div className="form-group">
              <input type="text" placeholder="Adınız" required />
              <input type="email" placeholder="Email adresiniz" required />
              <textarea placeholder="Mesajınız" required />
              <button type="submit">Gönder</button>
            </div>
          </form>
        </div>
        <div className="map-div">
          <iframe
            title="Salon Konumu"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..."
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
