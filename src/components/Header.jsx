export default function Header() {
    return (
        <header className="header" id="home">
            <div className="home">
                <div className="home-top-h1">
                    <h1>Sport Center</h1>
                </div>
                <p>Your motivation starts here.</p>
                <div className="home-buttons">
                    <a className="sign-up" href="#sign-up">Sign Up</a>
                    <a className="details" href="#classes">Details</a>
                </div>
            </div>
        </header>
    );
}