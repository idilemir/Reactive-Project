export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <img src="/logo.png" alt="logo"/>
                <p>
                    Sport Center &copy; {new Date().getFullYear()} - Tüm hakları saklıdır.
                </p>
            </div>
            <div className="footer-bottom">
                <div className="footer-links">
                    <h3>Links</h3>
                    <a href="#home">Home</a>
                    <a href="#classes">Classes</a>
                    <a href="#purchase">Purchase</a>
                </div>
                <div className="footer-links">
                    <h3>Contact Us</h3>
                    <span>0555 555 5555</span>
                    <span>info@sportcenter.com</span>
                </div>
                <div className="footer-links">
                    <h3>Address</h3>
                    <span>Atatürk Cad. No:1</span>
                    <span>İstanbul</span>
                </div>
            </div>
        </footer>
    );
}