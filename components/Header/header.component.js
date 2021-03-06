import Logo from "../Logo";
import Link from "../Link";

const Header = ({selected=""}) => (
    <header className="header">
        <div className="header--logo">
            <Logo/>

        </div>
        <nav className="vertical-center">
            <Link key="aircraft" href="/aircraft" className={`medium ${selected === "aircraft"? "selected": ''}`} label="Aircraft"/>
            <Link key="airports" href="/airports" className={`medium ${selected === "airports"? "selected": ''}`} label="Airports"/>
        </nav>
    </header>
);

export default Header;